import prisma from "@/lib/prisma";

function Bar({ value, max }) {
  const pct = max > 0 ? Math.round((value / max) * 100) : 0;
  return (
    <div className="flex-1 bg-slate-100 rounded-full h-3 overflow-hidden">
      <div className="bg-sky-500 h-3 rounded-full transition-all" style={{ width: `${pct}%` }} />
    </div>
  );
}

export default async function AdminAnalyticsPage() {
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  const [visitors, pageViews, byCity, byRegion, byDevice, last30Views, servicePages, sectionTimeViews] = await Promise.all([
    prisma.visitor.count(),
    prisma.pageView.count(),
    prisma.visitor.groupBy({ by: ["city"], _count: { _all: true } }),
    prisma.visitor.groupBy({ by: ["region"], _count: { _all: true } }),
    prisma.visitor.groupBy({ by: ["device"], _count: { _all: true } }),
    prisma.pageView.findMany({
      where: { createdAt: { gte: thirtyDaysAgo } },
      select: { createdAt: true },
      orderBy: { createdAt: "asc" },
    }),
    prisma.pageView.groupBy({
      by: ["path"],
      where: { path: { startsWith: "/services/" }, createdAt: { gte: thirtyDaysAgo } },
      _count: { _all: true },
    }),
    prisma.pageView.findMany({
      where: { createdAt: { gte: thirtyDaysAgo } },
    }),
  ]);

  // Visitors over time (last 30 days)
  const dayMap = {};
  for (const pv of last30Views) {
    const day = pv.createdAt.toISOString().split("T")[0];
    dayMap[day] = (dayMap[day] || 0) + 1;
  }
  const byDay = Object.entries(dayMap).sort(([a], [b]) => a.localeCompare(b));
  const maxDay = Math.max(1, ...byDay.map(([, c]) => c));

  // Peak hours (0–23)
  const hourArr = Array(24).fill(0);
  for (const pv of last30Views) {
    hourArr[pv.createdAt.getHours()]++;
  }
  const maxHour = Math.max(1, ...hourArr);

  servicePages.sort((a, b) => b._count._all - a._count._all);

  // Section engagement aggregation
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
      views: sectionCount[section],
    }))
    .sort((a, b) => b.avgSeconds - a.avgSeconds);
  const maxSectionTime = Math.max(1, ...bySectionTime.map((s) => s.avgSeconds));
  const maxServiceViews = Math.max(1, ...servicePages.map((p) => p._count._all));

  const filteredCity = byCity.filter((x) => x.city).sort((a, b) => b._count._all - a._count._all);
  const filteredRegion = byRegion.filter((x) => x.region).sort((a, b) => b._count._all - a._count._all);
  const maxCity = Math.max(1, ...filteredCity.map((x) => x._count._all));
  const maxRegion = Math.max(1, ...filteredRegion.map((x) => x._count._all));
  const maxDevice = Math.max(1, ...byDevice.map((x) => x._count._all));

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-900">Analytics</h1>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl p-6 shadow">
          <p className="text-sm text-slate-500 mb-1">Total Visitors</p>
          <p className="text-3xl font-bold text-slate-900">{visitors}</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow">
          <p className="text-sm text-slate-500 mb-1">Total Page Views</p>
          <p className="text-3xl font-bold text-slate-900">{pageViews}</p>
        </div>
      </div>

      {/* Service Interest */}
      <section className="bg-white rounded-xl p-6 shadow">
        <h2 className="text-xl font-semibold mb-1 text-slate-800">Service Interest — Last 30 Days</h2>
        <p className="text-xs text-slate-400 mb-4">Which service pages visitors browsed most. Use this for ad targeting.</p>
        {servicePages.length === 0 ? (
          <p className="text-slate-400 text-sm">No service page visits yet.</p>
        ) : (
          <div className="space-y-2">
            {servicePages.map((row) => {
              const label = row.path.replace("/services/", "").replace(/-/g, " ");
              return (
                <div key={row.path} className="flex items-center gap-3 text-sm">
                  <span className="w-44 text-slate-700 capitalize truncate shrink-0">{label}</span>
                  <Bar value={row._count._all} max={maxServiceViews} />
                  <span className="w-10 text-right text-slate-700 font-medium shrink-0">{row._count._all} views</span>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Section Engagement */}
      <section className="bg-white rounded-xl p-6 shadow">
        <h2 className="text-xl font-semibold mb-1 text-slate-800">Section Engagement — Avg. Time Spent</h2>
        <p className="text-xs text-slate-400 mb-4">How long visitors spend in each section. High time = high interest.</p>
        {bySectionTime.length === 0 ? (
          <p className="text-slate-400 text-sm">No section time data yet — will appear after visitors browse the site.</p>
        ) : (
          <div className="space-y-2">
            {bySectionTime.map((row) => (
              <div key={row.section} className="flex items-center gap-3 text-sm">
                <span className="w-24 text-slate-700 capitalize truncate shrink-0">{row.section}</span>
                <Bar value={row.avgSeconds} max={maxSectionTime} />
                <span className="w-28 text-right text-slate-500 shrink-0">{row.avgSeconds}s avg · {row.views} views</span>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Visitors Over Time */}
      <section className="bg-white rounded-xl p-6 shadow">
        <h2 className="text-xl font-semibold mb-4 text-slate-800">Page Views — Last 30 Days</h2>
        {byDay.length === 0 ? (
          <p className="text-slate-400 text-sm">No data yet.</p>
        ) : (
          <div className="space-y-2">
            {byDay.map(([date, count]) => (
              <div key={date} className="flex items-center gap-3 text-sm">
                <span className="w-28 text-slate-500 shrink-0">{date}</span>
                <Bar value={count} max={maxDay} />
                <span className="w-8 text-right text-slate-700 font-medium shrink-0">{count}</span>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Peak Hours */}
      <section className="bg-white rounded-xl p-6 shadow">
        <h2 className="text-xl font-semibold mb-4 text-slate-800">Peak Hours (last 30 days)</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {hourArr.map((count, hour) => (
            <div key={hour} className="flex items-center gap-2 text-sm">
              <span className="w-12 text-slate-500 shrink-0">
                {String(hour).padStart(2, "0")}:00
              </span>
              <Bar value={count} max={maxHour} />
              <span className="w-6 text-right text-slate-700 font-medium shrink-0">{count}</span>
            </div>
          ))}
        </div>
      </section>

      {/* By City */}
      <section className="bg-white rounded-xl p-6 shadow">
        <h2 className="text-xl font-semibold mb-4 text-slate-800">Visitors by City</h2>
        {filteredCity.length === 0 ? (
          <p className="text-slate-400 text-sm">No city data yet — collected when visitors allow location or via IP lookup.</p>
        ) : (
          <div className="space-y-2">
            {filteredCity.map((row) => (
              <div key={row.city} className="flex items-center gap-3 text-sm">
                <span className="w-36 text-slate-700 truncate shrink-0">{row.city}</span>
                <Bar value={row._count._all} max={maxCity} />
                <span className="w-8 text-right text-slate-700 font-medium shrink-0">{row._count._all}</span>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* By State */}
      <section className="bg-white rounded-xl p-6 shadow">
        <h2 className="text-xl font-semibold mb-4 text-slate-800">Visitors by State</h2>
        {filteredRegion.length === 0 ? (
          <p className="text-slate-400 text-sm">No state data yet.</p>
        ) : (
          <div className="space-y-2">
            {filteredRegion.map((row) => (
              <div key={row.region} className="flex items-center gap-3 text-sm">
                <span className="w-36 text-slate-700 truncate shrink-0">{row.region}</span>
                <Bar value={row._count._all} max={maxRegion} />
                <span className="w-8 text-right text-slate-700 font-medium shrink-0">{row._count._all}</span>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* By Device */}
      <section className="bg-white rounded-xl p-6 shadow">
        <h2 className="text-xl font-semibold mb-4 text-slate-800">Visitors by Device</h2>
        <div className="space-y-2">
          {byDevice.sort((a, b) => b._count._all - a._count._all).map((row) => (
            <div key={row.device} className="flex items-center gap-3 text-sm">
              <span className="w-20 text-slate-700 capitalize shrink-0">{row.device || "unknown"}</span>
              <Bar value={row._count._all} max={maxDevice} />
              <span className="w-8 text-right text-slate-700 font-medium shrink-0">{row._count._all}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
