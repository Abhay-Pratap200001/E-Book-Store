import React from 'react'
import { useAuth } from '../context/AuthProvider' // Custom hook to access auth context
import toast from 'react-hot-toast' // For showing notifications

function Logout() {
  // Destructure authUser and setAuthUser from custom AuthProvider
  const [authUser, setAuthUser] = useAuth()

  // Logout handler function
  const handleLogout = () => {
    try {
      // Clear user from context (reset state)
      setAuthUser({
        ...authUser, // Keep other properties if any
        user: null,  // Remove user info
      })

      // Remove user info from localStorage
      localStorage.removeItem("Users")

      // Show a success message
      toast.success("Logout successfully");

      // Reload the page after 3 seconds
      setTimeout(() => {
        window.location.reload();
      }, 3000)

    } catch (error) {
      // Handle any unexpected errors
      toast.error("Error :" + error)
      setTimeout(() => {}, 3000)
    }
  }

  return (
    <div>
      {/* Logout Button */}
      <button
        className='px-3 py-2 bg-red-700 text-white rounded-md cursor-pointer'
        onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}

export default Logout
