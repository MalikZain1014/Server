const Admin = require("../Models/Admin.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Controller to create a new admin
exports.createAdmin = async (req, res) => {
  try {
    const { name, email, password, dateJoined } = req.body;

    const hashedPassword = await bcrypt.hash(req.body.password, 10); // Hash the password

    const newAdmin = new Admin({
      name: name,
      email: email,
      password: hashedPassword,
      dateJoined: dateJoined,
    });

    const savedAdmin = await newAdmin.save();

    res.status(201).json(savedAdmin);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Failed to create Admin / Email Already Registered" });
  }
};

// Controller to get all admins
exports.getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to get a single admin by ID
exports.getAdminById = async (req, res) => {
  try {
    const admin = await Admin.findById(req.params.id);
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }
    res.status(200).json(admin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the admin with the provided email exists
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    // Compare the provided password with the hashed password stored in the database
    const passwordMatch = await bcrypt.compare(password, admin.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // If credentials are valid, generate a JWT token
    const token = jwt.sign(
      { adminId: admin._id, email: admin.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" } // Token expires in 1 hour
    );

    res.status(200).json({ admin: admin });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
