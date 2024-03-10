const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 20,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 20,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  age: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  targetweight: {
    type: Number,
    required: true,
  },
  dateJoined: {
    type: Date,
    default: Date.now,
  },
  trainer: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Trainer",
    },
  ],
});

module.exports = mongoose.model("Users", userSchema);
