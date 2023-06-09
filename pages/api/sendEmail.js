export default async function handler(req, res) {
  const nodemailer = require("nodemailer");

  const password = process.env.NEXT_PUBLIC_HOST_PASS;

    const { email } = req.body;

    const transporter = await nodemailer.createTransport({
      host: "smtp.zoho.in",
      port: 465,
      secure: true,
      auth: {
        user: "mail@ownboon.com",
        pass: password,
      },
    });

    try {
      const mailOptions = {
        from: "mail@ownboon.com", 
        to: email,
        subject: "Beta Access Sign Up @Ownboon",
        html: "<h1 style='font-weight: bold; font-size: 24px;'>Thank you for signing up for beta access!</h1> <h2 style='font-weight: normal; font-size: 19px;'>Stay tuned around Late June! 🫡</h2> <br/> <br/> <h2 style='font-weight: semi-bold; font-size: 19px;'> Join our discord server: <a href='https://discord.gg/nxeUX3Uufn'>https://discord.gg/nxeUX3Uufn</a></h2> <br/><h2 style='font-weight: semi-bold; font-size: 19px;'> Business Queries Only on- <a href='mailto:business@ownboon.com'>business@ownboon.com</a></h2>",
      };

      // Send the email
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent:", info.response);

      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.log("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email. Please try again." });
    }
  }