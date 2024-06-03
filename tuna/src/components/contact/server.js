const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/send-email', (req, res) => {
    const { name, email, subject, message } = req.body;

    // Nodemailer transport setup
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password'
        }
    });

    transporter.verify((error, success) => {
        if (error) {
            console.error('SMTP bağlantı hatası:', error);
        } else {
            console.log('SMTP bağlantısı başarılı:', success);
        }
    });
    const mailOptions = {
        from: email,
        to: 'hestuna@gmail.com',
        subject: subject,
        text: `Ad: ${name}\nE-posta: ${email}\nKonu: ${subject}\n\nMesaj:\n${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send({ message: 'Mesajınız gönderilirken bir hata oluştu.' });
        }
        res.status(200).send({ message: 'Mesajınız başarıyla gönderildi.' });
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

