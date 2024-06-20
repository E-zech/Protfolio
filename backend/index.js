// server.js

import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// POST endpoint to handle form submission
app.post('/send', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Create a Nodemailer transporter
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com', // Your SMTP host
            port: 587, // Your SMTP port (usually 587 for TLS, 465 for SSL)
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.EMAIL_USER, // Your email address
                pass: process.env.EMAIL_PASS, // Your password
            },
        });

        // Send mail with defined transport object
        let info = await transporter.sendMail({
            from: `"Your Name" <${process.env.EMAIL_USER}>`, // Sender's email address
            to: 'eliyagett@gmail.com',// Receiver's email address
            subject: 'New Contact Form Submission', // Subject line
            html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`, // plain text body
        });

        console.log('Message sent: %s', info.messageId);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
