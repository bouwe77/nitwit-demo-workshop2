import React from "react";

export default class FollowOrUnfollow extends React.Component {
  handleClick = () => {
    this.props.toggleFollowing();
  };

  getButton = text => <button onClick={this.handleClick}>{text}</button>;

  Follow = () => this.getButton("Follow");
  Unfollow = () => this.getButton("Unfollow");

  render = () => {
    const Button = this.props.youAreFollowing ? this.Unfollow : this.Follow;
    return <Button />;
  };
}
