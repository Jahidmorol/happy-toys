import React, { useEffect } from "react";
import { useState } from "react";
import Toy from "./Toy";

const Toys = () => {
  const [toys, setToys] = useState([]);
  const [seacrhToy, setSearchToy] = useState('')
  console.log(seacrhToy);

  useEffect(() => {
    fetch("http://localhost:5000/alltoys")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setToys(data);
      });
  }, []);
  
  const handleSerchBtn = () => {
    fetch(`http://localhost:5000/searchbyname/${seacrhToy}`,)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setToys(data)
    })
  }

  return (
    <div className="">
      <div className="my-container">
        <div className="text-center">
          <h2 className="font-bold text-4xl mb-5">New Arrivals</h2>
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
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="grid gap-5 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
          {toys.map((toy) => (
            <Toy key={toy._id} toy={toy}></Toy>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Toys;
