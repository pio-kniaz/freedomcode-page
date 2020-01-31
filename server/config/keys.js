require('dotenv').config();

module.exports = {
  mongoURI: process.env.MONGOURI,
  secret: process.env.SECRET,
  secretAccountKey: process.env.SECRETACCOUNTKEY,
  accessToken: process.env.ACCESS_TOKEN_SECRET,
  refreshToken: process.env.REFRESH_TOKEN_SECRET,
  port: process.env.PORT,
};
