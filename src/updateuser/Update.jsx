import React, { useEffect, useState } from "react";
import "./update.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Layout from "./../components/Layout/Layout";
import { getLuminance } from "@mui/material";

const UpdateUser = () => {
  const users = {
    name: "",
    email:"",
    address: "",
    foodname: "",
    price:  "",
    orderstatus: "",
    quantity: "",
  };
  const [user, setUser] = useState(users);
  const navigate = useNavigate();
  const { id } = useParams();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/user/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:8000/api/update/user/${id}`, user)
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
      <Link to="/add" type="button" class="btn btn-secondary">
        <i class="fa-solid fa-backward"></i> Back
      </Link>

      <h3>Update User</h3>
      <form className="addUserForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={user.name}
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
            value={user.email}
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
            value={user.address}
            onChange={inputHandler}
            name="address"
            autoComplete="off"
            placeholder="Enter your Address"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="foodname">FoodName:</label>
          <input
            type="text"
            id="foodname"
            value={user.foodname}
            onChange={inputHandler}
            name="foodname"
            autoComplete="off"
            placeholder="Enter the FoodName"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            value={user.price}
            onChange={inputHandler}
            name="price"
            autoComplete="off"
            placeholder="Enter the Price"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="orderstatus">Order Status:</label>
          <input
            type="text"
            id="orderstatus"
            value={user.orderstatus}
            onChange={inputHandler}
            name="orderstatus"
            autoComplete="off"
            placeholder="Enter the OrderStatus"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={user.quantity}
            onChange={inputHandler}
            name="quantity"
            autoComplete="off"
            placeholder="Enter food quantity"
          />
        </div>
  
        <div className="inputGroup">
          <button type="submit" class="btn btn-primary">
            Order
          </button>
        </div>
      </form>
    </div>
    </Layout>
  );
};

export default UpdateUser;
