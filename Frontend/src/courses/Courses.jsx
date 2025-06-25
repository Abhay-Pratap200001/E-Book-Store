import React from "react";

// Importing reusable components
import Navbar from "../component/Navbar";
import Course from "../component/Course";
import Footer from "../component/Footer";

// Main functional component for the Courses page
function Courses() {
  return (
    <>
      {/* Top navigation bar */}
      <Navbar />

      {/* Main content area - ensures full height on screen */}
      <div className="min-h-screen">
        <Course /> {/* Displays all the course cards */}
      </div>

      {/* Footer at the bottom */}
      <Footer />
    </>
  );
}

export default Courses;
