import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

import "./UsersEdit.scss";

const UsersEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (name === "" || email === "") {
      alert("Please fill in the name and email fields");
      return;
    }

    fetch('http://localhost:8080/users/edit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        id,
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
        alert("Error while editing user");
      });
  };

  useEffect(() => {
    const getUser = async () => {
      fetch(`http://localhost:8080/users/getbyid/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
        .then((response) => response.json())
        .then((response) => {
          if (!response?.email) {
            alert("Ups, something went wrong");
            return;
          }

          setName(response.name);
          setEmail(response.email);
        })
        .catch(() => {
          alert("Error getting user");
        });
    };

    getUser();
  }, [id]);

  return (
    <div className="usersEditContainer">
      <h1>Users: Edit User</h1>
      <div className="buttons">
        <NavLink to="/users" className="link">
          Users List
        </NavLink>
      </div>
      <div className="usersEditForm">
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
        <small>
          If the password field is left empty, the same password will be kept.
        </small>
        <button type="button" onClick={() => handleSubmit()}>
          Edit User
        </button>
      </div>
    </div>
  );
};

export default UsersEdit;
