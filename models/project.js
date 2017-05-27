var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema ({
  name: {
    type: String,
    required: [true, 'Please enter your project\'s name.']
  },
  description: {
    type: String,
    minlength: [10, 'Please enter a descriptive description.']
  },
  date_started: {
    type: Date,
    default: Date.now
  },
  days: {
    type: Number,
    required: [true, 'Enter the estimated project length (in days).']
  },
  due_date: Date,
  creator: {
    type: String, ref: 'Company'
  }
})

var Project = mongoose.model('Project', eventSchema);

module.exports = Project;