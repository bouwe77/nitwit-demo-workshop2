import React from "react";

import FollowOrUnfollow from "./FollowOrUnfollow";

class User extends React.Component {
  toggleFollowing = () => {
    this.props.toggleFollowing(this.props.user.user);
  };

  render = () => {
    var { user, youAreFollowing, isFollowingYou } = this.props.user;

    var followsYou = isFollowingYou ? "follows you" : "";

    return (
      <div className="listitem">
        <div className="following-item">
          {user}
          <FollowOrUnfollow
            youAreFollowing={youAreFollowing}
            toggleFollowing={this.toggleFollowing}
          />
          <i>{followsYou}</i>
        </div>
      </div>
    );
  };
}

export default User;
