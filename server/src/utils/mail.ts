import nodemailer from 'nodemailer';
require("dotenv").config();


const transporter = nodemailer.createTransport({
    host: process.env.SMTP_SERVER, 
    port: process.env.SMTP_PORT, 
    secure: true, 
    auth: {
        user: process.env.SMTP_EMAIL, 
        pass: process.env.SMTP_PASSWORD, 
    },
  });

  
  interface EmailContent {
    to: string;
    subject: string;
    text: string;
    html?: string;
}

async function sendEmail(emails: EmailContent[]): Promise<boolean[]> {
    const sendPromises = emails.map(({ to, subject, text, html }) => {
        const mailOptions: nodemailer.SendMailOptions = {
            from: `"Ragy & Partners Lawfirm" <${process.env.SMTP_EMAIL}>`,
            to: to,
            subject: subject,
            text: text,
            ...(html && { html: html }),
        };

        return transporter.sendMail(mailOptions)
            .then(info => ({ success: true, messageId: info.messageId }))
            .catch(error => ({ success: false, error: error }));
    });

    const results = await Promise.allSettled(sendPromises);

    return results.map(result => result.status === 'fulfilled' && result.value.success);
}

export default sendEmail;