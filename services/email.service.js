require('dotenv').config();
const nodemailer = require('nodemailer');

// ---- TEMPORARY DEBUG: delete this block once the email works ----
const show = (name) => {
  const v = process.env[name];
  console.log(name, v ? `length=${v.length} start=${v.slice(0, 6)} end=${v.slice(-4)}` : 'MISSING');
};
['EMAIL_USER', 'CLIENT_ID', 'CLIENT_SECRET', 'REFRESH_TOKEN'].forEach(show);
// ---- END DEBUG ----

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.EMAIL_USER,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
  },
});

// Verify the connection configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('Error connecting to email server:', error);
  } else {
    console.log('Email server is ready to send messages');
  }
});

// Function to send email
const sendEmail = async (to, subject, text, html) => {
  try {
    const info = await transporter.sendMail({
      from: `"Backend-ledger" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
      html,
    });

    console.log('Message sent: %s', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

async function sendRegistrationEmail(userEmail, name) {
  const subject = `Welcome to Backend ledger`;
  const text = `Hello ${name},\n\nThank you for registering at Backend Ledger.\nWe are excited to have you on board!\n\nBest regards,\nThe Backend Ledger Team`;
  const html = `<p>Hello ${name},</p><p>Thank you for registering at Backend Ledger. We are excited to have you on board!</p><p>Best regards,<br>The Backend Ledger Team</p>`;
  await sendEmail(userEmail, subject, text, html);
}

async function sendTranscationEmail(userEmail, name, amount, toAccount) {
  const subject = 'Transaction Successful';
  const text = `Hello ${name},\n\nYour transaction of $${amount} to account ${toAccount} has been completed successfully.\n\nThank you for using our service.`;
  const html = `
    <h2>Transaction Successful</h2>
    <p>Hello ${name},</p>
    <p>Your transaction of <strong>$${amount}</strong> to account <strong>${toAccount}</strong> has been completed successfully.</p>
    <p>Thank you for using our service.</p>
  `;
  
  await sendEmail(userEmail, subject, text, html);
}

async function sendTranscationFailureEmail(userEmail, name, amount, toAccount) {
  const subject = 'Transaction Failed';
  const text = `Hello ${name},\n\nYour transaction of $${amount} to account ${toAccount} has failed.\n\nPlease try again later.`;
  const html = `
    <h2>Transaction Failed</h2>
    <p>Hello ${name},</p>
    <p>Your transaction of <strong>$${amount}</strong> to account <strong>${toAccount}</strong> has failed.</p>
    <p>Please try again later.</p>
  `;

  await sendEmail(userEmail, subject, text, html);
}


module.exports = {
  sendRegistrationEmail,
  sendTranscationEmail,
  sendTranscationFailureEmail
};