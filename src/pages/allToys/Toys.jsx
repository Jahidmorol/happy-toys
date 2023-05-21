import React, { useEffect } from "react";
import { useState } from "react";
import Toy from "./Toy";
import AOS from "aos";
import "aos/dist/aos.css";

const Toys = () => {
  const [toys, setToys] = useState([]);
  const [seacrhToy, setSearchToy] = useState("");
  console.log(seacrhToy);

  useEffect(() => {
    fetch("https://happy-toys-server.vercel.app/alltoys")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setToys(data);
      });
  }, []);

  const handleSerchBtn = () => {
    fetch(`https://happy-toys-server.vercel.app/searchbyname/${seacrhToy}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="">
      <div className="my-container">
        {/* <div className="text-center">
          <h2 className="font-bold text-4xl mb-5">New Arrivals</h2>
        </div> */}
        <div
          data-aos="flip-down"
          className="relative w-[80%] md:w-[20%] mx-auto "
        >
          <div className="h-16 absolute right-4 top-2/3 md:top-1/4 mask mask-hexagon-2 text-[#80BD9E] bg-[#80BD9E]">
            jahid
          </div>
          <div className="h-16 absolute left-4 bottom-1/2 md:bottom-1/4 mask mask-hexagon-2 text-[#80BD9E] bg-[#80BD9E]">
            jahid
          </div>

          <h1 className=" text-3xl font-bold mb-10 text-center">All Toys</h1>
        </div>
        <div className="w-[77%] md:w-[22%] my-5 mx-auto">
          <div className="input-group ">
            <input
              type="text"
              onChange={(e) => setSearchToy(e.target.value)}
              placeholder="Search…"
              className="input input-bordered"
            />
            <button onClick={handleSerchBtn} className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#80BD9E]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* table section  */}
        <table className="overflow-x-hidden min-w-full bg-white border border-[#80BD9E]">
          <thead>
            <tr>
              <th className="px-4  py-3 border-[#80BD9E] border text-[#80BD9E]">Num</th>
              <th className="px-4  py-3 border-[#80BD9E] border-b">Seller</th>
              <th className="px-4  py-3 border-[#80BD9E] border-b">Toy Name</th>
              <th className="px-4  py-3 border-[#80BD9E] border-b">Sub-category</th>
              <th className="px-4  py-3 border-[#80BD9E] border-b">Price</th>
              <th className="px-4  py-3 border-[#80BD9E] border-b">Available Quantity</th>
              <th className="px-4  py-3 border-[#80BD9E] border text-[#80BD9E]">Details</th>
            </tr>
          </thead>
          <tbody>
          {toys.map((toy, index) => (
            <Toy key={toy._id} toy={toy} index={index}></Toy>
          ))}
        </tbody>
        </table>
      </div>
    </div>
  );
};

export default Toys;
