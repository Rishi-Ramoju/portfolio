import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  return localStorage.getItem("user-phone-number") ? (
    <Outlet>{children}</Outlet>
  ) : (
    <Navigate to={"/login"} />
  );
};

export default ProtectedRoute;
