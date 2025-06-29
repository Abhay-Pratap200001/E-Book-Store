import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"; // For form validation and management
import axios from "axios"; // For making HTTP requests
import toast from "react-hot-toast"; // For showing toast notifications

function Login() {
  // Destructure register, handleSubmit, and errors from useForm
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Function called when the form is submitted
  const onSubmit = async (data) => {
      const userInfo = {
      email: data.email,
      password: data.password,
    };

    // Send POST request to login route
       await axios
      .post("https://e-book-store-mern-gor8.onrender.com/user/login", userInfo)
      .then((res) => {
      console.log(res.data);

        if (res.data) {
          // Show success message
          toast.success("Loggedin Successfully");

          // Close the modal
          document.getElementById("my_modal_3").close();

          // Store user in localStorage and reload the page after a short delay
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 1000);
        }
      })

      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
          setTimeout(() => {}, 2000);
        }
      });
  };

  
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">

           {/* Form submission handler */}
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">

            {/* Close (X) button at the top-right */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>
            <h3 className="font-bold text-lg">Login</h3>

            {/* Email */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            {/* password */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: true })}/>
              <br />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            {/* Button */}
            <div className="flex justify-around mt-6">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer">
                Signup
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;