import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import "./Users.scss";

const Users = () => {
  const [users, setUsers] = useState([]);

  const deleteUser = (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirm) {
      return;
    }

    fetch("http://localhost:8080/users/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        id,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (!response?.email) {
          alert("Ups, something went wrong");
          return;
        }

        setUsers(users.filter((user) => user._id !== id));
      })
      .catch(() => {
        alert("Error deleting user please try again");
      });
  };

  useEffect(() => {
    const getUsers = async () => {
      fetch("http://localhost:8080/users/all", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
        .then((response) => response.json())
        .then((response) => {
          if (
            Array.isArray(response) &&
            response.length > 0 &&
            response[0]?.email
          ) {
            setUsers(response);
          } else {
            setUsers([]);
          }
        })
        .catch(() => {
          alert("Error getting users please try again");
        });
    };

    getUsers();
  }, []);

  return (
    <div className="usersContainer">
      <h1>Users</h1>
      <div className="usersButtons">
        <NavLink to="/users/create" className="link">
          Create
        </NavLink>
      </div>
      <div className="usersList">
        {users.length > 0 ? (
          users.map((user) => (
            <div className="usersUser" key={user._id}>
              <div className="usersUser-info">
                <div className="label">Name</div>
                <p>{user.name}</p>
              </div>
              <div className="usersUser-info">
                <div className="label">Email</div>
                <p>{user.email}</p>
              </div>
              <div className="usersUser-info">
                <div className="label">Created at</div>
                <p>{new Date(user.createdAt).toLocaleDateString()}</p>
              </div>
              <NavLink to={`/users/edit/${user._id}`} className="button">
                Edit
              </NavLink>
              <button
                type="button"
                className="button-danger"
                onClick={() => deleteUser(user._id)}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <div className="usersEmpty">No users</div>
        )}
      </div>
    </div>
  );
};

export default Users;
