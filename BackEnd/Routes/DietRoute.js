// routes/dietPlanRoutes.js
const express = require("express");
const router = express.Router();
const dietPlanController = require("../controllers/DietplanController");

// Create a new diet plan
router.post("/dietplans", dietPlanController.createDietPlan);

// Get all diet plans
router.get("/dietplans", dietPlanController.getAllDietPlans);

// Get a single diet plan by ID
router.get("/dietplans/:id", dietPlanController.getDietPlanById);

// Update a diet plan by ID
router.patch("/dietplans/:id", dietPlanController.updateDietPlanById);

// Delete a diet plan by ID
router.delete("/dietplans/:id", dietPlanController.deleteDietPlanById);

module.exports = router;
