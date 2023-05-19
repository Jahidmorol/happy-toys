import React, { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import MyToy from "./MyToy";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

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
              const remaing = myToys.filter(
                (toy) => toy._id !== _id
              );
              setMyToys(remaing);
            }
          });
      }
    });
  };


  return (
    <div className="overflow-x-auto w-full my-10 ">
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
  );
};

export default MyToys;
