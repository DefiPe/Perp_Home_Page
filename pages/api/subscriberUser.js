// import fetch from 'isomorphic-unfetch';

// pages/api/subscribeUser.js
const nodemailer = require("nodemailer");
import parse from "node-html-parser";
import fs from 'fs/promises';

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.email",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "defipe.io21@gmail.com",
    pass: `${process.env.NEXT_PUBLIC_MAILING_ID}`,
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function mailKoro(_email, _htmlContent) {
  console.log("mail korchi ", _email);
  const info = await transporter.sendMail({
    from: {
      name: "DefiPe.io",
      address: "defipe.io21@gmail.com",
    },
    to: _email, // list of receivers
    subject: "Introducing the first of many epic updates!", // Subject line
    text: "Hello world?", // plain text body
    html: `${_htmlContent}`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

export default async function handler(req, res) {
  const htmlContent = await fs.readFile('./public/mail.html', 'utf-8');
    const parsedHTML = parse(htmlContent);
  console.log("a baba   ", parsedHTML);

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { email } = req.body;
  console.log(email);

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const data = {
      email_address: email,
      status: "subscribed",
    };
    //console.log(data);

    const response = await fetch(
      `https://us9.api.mailchimp.com/3.0/lists/c54c47cd26/members`,
      {
        body: JSON.stringify(data),
        headers: {
          Authorization: `api_key ${process.env.NEXT_PUBLIC_MAILCHIMP_ID}`,
          "Content-Type": "application/json",
        },
        method: "POST",
      }
    );
    let xyz = await response.json();
    console.log(xyz);

    if (response?.status >= 400) {
      //const data = await response.json();
      //res.status(500).json({ error: "Error" });
      throw new Error(data.title || "Failed to subscribe user.");
    }

    if (xyz?.status == "subscribed") {
      mailKoro(email, parsedHTML);
    }

    return res.status(201).json({ success: true });
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.message || "Internal Server Error" });
  }
}
