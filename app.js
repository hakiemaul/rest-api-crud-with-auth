const express = require('express')
var app = express()
const bodyParser = require('body-parser')

var companies = require('./routes/companies')
var index = require('./routes/index')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index)
app.use('/companies', companies)

app.listen(3000)