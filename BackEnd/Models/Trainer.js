const mongoose = require("mongoose");
// const connectDB = require("../config/connectDB");
// const Grid = require("gridfs-stream");
// const {GridFsStorage} = require('multer-gridfs-storage');

// const multer = require("multer");

// // Create a connection to your MongoDB database
// const conn = connectDB();

// // Create a GridFS instance
// let gfs;

// conn.then((db) => {
//   gfs = Grid(db, mongoose.mongo);
//   gfs.collection("courses"); // This is the collection name
// }).catch((error) => {
//   console.error(error);
// });

// // Create a storage engine using multer-gridfs-storage
// const storage = new GridFsStorage({

//   url: process.env.MONGO_URI,
//   options: { useNewUrlParser: true, useUnifiedTopology: true },
//   file: (req, file) => {
//     return {
//       filename: file.originalname,
//     };
//   },
// });
// const upload = multer({ storage });

const TrainerSchema = new mongoose.Schema(
  {
    name: {
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
      type: integer,
      required: true,
    },
    experience: {
      type: float,
      required: true,
    },
    dateJoined: {
      type: Date,
      default: Date.now,
    },
 
  });

const Trainer = mongoose.model("Trainer", TrainerSchema);

module.exports = Trainer;
