import React from "react";

const User = props => {
  var { user, youAreFollowing, isFollowingYou } = props.user;

  var followOrUnfollow = youAreFollowing ? "yes" : "no";
  var followsYou = isFollowingYou ? "is following you" : "";

  return (
    <div>
      {user} {followOrUnfollow} <i>{followsYou}</i>
    </div>
  );
};

export default User;
