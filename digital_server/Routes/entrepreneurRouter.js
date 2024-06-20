const express = require('express');
const router = express.Router();
const entrepreneurController = require('../Controllers/entrepreneurController');


router.post('/AddProduct',entrepreneurController.addProduct );
router.get('/viewProducts',entrepreneurController.viewProducts );
router.get('/viewProductss',entrepreneurController.viewProductss );
router.post('/DeleteProduct',entrepreneurController.deleteProduct );
router.post('/updateProduct', entrepreneurController.updateProduct);
router.get('/getEntrepreneurOrders/:entrepreneurId', entrepreneurController.getEntrepreneurOrders);




module.exports = router;