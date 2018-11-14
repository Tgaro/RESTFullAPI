
module.exports = function(app){

	const 
		mailController = require('../Control/MailController'),
		userMailController = require('../Control/UserMailModel')
		interviewDataController = require('../Control/InterviewDataController')

	app.route('/').get( 
		function(req, res){
			res.send('Building a NodeJs API. Use /sendMail to send mail or /interviewData to retrive create new data or retrieve what already exists.')
		}
	);

	app.route('/register')
			.get(
				userMailController.listAllUsers
			)
			.post(
				userMailController.createUser
			)

	app.route('/sendMail')
			.get(
				mailController.listAllMails
			)
			.post(
				mailController.createMail
			)

	app.route('/interviewData')
			.get(
				interviewDataController.listAllInterviewData
			)
			.post(
				interviewDataController.createInterviewData
			)
			
	app.route('/interviewData/theme/:theme')
			.get(
				interviewDataController.listInterviewDataByTheme
			)
	app.route('/interviewData/person/:personId')
		.get(
			interviewDataController.listInterviewDataByPersonId
		)
		.put(
			interviewDataController.updateInterviewData
		)
		.delete(
			interviewDataController.deleteInterviewData
		)
}
