const 
	express = require('express'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	routes = require('./Routes/routes'),
  	app = express(),
  	port = 3030
  	
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/InterviewAPPDb', { useNewUrlParser: true })
  	
app.use(
	bodyParser.urlencoded(
			{ 
				extended: true 
			}
		)
	)

app.use(
	bodyParser.json()
	)

routes(app)

app.use(
	function(req, res) {
		res.status(404).send(
			{url: req.originalUrl + ' not found'}
			)
	}
)

const server = app.listen(
					port, 
					function() {}
					)

console.log('Server listening on port: ' + port)