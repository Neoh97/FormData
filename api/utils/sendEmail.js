const nodemailer = require("nodemailer");
require("dotenv").config(); 

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "medyestsms@gmail.com", // generated ethereal user
      pass: "njyskpvvlpfjjksw", // generated ethereal password
    },
  });

module.exports = transporter; 