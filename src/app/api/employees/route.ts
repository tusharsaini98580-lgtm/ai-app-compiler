export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      id: 1,
      name: "Tushar Saini",
      role: "Runtime Engineer",
      email: "tushar@runtimeos.ai",
    },
  ]);
}