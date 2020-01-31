const express = require('express');
const bcrypt = require('bcryptjs');
const auth = require('../../middlewares/isAuth');
const keys = require('../../config/keys');

const router = express.Router();

const Account = require('../../models/Account');

router.post('/register', async (req, res) => {
  const { secretKey } = req.body;
  if (!secretKey || secretKey !== keys.secretAccountKey) {
    return res.status(400).json({
      error: 'Wrong secretAccountKey',
    });
  }
  const newAccount = new Account(req.body);
  try {
    newAccount.password = await bcrypt.hash(newAccount.password, 10);
    await newAccount.save();
    return res.json({ message: 'User has been created' });
  } catch (error) {
    return res.status(400).json({
      error,
    });
  }
});

router.post('/login', async (req, res) => {
  try {
    const account = await Account.findByCredentials(req.body);

    const accessToken = await account.generateAuthToken();
    const refreshToken = await account.generateRefreshToken();

    const updateAccountRefreshToken = await Account.findById(account.id);
    updateAccountRefreshToken.refreshToken = refreshToken;

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      path: '/api/auth/refresh-token',
    });

    await updateAccountRefreshToken.save();

    res.send({ accessToken });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});

router.post('/logout', auth, async (req, res) => {
  res.clearCookie('refreshToken', { path: '/api/auth/refresh-token' });
  try {
    const { id } = req.account;
    const account = await Account.findOne({ _id: id });
    account.refreshToken = '';
    await account.save();
    res.status(200).json({
      message: 'Success',
    });
  } catch (error) {
    res.status(400).json({
      error: error || 'unexpected error',
    });
  }
});

module.exports = router;
