import React from "react";
import { useLoaderData } from "react-router";

const UpdateUser = () => {
  const user = useLoaderData();
  console.log(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    console.log("After Click Update ", name, email);
    const updatedUser = { name, email };

    //Send data to the server
    fetch(`http://localhost:4000/users/${user._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("After update", data);
      });
  };

  return (
    <div>
      <h3>Update User</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="" defaultValue={user.name} />
        <br />
        <input type="email" name="email" id="" defaultValue={user.email} />
        <br />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default UpdateUser;
