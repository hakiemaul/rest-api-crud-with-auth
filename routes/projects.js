var express = require('express');
var router = express.Router();

var auth = require('../controllers/auth');
var projectController = require('../controllers/projectController');

// Route to get all event
router.get('/', auth.allUser, projectController.get);

// Route to create new event
router.post('/', auth.authAndAdmin, projectController.create);

// Route to get one data
router.get('/:id', auth.allUser, projectController.update);

// Route to update event data
router.put('/:id', auth.authAndAdmin, projectController.update);

// Route to remove event data
router.delete('/:id', auth.authAndAdmin, projectController.remove);

module.exports = router;