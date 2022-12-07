import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./RegisterForm.scss";

const RegisterForm = () => {
  const navigate = useNavigate();
// using States here to save data & to control data / can save till the session on if routes changed the state is changed. 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (name === "" || email === "" || password === "") {
      alert("Please fill in all fields");
      return;
    }

    fetch('http://localhost:8080/users/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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
        }

        navigate("/login");
      })
      .catch(() => {
        alert("Error while creating user");
      });
  };

  return (
    <div className="form">
      <h1>Create account</h1>
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
        Create account
      </button>
    </div>
  );
};

export default RegisterForm;
