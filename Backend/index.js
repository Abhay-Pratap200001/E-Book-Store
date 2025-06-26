import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGODB_URI;
//DATABASE connection
try {
  mongoose.connect(MONGO_URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology:true,
  });
  console.log(`Mongoose is connected to server ${PORT}`);
} catch (error) {
  console.log("Error", error);
}


app.use("/book", bookRoute) 

app.listen(PORT, () => {
  console.log(`example app runiinig on prot${PORT}`);
});

//2.47.38 min 