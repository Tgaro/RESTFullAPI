const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserMail = new Schema(
				{
					token: {
						type: String
					},
					user: {
                		type: String,
                		required: 'Enter your username'
              		},    
		            pass: {
		                type: String,
		                required: 'Enter a valid password'
		            }
				}
			)
module.exports = mongoose.model('userMail', UserMail)