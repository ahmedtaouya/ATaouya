import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Log environment variables for debugging
    console.log("Email User:", process.env.EMAIL_USER);
    console.log("Email Pass:", process.env.EMAIL_PASS);

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error("Missing email credentials");
    }

    // Create a transporter object using Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Define email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself or another recipient
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return a success response
    return new Response(JSON.stringify({ message: "Email sent successfully!" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error sending email:", error);

    // Return an error response
    return new Response(JSON.stringify({ message: "Failed to send email." }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}