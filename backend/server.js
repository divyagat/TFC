import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Enable CORS and JSON body parsing
app.use(cors({ origin: "*" }));
app.use(express.json());

// ✅ Nodemailer transporter (use Gmail + App Password)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/* =============================
   1️⃣ Franchise Form: /api/send-email
============================= */
app.post("/api/send-email", async (req, res) => {
  const { name, email, contact, area, address, message, budget } = req.body;

  const adminMail = {
    from: process.env.EMAIL_USER,
    to: "traditionalfoodcompany01@gmail.com", // Admin email
    subject: "📩 New Franchise Application Received",
    html: `
      <h3>New Franchise Application Details:</h3>
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
    console.log("✅ Franchise mail sent to admin");
    res.status(200).json({ message: "Franchise mail sent successfully" });
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
    to: "traditionalfoodcompany01@gmail.com", // Admin email
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
    console.log("✅ Contact mail sent to admin");
    res.status(200).json({ message: "Contact mail sent successfully" });
  } catch (error) {
    console.error("❌ Contact Mail Error:", error.message);
    res.status(500).json({ message: "Error sending mail to admin" });
  }
});

/* =============================
   Default Route (For Render Health Check)
============================= */
app.get("/", (req, res) => {
  res.send("✅ Traditional Food Company Backend is Running Successfully!");
});

/* =============================
   Start Server
============================= */
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
