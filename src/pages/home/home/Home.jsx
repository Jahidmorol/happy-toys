import React, { useEffect } from "react";
import backgroundImage from "../../../assets/Hgreen.png";
import child from "../../../assets/slider-img.png";
import ToysTabs from "../tabs/ToysTabs";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Gallery from "../Gallery";
import Review from "../Review";
import AboutUs from "./AboutUs";
import Loading from "../../shered/Loading";

const Home = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  return (
    <div className=" mx-auto">
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundColor: "white",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "850px",
          width: "100%",
        }}
        className=" min-h-screen mb-5"
      >
        <div className="hero-content flex-col lg:flex-row-reverse gap-5 md:gap-10 md:pt-32">
          <img
            data-aos="fade-left"
            src={child}
            className=" rounded-lg w-[90%] md:w-[45%] animate-pulse"
          />
          <div data-aos="fade-right" className="text-white max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold">
              BEST TOYS FOR <br /> YOUR KID!
            </h1>
            <p className="py-6">
              Explicabo esse amet tempora quibusdam laudantium, laborum eaque
              magnam fugiat hic? Esse dicta aliquid error repudiandae earum
              suscipit fugiat molestias, veniam, vel architecto veritatis
              delectus repellat modi impedit sequi.
            </p>
            <button className="btn bg-[#203247]">Get Started</button>
          </div>
        </div>
      </div>
      {/* another section  */}
      <Review></Review>
      <Gallery></Gallery>
      <div className="text-center container mx-auto">
        <ToysTabs></ToysTabs>
      </div>
      <AboutUs></AboutUs>
      <Loading></Loading>
    </div>
  );
};

export default Home;
