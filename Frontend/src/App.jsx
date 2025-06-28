import React from "react";
import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./component/Signup";
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    // Set up a black background and prevent content overflow
    <div className="min-h-screen bg-black overflow-hidden">

      {/* Defining dynamic routes using React Router */}
      <Routes>

        {/* Route for homepage */}
        <Route path="/" element={<Home />} />

        {/* Route for courses page */}
        <Route path="/course" element={<Courses />} />

        {/* Route for signup page */}
        <Route path="/singup" element={<Signup />} />
        
      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;
