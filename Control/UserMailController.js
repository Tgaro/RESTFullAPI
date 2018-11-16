const 
	mailUser = require('../Model/UserMailModel')

exports.createUser = function(req, res){
	const newUser = new mailUser(req.body)
	newUser.save(
			function(err, user){
				if(err)
					res.send(err)
				res.render('pages/registerConfirmation', {
					token: req.body.token,
					username: req.body.user
				}
				)
			}
		)
	}

exports.listAllUsers = function(req,res){
	mailUser.find(
			{}, 
			function(err, user){
				if(err)
					res.send(err)
				res.json(user)
			}
		)
	}

exports.listUserByToken = function(req,res){
	mailUser.find(
			{token: req.params.token}, 
			function(err, user){
				if(err)
					res.send(err)
				res.json(user)
			}
		)
	}