
module.exports = function(app){

	const mailControler = require('../Control/Controller')

	app.route('/').get( 
		function(req, res){
			res.send('Building a NodeJs API. Use /sendMail to send mail.')
		}
	);

	app.route('/sendMail')
			.get(
				mailControler.listAllMails
			)
			.post(
				mailControler.createMail
			)
}