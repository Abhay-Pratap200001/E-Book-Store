import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";  // Book route handlers
import cors from "cors" // CORS middleware to allow frontend-backend communication

const app = express();
app.use(cors())   // Load environment variables from .env file
dotenv.config();

// Define server port and MongoDB URI from environment variables
const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGODB_URI;

// Connect to MongoDB database
try {
  mongoose.connect(MONGO_URI, {
  });
  console.log(`Mongoose is connected to server ${PORT}`);
} catch (error) {
  console.log("Error", error);
}


app.use("/book", bookRoute) 

app.listen(PORT, () => {
  console.log(`example app runiinig on prot${PORT}`);
});

