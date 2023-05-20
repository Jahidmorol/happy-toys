import React, { useState } from "react";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const AddAToys = () => {
  const { user } = useContext(AuthContext);
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const toyName = form.toyName.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = user?.email;
    const subCategory = selectedOption;
    const price = parseInt(form.price.value);
    const rating = form.rating.value;
    const availableQuantity = form.availableQuantity.value;
    const photoUrl = form.photoUrl.value;
    const description = form.description.value;
    const newToy = {
      toyName,
      sellerName,
      sellerEmail,
      subCategory,
      price,
      rating,
      availableQuantity,
      photoUrl,
      description,
    };
    console.log(newToy);
    fetch('http://localhost:5000/addatoy', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newToy)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.insertedId){
            Swal.fire({
              title: 'Success!',
              text: 'Do you want to continue',
              icon: 'success',
              confirmButtonText: 'Done'
            })
          }
    })
  };


  return (
    <div className="my-container rounded-lg">
      <h2 className="text-4xl text-center font-bold mb-5">Add A Toy</h2>
      <div className="card-body bg-[#F3F3F3] rounded-lg">
        <form onSubmit={handleSubmit}>
          <div className="md:flex gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Toy Name</span>
              </label>
              <input
                type="text"
                placeholder="Toy Name"
                name="toyName"
                className="input input-bordered border-[#80BD9E]"
                required
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Seller Name</span>
              </label>
              <input
                type="text"
                defaultValue={user.displayName}
                // placeholder="Seller Name"
                name="sellerName"
                className="input input-bordered border-[#80BD9E]"
                required
              />
            </div>
          </div>
          <div className="md:flex gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Seller Email</span>
              </label>
              <input
                type="text"
                defaultValue={user.email}
                // placeholder="Seller Name"
                name="sellerEmail"
                className="input input-bordered border-[#80BD9E]"
                required
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Sub-Category</span>
              </label>
              <select
              value={selectedOption}
              className="py-3 px-2 rounded-md border border-[#80BD9E]"
              onChange={handleOptionChange}
            >
              <option value="">Select Sub Cetegor</option>
              <option value="hors-toy">Horse Toy</option>
              <option value="cow-toy">Cow Toy</option>
              <option value="cat-toy">Cat-Toy</option>
            </select>
            </div>
            
          </div>
          <div className="md:flex gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                placeholder="Price"
                name="price"
                className="input input-bordered border-[#80BD9E]"
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Ratings</span>
              </label>
              <input
                type="text"
                placeholder="Rating"
                name="rating"
                className="input input-bordered border-[#80BD9E]"
              />
            </div>
          </div>
          <div className="md:flex gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Available quantity</span>
              </label>
              <input
                type="text"
                placeholder="Available quantity"
                name="availableQuantity"
                className="input input-bordered border-[#80BD9E]"
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                placeholder="Photo Url"
                name="photoUrl"
                className="input input-bordered border-[#80BD9E]"
              />
            </div>
          </div>

          <textarea
            placeholder="Description"
            name="description"
            className="textarea border-[#80BD9E] textarea-md w-full mt-6 h-[6rem]"
          ></textarea>
          <div className="form-control mt-6">
            <input type="submit" value="Add Toy" className="btn bg-[#80BD9E]" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAToys;
