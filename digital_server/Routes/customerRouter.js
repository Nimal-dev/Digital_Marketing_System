const express = require('express');
const router = express.Router();
const customerController = require('../Controllers/customerController');

router.post('/AddCart', customerController.addToCart);
router.get('/getCart/:customerId', customerController.getCart);
router.delete('/removeFromCart/:customerId/:productId', customerController.removeFromCart);

module.exports = router;
