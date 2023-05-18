import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const AddAToys = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const toyName = form.toyName.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = user?.email;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
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
                className="input input-bordered border-[#3DC2CA]"
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
                className="input input-bordered border-[#3DC2CA]"
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
                className="input input-bordered border-[#3DC2CA]"
                required
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Sub-Category</span>
              </label>
              <input
                type="text"
                placeholder="Sub-Category"
                name="subCategory"
                className="input input-bordered border-[#3DC2CA]"
                required
              />
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
                className="input input-bordered border-[#3DC2CA]"
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
                className="input input-bordered border-[#3DC2CA]"
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
                className="input input-bordered border-[#3DC2CA]"
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
                className="input input-bordered border-[#3DC2CA]"
              />
            </div>
          </div>

          <textarea
            placeholder="Description"
            name="description"
            className="textarea border-[#3DC2CA] textarea-md w-full mt-6 h-[6rem]"
          ></textarea>
          <div className="form-control mt-6">
            <input type="submit" value="Add Toy" className="btn bg-[#3DC2CA]" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAToys;
