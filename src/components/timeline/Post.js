import React from "react";

import DateTime from "./DateTime";

const Post = props => {
  return (
    <div className="listitem">
      <span className="post-username">
        <h1>{props.post.user}</h1>
      </span>
      <span className="post-timestamp">
        <DateTime timestamp={props.post.created} />
      </span>
      <br />
      <p>{props.post.content}</p>
    </div>
  );
};

export default Post;
