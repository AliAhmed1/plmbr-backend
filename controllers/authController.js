const AuthService = require('../services/authService');

const AuthController = {
    signup: async (req, res) => {
        const { isProvider, ...data } = req.body;
        try {
          const result = await AuthService.signup(data, isProvider);
          res.status(201).json(result);
        } catch (error) {
          res.status(400).json({ error: error.message });
        }
      },
    
      login: async (req, res) => {
        const { email, password, isProvider } = req.body;
        try {
          const result = await AuthService.login(email, password, isProvider);
          res.status(200).json(result);
        } catch (error) {
          res.status(400).json({ error: error.message });
        }
      },
    
      getUserByToken: async (req, res) => {
        const token = req.headers.authorization?.split(' ')[1];
        try {
          if (!token) {
            throw new Error('No token provided');
          }
          const userOrProvider = await AuthService.getUserByToken(token);
          res.status(200).json(userOrProvider);
        } catch (error) {
          res.status(401).json({ error: error.message });
        }
      },
}

module.exports = AuthController;

