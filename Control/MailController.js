const 
    Mail = require('../Model/MailModel')
    Mailler = require('../Scripts/sendMail')

exports.createMail = function(req, res) {
  const newMail = new Mail(req.body)
  newMail.save(
        function(err, mail) {
              if (err) 
                res.send(err)
              
              Mailler.sendMail(
                            mail.token, 
                            mail.to,
                            mail.service,
                            mail.subject,
                            mail.service
                          )

              res.json(mail)
            }
      )
  }

exports.listAllMails = function(req, res) {
  Mail.find(
        {}, 
        function(err, mail) {
            if (err)
              res.send(err)
            res.json(mail)
          }
      )
  }