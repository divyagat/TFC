import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Fix for ES modules path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ CORS setup – allow both local and production frontend
app.use(
  cors({
    origin: [
      "http://localhost:5173", // your local frontend (Vite/React)
      "https://your-frontend-domain.com", // your deployed frontend (optional)
    ],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());

// ✅ Serve static frontend files (if any)
app.use(express.static(path.join(__dirname, "public")));

// ✅ Nodemailer transporter setup (Gmail + App Password)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Your admin email
    pass: process.env.EMAIL_PASS, // App password
  },
});

/* =============================
   1️⃣ Franchise Form: /api/send-email
============================= */
app.post("/api/send-email", async (req, res) => {
  const { name, email, contact, area, address, message, budget } = req.body;

  const adminMail = {
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL, // dynamic admin mail
    subject: "📩 New Franchise Application Received",
    html: `
      <h3>New franchise application details:</h3>
      <ul>
        <li><strong>Name:</strong> ${name || "N/A"}</li>
        <li><strong>Email:</strong> ${email || "N/A"}</li>
        <li><strong>Phone:</strong> ${contact || "N/A"}</li>
        <li><strong>Area:</strong> ${area || "N/A"}</li>
        <li><strong>Address:</strong> ${address || "N/A"}</li>
        <li><strong>Message:</strong> ${message || "N/A"}</li>
        <li><strong>Budget:</strong> ${budget || "N/A"}</li>
      </ul>
    `,
  };

  try {
    await transporter.sendMail(adminMail);
    res.status(200).json({ message: "✅ Franchise mail sent successfully" });
  } catch (error) {
    console.error("❌ Franchise Mail Error:", error.message);
    res.status(500).json({ message: "Error sending mail to admin" });
  }
});

/* =============================
   2️⃣ Contact Form: /api/contact
============================= */
app.post("/api/contact", async (req, res) => {
  const { user_name, user_email, user_phone, user_address, reason } = req.body;

  const adminMail = {
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL, // dynamic admin mail
    subject: "📩 New Contact Form Submission",
    html: `
      <h3>A new contact form was submitted:</h3>
      <ul>
        <li><strong>Name:</strong> ${user_name || "N/A"}</li>
        <li><strong>Email:</strong> ${user_email || "N/A"}</li>
        <li><strong>Phone:</strong> ${user_phone || "N/A"}</li>
        <li><strong>Address:</strong> ${user_address || "N/A"}</li>
        <li><strong>Reason:</strong> ${reason || "N/A"}</li>
      </ul>
    `,
  };

  try {
    await transporter.sendMail(adminMail);
    res.status(200).json({ message: "✅ Contact mail sent successfully" });
  } catch (error) {
    console.error("❌ Contact Mail Error:", error.message);
    res.status(500).json({ message: "Error sending mail to admin" });
  }
});

// ✅ Default route (for frontend deployment)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// 🚀 Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
