
const mongoose = require('mongoose');

const taskUserSchema = new mongoose.Schema({
  task_id: { type: Number, required: true },
  user_id: { type: Number, required: true },
  assigned_date: { type: Number, required: true },
});

const TaskUser = mongoose.model('TaskUser', taskUserSchema);

module.exports = TaskUser;
