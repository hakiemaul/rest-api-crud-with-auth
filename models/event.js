var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema ({
  name; {
    type: String,
    required: [true, 'Please enter your event\'s name.']
  },
  description: {
    type: String,
    minlength: [10, 'Please enter a descriptive description.']
  },
  date_created: {
    type: Date,
    default: Date.now
  },
  due_date: {
    type: Date,
    required: [true, 'Please enter your event\'s date']
  },
  company_participant: [{
    type: String, ref: 'Company'
  }]
})

var CoEvent = mongoose.model('CoEvent', eventSchema);

module.exports = CoEvent;