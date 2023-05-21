import React, { useEffect } from "react";
import about from "../../../assets/gallary/about-img.jpg";
import "aos/dist/aos.css";
import AOS from 'aos'

const AboutUs = () => {
    
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-white pt-10 mb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          {/* <h2 className="text-3xl leading-8 font-bold tracking-tight text-gray-900 md:text-4xl">
            About Us
          </h2> */}
          <div data-aos="flip-down" className="relative w-[75%] md:w-[25%] mx-auto mt-10">
            <div className="h-16 absolute right-4 top-2/3 md:top-1/4 mask mask-hexagon-2 text-[#80BD9E] bg-[#80BD9E]">
              jahid
            </div>
            <div className="h-16 absolute left-4 bottom-1/2 md:bottom-1/4 mask mask-hexagon-2 text-[#80BD9E] bg-[#80BD9E]">
              jahid
            </div>

            <h1 className=" text-3xl font-bold mb-10 text-center">About Us</h1>
          </div>
          <p className="mt-2 max-w-2xl text-xl text-gray-500 mx-auto">
            Welcome to our animal toy store! We are passionate about bringing
            joy to children and animal lovers with our wide range of
            high-quality and adorable animal toys.
          </p>
        </div>
        <div className="mt-10">
          <div className=" bg-slate-100 rounded-lg shadow-md p-8 md:flex md:items-center">
            <img
              className="w-32 h-32 rounded-full mx-auto md:mx-0 md:mr-8"
              src={about}
              alt="About Us"
            />
            <div className="mt-4 md:mt-0">
              <h3 className="text-xl leading-6 font-bold text-neutral">
                Our Story
              </h3>
              <p className="mt-2 text-base text-neutral">
                We started our journey in 2010 with a mission to create a world
                where children can explore and learn about animals through play.
                Since then, we have been dedicated to curating the best animal
                toys from around the world, ensuring that each toy meets our
                high standards of safety, durability, and cuteness!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
