import User from "../models/user.js";
import { generateToken } from "../utils/jwt.js";

export async function registerUser(req, res) {
  try {
    const { firstname, lastname, email, password, role } = req.body;

    // Validate input
    if (!firstname || !lastname || !email || !password) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    // Check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create user
    const user = await User.create({
      firstname,
      lastname,
      email,
      password,
      role: role || 'customer'
    });

    // console.log('User data for token:', user);
    
    const token = generateToken(user);  // Pass the entire user object directly

    res.status(201).json({
      success: true,
      token,
      user: {
        id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Registration error:', error);
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Email already exists' });
    }
    res.status(500).json({ message: 'Server error occurred during registration' });
  }
}

export async function loginUser(req, res) {
  try {
    const { email, password } = req.body;

    // Check for user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // console.log('User data for token login:', user);
    
    const token = generateToken(user);  

    res.json({
      success: true,
      token,
      message: "Log in Successfully Completed"
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export async function getUserProfile(req, res) {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'User not authenticated' });
    }
    
    res.json({
      success: true,
      user: {
        id: req.user._id,
        firstname: req.user.firstname,
        lastname: req.user.lastname,
        email: req.user.email,
        role: req.user.role
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
