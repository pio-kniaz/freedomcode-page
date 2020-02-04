const express = require('express');

const accountController = require('../../controllers/account-controller');
const auth = require('../../middlewares/isAuth');

const router = express.Router();

/**
* @swagger
* /api/account/register:
*    post:
*      tags:
*       - Account
*      description: Use to create an account
*      responses:
*       '200':
*        description: A successful response
*    parameters:
*      - name: body
*        in: body
*        description: account name
*        schema:
*          properties:
*           userName:
*             type: string
*             example: Januszek
*           password:
*             example: '12345'
*             type: string
*           secretKey:
*             example: '12345'
*             type: string
*/
router.post('/register', accountController.registerAccount);

/**
* @swagger
* /api/account/login:
*    post:
*      tags:
*         - Account
*      description: Use to login and get accesToken
*      name: Login
*      summary: Login
*      responses:
*       '200':
*        description: A successful response
*    parameters:
*      - name: body
*        in: body
*        description: account name
*        schema:
*          properties:
*           userName:
*             type: string
*             example: admin
*           password:
*             example: '123'
*             type: string
*/
router.post('/login', accountController.logInToAccount);

/**
* @swagger
* /api/account/logout:
*    post:
*      tags:
*        - Account
*      description: Use to log out and clear accesToken
*      summary: Logout
*      security:
*       - bearerAuth: []
*      responses:
*       '200':
*        description: A successful response
*/

router.post('/logout', auth, accountController.logOut);

module.exports = router;
