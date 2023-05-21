import React from "react";
import { Link, useNavigation } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import Loading from "../shered/Loading";

const Toy = ({ toy,index }) => {

  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loading></Loading>;
  } 

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
    _id,
  } = toy;
  return (
    <tr className="text-center">
      <th className="px-4 py-3 border-[#80BD9E] text-[#80BD9E] border">{index + 1}</th>
      <td className="px-4 py-3 border-[#80BD9E] border-b">{sellerName}</td>
      <td className="px-4 py-3 border-[#80BD9E] border-b">{toyName}</td>
      <td className="px-4 py-3 border-[#80BD9E] border-b">{subCategory}</td>
      <td className="px-4 py-3 border-[#80BD9E] border-b">{price}</td>
      <td className="px-4 py-3 border-[#80BD9E] border-b">{availableQuantity}</td>
      <td className="px-4 py-3 border-[#80BD9E] border">
        <Link to={`/toydetails/${_id}`} state={toyName}>
          <button className=" rounded py-1 px-5 text-white bg-[#80BD9E]">
            <FaLongArrowAltRight className="text-xl"></FaLongArrowAltRight>
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default Toy;
