import React from "react";
import { Tabs } from "react-tabs";
import backgroundImage from "../../../assets/hero-bg.png";
import child from "../../../assets/slider-img.png";
import Toys from "../../allToys/Toys";
import ToysTabs from "../tabs/ToysTabs";

const Home = () => {
  return (
    <div className=" mx-auto">
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "850px",
          width: "100%",
        }}
        className=" min-h-screen bg-base-200 mb-5"
      >
        <div className="hero-content flex-col lg:flex-row-reverse gap-5 md:gap-10 md:pt-32">
          <img
            src={child}
            className=" rounded-lg w-[90%] md:w-[45%] animate-pulse"
          />
          <div className="text-white max-w-lg">
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
      <div className="text-center container mx-auto">
        <ToysTabs></ToysTabs>
      </div>
    </div>
  );
};

export default Home;
