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

    const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
    const formId = process.env.NEXT_PUBLIC_HUBSPOT_PILOT_FORM_ID;

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
            ],
            context: {
              pageUri: "campaignhub.com",
              pageName: "CampaignHub - Request a Demo",
            },
          }),
        }
      );

      if (!hubspotResponse.ok) {
        const hubspotError = await hubspotResponse.text();
        console.error("HubSpot form submission failed:", hubspotError);
        return NextResponse.json(
          { error: "Failed to submit request. Please try again." },
          { status: 500 }
        );
      }
    } else {
      console.log(
        `Demo request from: ${name} (${email}) — HubSpot not configured`
      );
    }

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
