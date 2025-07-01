import { NextResponse } from "next/server";
import { insertContactSchema } from "@/app/shared/schema";
import { appendToSheet } from "@/lib/googleSheet";

// POST /api/contact
export async function POST(request: Request) {
  try {
    const body = await request.json();

    const parsed = insertContactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { message: "Invalid form data", errors: parsed.error.flatten() },
        { status: 400 }
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

    return NextResponse.json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error saving to Google Sheet:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
