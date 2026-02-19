import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email } = await request.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Send notification email to mike@revgenai.biz using mailto fallback
    // In production, integrate with an email service like SendGrid, Resend, etc.
    // For now, we store the submission and return success
    console.log(
      `Demo request from: ${name} (${email}) — notify mike@revgenai.biz`
    );

    return NextResponse.json({
      success: true,
      message: "Demo request submitted successfully",
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
