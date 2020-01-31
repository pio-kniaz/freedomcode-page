const express = require('express');
const authController = require('../../controllers/auth-controller');


const router = express.Router();

router.post('/refresh-token', authController.getRefreshToken);

module.exports = router;
