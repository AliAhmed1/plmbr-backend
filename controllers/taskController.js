const TaskService = require('../services/taskService');

const taskController = {
  // Get all tasks by service ID
  async getAllTasksByServiceId(req, res) {
    try {
      const { serviceId } = req.params;
      const tasks = await TaskService.getAllTasksByServiceId(serviceId);
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Get a task by its ID
  async getByTaskId(req, res) {
    try {
      const { taskId } = req.params;
      const task = await TaskService.getByTaskId(taskId);
      if (!task) {
        return res.status(404).json({ message: 'Task not found' });
      }
      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Update a task by its ID
  async updateByTaskId(req, res) {
    try {
      const { taskId } = req.params;
      const { taskName, taskTime } = req.body;
      const updatedTask = await TaskService.updateByTaskId(taskId, { taskName, taskTime });
      if (!updatedTask) {
        return res.status(404).json({ message: 'Task not found or not updated' });
      }
      res.status(200).json(updatedTask);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = taskController;
