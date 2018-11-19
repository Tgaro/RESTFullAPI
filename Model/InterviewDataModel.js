const mongoose = require('mongoose')
    
const Schema = mongoose.Schema

var interviewDataSchema = new 
          Schema
              (
                {
                  idPerson: Number ,
                  theme: String ,
                  person: String ,
                  image: String ,
                  description: {
                    type : Array,
                    default : []
                  },
                  turn: [
                    {
                      round: Number,
                      alternatives: [
                        {
                          question: String,
                          response: String,
                          score: Number
                        }
                      ]
                    }
                  ]
                }
              )

module.exports = mongoose.model('interviewData', interviewDataSchema)