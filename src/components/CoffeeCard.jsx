// import React from 'react';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  //   console.log(coffee);
  const { _id, name, quantity, taste, category, details, photo } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);
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
        console.log("delete confirmed");
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "Delete",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your coffee has been deleted.", "success");

              const remaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> name : {name} </h2>
          <p> Chef : {category} </p>
          <p> taste : {taste} </p>
          <p> quantity : {quantity} </p>
          <p> details : {details} </p>
          <div className="card-actions ">
            <button className="btn hover:btn-ghost bg-[#3c3b39]">view</button>
            <Link to={`updateCoffee/${_id}`}>
              <button className="btn  hover:btn-ghost bg-[#3c3b39]">
                Edit
              </button>
            </Link>
          </div>
          <button
            onClick={() => handleDelete(_id)}
            className="btn hover:btn-ghost bg-[#3c3b39]"
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
