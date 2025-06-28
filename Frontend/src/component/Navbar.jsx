import React, { useEffect } from "react";
import { useState } from "react";
import Login from "./Login";
import { useAuth } from "../context/AuthProvider";
import Logout from "./Logout";

const Navbar = () => {
const [authUser, setAuthUser] = useAuth()  
  //state for navbar
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Menu items used in both mobile and desktop views
  const navItems = (
    <>
      <li className>
        {/* making home linkable to got home route */}
        <a href="/">Home</a>
      </li>
      <li>
        {/* making home linkable to got course route */}
        <a href="/course">Course</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
      <li>
        <a>About</a>
      </li>
    </>
  );

  return (
    <>
      {/* Main container with max width and horizontal padding */}
      <div
        className={`max-w-screen-2xl container mx-auto md:px-20 fixed top-0 left-0 right-0 z-50 p-1 ${
          sticky
            ? "sticky-navbar shadow-md bg-zinc-900 duration-500 transition-all ease-in-out"
            : "bg-black"
        }`}>
        <div className="navbar">
          {/* Left part of navbar */}
          <div className="navbar-start">
            {/* Mobile dropdown menu for small screens */}
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                // {/* Hamburger icon button (visible only on lg:hidden) (= to see the navitems) */}
                className="btn btn-ghost lg:hidden">


                {/* Hamburger icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"/>
                </svg>
              </div>

              <ul
                //{/* Dropdown items (visible on small screens) visible in mobile */}
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                {navItems}
              </ul>
            </div>
            <a className=" text-2xl font-bold cursor-pointer ">B-K-HUB</a>
          </div>
          {/* Right part of navbar */}
          <div className="navbar-end space-x-3">
            {/* Desktop menu items (visible only on lg screens) */}
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{navItems}</ul>
            </div>

            {/* Search icon */}
            {/* Search input (visible on md and larger screens) */}
            <div className="hidden md:block">
              <label className=" px-3 py-2 border rounded-md flex items-center gap-2">
                <input
                  type="text"
                  className="grow outline-none"
                  placeholder="Search"/>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70">
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"/>
                </svg>
              </label>
            </div>

            {
              authUser?<Logout/> : 
              <div className="">
               <a className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-700 duration-300 cursor-pointer"
               onClick={() => document.getElementById("my_modal_3").showModal()}>
                 Login
               </a>
               <Login/>
             </div> 
            }

          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
// clear
