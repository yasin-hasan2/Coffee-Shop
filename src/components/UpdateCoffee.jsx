// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const updateCoffe = useLoaderData();
  const { _id, name, quantity, taste, category, details, photo } = updateCoffe;

  //======================
  const handleUpdateCoffee = (e) => {
    e.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updateCoffee = { name, quantity, taste, category, details, photo };
    console.log(updateCoffee);

    //send data to the server
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "success",
            text: "coffee update added success",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  //======================

  return (
    <div>
      <h1>update {name} </h1>
      <div className="pt-10 bg-[#5a5656] p-5 text-center">
        <h1 className="text-5xl font-bold text-[#FFFFFF]"> update coffee </h1>
        <form onSubmit={handleUpdateCoffee}>
          <div className=" gap-3 items-center space-y-3  grid grid-cols-2 p-5 text-[#FFFFFF] text-xl ">
            <div className=" form-control">
              <label className="label">
                <span className="label-text text-white">Your coffee name </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  placeholder="coffee name "
                  className="input w-full input-bordered"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">
                  avalible quantity{" "}
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="quantity"
                  defaultValue={quantity}
                  placeholder="quantity"
                  className="input w-full input-bordered"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Taste </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="taste"
                  defaultValue={taste}
                  placeholder="Taste"
                  className="input w-full input-bordered"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Category </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="category"
                  defaultValue={category}
                  placeholder="Category"
                  className="input w-full input-bordered"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Details </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="details"
                  defaultValue={details}
                  placeholder="Details"
                  className="input w-full input-bordered"
                />
              </label>
            </div>
            <div className="  col-span-2 form-control">
              <label className="label">
                <span className="label-text text-white">Photo </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  defaultValue={photo}
                  placeholder="Photo"
                  className="input w-full input-bordered"
                />
              </label>
            </div>
            <input
              className="btn col-span-2 hover:btn-ghost "
              type="submit"
              value="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
