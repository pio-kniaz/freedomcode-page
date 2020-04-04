require('dotenv').config();

module.exports = {
  port: process.env.PORT,
  email: process.env.EMAIL,
  emailPassword: process.env.EMAIL_PASSWORD,
  nodeEnv: process.env.NODE_ENV,
  serverPath: process.env.SERVER_PATH,
};
