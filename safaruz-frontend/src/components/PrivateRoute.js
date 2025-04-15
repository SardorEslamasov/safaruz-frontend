import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  // Not logged in? Redirect to /login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Logged in? Allow access
  return children;
};

export default PrivateRoute;
