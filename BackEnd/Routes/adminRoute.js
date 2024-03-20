const express = require("express");
const router = express.Router();
const AdminController = require("../Controllers/AdminController");

// API to register a new admin
router.post("/admin", AdminController.createAdmin);

// API to login a admin
router.post("/loginadmin", AdminController.loginAdmin);

module.exports = router;
