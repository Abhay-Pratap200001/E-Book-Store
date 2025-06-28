import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";// React Hook Form for validation and form control
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  // Initialize react-hook-form
  const {
  register,
  handleSubmit,
  formState: { errors },
  } = useForm();

  // Function called on form submit
  const onSubmit =async (data) => {
       const userInfo ={ //Create a new user object from form data
          email:data.email,
          password:data.password}
        await axios.post("http://localhost:4001/user/login",userInfo)// Send the user data to backend using POST request
        .then((res) =>{// Handle the successful response
          console.log(res.data);
          if (res.data) {// Show a success alert if the user is created
          toast.success('Loggedin Successfully 😊');          
        }
          localStorage.setItem("Users", JSON.stringify(res.data.user))//Store user data in localStorage (optional)
        }).catch((error) =>{//Handle any errors from the server
           if (error.response) {
        console.log(error);
        toast.error("Error 😒" + error.response.data.message);
       }
      })
     }

  return (
    <div>

      {/* Custom modal using <dialog> tag */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">

          {/* Login form */}
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">

            {/* Close button – navigates to home */}
            <Link
              to={"/"}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>

            <h3 className="font-bold text-lg">Login!</h3>
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />

              {/* Email Input */}
              <input
                type="email"
                placeholder="Enter you email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}/>
              <br/>

              {/* Show error if email is empty */}
              {errors.email && (
                <span className="text-sm text-red-600">
                  This field is required
                </span>
              )}
            </div>

            {/* Password Input */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />

              <input
                type="Password"
                placeholder="Enter Password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: true })}/>
              <br />

              {/* Show error if password is empty */}
                {errors.password && (
                <span className="text-sm text-red-600">
                  This field is required
                </span>
              )}
            </div>

            {/* Submit Button and Signup Link */}
            <div className="flex justify-around mt-4">
              <button className="bg-gray-400 text-black rounded-md px-3 py-1 hover:bg-white duration-300">
                Login
              </button>

              {/* Link to Signup Page */}
              <p>
                Not registered?
                <Link
                  to="/singup"
                  className="underline text-green-600 cursor-pointer">
                  Singup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;

//3.41min