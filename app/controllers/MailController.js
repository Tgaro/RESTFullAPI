const Mail = require('../models/MailModel')
const Mailler = require('../../helper/sendMail')

exports.createMail = function(req, res) {
  const newMail = new Mail(req.body)
  newMail.save( (err, mail) => {

    err
    ? res.send(err)
    : Mailler.sendMail(
        mail.token, 
        mail.to,
        mail.service,
        mail.subject,
        mail.text
      )
      res.json(mail)
  })
}

exports.listAllMails = function(req, res) {
  Mail.find({}, 
    (err, mail) => {
      err
      ? res.send(err)
      : res.json(mail)
  })
}