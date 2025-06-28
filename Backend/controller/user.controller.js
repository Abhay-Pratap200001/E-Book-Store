// Importing the User model to interact with the users collection
import User from "../model/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  // Controller function to handle user signup
  try {
    const { fullname, email, password } = req.body; // Extract user input from the request body
    const user = await User.findOne({ email }); // Check if the user already exists in the database by email
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    } else {
      const hashPassword = await bcrypt.hash(password, 7);
      const createdUser = new User({
        // Create a new User with the provided data
        fullname: fullname,
        email: email,
        password: hashPassword,
      });

      await createdUser.save(); // Save the new user to the database
      res.status(201).json({
        message: "User created successfully",
        user: {
          id: createdUser._id,
          fullname: createdUser.fullname,
          email: createdUser.email,
        },
      });
    }
  } catch (error) {
    console.log("Error" + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};



export const login = async (req, res) => {
  try {
    const { email, password } = req.body; // Extract email and password from the request body
    const user = await User.findOne({ email }); // Find the user by email in the database
    const isMatch = await bcrypt.compare(password, user.password); // Compare the entered password with the stored hashed password
    if (!user || !isMatch) {
      return res.status(400).json({ message: "Invalid username or password" });
    } else {
      res.status(200).json({
        message: "Login successful",
        user: {
         _id: user._id,
          fullname: user.fullname,
          email: user.email,
        },
      });
    }
  } catch (error) {
    console.log("Error" + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
