const nodeMailer = require('nodemailer');

const { emailSchema } = require('./../validation/contact/email');
const keys = require('./../config/keys');
const HttpError = require('../utils/Http-error');

const sendEmail = (req, res, next) => {
  const { error } = emailSchema.validate(req.body, { abortEarly: false });
  if (error) {
    const createErrorResponse = () => {
      const { details } = error;
      const errorResponse = {};
      Object.keys(details).forEach((elem) => {
        errorResponse[details[elem].path[0]] = details[elem].message;
      });
      return errorResponse;
    };
    next(new HttpError(createErrorResponse(), 400));
  }
  nodeMailer.createTestAccount(() => {
    const htmlEmail = `
      <h3> Contact Details </h3>
        <ul>
          <li>${req.body.name} </li>
          <li>${req.body.email} </li>
        </ul>
      <h3>Message</h3>
      <p>${req.body.message}</p>
    `;
    const transporter = nodeMailer.createTransport({
      service: 'gmail',
      auth: {
        user: keys.email,
        pass: keys.emailPassword,
      },
    });

    const mailOptions = {
      from: req.body.email,
      to: keys.email,
      subject: 'New Message',
      text: req.body.message,
      html: htmlEmail,
    };
    // eslint-disable-next-line no-unused-vars
    transporter.sendMail(mailOptions, (err, _info) => {
      if (err) {
        return next(new HttpError(err.message, 400));
      }
      return res.status(200).json({
        message: `Thanks for your message ${req.body.name}`,
      });
    });
  });
};

exports.sendEmail = sendEmail;
