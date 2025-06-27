// Import express to create routes
import express from "express";
import { signup } from "../controller/user.controller.js"; // Import the signup controller function
const router = express.Router();  // Create a new router instance
router.post("/signup", signup);  // Define POST route for user signup

export default router;
