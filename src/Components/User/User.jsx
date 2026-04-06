import React, { Suspense, useState } from "react";
import { Link } from "react-router";
import UsersDetails2 from "../UsersDetails2/UsersDetails2";

const User = ({ user }) => {
  const [showInfo, setShowInfo] = useState(false);
  const { id, name, email, phone } = user;

  const userPromise = fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  ).then((res) => res.json());
  const userStyle = {
    border: "2px solid yellow",
    borderRadius: "20px",
    padding: "10px",
    margin: "10px",
  };
  return (
    <div style={userStyle}>
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>
        <small>phone: {phone}</small>
      </p>
      <Link to={`/users/${id}`}>show Details</Link>

      <button onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? "Hide" : "Show"} info
      </button>
      {showInfo && (
        <Suspense fallback={<span>Load is ding..........</span>}>
          <UsersDetails2 userPromise={userPromise}></UsersDetails2>
        </Suspense>
      )}
    </div>
  );
};

export default User;
