import React, { createContext, useState, useContext } from "react";

// Create the AuthContext which will hold the authentication state
export const AuthContext = createContext();

// AuthProvider component that wraps your app and provides auth state
export default function AuthProvider({ children }) {
  // Check if user data already exists in localStorage (i.e., logged in previously)
  const initialAuthUser = localStorage.getItem("Users");

  // Set up state for authUser, initialize from localStorage if available
  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
  );

  // Provide authUser and setAuthUser to all children components via context
  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use auth context in any component
export const useAuth = () => useContext(AuthContext);
