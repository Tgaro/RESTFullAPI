module.exports = {sendMail};

async function sendMail(tokenId, to, service, subject, text){

  const userMail = require('../Model/UserMailModel')
  let userName = ''
  let userPass = ''


await userMail.find(
              {token: tokenId},
              function(err, userInfo){
                  if(!err){

                    userName = userInfo[1].user
                    userPass = userInfo[1].pass
                  }
                }
            )

  const nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
      service: service,
      auth: {
          user: userName,
          pass: userPass
      }
  });

  const mailOptions = {
    from: userName,
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