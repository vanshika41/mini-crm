

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const customerRoutes = require('./routes/customer');
const app = express();






app.use('/api/customers', customerRoutes);

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/mini_crm', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

module.exports = app;
