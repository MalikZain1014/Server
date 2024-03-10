// models/Exercise.js
const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
  gifUrl: { type: String, required: true },
  bodyPart: { type: String, required: true },
  equipment: { type: String, required: true },
  name: { type: String, required: true },
  target: { type: String, required: true },
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
