const jwt = require('jsonwebtoken');
const User = require('../models/Account');
const keys = require('../config/keys');

const isAuth = async (req, res, next) => {
  try {
    const authorization = req.header('Authorization');
    if (!authorization) {
      throw new Error('Please Authenticate');
    }
    const token = authorization.replace('Bearer ', '');
    const decoded = jwt.verify(token, keys.accessToken);
    const account = await User.findOne({ _id: decoded.id });
    req.account = account;
  } catch (err) {
    res.status(401).send({ message: err.message });
  }
  next();
};

module.exports = isAuth;
