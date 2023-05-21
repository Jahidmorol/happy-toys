import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../pages/shered/Loading";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }

  if (user?.email) {
    return children;
  } else {
    useEffect(() => {
      Swal.fire({
        title: "Warning!",
        text: "You have to log in first to view details",
        icon: "warning",
        confirmButtonText: "OK",
      });
    }, []);
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;
