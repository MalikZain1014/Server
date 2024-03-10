// routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const taskController = require('../Controllers/Taskcontroller');

// Create a new task
router.post('/', taskController.createTask);

// Get all tasks
router.get('/', taskController.getTasks);

// Update a task
router.put('/:id', taskController.updateTask);

// Delete a task
router.delete('/:id', taskController.deleteTask);

module.exports = router;
