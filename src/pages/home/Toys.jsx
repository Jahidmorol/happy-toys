import React, { useEffect } from "react";
import { useState } from "react";
import Toy from "./Toy";

const Toys = () => {
    const [toys, setToys] = useState([])

    useEffect(() => {
        fetch('/toys.json')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setToys(data)
        })
    },[])

  return (
    <div className="bg-[#3DC2CA]">
        <div className="my-container">
      <div className="text-center">
        <h2 className="font-bold text-4xl mb-5">New Arrivals</h2>
      </div>
      <div className="grid gap-5 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
        {
            toys.map(toy => <Toy key={toy.price} toy={toy}></Toy>)
        }
      </div>
      <div className="w-[10rem] mx-auto my-5 md:my-10">
        <button className="btn btn-outline hover:bg-[#FF3811] border-[#FF3811]">
          More Services
        </button>
      </div>
    </div>
    </div>
  );
};

export default Toys;
