const redis = require('redis');
const subscriber = redis.createClient();
const Customer = require('../models/Customer');

subscriber.on('message', async (channel, message) => {
  if (channel === 'customer_creation') {
    const customerData = JSON.parse(message);
    const customer = new Customer(customerData);
    await customer.save();
  }
});

subscriber.subscribe('customer_creation');

module.exports = subscriber;