import React, { use, useState } from "react";

const Users = ({ usersPromise }) => {
  const initialUsers = use(usersPromise);
  const [users, setUsers] = useState(initialUsers);

  const handleAddUser = (e) => {
    e.preventDefault();
    // 1. Form er data nao
    const name = e.target.name.value;
    const email = e.target.email.value;
    const newUser = { name, email };
    console.log(name, email);
    // send data to the server
    // {} = request object
    // 2. Server e POST request pathao
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      //Client Receives Response
      .then((res) => res.json())
      .then((data) => {
        // 3. Server response e new user ID soho ashe
        console.log("After post ", data);
        // 4. MAGIC EKHANE: Puran users array er sathe notun user add kore new array banao
        const newUsers = [...users, data];

        // 5. State update koro - React automatically re-render korbe
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
      {users.map((user) => (
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
