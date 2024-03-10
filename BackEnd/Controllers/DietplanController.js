// controllers/dietPlanController.js
const DietPlan = require("../Models/Dietplan");

// Create a new diet plan
exports.createDietPlan = async (req, res) => {
  try {
    const dietPlan = new DietPlan(req.body);
    await dietPlan.save();
    res.status(201).send(dietPlan);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all diet plans
exports.getAllDietPlans = async (req, res) => {
  try {
    const dietPlans = await DietPlan.find();
    res.send(dietPlans);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get a single diet plan by ID
exports.getDietPlanById = async (req, res) => {
  try {
    const dietPlan = await DietPlan.findById(req.params.id);
    if (!dietPlan) {
      return res.status(404).send({ message: "Diet plan not found" });
    }
    res.send(dietPlan);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update a diet plan by ID
exports.updateDietPlanById = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    "name",
    "description",
    "duration",
    "age",
    "weight",
    "height",
  ];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    const dietPlan = await DietPlan.findById(req.params.id);
    if (!dietPlan) {
      return res.status(404).send({ message: "Diet plan not found" });
    }
    updates.forEach((update) => (dietPlan[update] = req.body[update]));
    await dietPlan.save();
    res.send(dietPlan);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete a diet plan by ID
exports.deleteDietPlanById = async (req, res) => {
  try {
    const dietPlan = await DietPlan.findByIdAndDelete(req.params.id);
    if (!dietPlan) {
      return res.status(404).send({ message: "Diet plan not found" });
    }
    res.send({ message: "Diet plan deleted successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
};
