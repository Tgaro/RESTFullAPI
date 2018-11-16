
module.exports = function(app){

	const 
		mailController = require('../Control/MailController'),
		userMailController = require('../Control/UserMailController')
		interviewDataController = require('../Control/InterviewDataController')

	app.route('/')
			.get( 
				function(req, res){
					res.render('pages/index')
				}
			)

	app.route('/about')
			.get( 
				function(req, res){
					res.render('pages/about')
				}
			)

	app.route('/register')
			.get(
				function(req, res){
					res.render('pages/register')
				}
			)
			.post(
				userMailController.createUser
			)

	app.route('/user')
			.get(
				userMailController.listAllUsers
			)

	app.route('/user/:token')
			.get(
				userMailController.listUserByToken
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
