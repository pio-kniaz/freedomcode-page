/* eslint-disable func-names */
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

const { Schema } = mongoose;

const accountSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  refreshToken: {
    type: String,
  },
});

accountSchema.statics.findByCredentials = async function (payload) {
  const { userName, password } = payload;
  const account = this;
  const accountData = await account.findOne({ userName });

  if (!accountData) {
    throw new Error('User not found');
  }
  const isMatch = await bcrypt.compare(password, accountData.password);

  if (!isMatch) {
    throw new Error('Password not correct');
  }
  return accountData;
};

accountSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({
    id: user.id,
  }, keys.accessToken, { expiresIn: '15s' });

  return token;
};

accountSchema.methods.generateRefreshToken = async function () {
  const user = this;
  const token = jwt.sign({
    id: user.id,
  }, keys.refreshToken, { expiresIn: '7d' });

  return token;
};

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;
