import React, { use } from "react";

const Users = ({ usersPromise }) => {
  const users = use(usersPromise);
  console.log(users);
  return (
    <div>
      <div>
        <h3>Add a user</h3>
        <form>
          <input type="text" name="" id="" placeholder="Name" />
          <br />
          <input type="email" name="" id="" placeholder="Email" />
          <br />
          <button>Add User</button>
        </form>
      </div>
      {users.map((user) => (
        <p key={user.id}>
          {user.name} Email : {user.email}
        </p>
      ))}
    </div>
  );
};

export default Users;
