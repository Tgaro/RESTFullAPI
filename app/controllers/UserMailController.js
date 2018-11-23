const mailUser = require('../models/UserMailModel')

exports.createUser = (req, res) => {

	const newUser = new mailUser(req.body)
	newUser.save( (err, user) => {

		err
		? res.send(err)
		: res.render('pages/registerConfirmation', {

			token: req.body.token,
			username: req.body.user
		})
	})
}

exports.listAllUsers = (req, res) => {

	mailUser.find({}, 
		(err, user) => {
			err
			? res.send(err)
			: res.json(user)
		}
	)
}

exports.listUserByToken = function(req, res){
	mailUser.find(
		{token: req.params.token}, 
		(err, user) => {
			err
			? res.send(err)
			: res.json(user)
		}
	)
}