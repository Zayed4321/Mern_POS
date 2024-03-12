const express = require('express');
const { getItemController, addItemController, singleItemController } = require('../controllers/itemController');

const router = express.Router();

// Get method to find all the data

router.get('/get-item', getItemController);

// Get a single Product

router.get('/get-item/:id', singleItemController);

// Post the Product data here in this section

router.post('/add-item', addItemController);

module.exports = router;