import User from "../models/User.js";
import Serviceman from "../models/servicemen.js";
import bcrypt from "bcryptjs";
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

// Signup Controller
export const userSignup = async (req, res) => {
  try {
    let email = req.body.email;
    let name = req.body.name;
    let reqPassword = req.body.password;
    let address = req.body.address;
    const hashedPassword = await bcrypt.hash(reqPassword, 10);
    const ISuser = await User.findOne({ email });
    if (ISuser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const user = new User({
      email: email,
      name: name,
      password: hashedPassword,
      address: address,
    });

    const newUser = await user.save();

    const {password, ...others} = newUser._doc;
    res.status(201).json(others);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Signin Controller
export const userSignin = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    // If user not found
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare the password with the hashed password in the database
    const isMatch = await bcrypt.compare(req.body.password, user.password);

    // If the password doesn't match
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const {password, ...others} = user._doc;
    res.status(200).json(others);
    }
     catch (err) {
    res.status(500).json({ message: err.message });
  }
};

