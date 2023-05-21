import React, { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import MyToy from "./MyToy";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigation } from "react-router-dom";
import Loading from "../shered/Loading";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [sortType, setSortType] = useState("");

  useEffect(() => {
    fetch(`https://happy-toys-server.vercel.app/mytoys?email=${user.email}`, {})
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyToys(data);
      });
  }, [user]);

  const handleDelete = (_id) => {
    const navigation = useNavigation();
    if (navigation.state === "loading") {
      return <Loading></Loading>;
    }

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
        fetch(`https://happy-toys-server.vercel.app/mytoys/${_id}`, {
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
    fetch(
      `https://happy-toys-server.vercel.app/mytoys/${sortType}?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [sortType]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <div data-aos="flip-down" className="relative md:w-[20%] mx-auto mt-20">
        <div className="h-16 absolute right-4 top-2/3 md:top-1/4 mask mask-hexagon-2 text-[#80BD9E] bg-[#80BD9E]">
          jahid
        </div>
        <div className="h-16 absolute left-4 bottom-1/2 md:bottom-1/4 mask mask-hexagon-2 text-[#80BD9E] bg-[#80BD9E]">
          jahid
        </div>

        <h1 className=" text-3xl font-bold mb-10 text-center">My Toys</h1>
      </div>
      <div className="w-36 mx-auto mt-7">
        <div className="dropdown">
          <label tabIndex={0} className="btn m-1 bg-[#80BD9E]">
            Sort By Price
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={() => setSortType("ascending")}>
              <a>Price (Low to High)</a>
            </li>
            <li onClick={() => setSortType("discending")}>
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
