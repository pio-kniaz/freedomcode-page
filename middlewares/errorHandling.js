const HttpError = require('../utils/Http-error');

const errorHandling = (error, _req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  return res.json({
    message: error.message || 'An unknown error occured!',
  });
};
const errorHandlingNoMatchRoutes = () => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
};

module.exports = {
  errorHandling,
  errorHandlingNoMatchRoutes,
};
