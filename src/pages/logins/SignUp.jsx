import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
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
            Swal.fire({
              title: 'Success!',
              text: 'Sign Up Succesfull',
              icon: 'success',
              confirmButtonText: 'Ok'
            })
            form.reset();
            navigate('/')
        })
        .catch(error => {
          // const errorMessage = error.message;
          console.error(error);
          Swal.fire({
            title: 'error!',
            text: `${error}`,
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        })
    })
  };



  return (
    <div className="hero min-h-[32rem] rounded py-10 bg-base-200">
      <div className="hero-content md:gap-8 flex-col lg:flex-row">
        <div className="text-center lg:text-left md:w-1/3">
          <img src={login} alt="login" />
        </div>
        <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100 w-full md:w-1/2">
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
                  className="input input-bordered border-[#80BD9E]"
                  required
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
                  className="input input-bordered border-[#80BD9E]"
                  required
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
                  className="input input-bordered border-[#80BD9E]"
                  required
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
                  className="input input-bordered border-[#80BD9E]"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Sign Up"
                  className="btn text-black hover:text-white bg-[#80BD9E]"
                />
              </div>
            </form>
            <p className="text-center my-3">
              Have an account?{" "}
              <Link to="/login" className="text-[#80BD9E]">
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
