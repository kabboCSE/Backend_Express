import React from "react";
import { Link, useLoaderData } from "react-router";

const UserDetail = () => {
  const user = useLoaderData();
  console.log(user);
  return (
    <div>
      <h3>User Details</h3>
      <Link to={"/"}>Back to Home</Link>
    </div>
  );
};

export default UserDetail;
