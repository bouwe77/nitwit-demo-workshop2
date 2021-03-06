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
        <div className="following-username">
          <b>{user}</b> <i>{followsYou}</i>
        </div>
        <div className="following-buttons">
          <FollowOrUnfollow
            youAreFollowing={youAreFollowing}
            toggleFollowing={this.toggleFollowing}
          />
        </div>
      </div>
    );
  };
}

export default User;
