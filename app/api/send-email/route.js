import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message, bookShow } = await req.json();

    // Nodemailer transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,       // Your Gmail
        pass: process.env.GMAIL_APP_PASS,   // Gmail App Password
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: "contactscjha23@gmail.com",
      subject: "New Contact Form Submission",
      html: `
        <h2>New Message from Contact Form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Book a Show:</strong> ${bookShow || "Not Provided"}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "Email sent successfully" }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 });
  }
}
