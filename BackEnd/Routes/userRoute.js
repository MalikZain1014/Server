const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserController = require("../Controllers/UserController");

router.post("/register", UserController.createUser);

const User = require("../Models/Users.js");

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        bio: user.bio,
        dateJoined: user.dateJoined,
        course: user.courses,
      },
      authorization: { token: token, type: "barear" },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to login" });
  }
});
router.post("/logout", async (req, res) => {
  try {
    // Clear cookie
    res.clearCookie("loggedIn");
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to logout" });
  }
});
router.get("/user", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch users" });
  }
});

module.exports = router;
