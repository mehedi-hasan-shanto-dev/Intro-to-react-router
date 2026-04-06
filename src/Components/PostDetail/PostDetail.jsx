import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const PostDetail = () => {
  const post = useLoaderData();
  const navigate = useNavigate();
  return (
    <div>
      <p>{post.title}</p>
      <p>{post.body}</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default PostDetail;
