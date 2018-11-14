module.exports = {SendHTMLMail};

function SendHTMLMail(user, pass, from, to, service, subject, text){
  var nodemailer = require('nodemailer');
  var transporter = nodemailer.createTransport({
      service: service,
      auth: {
          user: user,
          pass: pass
      }
  });

  var mailOptions = {
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