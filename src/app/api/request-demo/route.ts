import { NextResponse } from "next/server";
import { Resend } from "resend";

const NOTIFICATION_RECIPIENT = "mlmoreno@gmail.com";

async function sendNotificationEmail(name: string, email: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const domain = process.env.RESEND_EMAIL_DOMAIN;

  if (!apiKey || !domain) {
    console.error(
      "Resend not configured — could not send demo notification email"
    );
    return false;
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send(
    {
      from: `CampaignAgent <notifications@${domain}>`,
      to: [NOTIFICATION_RECIPIENT],
      replyTo: email,
      subject: `New demo request from ${name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #1a1a1a;">
          <h2 style="margin: 0 0 16px;">New Demo Request</h2>
          <p style="margin: 0 0 8px;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 0 0 8px;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p style="margin: 16px 0 0; font-size: 13px; color: #666;">
            Submitted from the CampaignAgent "Request a Demo" form.
          </p>
        </div>
      `,
    },
    { idempotencyKey: `demo-request/${email}` }
  );

  if (error) {
    console.error("Failed to send demo notification email:", error.message);
    return false;
  }

  return true;
}

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

    let hubspotSucceeded = false;

    if (portalId && formId) {
      try {
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
                pageUri: "campaignagent.ai",
                pageName: "CampaignAgent - Request a Demo",
              },
            }),
          }
        );

        hubspotSucceeded = hubspotResponse.ok;

        if (!hubspotResponse.ok) {
          const hubspotError = await hubspotResponse.text();
          console.error("HubSpot form submission failed:", hubspotError);
        }
      } catch (hubspotError) {
        console.error("HubSpot form submission error:", hubspotError);
      }
    } else {
      console.log(
        `Demo request from: ${name} (${email}) — HubSpot not configured`
      );
    }

    // Always send an email notification so a lead is never lost,
    // even if the HubSpot submission failed or is not configured.
    const emailSucceeded = await sendNotificationEmail(name, email);

    // Only fail the request if BOTH capture paths failed — that means
    // the lead was not recorded anywhere.
    if (!hubspotSucceeded && !emailSucceeded) {
      return NextResponse.json(
        { error: "Failed to submit request. Please try again." },
        { status: 500 }
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
