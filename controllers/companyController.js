require('dotenv').config();
const saltRounds = Number(process.env.SALT_ROUNDS);

var company = require('../models/company');
var bcrypt = require('bcrypt');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/compalink');

var get = function(req, res) {
  company.find({}, function (err, companies) {
    res.send(companies)
  });
}

var create = function(req, res) {
  company.create(req.body, (err, company) => {
    if(err) res.send(err.errors)
    res.send(company)
  })
}

var getOne = function(req, res) {
  company.find({_id: req.params.id}, (err, company) => {
    res.send(company)
  })
}

var update = function(req, res) {
  company.findByIdAndUpdate(req.params.id, { $set: req.body }, { runValidators: true }, (err, company) => {
    if(err) res.send(err.errors)
    res.send(company)
  })
}

var remove = function(req, res) {
  company.findOneAndRemove({_id: req.params.id}, (err, company) => {
    if(err) res.send(err)
    res.send(company)
  })
}

module.exports = {
  get, create, getOne, update, remove
};