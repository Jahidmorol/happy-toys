import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import updateImg from '../../assets/update.png'

const UpdateToy = () => {
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
    _id,
  } = toy;

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const price = form.price.value;
    const availableQuantity = form.quantity.value;
    const description = form.description.value;

    const updateToy = {
      price,
      availableQuantity,
      description,
    };
    console.log(updateToy);

    fetch(`http://localhost:5000/mytoys/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateToy)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.modifiedCount>0){
            Swal.fire({
                title: 'Success!',
                text: 'Do you want to continue',
                icon: 'success',
                confirmButtonText: 'Ok'
              })
        }
    })
  };

  return (
    <div className="my-10 md:my-28 md:flex items-center justify-center gap-5 mx-auto w-[95%] md:w-[75%]">
        <div className="md:1/2">
            <img className="md:h-96" src={updateImg} alt="updateImg" />
        </div>
        <div className="md:w-1/2">
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
          Price
        </label>
        <input
          type="text"
          name="price"
          placeholder="Price"
          className="input input-bordered w-full"
          defaultValue={price}
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="quantity"
          className="block text-gray-700 font-bold mb-2"
        >
          Available Quantity
        </label>
        <input
          type="number"
          name="quantity"
          placeholder="Available Quantity"
          className="input input-bordered w-full"
          defaultValue={availableQuantity}
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-gray-700 font-bold mb-2"
        >
          Detail Description
        </label>
        <textarea
          name="description"
          className="textarea textarea-bordered w-full"
          placeholder="Description"
          defaultValue={description}
          required
        />
      </div>
      <div>
        <input
          type="submit"
          value="Update"
          className="btn bg-[#3DC2CA] btn-block"
        />
      </div>
    </form>
        </div>
    </div>
  );
};

export default UpdateToy;
