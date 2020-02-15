const express = require('express');
const authController = require('../../controllers/auth-controller');

const router = express.Router();

/**
* @swagger
* /api/auth/refresh-token:
*    post:
*      tags:
*       - Auth
*      description: Use to log in and get accessToken
*      responses:
*       '200':
*        description: A successful response
*/

router.post('/refresh-token', authController.getRefreshToken);

module.exports = router;
