require('dotenv').config();
const saltRounds = Number(process.env.SALT_ROUNDS);

var Company = require('../models/company');
var bcrypt = require('bcrypt');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/compalink');

var get = function(req, res) {
  Company.find({}, function (err, companies) {
    res.send(companies)
  });
}

var create = function(req, res) {
  var salt = bcrypt.genSaltSync(saltRounds);
  var hash = bcrypt.hashSync(req.body.password, salt);

  var newCompany = new Company({
    name: req.body.name,
    email: req.body.email,
    password: hash,
    employee: req.body.employee,
    role: req.body.role
  })
  newCompany.save((err, company) => {
    if(err) {
      res.send(err.errors)
    } else res.send(company)
  })
}

var getOne = function(req, res) {
  Company.find({_id: req.params.id}, (err, company) => {
    res.send(company)
  })
}

var update = function(req, res) {
  Company.findByIdAndUpdate(req.params.id, { $set: req.body }, { runValidators: true }, (err, company) => {
    if(err) res.send(err.errors)
    res.send(company)
  })
}

var remove = function(req, res) {
  Company.findOneAndRemove({_id: req.params.id}, (err, company) => {
    if(err) res.send(err)
    res.send(company)
  })
}

module.exports = {
  get, create, getOne, update, remove
};