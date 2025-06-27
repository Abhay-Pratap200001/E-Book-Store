import mongoose from "mongoose";

// Define the user schema with the fields required for registration
const userSchema = mongoose.Schema({
  // Full name of the user (required field)
  fullname: {
    type: String,
    required: true,
  },

  // User's email address (must be unique and required)
  email: {
    type: String,
    required: true,
    unique: true, // Ensures no two users can register with the same email
  },

  // Password for login authentication (required field)
  password: {
    type: String,
    required: true,
  },
});

// Create a User model from the schema
// 'User' is the collection name that will be used in MongoDB
const User = mongoose.model("User", userSchema);

// Export the User model so it can be used in other parts of the application (e.g., controller or route)
export default User;
