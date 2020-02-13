require('./db/mongoose.js');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const keys = require('./config/keys');
const { errorHandling, errorHandlingNoMatchRoutes } = require('./middlewares/errorHandling');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Freedom Code Home Page',
      description: 'API documentation for Freedom Code Page',
      version: '1.0.0',
      contact: {
        name: 'Piotr Kniaź',
      },
      servers: ['http://localhost:3001'],
    },
    securityDefinitions: {
      bearerAuth: {
        type: 'apiKey',
        name: 'Authorization',
        scheme: 'bearer',
        in: 'header',
      },
    },
  },
  apis: ['./routes/api/*.js', './controllers/*.js'],
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

app.use(cookieParser());

// Routes
const account = require('./routes/api/account');
const auth = require('./routes/api/auth');

app.use('/api/account', account);
app.use('/api/auth', authh);

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
// Global error handling
app.use(errorHandlingNoMatchRoutes);
app.use(errorHandling);

const PORT = keys.port;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
