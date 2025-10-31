import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export const generateMailOptions = (formData) => ({
  from: process.env.EMAIL_USER,
  to: process.env.EMAIL_TO,
  subject: 'New Contact Form Submission',
  html: `
    <h2>Contact Form Submission</h2>
    <p><strong>Name:</strong> ${formData.user_name}</p>
    <p><strong>Email:</strong> ${formData.user_email}</p>
    <p><strong>Phone:</strong> ${formData.user_phone}</p>
    <p><strong>Address:</strong> ${formData.user_address}</p>
    <p><strong>Reason:</strong> ${formData.reason}</p>
    <p><strong>Message:</strong> ${formData.message}</p>
  `
});
