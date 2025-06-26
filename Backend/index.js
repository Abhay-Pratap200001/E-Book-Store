import express from "express";
import dotenv from "dotenv";


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

app.listen(PORT, () => {
  console.log(`example app runiinig on prot${PORT}`);
});

//2.47.38 min 