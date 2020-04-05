const express = require('express');

const router = express.Router();
const contactController = require('../../controllers/contact-controller');

router.post('/email', contactController.sendEmail);

module.exports = router;
