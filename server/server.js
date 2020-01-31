require('./db/mongoose.js');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const keys = require('./config/keys');
const { errorHandling, errorHandlingNoMatchRoutes } = require('./middlewares/errorHandling');

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
app.use('/api/auth', auth);

// Global error handling
app.use(errorHandlingNoMatchRoutes);
app.use(errorHandling);

const PORT = keys.port;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
