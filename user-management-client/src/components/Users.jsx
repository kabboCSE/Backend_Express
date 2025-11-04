import React, { use, useState } from "react";

const Users = ({ usersPromise }) => {
  const initialUsers = use(usersPromise);
  const [users, setUsers] = useState(initialUsers);

  const handleAddUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const newUser = { name, email };
    console.log(name, email);
    // send data to the server
    // {} = request object
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("After post ", data);
        const newUsers = [...users, data];
        setUsers(newUsers);
      });
  };
  return (
    <div>
      <div>
        <h3>Add a user</h3>
        <form onSubmit={handleAddUser}>
          <input type="text" name="name" id="" placeholder="Name" />
          <br />
          <input type="email" name="email" id="" placeholder="Email" />
          <br />
          <button>Add User</button>
        </form>
      </div>
      {initialUsers.map((user) => (
        <p key={user.id}>
          {user.name} {user.email}
        </p>
      ))}
    </div>
  );
};

export default Users;

/* 
Have to send request object to the server
1. mention method: post
2. mention header: about json data in the property of content-type: application/json
3. body: JSON.stringify(newUser)

*
*
*................................
* on the server side use json as middleware
* app.use(express.json)
*/
