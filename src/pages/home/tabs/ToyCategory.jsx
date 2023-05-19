import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ToyCategory = ({toy}) => {
    const {toyName,
        sellerName,
        sellerEmail,
        subCategory,
        price,
        rating,
        availableQuantity,
        photoUrl,
        description,
        _id,} = toy
  return (
    <div className="card md:w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10 h-60">
        <img src={photoUrl} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{toyName}</h2>
        <div className="flex items-center justify-between">
          <p className="text-[#3DC2CA]">Price: {price}</p>
          <p className="">Ratings: {rating}</p>
          <div className="card-actions">
            <Link to={`/toydetails/${_id}`}>
              <button className=" btn btn-circle bg-[#3DC2CA]">
                <FaLongArrowAltRight className="text-2xl"></FaLongArrowAltRight>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyCategory;
