var express = require('express');
var router = express.Router();

var auth = require('../controllers/auth');
var eventController = require('../controllers/eventController');

// Route to get all event
router.get('/', auth.allUser, eventController.get);

// Route to create new event
router.post('/', auth.adminOnly, eventController.create);

// Route to get one data
router.get('/:id', auth.allUser, eventController.update);

// Route to update event data
router.put('/:id', auth.adminOnly, eventController.update);

// Route to remove event data
router.delete('/:id', auth.adminOnly, eventController.remove);

module.exports = router;