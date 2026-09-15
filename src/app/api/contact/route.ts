import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface FormData {
  name: string;
  email: string;
  engagement: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: FormData = await request.json();

    const { name, email, engagement, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
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

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Inquiry email to you
    const inquiryHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f4f5f7; margin: 0; padding: 20px; }
          .container { max-width: 560px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e1e4e8; }
          .header { background: #6c5ce7; padding: 20px 24px; }
          .header h1 { font-size: 16px; margin: 0; color: #ffffff; font-weight: 600; }
          .header p { font-size: 12px; margin: 4px 0 0; color: rgba(255,255,255,0.7); }
          .body { padding: 24px; }
          .row { margin-bottom: 16px; }
          .label { font-size: 11px; font-weight: 600; color: #6a737d; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
          .value { font-size: 14px; color: #24292e; line-height: 1.5; }
          .value a { color: #6c5ce7; text-decoration: none; }
          .message-box { background: #f6f8fa; border: 1px solid #e1e4e8; border-radius: 6px; padding: 16px; margin-top: 4px; }
          .message-box p { font-size: 14px; color: #24292e; line-height: 1.6; margin: 0; white-space: pre-wrap; }
          .divider { border: none; border-top: 1px solid #e1e4e8; margin: 0; }
          .footer { padding: 16px 24px; font-size: 12px; color: #6a737d; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Inquiry from ${name}</h1>
            <p>Portfolio Contact Form</p>
          </div>
          <div class="body">
            <div class="row">
              <div class="label">From</div>
              <div class="value"><a href="mailto:${email}">${email}</a></div>
            </div>
            <div class="row">
              <div class="label">Engagement</div>
              <div class="value">${engagement}</div>
            </div>
            <div class="row">
              <div class="label">Subject</div>
              <div class="value">${subject}</div>
            </div>
            <div class="row">
              <div class="label">Message</div>
              <div class="message-box"><p>${message}</p></div>
            </div>
          </div>
          <hr class="divider">
          <div class="footer">
            Received on ${new Date().toLocaleString("en-US", { dateStyle: "full", timeStyle: "short" })}
          </div>
        </div>
      </body>
      </html>
    `;

    const inquiryText = `
New Inquiry from ${name}
=======================

From: ${email}
Engagement: ${engagement}
Subject: ${subject}

Message:
${message}

Received on ${new Date().toLocaleString("en-US", { dateStyle: "full", timeStyle: "short" })}
    `.trim();

    // Send inquiry to your email
    await transporter.sendMail({
      from: `"Portfolio" <${process.env.SMTP_USER}>`,
      to: "hello@surjansinghthakuri.com.np",
      replyTo: email,
      subject: `[Portfolio] ${engagement} — ${subject}`,
      text: inquiryText,
      html: inquiryHtml,
    });

    // Also send a copy to Gmail as fallback
    await transporter.sendMail({
      from: `"Portfolio" <${process.env.SMTP_USER}>`,
      to: "surjansinghthakuri@gmail.com",
      replyTo: email,
      subject: `[Portfolio] ${engagement} — ${subject}`,
      text: inquiryText,
      html: inquiryHtml,
    });

    // Auto-reply thank you email to the sender
    const thankYouHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f4f5f7; margin: 0; padding: 20px; }
          .container { max-width: 560px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e1e4e8; }
          .header { background: #6c5ce7; padding: 24px; text-align: center; }
          .header h1 { font-size: 18px; margin: 0; color: #ffffff; font-weight: 600; }
          .body { padding: 24px; }
          .greeting { font-size: 15px; color: #24292e; margin-bottom: 12px; }
          .message { font-size: 14px; color: #586069; line-height: 1.7; margin-bottom: 20px; }
          .message a { color: #6c5ce7; text-decoration: none; }
          .signature { font-size: 14px; color: #24292e; margin-top: 24px; line-height: 1.6; }
          .footer { padding: 16px 24px; font-size: 11px; color: #6a737d; text-align: center; border-top: 1px solid #e1e4e8; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Thank You, ${name}!</h1>
          </div>
          <div class="body">
            <p class="greeting">Hi ${name},</p>
            <p class="message">
              Thank you for reaching out. I have received your inquiry regarding <strong>${engagement}</strong> and will get back to you within 24 hours.
            </p>
            <p class="message">
              If your matter is urgent, feel free to contact me directly at
              <a href="mailto:surjansinghthakuri@gmail.com">surjansinghthakuri@gmail.com</a>
              or call <a href="tel:+9779868791259">(+977) 9868791259</a>.
            </p>
            <p class="signature">
              Best regards,<br>
              <strong>Surjan Singh Thakuri</strong><br>
              <span style="font-size: 12px; color: #6a737d;">Software Engineer &middot; Kathmandu, Nepal</span>
            </p>
          </div>
          <div class="footer">
            Automated acknowledgment &middot; You will receive a personal response shortly.
          </div>
        </div>
      </body>
      </html>
    `;

    const thankYouText = `
Hi ${name},

Thank you for reaching out. I have received your inquiry regarding ${engagement} and will get back to you within 24 hours.

If your matter is urgent, feel free to contact me directly at surjansinghthakuri@gmail.com or call (+977) 9868791259.

Best regards,
Surjan Singh Thakuri
Software Engineer · Kathmandu, Nepal
    `.trim();

    await transporter.sendMail({
      from: `"Surjan Singh Thakuri" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Thank you for reaching out, ${name}!`,
      text: thankYouText,
      html: thankYouHtml,
    });

    return NextResponse.json(
      { message: "Inquiry sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send inquiry. Please try again." },
      { status: 500 }
    );
  }
}
