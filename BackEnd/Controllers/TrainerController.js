const express = require("express");
const Course = require("../Models/Trainer.js");
const User = require("../Models/Users.js");
const multer = require("multer");

const upload = multer();

exports.createTrainer = async (req, res) => {
// upload.fields([
//   { name: "documents", maxCount: 5 },
//   { name: "videos", maxCount: 5 },    
// ])

  try {

    const newCourse = new Trainer({
      name: req.body.name,
      description: req.body.content,
      duration: req.body.duration,
      age: req.body.age,
      weight: req.body.weight,
      level: req.body.level,
      // documents: req.files.documents.map(file => ({
      // filename: file.filename,
      // fileId: file.id,
      // })),
      // videos: req.files.videos.map(file => ({
      //   filename: file.filename,
      //   fileId: file.id,
      // })),
    });

    if (!newCourse.title || !newCourse.content || !newCourse.author) {
      return res.status(400).json({ message: "Title, content, and author are required." });
    }

    const savedTrainer = await newTrainer.save();

    const userId = req.body.trainer;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    user.courses.push(savedCourse._id);
    await user.save();

    res.status(201).json(savedTrainer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create Profile" });
  }
};
