const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const cors = require('cors');
const keys = require('./config/keys');
const { errorHandling, errorHandlingNoMatchRoutes } = require('./middlewares/errorHandling');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cors({
  origin: keys.serverPath,
  credentials: true,
}));


// Routes
const contact = require('./routes/api/contact');

app.use('/api/contact', contact);

if (keys.nodeEnv === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Global error handling
app.use(errorHandlingNoMatchRoutes);
app.use(errorHandling);

const PORT = keys.port;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
