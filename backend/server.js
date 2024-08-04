// backend/server.js

const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(express.json());

app.post("/api/send", async (req, res) => {
  const { username, phoneNumber, email, subject, message } = req.body;

  if (!username || !phoneNumber || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: `Contact Form Submission: ${subject}`,
    text: `
        Name: ${username}
        Phone Number: ${phoneNumber}
        Email: ${email}
        Message: ${message}
      `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .json({ error: "Error sending email", details: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
