const express = require('express');
const EmailVerificationController = require('../controllers/emailVerificationController');

const router = express.Router();

// Route to send verification email
router.post('/send-verification-email', EmailVerificationController.sendVerificationEmail);

// Route to verify email
router.post('/verify-email', EmailVerificationController.verifyEmail);

module.exports = router;
