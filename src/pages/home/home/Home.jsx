import React from "react";
import backgroundImage from "../../../assets/hero-bg.png";
import child from "../../../assets/slider-img.png";

const Home = () => {
  // const backgroundImage = 'url("../../../assets/hero-bg.png")'
  return (
    <div className="">
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          // backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="hero min-h-screen bg-base-200"
      >
        <div className="hero-content flex-col lg:flex-row-reverse gap-5 md:gap-10">
          <img src={child} className=" rounded-lg w-[90%] md:w-[45%] animate-pulse" />
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
            <button className="btn  bg-[#203247]">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
