import React from "react";

const Post = props => {
  return (
    <div className="post">
      <h1>{props.post.user}</h1>
      <p>{props.post.post}</p>
    </div>
  );
};

export default Post;
