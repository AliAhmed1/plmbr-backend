const EmailVerificationService = require('../services/emailVerificationService');

const EmailVerificationController = {
  sendVerificationEmail: async (req, res) => {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    try {
      await EmailVerificationService.sendVerificationEmail(email);
      return res.status(200).json({ message: 'Verification email sent successfully' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  verifyEmail: async (req, res) => {
    const { token } = req.body;
    const authToken = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(400).json({ message: 'Token is required' });
    }

    try {
      const result = await EmailVerificationService.verifyEmail(token, authToken);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
};

module.exports = EmailVerificationController;
