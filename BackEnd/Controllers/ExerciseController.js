// controllers/exerciseController.js
const Exercise = require("../Models/Exercise.js");

exports.createExercise = async (req, res) => {
  try {
    const exercise = await Exercise.create(req.body);
    res.status(201).json({ success: true, data: exercise });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.getExerciseById = async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.id);
    if (!exercise) {
      return res
        .status(404)
        .json({ success: false, error: "Exercise not found" });
    }
    res.status(200).json({ success: true, data: exercise });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.getAllExercise = async (req, res) => {
  try {
    const exercises = await Exercise.find();
    res.status(200).json({ success: true, data: exercises });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Add other controller functions (update, delete, get all) as needed
