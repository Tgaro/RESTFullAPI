const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const routes = require('./routes')
const app = express()

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/InterviewAPPDb', { useNewUrlParser: true })

app.set('views', './app/views')
app.set('view engine', 'ejs')

app.use(express.static('./app/public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

routes(app)

app.use((req, res) => {
	res.status(404).send({url: req.originalUrl + ' not found'})
})

module.exports = app