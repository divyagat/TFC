import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { transporter } from './Config/nodemailerConfig.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

/* =============================
   1️⃣  Franchise Form: /api/send-email
============================= */
app.post('/api/send-email', async (req, res) => {
  const { name, email, contact, area, address, message, budget } = req.body;

  // Email to Admin
  const adminMail = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: '📩 New Franchise Application Received',
    html: `
      <h3>New franchise application details:</h3>
      <ul>
        <li><strong>Name:</strong> ${name || 'N/A'}</li>
        <li><strong>Email:</strong> ${email || 'N/A'}</li>
        <li><strong>Phone:</strong> ${contact || 'N/A'}</li>
        <li><strong>Area:</strong> ${area || 'N/A'}</li>
        <li><strong>Address:</strong> ${address || 'N/A'}</li>
        <li><strong>Message:</strong> ${message || 'N/A'}</li>
        <li><strong>Budget:</strong> ${budget || 'N/A'}</li>
      </ul>
    `,
  };

  // Auto-reply to User (if email provided)
  const userMail = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: '✅ Franchise Application Received',
    html: `
      <h2>Hello ${name || 'User'},</h2>
      <p>Thank you for showing interest in our franchise program.</p>
      <p><strong>Your Submitted Details:</strong></p>
      <ul>
        <li><strong>Phone:</strong> ${contact || 'N/A'}</li>
        <li><strong>Area:</strong> ${area || 'N/A'}</li>
        <li><strong>Budget:</strong> ${budget || 'N/A'}</li>
      </ul>
      <p>We will get back to you soon!</p>
      <br/>
      <p>Regards,<br/>Franchise Team</p>
    `,
  };

  try {
    // Send mail to Admin first
    await transporter.sendMail(adminMail);
    console.log(`✅ Franchise mail sent to admin: ${process.env.EMAIL_USER}`);

    // Send mail to User if email exists
    if (email) {
      try {
        await transporter.sendMail(userMail);
        console.log(`✅ Auto-reply sent to user: ${email}`);
      } catch (userError) {
        console.error('⚠️ Failed to send auto-reply to user:', userError.message);
      }
    }

    res.status(200).json({ message: 'Franchise mail sent successfully' });
  } catch (error) {
    console.error('❌ Franchise Mail Error:', error.message, error.stack);
    res.status(500).json({ message: 'Error sending mails. Please try again.' });
  }
});

/* =============================
   2️⃣  Contact Form: /api/contact
============================= */
app.post('/api/contact', async (req, res) => {
  const { user_name, user_email, user_phone, user_address, reason } = req.body;

  const adminMail = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: '📩 New Contact Form Submission',
    html: `
      <h3>A new contact form was submitted:</h3>
      <ul>
        <li><strong>Name:</strong> ${user_name || 'N/A'}</li>
        <li><strong>Email:</strong> ${user_email || 'N/A'}</li>
        <li><strong>Phone:</strong> ${user_phone || 'N/A'}</li>
        <li><strong>Address:</strong> ${user_address || 'N/A'}</li>
        <li><strong>Reason:</strong> ${reason || 'N/A'}</li>
      </ul>
    `,
  };

  const userMail = {
    from: process.env.EMAIL_USER,
    to: user_email,
    subject: '✅ Contact Form Received',
    html: `
      <h2>Hello ${user_name || 'User'},</h2>
      <p>Thank you for contacting us.</p>
      <p><strong>Your Message:</strong> ${reason || 'N/A'}</p>
      <p>We appreciate your time and will get back to you soon!</p>
      <br/>
      <p>Regards,<br/>Franchise Team</p>
    `,
  };

  try {
    await transporter.sendMail(adminMail);
    console.log(`✅ Contact mail sent to admin: ${process.env.EMAIL_USER}`);

    if (user_email) {
      try {
        await transporter.sendMail(userMail);
        console.log(`✅ Auto-reply sent to user: ${user_email}`);
      } catch (userError) {
        console.error('⚠️ Failed to send auto-reply to user:', userError.message);
      }
    }

    res.status(200).json({ message: 'Contact mail sent successfully' });
  } catch (error) {
    console.error('❌ Contact Mail Error:', error.message, error.stack);
    res.status(500).json({ message: 'Error sending mails. Please try again.' });
  }
});

/* =============================
   Start Server
============================= */
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
