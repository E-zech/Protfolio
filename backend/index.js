import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import nodemailer from 'nodemailer';
import chalk from 'chalk';
import dotenv from 'dotenv';
import fs from 'fs';
import Joi from 'joi';
import moment from 'moment';
import morgan from 'morgan';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('combined'));

// Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Validation schema
const schema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    message: Joi.string().min(5).required()
});

// Route to handle form submission
app.post('/send', (req, res) => {
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    const { name, email, message } = req.body;

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: 'Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(chalk.red(`Error: ${error.toString()}`));
            return res.status(500).json({ error: error.toString() });
        }
        console.log(chalk.green(`Email sent: ${info.response}`));
        res.status(200).json({ message: 'Email sent: ' + info.response });
    });

    // Logging the request to a file
    const logMessage = `[${moment().format('YYYY-MM-DD HH:mm:ss')}] Name: ${name}, Email: ${email}, Message: ${message}\n`;
    fs.appendFile('requests.log', logMessage, (err) => {
        if (err) {
            console.log(chalk.red('Failed to write to log file'));
        } else {
            console.log(chalk.blue('Logged request to file'));
        }
    });
});

app.listen(port, () => {
    console.log(chalk.green(`app is listening to port : ${chalk.bgGreen(port)}`));
});
