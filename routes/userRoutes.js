const express = require('express');
const UserController = require('../controllers/userController');

const router = express.Router();

router.post('/users', UserController.createUser);
router.get('/users/:userId', UserController.getUserById);
router.get('/users', UserController.getAllUsers); // Route to get all users
router.put('/users/:userId', UserController.updateUser);
router.delete('/users/:userId', UserController.deleteUser);
router.get('/user', UserController.getUser);

module.exports = router;
