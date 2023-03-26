require('dotenv').config();
import nodemailer from "nodemailer";

let sendSimpleEmail = async (dataSend) => {
  // async..await is not allowed in global scope, must use a wrapper
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  // let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_APP, // generated ethereal user
      pass: process.env.EMAIL_APP_PASSWORD, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <nguyenlieuphache69@gmail.com>', // sender address
    to: dataSend.reciverEmail, // list of receivers
    subject: "Thông Tin đặt lịch khám bệnh ✔", // Subject line
    // text: "Hello world?", // plain text body
    html: getBodyHtmlEmail(dataSend)

  });

  // console.log("Message sent: %s", info.messageId);
  // // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // // Preview only available when sending through an Ethereal account
  // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

}

let getBodyHtmlEmail = (dataSend) => {
  let result = ''
  if (dataSend.language === 'vi') {
    result =
      `
    <h3> xin chào ${dataSend.patientName}!<h3>
    <p> bạn nhận được email này vì đã dặt lịch khám bệnh online từ doctorbook<p>
    <p>Thông tin đặt lịch khám bệnh: <p>
    <div><b> thời gian: ${dataSend.time}</b><div>
    <div><b>Bác sĩ: ${dataSend.doctorName}</b></div>
    <p> Nếu các thông tin trên là đúng sự thật vui long click vào đường link trên để xác nhận hoàn tất đặt lịch khám bệnh </p>
    <div>
    <a href=${dataSend.redirectLink} target="_blank">Click here
    </div>
    <div>Xin chân thành cám ơn!</div>
    `
  }
  if (dataSend.language === 'en') {
    result =
      `
    <h3> Dear ${dataSend.patientName}!<h3>
    <p> You recevide this email because you booked an online medical appointment doctorbook<p>
    <p>Information to schedule an appointment: <p>
    <div><b> Time: ${dataSend.time}</b><div>
    <div><b>Doctor: ${dataSend.doctorName}</b></div>
    <p> If the above information is true, please click on the link below to </p>
    <div>
    <a href=${dataSend.redirectLink} target="_blank">Click here
    </div>
    <div>Sincerely thank!</div>
    `
  }
  return result;
}

module.exports = {
  sendSimpleEmail: sendSimpleEmail
}