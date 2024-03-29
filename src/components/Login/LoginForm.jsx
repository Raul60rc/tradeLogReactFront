import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./LoginForm.scss";

const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (email === "" || password === "") {
      alert("Please fill in all fields");
      return;
    }

    fetch("http://localhost:8080/users/login", { // fetches to the backend to get the data 
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (!response?.token) {
          alert("Ups, something is incorrect");
          return;
        }

        localStorage.setItem("token", response.token);
        localStorage.setItem("user", JSON.stringify(response.userDB));

        navigate("/");
      })
      .catch(() => {
        alert("Error logging in please try again");
      });
  };

  return (
    <div className="form">
      <h1>Login</h1>
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
        Login
      </button>
    </div>
  );
};

export default LoginForm;

