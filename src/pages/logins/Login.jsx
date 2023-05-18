import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import signin from '../../assets/login.png'

const Login = () => {

    const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);


  }

  return (
    <div className="hero min-h-[32rem] rounded mt-10 bg-base-200">
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
                  className="input input-bordered"
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
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Login"
                  className="btn text-black hover:text-white bg-[#3BD2E3]"
                />
              </div>
            </form>
            <p className="text-center my-3">
              New in Happy Toys?{" "}
              <Link to="/signup" className="text-[#3BD2E3]">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
