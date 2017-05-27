var Project = require('../models/project');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/compalink');

var jwt = require('jsonwebtoken');
require('dotenv').config();
const sec = process.env.TOKEN_SECRET;

var get = function(req, res) {
  Project.find({})
  .populate('creator', 'name')
  .exec((err, projects) => {
    res.send(projects)
  })
}

var create = function(req, res) {
  var date_started = new Date();
  if(req.body.date_started) date_started = new Date(req.body.date_started);

  var due = new Date()
  due.setDate(due.getDate() + parseInt(req.body.days));

  var token = req.headers.token;
  jwt.verify(token, sec, (err, decoded) => {
    var newEvent = new Project({
      name: req.body.name,
      description: req.body.description,
      date_started: date_started,
      days: req.body.days,
      due_date: due,
      creator: decoded.id
    })
    newEvent.save((err, eventt) => {
      if(err) {
        res.send(err.errors)
      } else res.send(eventt)
    })
  })
}

var getOne = function(req, res) {
  Project.findOne({_id: req.params.id})
  .populate('creator', 'name')
  .exec((err, project) => {
    res.send(project)
  })
}

var update = function(req, res) {
  Project.findByIdAndUpdate(req.params.id, { $set: {
    name: req.body.name,
    description: req.body.description
  } }, { runValidators: true }, (err, project) => {
    if(err) res.send(err.errors)
    res.send(project)
  })
}

var remove = function(req, res) {
  Project.findOneAndRemove({_id: req.params.id}, (err, project) => {
    if(err) res.send(err)
    res.send(project)
  })
}

module.exports = {
  get, create, getOne, update, remove
};