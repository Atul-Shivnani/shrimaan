import { NextResponse } from "next/server";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";

export async function POST(request) {
  try {
    const body = await request.json();
    const sessionId = typeof body.sessionId === "string" ? body.sessionId : "";
    const page = typeof body.page === "string" ? body.page : "";

    if (!sessionId || !page) {
      return NextResponse.json({ error: "sessionId and page are required." }, { status: 400 });
    }

    const visitor = await prisma.visitor.upsert({
      where: { sessionId },
      update: {
        visitorKey: sessionId,
        city: typeof body.city === "string" ? body.city : null,
        region: typeof body.region === "string" ? body.region : null,
        country: typeof body.country === "string" ? body.country : null,
        device: typeof body.device === "string" ? body.device : "desktop",
        userAgent: typeof body.userAgent === "string" ? body.userAgent : null,
        timezone: typeof body.timezone === "string" ? body.timezone : null,
        lastSeenAt: new Date(),
        visitCount: { increment: 1 },
      },
      create: {
        visitorKey: sessionId,
        sessionId,
        ipAddress: null,
        city: typeof body.city === "string" ? body.city : null,
        region: typeof body.region === "string" ? body.region : null,
        country: typeof body.country === "string" ? body.country : null,
        device: typeof body.device === "string" ? body.device : "desktop",
        userAgent: typeof body.userAgent === "string" ? body.userAgent : null,
        timezone: typeof body.timezone === "string" ? body.timezone : null,
      },
    });

    await prisma.pageView.create({
      data: {
        visitorId: visitor.id,
        path: page,
        sessionId,
        page,
        referrer: typeof body.referrer === "string" ? body.referrer : null,
        userAgent: typeof body.userAgent === "string" ? body.userAgent : null,
        city: typeof body.city === "string" ? body.city : null,
        region: typeof body.region === "string" ? body.region : null,
        country: typeof body.country === "string" ? body.country : null,
        timezone: typeof body.timezone === "string" ? body.timezone : null,
        screen: typeof body.screen === "string" ? body.screen : null,
        language: typeof body.language === "string" ? body.language : null,
        duration: Number.isFinite(body.duration) ? Math.max(0, Math.floor(body.duration)) : 0,
        sections: Array.isArray(body.sections)
          ? body.sections.filter((s) => typeof s === "string")
          : [],
        sectionTimes:
          body.sectionTimes &&
          typeof body.sectionTimes === "object" &&
          !Array.isArray(body.sectionTimes) &&
          Object.keys(body.sectionTimes).length > 0
            ? body.sectionTimes
            : undefined,
      },
    });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Analytics tracking error:", error);
    return NextResponse.json({ error: "Failed to track analytics event." }, { status: 500 });
  }
}

export async function GET() {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: "Unauthorized." }, { status: 401 });

  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  const [totalPageViews, totalVisitors, byDevice, byCity, byRegion, recentViews, last30Views, servicePages, sectionTimeViews] =
    await Promise.all([
      prisma.pageView.count(),
      prisma.visitor.count(),
      prisma.visitor.groupBy({ by: ["device"], _count: { _all: true } }),
      prisma.visitor.groupBy({ by: ["city"], _count: { _all: true } }),
      prisma.visitor.groupBy({ by: ["region"], _count: { _all: true } }),
      prisma.pageView.findMany({ orderBy: { createdAt: "desc" }, take: 50 }),
      prisma.pageView.findMany({
        where: { createdAt: { gte: thirtyDaysAgo } },
        select: { createdAt: true },
        orderBy: { createdAt: "asc" },
      }),
      // Service page interest
      prisma.pageView.groupBy({
        by: ["path"],
        where: { path: { startsWith: "/services/" }, createdAt: { gte: thirtyDaysAgo } },
        _count: { _all: true },
      }),
      // Section engagement times
      prisma.pageView.findMany({
        where: { createdAt: { gte: thirtyDaysAgo } },
      }),
    ]);

  // Aggregate by day (YYYY-MM-DD)
  const dayMap = {};
  for (const pv of last30Views) {
    const day = pv.createdAt.toISOString().split("T")[0];
    dayMap[day] = (dayMap[day] || 0) + 1;
  }
  const byDay = Object.entries(dayMap).map(([date, count]) => ({ date, count }));

  // Aggregate by hour of day (0–23)
  const hourArr = Array(24).fill(0);
  for (const pv of last30Views) {
    hourArr[pv.createdAt.getHours()]++;
  }
  const byHour = hourArr.map((count, hour) => ({ hour, count }));

  servicePages.sort((a, b) => b._count._all - a._count._all);

  // Aggregate section times across all page views
  const sectionAgg = {};
  const sectionCount = {};
  for (const pv of sectionTimeViews) {
    if (pv.sectionTimes && typeof pv.sectionTimes === "object") {
      for (const [section, seconds] of Object.entries(pv.sectionTimes)) {
        if (typeof seconds === "number" && seconds > 0) {
          sectionAgg[section] = (sectionAgg[section] || 0) + seconds;
          sectionCount[section] = (sectionCount[section] || 0) + 1;
        }
      }
    }
  }
  const bySectionTime = Object.entries(sectionAgg)
    .map(([section, total]) => ({
      section,
      avgSeconds: Math.round(total / sectionCount[section]),
      totalSeconds: Math.round(total),
      views: sectionCount[section],
    }))
    .sort((a, b) => b.avgSeconds - a.avgSeconds);

  return NextResponse.json({
    totalPageViews,
    totalVisitors,
    byDevice: byDevice.map((item) => ({ label: item.device, value: item._count._all })),
    byCity: byCity.filter((item) => item.city).map((item) => ({ label: item.city, value: item._count._all })),
    byRegion: byRegion.filter((item) => item.region).map((item) => ({ label: item.region, value: item._count._all })),
    recentViews,
    byDay,
    byHour,
    serviceInterest: servicePages.map((p) => ({ path: p.path, views: p._count._all })),
    bySectionTime,
  });
}
