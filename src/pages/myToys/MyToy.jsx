import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link, useNavigation } from "react-router-dom";
import Loading from "../shered/Loading";

const MyToy = ({ myToy , handleDelete }) => {

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
    _id
  } = myToy;
  return (
    <tbody>
      <tr>
        <th className="text-left">
          <button onClick={() => handleDelete(_id)} className="btn btn-circle">
            <FaTimes className="text-xl"></FaTimes>
          </button>
        </th>
        <td className=" ">
          <div className="flex items-center space-x-5">
            <div className="avatar">
              <div className="rounded-md h-40 w-40">
                <img src={photoUrl} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold">{toyName}</h2>
              <div className="text-sm mt-5">Price: ${price}</div>
            </div>
          </div>
        </td>
        <td className="">Ratins: {rating}</td>
        <td></td>
        <td></td>
        <td>Available Quantity: {availableQuantity}</td>
        <th className="p-0 text-left">
          <Link to={`/update/${_id}`}><button className="btn btn-xs">Update</button></Link>
        </th>
      </tr>
    </tbody>
  );
};

export default MyToy;
