const express = require('express');
const router = express.Router();
const homeController = require('../controllers/HomeController');

router.get('/', homeController.index);
router.post('/form', homeController.processForm);
router.get('/success', homeController.success);

module.exports = router;
