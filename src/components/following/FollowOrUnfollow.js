import React from "react";

export default class FollowOrUnfollow extends React.Component {
  handleToggle = () => {
    this.props.toggleFollowing();
  };

  getToggle = checked => (
    <label className="switch">
      <input type="checkbox" checked={checked} onChange={this.handleToggle} />
      <div className="slider round">
        <span className="on">Following</span>
        <span className="off">Follow?</span>
      </div>
    </label>
  );

  Follow = () => this.getToggle(false);
  Unfollow = () => this.getToggle(true);

  render = () => {
    const Button = this.props.youAreFollowing ? this.Unfollow : this.Follow;
    return <Button />;
  };
}
