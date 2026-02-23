import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, companyName, companyEmail } = await request.json();

    if (!name || !companyName || !companyEmail) {
      return NextResponse.json(
        { error: "Name, company name, and company email are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(companyEmail)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
    const formId = process.env.NEXT_PUBLIC_HUBSPOT_PILOT_FORM_ID;

    if (!portalId || !formId) {
      console.error("Missing HubSpot configuration: NEXT_PUBLIC_HUBSPOT_PORTAL_ID or NEXT_PUBLIC_HUBSPOT_PILOT_FORM_ID");
      return NextResponse.json(
        { error: "Form submission is temporarily unavailable. Please try again later." },
        { status: 500 }
      );
    }

    const hubspotResponse = await fetch(
      `https://api-na2.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fields: [
            { objectTypeId: "0-1", name: "firstname", value: name },
            { objectTypeId: "0-1", name: "company", value: companyName },
            { objectTypeId: "0-1", name: "email", value: companyEmail },
          ],
          context: {
            pageUri: "campaignhub.com/roi",
            pageName: "CampaignHub - 90-Day Pilot Application",
          },
        }),
      }
    );

    if (!hubspotResponse.ok) {
      const hubspotError = await hubspotResponse.text();
      console.error("HubSpot form submission failed:", hubspotError);
      return NextResponse.json(
        { error: "Failed to submit application. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Pilot application submitted successfully",
    });
  } catch (err) {
    console.error("Apply pilot error:", err);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
