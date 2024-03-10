const express = require("express");
const router = express.Router();
const taskUserController = require("../Controllers/TaskUserController");

router.post("/taskuser", taskUserController.createTaskUser);
