const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json())

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "caredentalautocaredental@gmail.com",
        pass: "idnxlbvilzcpoczs",
    }
  });

  const mailOptions = {
    from: email,
    to: 'annapolisdentalcenter@gmail.com',
    subject: `CareDental Contact us Enquiry from - ${name}`,
    html: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error.message);
      res.status(500).send('Failed to send email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});


app.post('/exit-survey', (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "caredentalautocaredental@gmail.com",
        pass: "idnxlbvilzcpoczs",
    }
  });

  const mailOptions = {
    from: email,
    to: 'annapolisdentalcenter@gmail.com',
    subject: `Annapolis Dental Exit Survey Response - ${name}`,
    html: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error.message);
      res.status(500).send('Failed to send email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.post('/send-survey', (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "caredentalautocaredental@gmail.com",
        pass: "idnxlbvilzcpoczs",
    }
  });

  const mailOptions = {
    from: email,
    to: 'annapolisdentalcenter@gmail.com',
    subject: `Annapolis Dental Survey Response - ${name}`,
    html: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error.message);
      res.status(500).send('Failed to send email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
