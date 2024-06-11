const express = require('express');
const router = express.Router();
const providerController = require('../Controllers/serviceProviderController');


router.post('/AddPackage', providerController.AddPackage);
router.get('/viewPackages', providerController.viewPackages);
router.get('/viewPackage', providerController.viewPackage);
router.post('/deletePackage', providerController.deletePackage);

module.exports = router