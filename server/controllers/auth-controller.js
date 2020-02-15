const jwt = require('jsonwebtoken');
const Account = require('.././models/Account');
const keys = require('.././config/keys');
const HttpError = require('./../models/Http-error');

// eslint-disable-next-line consistent-return
const getRefreshToken = async (req, res, next) => {
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
    next(new HttpError(error.message, 401));
  }
};

exports.getRefreshToken = getRefreshToken;
