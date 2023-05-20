import React, { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import MyToy from "./MyToy";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [sortType, setSortType] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/mytoys?email=${user.email}`, {})
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyToys(data);
      });
  }, [user]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/mytoys/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Order has been deleted.", "success");
              const remaing = myToys.filter((toy) => toy._id !== _id);
              setMyToys(remaing);
            }
          });
      }
    });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/mytoys/${sortType}?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [sortType]);


  return (
    <div>

      <div className="w-36 mx-auto mt-7">
      <div className="dropdown">
        <label tabIndex={0} className="btn m-1 bg-[#80BD9E]">
          Sort By Price
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li onClick={() => setSortType('ascending')}>
            <a>Price (Low to High)</a>
          </li>
          <li onClick={() => setSortType('discending')}>
            <a>Price (High to Low)</a>
          </li>
        </ul>
      </div>
      </div>

      <div className="overflow-x-auto w-full mt-1 mb-10 ">
        <table className="table mx-auto w-10/12">
          {myToys.map((myToy) => (
            <MyToy
              key={myToy._id}
              myToy={myToy}
              handleDelete={handleDelete}
            ></MyToy>
          ))}
        </table>
      </div>
    </div>
  );
};

export default MyToys;
