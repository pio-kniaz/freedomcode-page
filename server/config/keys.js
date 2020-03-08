require('dotenv').config();

module.exports = {
  port: process.env.PORT,
  email: process.env.EMAIL,
  emailPassword: process.env.EMAIL_PASSWORD,
};
