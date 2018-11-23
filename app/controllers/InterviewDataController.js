const InterviewData = require('../models/InterviewDataModel')

exports.createInterviewData = (req, res) => {

	const newID = new InterviewData(req.body)
  	newID.save((err, interviewData) => {

  		err 
  		? res.send(err)
    	: res.json(interviewData)
  	})
}

exports.listAllInterviewData = (req, res) => {

	InterviewData.find({}, (err, interviewData) => {

		err 
		? res.send(err)
		: res.json(interviewData)
  	})
}

exports.listInterviewDataByTheme = function(req, res) {

	InterviewData.find(
		{theme: req.params.theme }, 
		(err, interviewData) => {

			err
			? res.send(err)
			: res.send(interviewData)
  		}
  	)
}

exports.listInterviewDataByIdPerson = (req, res) => {

	InterviewData.find(
		{idPerson: req.params.idPerson }, 
		(err, interviewData) => {

			err
			? res.send(err)
      		: res.send(interviewData)
  		}
  	)
}
  
exports.deleteInterviewData = (req, res) => {

	InterviewData.remove(
		{personId: req.params.personId}, 
		(err, interviewData) => {

			err
      		? res.send(err)
    		: res.json({ message: 'InterviewData successfully deleted' })
    	}
    )
}

exports.updateInterviewData = (req, res) => {

	InterviewData.findOneAndUpdate(
		{personId: req.params.personId}, 
		req.body, 
		{new: true}, 
		(err, interviewData) => {
			
			err
			? res.send(err)
    		: res.json(interviewData)
    	}
    )
}