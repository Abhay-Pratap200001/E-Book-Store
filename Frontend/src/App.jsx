import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./component/Signup";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  return (
    // Set up a black background and prevent content overflow
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Defining dynamic routes using React Router */}
      <Routes>
        {/* Route for homepage */}
        <Route path="/" element={<Home />} />

        {/* Route for courses page */}
        <Route
          path="/course"
          element={authUser ? <Courses /> : <Navigate to="/singup"/>}
        />

        {/* Route for signup page */}
        <Route path="/singup" element={<Signup />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
