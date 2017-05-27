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
  date_started: Date,
  days: {
    type: Number,
    required: [true, 'Enter the estimated project length (in days).']
  },
  due_date: Date,
  creator: {
    type: Schema.Types.ObjectId, ref: 'Company'
  }
})

var Project = mongoose.model('Project', eventSchema);

module.exports = Project;