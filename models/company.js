var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var companySchema = new Schema ({
  name; {
    type: String,
    required: [true, 'Please enter your company name.']
  },
  email: {
    type: String,
    required: [true, 'Please enter your company\'s email.']
  },
  password: {
    type: String,
    required: [true, 'Please enter your password.'],
    minlength: [8, 'Minimal password length is 8']
  },
  employee: Number,
  project: [{
    type: Schema.Types.ObjectId, ref: 'Project'
  }],
  connection: [{
    type: Schema.Types.ObjectId, ref: 'Company'
  }]
})

var Company = mongoose.model('Company', companySchema);

module.exports = Company;