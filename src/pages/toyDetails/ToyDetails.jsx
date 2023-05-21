import React from "react";
import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const toy = useLoaderData();
  const {
    toyName,
    sellerName,
    sellerEmail,
    subCategory,
    price,
    rating,
    availableQuantity,
    photoUrl,
    description,
  } = toy;
  return (
    <div className=" w-[95%] md:w-[85%] mx-auto py-10 md:py-20 md:flex items-center">
      <div className="md:w-1/2">
        <div className="mx-auto mb-4 md:mb-0 md:h-[24rem] md:w-[29rem] border rounded-xl border-[#80BD9E]">
        <img src={photoUrl} alt={toyName} className="w-[95%] bg-slate-100 mx-auto max-h-[95%] mt-2" /> 
        </div>
      </div>
      <div className=" md:w-1/2 ">
        <h2 className="text-4xl md:text-5xl text-[#80BD9E] font-bold mb-5">{toyName}</h2>
        <p className="text-gray-500  mb-2">
          <span className="font-semibold text-[#80BD9E]">Seller:</span> {sellerName}
        </p>
        <p className="text-gray-500  mb-2">
          <span className="font-semibold text-[#80BD9E]">Email:</span> {sellerEmail}
        </p>
        <p className="text-gray-500  mb-2">
          <span className="font-semibold text-[#80BD9E]">Price:</span> $ {price}
        </p>
        <p className="text-gray-500  mb-2">
          <span className="font-semibold text-[#80BD9E]">Rating:</span> {rating}
        </p>
        <p className="text-gray-500 mb-2">
          <span className="font-semibold text-[#80BD9E] ">Available Quantity:</span> {availableQuantity} pcs
        </p>
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-[#80BD9E] mb-2">Description</h3>
          <p className="text text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
