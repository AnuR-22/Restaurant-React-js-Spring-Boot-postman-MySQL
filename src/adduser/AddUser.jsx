import React, { useState } from "react";
import "./adduser.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Layout from "./../components/Layout/Layout";

const AddUser = ({ adduser, setAdduser }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Extracting foodname and price from URL query parameters
  const foodname = new URLSearchParams(location.search).get("foodname");
  const price = new URLSearchParams(location.search).get("price");

  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
    foodname: foodname || "",
    price: price ? parseFloat(price) : 0,
    orderstatus: "",
    quantity: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/api/user", user)
      .then((response) => {
        toast.success(response.data.message, { position: "top-right" });
        navigate("/list");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Layout>
      <div className="addUser">
        <Link to={"/list"} type="button" className="btn btn-secondary">
          <i className="fa-solid fa-backward"></i> Back
        </Link>

        <h3>Add New User</h3>
        <form className="addUserForm" onSubmit={submitForm}>
          <div className="inputGroup">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              onChange={inputHandler}
              name="name"
              autoComplete="off"
              placeholder="Enter your Name"
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              onChange={inputHandler}
              name="email"
              autoComplete="off"
              placeholder="Enter your Email"
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              onChange={inputHandler}
              name="address"
              autoComplete="off"
              placeholder="Enter your Address"
            />
          </div>
          {/* Other input fields */}
          <div className="inputGroup">
            <label htmlFor="foodname">Food Name:</label>
            <input
              type="text"
              id="foodname"
              value={user.foodname}
              onChange={inputHandler}
              name="foodname"
              autoComplete="off"
              disabled // Disabled as it's fetched from the URL
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="price">Price:</label>
            <input
              type="text"
              id="price"
              value={user.price * user.quantity}
              onChange={inputHandler}
              name="price"
              autoComplete="off"
               disabled // Disabled as it's fetched from the URL
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="orderstatus">Order Status:</label>
            <input
              type="text"
              id="orderstatus"
              onChange={inputHandler}
              name="orderstatus"
              autoComplete="off"
              placeholder="Enter your orderstatus"
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              id="quantity"
              onChange={inputHandler}
              name="quantity"
              autoComplete="off"
              placeholder="Enter food Quantity"
            />
          </div>
          {/* Other input fields */}
          <div className="inputGroup">
            <button type="submit" className="btn btn-primary">
              Order
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default AddUser;
