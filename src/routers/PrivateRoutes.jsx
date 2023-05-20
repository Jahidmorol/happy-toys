import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="text-center my-24">
        Loding..<span className="animate-ping">.</span>
      </div>
    );
  }

  if (user?.email) {
    
    return children;
  }
  else{
    useEffect(() => {
      Swal.fire({
        title: 'Warning!',
        text: 'You have to log in first to view details',
        icon: 'warning',
        confirmButtonText: 'OK'
      })
    }, [])
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;
