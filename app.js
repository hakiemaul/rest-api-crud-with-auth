const express = require('express')
var app = express()
const bodyParser = require('body-parser')

var index = require('./routes/index');
var companies = require('./routes/companies');
var events = require('./routes/events');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index)
app.use('/companies', companies)
app.use('/events', events)

app.listen(3000)