import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import "./UsersCreate.scss";

const UsersCreate = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (name === "" || email === "" || password === "") {
      alert("Please fill in all fields");
      return;
    }

    fetch("http://localhost:8080/users/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (!response?.email) {
          alert("Ups, something went wrong");
          return;
        }

        navigate("/users");
      })
      .catch(() => {
        alert("Error while creating user");
      });
  };

  return (
    <div className="usersCreateContainer">
      <h1>Users: Create User</h1>
      <div className="buttons">
        <NavLink to="/users" className="link">
          Users List
        </NavLink>
      </div>
      <div className="usersCreateForm">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button type="button" onClick={() => handleSubmit()}>
          Create User
        </button>
      </div>
    </div>
  );
};

export default UsersCreate;
