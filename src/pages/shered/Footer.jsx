import React from "react";
import Swal from "sweetalert2";
import logo from "../../assets/gallary/logo.png";

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    Swal.fire({
      title: "Success Your Submit!",
      text: "Do you want to continue",
      icon: "success",
      confirmButtonText: "OK",
    });
    e.target.reset()
  };
  return (
    <footer className="bg-neutral text-white">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 md:w-auto mb-4">
            <img className="w-24 " src={logo} alt="logo" />
            <h2 className="text-2xl font-bold mb-2">Happy Toys</h2>
            <p className="text-gray-300">
              Explore our wide range of animal toys and find your favorite
              companions!
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 mb-4">
            <h3 className="text-lg font-bold mb-2">Social</h3>
            <ul className="text-gray-300">
              <li className="mt-3"><a target="_blank" href="https://www.facebook.com/" className="link link-hover">Facebook</a></li>
              <li className="mt-3"><a target="_blank" href="https://www.instagram.com/" className="link link-hover">Instagram</a></li>
              <li className="mt-3"><a target="_blank" href="https://github.com/" className="link link-hover">Github</a></li>
              <li className="mt-3"><a target="_blank" href="https://twitter.com/" className="link link-hover">Twitter</a></li>
            </ul>
          </div>

          {/* about us section */}
          <div className="w-full sm:w-1/2 md:w-1/4">
            <div className="max-w-4xl">
              <h2 className="text-3xl md:text-3xl font-bold mb-3">
                Contact Us
              </h2>
              <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[#80BD9E] font-bold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    className="border text-neutral border-[#80BD9E] p-2 w-full rounded-md"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[#80BD9E] font-bold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="border text-neutral border-[#80BD9E] p-2 w-full rounded-md"
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-[#80BD9E] font-bold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    required
                    className="border text-neutral border-[#80BD9E] h-[3rem] p-2 w-full rounded-md"
                    rows="5"
                  ></textarea>
                </div>
                <div className="col-span-2">
                  <input
                    value="Submit"
                    type="submit"
                    className="btn bg-[#80BD9E] hover:bg-slate-50 hover:text-[#80BD9E] text-white"
                  ></input>
                </div>
              </form>
            </div>
          </div>
        </div>
        <hr className="border-[#80BD9E] mt-2 mb-3" />
        <p className="text-gray-300 text-center">
          &copy; 2023 Happy Toys Toys. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
