import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios"

function Signup() {

  // useForm hook to handle form state and validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

   // Called when form is submitted and validation passes
  const onSubmit = async(data) => {
    const userInfo ={  //Create a new user object from form data
      fullname:data.fullname,
      email:data.email,
      password:data.password}
    await axios.post("http://localhost:4001/user/signup",userInfo) // Send the user data to backend using POST request
    .then((res) =>{  // Handle the successful response
      console.log(res.data);
      if (res.data) {   // Show a success alert if the user is created
        alert("Signup Successfully")
      }
      localStorage.setItem("Users", JSON.stringify(res.data.user)) //Store user data in localStorage (optional)
    }).catch((error) =>{ //Handle any errors from the server
       if (error.response) {
    console.log(error);
    alert("Error" + error.response.data.message)
   }
    })
  };

  return (
    <>
     {/* Centering the signup box on full screen */}
      <div className="flex h-screen items-center justify-center">
        <div className="border border-green-400 shadow-2xl p-13 rounded-md">
          <div className="md:w-[500px]">

              {/* Signup Form */}
            <form onSubmit={handleSubmit(onSubmit)}>

               {/* Top-right link to go back home */}
              <Link
                to={"/"}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                GoTo Home ✕
              </Link>

              <h3 className="font-bold text-lg">Signup!</h3>

              {/* Name Field */}
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br/>
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("fullname", { required: true })}/>
                {errors.fullname && (
                  <span className="text-sm text-red-600 pl-2">
                    This field is required
                  </span>
                )}
              </div>

              {/* Email Field */}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("email", { required: true })}/>
                {errors.email && (
                  <span className="text-sm text-red-600 pl-2">
                    This field is required
                  </span>
                )}
              </div>

              {/* Password Field */}
              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("password", { required: true })}/>
                {errors.password && (
                  <span className="text-[13px] text-red-600 pl-2">
                    This field is required
                  </span>
                )}
              </div>

              {/* Buttons section: Signup + Open Login Modal */}
              <div className="flex justify-around mt-4 pr-50">
                <button
                  type="submit"
                  className="bg-gray-400 text-black rounded-md px-3 py-1 hover:bg-white duration-300">
                  Signup
                </button>

               {/* Open Login dialog modal */}
                <p className="text-sm mt-1.5 ">
                  Visit to Page!
                  <button
                    type="button"
                    className="underline text-green-600 cursor-pointer ml-1"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }>
                    Login
                  </button>
                </p>
              </div>
            </form>

            {/* Keep Login modal outside the <form> to avoid nesting issues */}
            <Login />
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
