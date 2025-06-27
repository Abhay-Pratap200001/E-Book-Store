// Import the Book model to interact with the books collection in MongoDB
import Book from "../model/book.model.js";

// Controller function to handle GET request and fetch all books data
export const getBook = async (req, res) => {
  try {
    // Fetch all book documents from the database using Mongoose
    const book = await Book.find();
    res.status(200).json(book);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json(error);
  }
};
