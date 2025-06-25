import React from "react";
import list from "../component/list.json"; // Importing course data from a JSON file
import Cards from "./Card";  //Card component to display each course
import { Link } from "react-router-dom";


function Course() {
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
          <button className="mt-6 bg-gray-400 text-gray-700 px-4 py-2 rounded-md hover:bg-yellow-200 duration-300">
            Back
          </button>
          </Link>
        </div>

                {/* Grid layout to display all courses using Cards component */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
            {list.map((item) =>(
                <Cards key={item.id} item={item}/>
            ))}
        </div>
      </div>
    </>
  );
}

export default Course;
