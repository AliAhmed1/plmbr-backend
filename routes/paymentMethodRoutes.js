const express = require('express');
const PaymentMethodController = require('../controllers/paymentMethodController');
const router = express.Router();

router.post('/paymentcards', PaymentMethodController.createPaymentCard);
router.get('/paymentcards/:id', PaymentMethodController.getPaymentCardById);
router.delete('/paymentcards/:id', PaymentMethodController.deletePaymentCard);
router.get('/paymentcards/user/:userId', PaymentMethodController.getAllPaymentCardsByUserId);

module.exports = router;
