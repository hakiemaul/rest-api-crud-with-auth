var CoEvent = require('../models/event');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/compalink');

var get = function(req, res) {
  CoEvent.find({})
  .populate('company_participant', 'name')
  .exec((err, events) => {
    res.send(events)
  })
}

var create = function(req, res) {
  var due_date = new Date(req.body.due_date)
  var newEvent = new CoEvent({
    name: req.body.name,
    description: req.body.description,
    date_created: new Date(),
    due_date: due_date,
    company_participant: req.body.company_participant
  })
  newEvent.save((err, eventt) => {
    if(err) {
      res.send(err.errors)
    } else res.send(eventt)
  })
}

var getOne = function(req, res) {
  CoEvent.findOne({_id: req.params.id})
  .populate('company_participant', 'name')
  .exec((err, eventt) => {
    res.send(eventt)
  })
}

var update = function(req, res) {
  CoEvent.findByIdAndUpdate(req.params.id, { $set: req.body }, { runValidators: true }, (err, eventt) => {
    if(err) res.send(err.errors)
    res.send(eventt)
  })
}

var remove = function(req, res) {
  CoEvent.findOneAndRemove({_id: req.params.id}, (err, eventt) => {
    if(err) res.send(err)
    res.send(eventt)
  })
}

module.exports = {
  get, create, getOne, update, remove
};