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

  
  async function sendEmail(to: string[], subject: string, text: string, html?: string): Promise<boolean[]> {
    const sendPromises = to.map(email => {
        let mailOptions: nodemailer.SendMailOptions = {
            from: `"Ragy & Partners Lawfirm" <${process.env.SMTP_EMAIL}>`,
            to: email, 
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