module.exports = {sendMail};

function sendMail(tokenId, to, service, subject, text){

  const userMail = require('../Model/UserMailModel')

  const userInfo = userMail.find(
                          {token: "\"" + tokenId + "\""},
                          function(err, userInfo){
                            err 
                          }
                        )

  const nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
      service: service,
      auth: {
          user: user,
          pass: pass
      }
  });

  const mailOptions = {
    from: from,
    to: to,
    subject: subject,
    text: text
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  
}