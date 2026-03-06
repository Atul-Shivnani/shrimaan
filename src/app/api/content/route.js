import { NextResponse } from "next/server";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { DEFAULT_CONTENT, getAllSiteContent } from "@/lib/content";

export async function GET() {
  const content = await getAllSiteContent();
  return NextResponse.json({ content });
}

export async function PUT(request) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: "Unauthorized." }, { status: 401 });

  const body = await request.json();
  const section = typeof body.section === "string" ? body.section : "";
  const content = body.content;

  if (!section || !(section in DEFAULT_CONTENT)) {
    return NextResponse.json({ error: "Invalid section." }, { status: 400 });
  }

  const record = await prisma.siteContent.upsert({
    where: { section },
    update: { content },
    create: { section, content },
  });

  return NextResponse.json({ success: true, record });
}
