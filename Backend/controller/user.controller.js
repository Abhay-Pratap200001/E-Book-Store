// Importing the User model to interact with the users collection
import User from "../model/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {   // Controller function to handle user signup
  try {
    const { fullname, email, password } = req.body; // Extract user input from the request body
    const user = await User.findOne({ email }); // Check if the user already exists in the database by email
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashPassword = await bcrypt.hash(password, 7);
    const createdUser = new User({
      // Create a new User with the provided data
      fullname: fullname,
      email: email,
      password: hashPassword,
    });

    await createdUser.save(); // Save the new user to the database
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    // Handle any server or database errors
    console.log("Error" + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

