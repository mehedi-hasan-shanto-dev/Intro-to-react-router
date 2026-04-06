import React, { use } from "react";

const Users2 = ({ userPromise }) => {
  const users = use(userPromise);
  console.log("Users 222222222 data is ", users);
  return (
    <div>
      <h1>This is UUUUsers22 is Hare Ok.</h1>
    </div>
  );
};

export default Users2;
