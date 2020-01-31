const express = require('express');
const accountController = require('../../controllers/account-controller');
const auth = require('../../middlewares/isAuth');

const router = express.Router();

router.post('/register', accountController.registerAccount);

router.post('/login', accountController.logInToAccount);

router.post('/logout', auth, accountController.logOut);

module.exports = router;
