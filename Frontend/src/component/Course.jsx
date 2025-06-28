import React from "react";
import Cards from "./Card";  //Card component to display each course
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios"

function Course() {
  const [book, setBook] = useState([])
  useEffect(() =>{
    const getBook = async ()  =>{ // Fetching data brom backend 
      try {
       //resposible for giving data from backend
        const res = await axios.get("http://localhost:4001/book")
        console.log(res.data);
        setBook(res.data)
          } catch (error) {
        console.log("EROOR", Error);
        }
    };
    getBook()
  }, []);
  
  return (
     <>
      {/* Outer container with max width and padding */}
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 bg-black">

         {/* Header section with welcome text and back button */}
        <div className="items-center justify-center text-center">
          <h1 className="pt-30 text-2xl  md:text-4xl">
            We're delighted to have you
            <span className="text-pink-500">Here❤️</span>
          </h1>

             {/* Description paragraph */}
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis rem
            eius aperiam commodi alias, est possimus placeat hic temporibus
            eligendi. Fugit recusandae laudantium dolorem perferendis natus hic
            harum dignissimos earum?
          </p>

            {/*Link Back button for navigate to home page */}
          <Link to="/">
          <button className="mt-6 w-20 bg-gray-400 text-gray-700 px-1 py-2 rounded-md hover:bg-yellow-200 duration-300">
            Back
          </button>
          </Link>
        </div>

                {/* Grid layout to display all courses using Cards component */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
            {book.map((item) =>(
                <Cards key={item.id} item={item}/>
            ))}
        </div>
      </div>
    </>
  );
}

export default Course;
