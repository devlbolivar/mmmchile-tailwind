import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "API MMM Chile",
    version: "1.0.0",
    endpoints: [
      "/api/general-info",
      "/api/programa",
      "/api/bible-verses",
      "/politicas-privacidad",
    ],
  });
}
