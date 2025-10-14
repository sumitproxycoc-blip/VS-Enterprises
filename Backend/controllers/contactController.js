import Contact from "../models/Contact.js";
import nodemailer from "nodemailer";

export const sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const contact = new Contact({ name, email, message });
    await contact.save();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Message from ${name}`,
      text: message
    });

    res.status(200).json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error sending message", error });
  }
};
