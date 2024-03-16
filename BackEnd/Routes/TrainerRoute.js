const express = require("express");
const router = express.Router();
const TrainerController = require("../Controllers/TrainerController");

router.post("/trainer", TrainerController.createTrainer);

module.exports = router;
