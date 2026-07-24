import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 1. Primary Method: If EMAIL_PASS is defined in Vercel environment variables, use Nodemailer SMTP
    if (process.env.EMAIL_PASS && (process.env.EMAIL_USER || process.env.EMAIL_TO)) {
      const targetEmail = process.env.EMAIL_TO || process.env.EMAIL_USER || 'shohanur.rs.bd@gmail.com';
      const senderEmail = process.env.EMAIL_USER || 'shohanur.rs.bd@gmail.com';

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: senderEmail,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: senderEmail,
        to: targetEmail,
        subject: `New Portfolio Message from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px;">
            <h2 style="color: #06b6d4; border-bottom: 2px solid #06b6d4; padding-bottom: 10px;">New Portfolio Contact</h2>
            <p><strong>Sender Name:</strong> ${name}</p>
            <p><strong>Sender Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Message:</strong></p>
            <div style="background: #f4f4f5; padding: 15px; rounded: 8px; font-size: 15px; line-height: 1.6;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
        `,
        replyTo: email,
      };

      await transporter.sendMail(mailOptions);
      return NextResponse.json({ success: true, provider: 'nodemailer' }, { status: 200 });
    }

    // 2. Fallback Method: Server-side FormSubmit AJAX proxy
    const formSubmitRes = await fetch("https://formsubmit.co/ajax/shohanur.rs.bd@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        message,
        _subject: `New Portfolio Message from ${name}`,
        _template: "table",
        _captcha: "false"
      })
    });

    const responseData = await formSubmitRes.json();
    return NextResponse.json({ success: true, provider: 'formsubmit', details: responseData }, { status: 200 });

  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
