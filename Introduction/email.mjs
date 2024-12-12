import nodemailer from "nodemailer";

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "iusdeav@gmail.com",
    pass: "bies-nuxh-savm-aazf", // Your app-specific password
  },
  tls: {
    rejectUnauthorized: false,
  },
  host: "smtp.gmail.com", // Gmail's SMTP server
  port: 587, // Change to port 587 for TLS
  secure: false, // Use TLS
});

let mailOptions = {
  from: "iusdeav@gmail.com",
  to: "iumlorev@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log("Error: ", error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
