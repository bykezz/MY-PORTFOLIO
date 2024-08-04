const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post("/send", (req, res) => {
  const { username, phoneNumber, email, subject, message } = req.body;

  if (!username || !phoneNumber || !email || !subject || !message) {
    return res.status(400).send("All fields are required");
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

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send("Error sending email");
    }
    res.status(200).send("Email sent successfully");
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
