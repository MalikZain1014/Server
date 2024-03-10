// models/DeitPlan.js
const mongoose = require("mongoose");

const dietplanSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 20,
  },
  description: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    required: true,
  },
});

const Dietplan = mongoose.model("Dietplan", dietplanSchema);

module.exports = Dietplan;
