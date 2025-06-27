import mongoose from "mongoose";  // Import mongoose to interact with MongoDB

// Define the schema (structure) for a book document in the database
const bookSchema=mongoose.Schema({
    name: String,
    price:Number,
    category: String,
    Image: String,
    title: String
})

// Create a Mongoose model named "Book" using the bookSchema
const Book = mongoose.model("Book", bookSchema);
export default Book;