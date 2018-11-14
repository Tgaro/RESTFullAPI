const 
	mongoose = require('mongoose'),
	Schema = mongoose.Schema
	UserMail = new Schema(
				{
					token: {
						type: String
					}
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
		                required: 'Enter mail from message will be sent.'
		              }
				}
			)
module.exports = mongoose.model('userMail', UserMail)