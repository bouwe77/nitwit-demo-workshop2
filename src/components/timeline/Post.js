import React from "react";

import DateTime from "./DateTime";

const Post = props => {
  return (
    <div className="listitem">
      <h1>{props.post.user}</h1>
      <DateTime timestamp={props.post.timestamp} />
      <p>{props.post.post}</p>
    </div>
  );
};

export default Post;
