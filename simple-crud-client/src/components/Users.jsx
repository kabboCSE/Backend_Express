import React, { use, useState } from "react";
import { Link } from "react-router";

const Users = ({ usersPromise }) => {
  const initialUsres = use(usersPromise);
  const [users, setUsers] = useState(initialUsres);

  const handleAddUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    console.log(name, email);
    const newUser = { name, email };

    // save this user data to the database (via server)
    fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after saving user", data);
        if (data.insertedId) {
          newUser._id = data.insertedId;
          const newUsers = [...users, newUser];
          setUsers(newUsers);

          alert("Users Added Successfully!");
        }
      });
  };

  const handleDeleteUser = (id) => {
    console.log("delete clicked", id);

    fetch(`http://localhost:4000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after delete", data);
        if (data.deletedCount) {
          alert("deleted successfully!");
          const updateUsers = users.filter((user) => user._id !== id);
          setUsers(updateUsers);
        }
      });
  };
  return (
    <div>
      <p>users : {users.length}</p>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" />
        <br />

        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="Add User" />
      </form>
      <p>.........................</p>
      <div>
        {users.map((user) => (
          <p className="my-2" key={user._id}>
            {user.name} : {user.email}
            <Link to={`/users/${user._id}`}>Details</Link>
            <Link to={`/update/${user._id}`}>Edit User</Link>
            <button
              onClick={() => handleDeleteUser(user._id)}
              className="ml-2 bg-white text-red-500 px-3 py-1 rounded shadow"
            >
              Delete
            </button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
