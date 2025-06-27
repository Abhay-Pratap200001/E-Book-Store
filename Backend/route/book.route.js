import express from "express";

// Import the controller function that handles GET requests for books
import { getBook } from "../controller/book.controller.js";

// Create a new router instance from Express
const router = express.Router();

// Define a GET route for the path '/' which will call getBook to fetch all books
router.get("/", getBook);
export default router;
