import React, { useEffect } from "react";

function Profile() {
  const [user, setUser] = React.useState({});

  useEffect(() => {
    localStorage.getItem("user") && setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <>
      <h1>Profile</h1>
      <dt>Email</dt>
      <dd>{user.email}</dd>
      <dt>Name</dt>
      <dd>{user.name}</dd>
    </>
  );
}

export default Profile;
