const express = require('express');
const taskController = require('../controllers/taskController');

const router = express.Router();

// Route to get all tasks by service ID
router.get('/tasks/service/:serviceId', taskController.getAllTasksByServiceId);

// Route to get a task by its ID
router.get('/tasks/:taskId', taskController.getByTaskId);

// Route to update a task by its ID
router.put('/tasks/:taskId', taskController.updateByTaskId);

module.exports = router;
