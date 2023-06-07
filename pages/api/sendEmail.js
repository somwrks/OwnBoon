export default async function handler(req, res) {
  const nodemailer = require("nodemailer");

  const password = process.env.NEXT_PUBLIC_HOST_PASS;

  if (req.method === "POST") {
    const { email } = req.body;

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.in",
      port: 465,
      secure: true,
      auth: {
        user: "mail@ownboon.com",
        pass: "SusmaOwnboon123.",
      },
    });

    try {
      const mailOptions = {
        from: "mail@ownboon.com", // Replace with your Zoho email address
        to: email,
        subject: "Beta Access Sign Up @Ownboon",
        html: "<h1 style='font-weight: bold; font-size: 24px;'>Thank you for signing up for beta access!</h1>",
            };

      // Send the email
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent:", info.response);

      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.log("Error sending email:", error);
      res
        .status(500)
        .json({ error: "Failed to send email. Please try again." });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
