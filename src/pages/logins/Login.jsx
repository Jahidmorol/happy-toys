import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import signin from "../../assets/login.png";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { logIn, signInWithGoogle } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    logIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        Swal.fire({
          title: 'Success!',
          text: 'Login Succesfull',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        navigate(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
        Swal.fire({
          title: 'error!',
          text: `${errorMessage}`,
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      });
  };

  const handleLoginWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        Swal.fire({
          title: 'Success!',
          text: 'Login Succesfull',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        navigate(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
        Swal.fire({
          title: 'error!',
          text: `${errorMessage}`,
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      });
  }

  return (
    <div className="hero min-h-[32rem] rounded py-10 bg-base-200">
      <div className="hero-content md:gap-12 flex-col lg:flex-row">
        <div className="text-center lg:text-left md:w-1/3">
          <img src={signin} alt="login" />
        </div>
        <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100 md:w-1/2">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center">Login now!</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered border-[#80BD9E]"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  className="input border-[#80BD9E]"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Login"
                  className="btn text-black hover:text-white bg-[#80BD9E]"
                />
              </div>
            </form>

            <p className="text-center my-3">
              New in Happy Toys?{" "}
              <Link to="/signup" className="text-[#80BD9E]">
                Sign Up
              </Link>
            </p>
          <button onClick={handleLoginWithGoogle} className="btn btn-outline border border-[#80BD9E] hover:bg-[#80BD9E] hover:text-white"><FaGoogle className="text-xl me-2 "/> Login With Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
