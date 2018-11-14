const mongoose = require('mongoose')
    
const Schema = mongoose.Schema

var interviewDataSchema = new 
          Schema(
          {
            personId: {
                type: Number,
                required: 'Enter person ID'
              },
            personName: {
                type: String,
                required: 'Enter person name'
              }, 
            theme: {
                type: String,
                required: 'Enter theme'
              }    
          })

module.exports = mongoose.model('interviewData', interviewDataSchema);