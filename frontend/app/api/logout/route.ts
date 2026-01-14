import { NextResponse } from "next/server";

export async function POST() {
  await fetch(`${process.env.BACKEND_URL}/api/auth/logout`, {
    method: "POST",
  });

  return NextResponse.json({ ok: true });
}