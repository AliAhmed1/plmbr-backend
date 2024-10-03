const PaymentMethodService = require('../services/paymentMethodService');

const PaymentMethodController = {
  createPaymentCard: async (req, res) => {
    try {
      const paymentCard = await PaymentMethodService.createPaymentCard(req.body);
      res.status(201).json(paymentCard);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  
  getPaymentCardById: async (req, res) => {
    try {
      const paymentCard = await PaymentMethodService.getPaymentCardById(req.params.id);
      res.status(200).json(paymentCard);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
  
  deletePaymentCard: async (req, res) => {
    try {
      await PaymentMethodService.deletePaymentCard(req.params.id);
      res.status(204).end();
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
  
  getAllPaymentCardsByUserId: async (req, res) => {
    try {
      const paymentCards = await PaymentMethodService.getAllPaymentCardsByUserId(req.params.userId);
      res.status(200).json(paymentCards);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
};

module.exports = PaymentMethodController;
