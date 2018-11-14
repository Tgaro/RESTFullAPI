const mongoose = require('mongoose')
 
const Schema = mongoose.Schema

var mailSchema = new 
          Schema(
          {
            user: {
                type: String,
                required: 'Enter your username'
              },    
            pass: {
                type: String,
                required: 'Enter a valid password'
              },
            from: {
                type: String,
                required: 'Enter mail from message will be sent'
              },
            to: {
                type: String,
                required: 'Enter mail to which message will be sent'
              },
            service: {
                type: String,
                required: 'Enter service mail type'
              },
            subject: {
                type: String
              },
            text: {
                type: String
            }
          })

module.exports = mongoose.model('Mail', mailSchema)