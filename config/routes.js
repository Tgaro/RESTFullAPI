
module.exports = function(app){

	const mailController = require('../app/controllers/MailController')
	const userMailController = require('../app/controllers/UserMailController')
	const interviewDataController = require('../app/controllers/InterviewDataController')

	app.route('/')
		.get((req, res) => {

			res.render('pages/index')
		})

	app.route('/about')
		.get((req, res) => {

			res.render('pages/about')
		})

	app.route('/register')
		.get((req, res) => {

			res.render('pages/register')
		})
		.post(userMailController.createUser)

	app.route('/sendMail')
		.get((req, res) => {

			res.render('pages/sendMail')
		})
		.post(mailController.createMail)	

	app.route('/interviewData')
		.get(interviewDataController.listAllInterviewData)
		.post(interviewDataController.createInterviewData)
			
	app.route('/interviewData/theme/:theme')
		.get(interviewDataController.listInterviewDataByTheme)

	app.route('/interviewData/person/:idPerson')
		.get(interviewDataController.listInterviewDataByIdPerson)
		.put(interviewDataController.updateInterviewData)
		.delete(interviewDataController.deleteInterviewData)

	app.route('/user')
		.get(userMailController.listAllUsers)

	app.route('/user/:token')
		.get(userMailController.listUserByToken)
}
