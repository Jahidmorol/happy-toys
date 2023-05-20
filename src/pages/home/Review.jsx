import React from "react";
import { FaAward, FaHandSparkles, FaShippingFast } from "react-icons/fa";

const Review = () => {
  return (
    <div className="w-[85%] mx-auto my-10 md:my-20 md:flex space-y-5 md:space-y-0 items-center justify-between">
      <div className=" md:w-80 h-[300px] p-5 text-center rounded-md bg-neutral">
        <div className="w-20 h-16 rounded-full bg-white mx-auto mb-2">
          <FaShippingFast className="text-neutral mx-auto  pt-3 text-5xl" />
        </div>
        <h4 className="text-white text-xl my-3 font-bold">FAST DELIVERY</h4>
        <p className="text-white font-semibold">
          Experience fast delivery of your animal toys! From order processing to
          shipping, we prioritize efficiency to ensure your toys reach you
          promptly. Get ready for joy-filled moments with our speedy delivery
          service.
        </p>
      </div>
      <div className=" md:w-80 h-[300px] p-5 text-center rounded-md bg-neutral">
        <div className="w-20 h-16 rounded-full bg-white mx-auto mb-2">
          <FaAward className="text-neutral mx-auto pt-3  text-5xl" />
        </div>
        <h4 className="text-white text-xl my-3 font-bold">BEST QUALITY</h4>
        <p className="text-white font-semibold">
          Discover the best quality animal toys. Safe, durable, and designed to
          spark imagination, our toys are crafted with care. Choose the best for
          your child and embark on a world of joy and adventure with our
          exceptional toys
        </p>
      </div>
      <div className=" md:w-80 h-[300px] p-5 text-center rounded-md bg-neutral">
        <div className="w-20 h-16 rounded-full bg-white mx-auto mb-2">
          <FaHandSparkles className="text-neutral mx-auto pt-3  text-5xl" />
        </div>
        <h4 className="text-white text-xl my-3 font-bold">FREE SHIPING</h4>
        <p className="text-white font-semibold">
          Free shipping on all orders! Explore our adorable animal toy
          collection and bring joy home without any extra charges. Shop now and
          experience convenient and affordable shopping at its best
        </p>
      </div>
    </div>
  );
};

export default Review;
