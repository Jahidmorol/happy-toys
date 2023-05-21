import React, { useEffect } from "react";
import { FaLongArrowAltRight, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link, useNavigation } from "react-router-dom";
import Loading from "../../shered/Loading";
import AOS from 'aos';
import 'aos/dist/aos.css'

const ToyCategory = ({ toy }) => {

  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loading></Loading>;
  } 

  const {
    toyName,
    price,
    rating,
    photoUrl,
    _id,
  } = toy;

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  
  return (
    <div data-aos="fade-up" className="w-[19rem] mx-auto border rounded-md shadow-xl">
      <div className=" h-[12rem] w-[12rem] mx-auto pt-5 ">
        <img src={photoUrl} alt="Shoes" className="rounded-xl mx-auto h-[12rem] w-[12rem]" />
      </div>
      <div className="card-body">
        <h2 className="card-title">{toyName}</h2>
        <div className="flex items-center justify-between text-left">
          <p className="text-[#80BD9E]">Price: {price}</p>
          <div className="me-5">
            <p className="">Ratings: {rating}</p>
            <Rating
              placeholderRating={rating}
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar className="text-yellow-400"></FaStar>}
              fullSymbol={<FaStar></FaStar>}
              readonly
            />
          </div>
          <div className="card-actions">
            <Link to={`/toydetails/${_id}`} state={toyName}>
              <button className=" btn btn-circle bg-[#80BD9E]">
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
