const bcrypt = require('bcryptjs');
const keys = require('./../config/keys');
const Account = require('./../models/Account');
const HttpError = require('./../models/Http-error');

const logInToAccount = async (req, res, next) => {
  // TODO: Add req.body validation for login and password with @Joi ;)
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
    next(new HttpError(error.message, 400));
  }
};
const registerAccount = async (req, res, next) => {
  // TODO: Add req.body validation for register with @Joi ;)

  const { secretKey } = req.body;
  if (!secretKey || secretKey !== keys.secretAccountKey) {
    return next(new HttpError('Wrong secretAccountKey', 400));
  }
  const newAccount = new Account(req.body);
  try {
    newAccount.password = await bcrypt.hash(newAccount.password, 10);
    await newAccount.save();
    return res.json({ message: 'User has been created' });
  } catch (error) {
    return next(new HttpError(error.message, 400));
  }
};

const logOut = async (req, res, next) => {
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
    next(new HttpError(error.message, 400));
  }
};

exports.logInToAccount = logInToAccount;
exports.registerAccount = registerAccount;
exports.logOut = logOut;
