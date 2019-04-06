import React from "react";

export default class FollowOrUnfollow extends React.Component {
  handleClick = () => {
    this.props.toggleFollowing();
  };

  getButton = text => <button onClick={this.handleClick}>{text}</button>;

  moio = () => (
    <label class="switch">
      <input type="checkbox" id="togBtn" />
      <div class="slider round">
        <span class="on">ON</span>
        <span class="off">OFF</span>
      </div>
    </label>
  );
  Follow = () => this.moio();
  Unfollow = () => this.getButton("Unfollow");

  render = () => {
    const Button = this.props.youAreFollowing ? this.Unfollow : this.Follow;
    return <Button />;
  };
}
