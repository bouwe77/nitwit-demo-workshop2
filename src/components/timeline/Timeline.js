import React from "react";

import Post from "./Post";

const Timeline = props => {
  return (
    <div className="timeline">
      {props.timeline.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
};

export default Timeline;
