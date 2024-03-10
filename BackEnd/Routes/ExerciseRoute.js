// routes/exerciseRoutes.js
const express = require("express");
const router = express.Router();
const exerciseController = require("../Controllers/ExerciseController");

router.post("/exercise", exerciseController.createExercise);
router.get("/exercise/:id", exerciseController.getExerciseById);

router.get("/exercises", exerciseController.getAllExercise);
// Add other routes as needed

module.exports = router;
