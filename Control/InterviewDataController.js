const 
    InterviewData = require('../Model/InterviewDataModel')

exports.createInterviewData = function(req, res) {
  const newID = new InterviewData(req.body)
  newID.save(function(err, interviewData) {
    if (err) 
      res.send(err)
    res.json(interviewData)
  })
}

exports.listAllInterviewData = function(req, res) {
  InterviewData.find({}, function(err, interviewData) {
    if (err)
      res.send(err)
    res.json(interviewData)
  })
}

exports.listInterviewDataByTheme = function(req, res) {
  InterviewData.find({theme: req.params.theme }, function(err, interviewData) {
    if (err)
      res.send(err)
    if(interviewData != []){
      res.send(interviewData)
    }else{
      res.send('No records have been found with current parameter: ' + req.params.theme)
    }
  })
}

exports.listInterviewDataByIdPerson = function(req, res) {
  InterviewData.find({idPerson: req.params.idPerson }, function(err, interviewData) {
    if (err)
      res.send(err)
    if(interviewData != []){
      res.send(interviewData)
    }else{
      res.send('No records have been found with current parameter: ' + req.params.personId)
    }
  })
}
  
exports.deleteInterviewData = function(req, res) {
  InterviewData.remove({
    personId: req.params.personId
  }, function(err, interviewData) {
    if (err)
      res.send(err)
    res.json({ message: 'InterviewData successfully deleted' })
  })
}

exports.updateInterviewData = function(req, res) {
  InterviewData.findOneAndUpdate({personId: req.params.personId}, req.body, {new: true}, function(err, interviewData) {
    if (err)
      res.send(err)
    res.json(interviewData)
  })
}