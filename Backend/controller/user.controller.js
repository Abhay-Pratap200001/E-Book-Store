// Importing the User model to interact with the users collection
import User from "../model/user.model.js";

// Controller function to handle user signup
export const signup = async (req, res) => {
  try {
    // Extract user input from the request body
    const { fullname, email, password } = req.body;

    // Check if the user already exists in the database by email
    const user = await User.findOne({ email });

    // If user already exists, send an error response
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create a new User instance with the provided data
    const createdUser = new User({
      fullname,
      email,
      password,
    });

    // Save the new user to the database
    await createdUser.save();

    // Send a success response
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    // Handle any server or database errors
    console.log("Error" + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
