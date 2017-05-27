var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema ({
  name: {
    type: String,
    required: [true, 'Please enter your event\'s name.']
  },
  description: {
    type: String,
    minlength: [10, 'Please enter a descriptive description.']
  },
  date_created: Date,
  due_date: {
    type: Date,
    required: [true, 'Please enter your event\'s date']
  },
  company_participant: [{
    type: Schema.Types.ObjectId, ref: 'Company'
  }]
})

var CoEvent = mongoose.model('CoEvent', eventSchema);

module.exports = CoEvent;