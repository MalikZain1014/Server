const express = require("express");
const Trainer = require("../Models/Trainer.js");
// const User = require("../Models/Users.js");
// const multer = require("multer");

// const upload = multer();

exports.createTrainer = async (req, res) => {
  try {
    const trainer = await Trainer.create(req.body);
    res.status(201).json({ success: true, data: trainer });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
// upload.fields([
//   { name: "documents", maxCount: 5 },
//   { name: "videos", maxCount: 5 },
// ])
// try {
//   const newTrainer = new Trainer({
//     name: req.body.name,
//     email: req.body.email,
//     password: req.body.password,
//     age: req.body.age,
//     experience: req.body.experience,

//     // documents: req.files.documents.map(file => ({
//     // filename: file.filename,
//     // fileId: file.id,
//     // })),
//     // videos: req.files.videos.map(file => ({
//     //   filename: file.filename,
//     //   fileId: file.id,
//     // })),
//   });

//   if (!newTrainer.title || !newTrainer.content || !newTrainer.author) {
//     return res
//       .status(400)
//       .json({ message: "Title, content, and author are required." });
//   }

//   const savedTrainer = await newTrainer.save();

//   const userId = req.body.trainer;
//   const user = await User.findById(userId);

//   if (!user) {
//     return res.status(404).json({ message: "User not found." });
//   }

//   user.courses.push(savedCourse._id);
//   await user.save();

//   res.status(201).json(savedTrainer);
// } catch (error) {
//   console.error(error);
//   res.status(500).json({ message: "Failed to create Profile" });
// }
