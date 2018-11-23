const mongoose = require('mongoose')
const Schema = mongoose.Schema
    
const mailSchema = new 
          Schema(
          {
            token:{
                type: String,
                required: 'Enter valid token.'
              },
            to: {
                type: String,
                required: 'Enter mail to which message will be sent.'
              },
            service: {
                type: String,
                required: 'Enter service mail type.'
              },
            subject: {
                type: String
              },
            text: {
                type: String
            }
          })

module.exports = mongoose.model('Mail', mailSchema)