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
    <div className="bg-white rounded-lg shadow-lg p-8 md:flex items-center">
      <div className="md:w-1/2">
        <img src={photoUrl} alt={toyName} className="w-full h-auto" />
      </div>
      <div className="md:w-1/2 md:pl-8">
        <h2 className="text-4xl md:text-5xl text-[#80BD9E] font-bold mb-4">{toyName}</h2>
        <p className="text-lg  mb-2">
          <span className="font-semibold text-[#80BD9E]">Seller:</span> {sellerName}
        </p>
        <p className="text-lg  mb-2">
          <span className="font-semibold text-[#80BD9E]">Email:</span> {sellerEmail}
        </p>
        <p className="text-lg  mb-2">
          <span className="font-semibold text-[#80BD9E]">Price:</span> $ {price}
        </p>
        <p className="text-lg  mb-2">
          <span className="font-semibold text-[#80BD9E]">Rating:</span> {rating}
        </p>
        <p className="text-lg mb-2">
          <span className="font-semibold text-[#80BD9E] ">Available Quantity:</span> {availableQuantity}
        </p>
        <div className="mt-4">
          <h3 className="text-xl font-semibold text-[#80BD9E] mb-2">Description</h3>
          <p className="text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
