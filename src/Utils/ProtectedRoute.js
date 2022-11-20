import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

export default function ProtectedRoute() {
  const userContext = useContext(AuthContext);

  if (localStorage.user) {
    userContext.user = localStorage.user;
  }

  return userContext.user ? <Outlet /> : <Navigate to="sign-in" />;
}
