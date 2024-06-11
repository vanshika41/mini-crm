const Customer = require('..Customer/models/Customer');
const publisher = require('../pubsub/publisher');

exports.createCustomer = async (req, res) => {
  try {
    const customer = new Customer(req.body);
    await customer.save();
    res.status(201).send(customer);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.createCustomer = async (req, res) => {
  try {
    const customerData = req.body;
    publisher.publish('customer_creation', JSON.stringify(customerData));
    res.status(202).send({ message: 'Customer creation in process' });
  } catch (error) {
    res.status(400).send(error);
  }
};