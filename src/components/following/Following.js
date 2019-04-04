import React from "react";

import User from "./User";

const Following = props => {
  return (
    <div>
      {props.users.map(user => (
        <User
          key={user.name}
          user={user}
          toggleFollowing={props.toggleFollowing}
        />
      ))}
    </div>
  );
};

export default Following;
