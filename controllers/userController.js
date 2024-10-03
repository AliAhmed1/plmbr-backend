const UserService = require('../services/userService');

const UserController = {
  getUser: async (req, res) => {
    try {
      const { id, email } = req.query;
      let user;
      if (id) {
        user = await UserService.getUserById(id); // Get user by ID
      } else if (email) {
        user = await UserService.getUserByEmail(email); // Get user by email
      } else {
        return res.status(400).json({ message: 'Please provide an id or email.' });
      }
      if (!user) {
        return res.status(404).json({ message: 'User not found.' });
      }
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  createUser: async (req, res) => {
    try {
      const user = await UserService.createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getUserById: async (req, res) => {
    try {
      const user = await UserService.getUserById(req.params.userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAllUsers: async (req, res) => {
    try {
      const users = await UserService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateUser: async (req, res) => {
    try {
      const user = await UserService.updateUser(req.params.userId, req.body);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const user = await UserService.deleteUser(req.params.userId);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = UserController;
