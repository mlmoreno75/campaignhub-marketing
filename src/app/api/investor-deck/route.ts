import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    // Submit to HubSpot Forms API
    const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
    const formId = process.env.NEXT_PUBLIC_HUBSPOT_CONTACT_FORM_ID;

    if (portalId && formId) {
      const hubspotResponse = await fetch(
        `https://api-na2.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fields: [
              { objectTypeId: "0-1", name: "firstname", value: name },
              { objectTypeId: "0-1", name: "email", value: email },
              { objectTypeId: "0-1", name: "message", value: "Investor Deck Request" },
            ],
            context: {
              pageUri: "campaignagent.ai/about",
              pageName: "CampaignAgent Investor Deck Request",
            },
          }),
        }
      );

      if (!hubspotResponse.ok) {
        const hubspotError = await hubspotResponse.text();
        console.error("HubSpot form submission failed:", hubspotError);
        // Continue anyway - we'll still log the request
      }
    }

    // Log the investor deck request
    console.log(
      `Investor Deck Request — Name: ${name}, Email: ${email} — Notify mike@revgenai.biz`
    );

    return NextResponse.json({
      success: true,
      message: "Investor deck request submitted successfully",
    });
  } catch (error) {
    console.error("Investor deck request error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
