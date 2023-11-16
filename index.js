require('dotenv').config();
const express = require("express");
const nodemailer = require("nodemailer")
const cors = require('cors');
const app = express()
app.use(express.json());
app.use(cors({
    credentials: true,
    // origin:["""]
    origin: ["http://localhost:3000"]





}));
let PORT = process.env.PORT || 5000

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD
    },
    tls: {
        rejectUnauthorized: false
    }
})





app.get("/", (req, res) => {

    res.send("Hello World!")
})
app.post("/api/ies/v1/enquiry/email", (req, res) => {
    email_details_json = req.body
    // console.log(email_details_json["name"])
    let mailOptions = {
        from: "nikhilbk9148@gmail.com",
        to: "nikhilbk9148@gmail.com",
        subject: `You have received an Enquiry from ${email_details_json["name"]}`,
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">Enquiry Details</h2>
            <ul style="list-style: none; padding-left: 0;">
                <li>
                    <strong>Name:</strong> ${email_details_json["name"]}
                </li>
                <li>
                    <strong>Email:</strong> ${email_details_json["email"]}
                </li>
                <li>
                    <strong>Phone:</strong> ${email_details_json["phone_number"]}
                </li>
                <li>
                    <strong>Company Name:</strong> ${email_details_json["company_name"]}
                </li>
                <li>
                    <strong>Message:</strong> ${email_details_json["message"]}
                </li>
            </ul>
        </div>
        
        `

    }
    transporter.sendMail(mailOptions, function (err, sucess) {

        if (err) {
            console.log(err)
            res.send("Email not sent,try some time later")
        } else {
            console.log("Email Sent successfully")
            res.send("Email Sent successfully!")
        }
    })

})

app.listen(PORT, () => {
    console.log(`listening port ${PORT}`)
})