import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import login from '../../assets/login.png'
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {

    const {createUser, updateUser, setReload} = useContext(AuthContext)
    const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name, email, password, photo);

    createUser(email, password)
    .then(result => {
        const createUser = result.user
        updateUser(createUser, name, photo)
        .then(result => {
            setReload(new Date().getTime());
            form.reset();
            navigate('/')
        })
        .catch(error => console.error(error))
    })
  };



  return (
    <div className="hero min-h-[32rem] rounded mt-10 bg-base-200">
      <div className="hero-content md:gap-8 flex-col lg:flex-row">
        <div className="text-center lg:text-left md:w-1/3">
          <img src={login} alt="login" />
        </div>
        <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100 md:w-1/2">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center">Sign Up!</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo url"
                  className="input input-bordered"
                />
              </div>
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
                  value="Sign Up"
                  className="btn text-black hover:text-white bg-[#3BD2E3]"
                />
              </div>
            </form>
            <p className="text-center my-3">
              Have an account?{" "}
              <Link to="/login" className="text-[#3BD2E3]">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
