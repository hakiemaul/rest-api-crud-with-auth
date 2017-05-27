var express = require('express');
var router = express.Router();

var auth = require('../controllers/auth');
var companyController = require('../controllers/companyController');

// Route to get all company
router.get('/', auth.allUser, companyController.get);

// Route to create new company
router.post('/', auth.adminOnly, companyController.create);

// Route to get one company
router.get('/:id', auth.authAndAdmin, companyController.getOne);

// Route to update company data
router.put('/:id', auth.authAndAdmin, companyController.update);

// Route to remove company data
router.delete('/:id', auth.authAndAdmin, companyController.remove);

module.exports = router;