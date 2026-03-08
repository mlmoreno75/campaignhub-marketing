import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, phone, company, comments } = await request.json();

    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: "First name, last name, and email are required" },
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
    const formId = process.env.NEXT_PUBLIC_HUBSPOT_CONTACT_FORM_ID;

    if (!portalId || !formId) {
      console.error("Missing HubSpot configuration: NEXT_PUBLIC_HUBSPOT_PORTAL_ID or NEXT_PUBLIC_HUBSPOT_CONTACT_FORM_ID");
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
            { objectTypeId: "0-1", name: "firstname", value: firstName },
            { objectTypeId: "0-1", name: "lastname", value: lastName },
            { objectTypeId: "0-1", name: "email", value: email },
            ...(phone ? [{ objectTypeId: "0-1", name: "phone", value: phone }] : []),
            ...(company ? [{ objectTypeId: "0-1", name: "company", value: company }] : []),
            ...(comments ? [{ objectTypeId: "0-1", name: "message", value: comments }] : []),
          ],
          context: {
            pageUri: "campaignagent.ai",
            pageName: "CampaignAgent - Contact Form",
          },
        }),
      }
    );

    if (!hubspotResponse.ok) {
      const hubspotError = await hubspotResponse.text();
      console.error("HubSpot form submission failed:", hubspotError);
      return NextResponse.json(
        { error: "Failed to submit message. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Contact form submitted successfully",
    });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
