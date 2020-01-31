const express = require('express');
const jwt = require('jsonwebtoken');
const Account = require('../../models/Account');

const keys = require('../../config/keys');

const router = express.Router();

router.post('/refresh-token', async (req, res) => {
  const token = req.cookies.refreshToken;
  if (!token) return res.send({ accessToken: null });
  try {
    const { id } = jwt.verify(token, keys.refreshToken);
    const account = await Account.findOne({ _id: id });

    if (
      typeof (account.refreshToken) === 'string' && account.refreshToken === token) {
      const accessToken = await account.generateAuthToken();
      const refreshToken = await account.generateRefreshToken();
      account.refreshToken = refreshToken;
      await account.save();
      res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        path: '/api/auth/refresh-token',
      });
      res.status(200).json({
        accessToken,
      });
    }
  } catch (error) {
    res.status(401).json({
      error: 'invalid token',
    });
  }
});

module.exports = router;
