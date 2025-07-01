// app/api/contact/route.ts

import { insertContactSchema } from "@/app/shared/schema";
import { appendToSheet } from "@/lib/googleSheet";
import { NextRequest, NextResponse } from "next/server";

const allowedOrigins = ["http://localhost:3000", "https://bemalo.id"];

function getCORSHeaders(origin: string | null) {
  const isAllowed = origin && allowedOrigins.includes(origin);
  return {
    "Access-Control-Allow-Origin": isAllowed ? origin : "",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

// Preflight request
export async function OPTIONS(req: NextRequest) {
  const origin = req.headers.get("origin");
  const headers = getCORSHeaders(origin);
  return new NextResponse(null, { status: 204, headers });
}

// POST request
export async function POST(req: NextRequest) {
  const origin = req.headers.get("origin");
  const headers = getCORSHeaders(origin);

  try {
    const body = await req.json();
    const parsed = insertContactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { message: "Invalid input", errors: parsed.error.flatten() },
        { status: 400, headers }
      );
    }

    const { name, email, phone, budget, message } = parsed.data;

    await appendToSheet([
      name,
      email,
      phone || "-",
      budget || "-",
      message,
      new Date().toISOString(),
    ]);

    return NextResponse.json(
      { message: "Message sent successfully" },
      { headers }
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error: unknown) {
    return NextResponse.json(
      { message: "Server error" },
      { status: 500, headers }
    );
  }
}
