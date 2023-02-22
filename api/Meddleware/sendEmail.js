const transporter = require("../utils/sendEmail");

function sendEmail(req, res, next){
    transporter.sendMail({
        from: '"<medyestsms@gmail.com>', // sender address
        to: `neohveil@gmail.com`, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Gracias por contactar", // plain text body
        html: "<b>Hello world?</b>", // html body
      }, (err, res)=>{
        if(err){
            console.error(err)
        }else{
            console.log("mensaje enviado")
        }
      })
}

module.exports = sendEmail; 