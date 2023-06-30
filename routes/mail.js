const express = require("express")
const router = express.Router()
const nodemailer = require("nodemailer");





router.post("/sendMail", async(req, res)=>{
    const { userMail, userName, orderWorth } = req.body
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        // port: 465,
        // secure: true,
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: 'muhammadali30905@gmail.com',
          pass: 'dftredwriuxnralv'
        }
      });
      const main = async() => {
        // send mail with defined transport object
        const info = await transporter.sendMail({
          from: '"International Congress" <sender@gmail.com>', // sender address
          to: userMail, // list of receivers
          subject: "Order Placed", // Subject line
        //   text: "Hello world?", // plain text body
          html: `<p>Dear ${userName},</p>
                <p> You have placed an order of Rs ${orderWorth} </p>
          `, // html body
        });
      
        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      
        //
        // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
        //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
        //       <https://github.com/forwardemail/preview-email>
        //
      }
      
      main().catch(console.error);
    res.send(userMail)
})


module.exports = router
