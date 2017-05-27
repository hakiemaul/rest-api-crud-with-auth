var express = require('express');
var router = express.Router();

var auth = require('../controllers/auth');

// Homepage
router.get('/', (req, res) => {
  res.send('Welcome to CompaLink')
})

// Login route
router.post('/login', auth.login)

// Signup route
router.post('/signup', auth.signup)

module.exports = router;