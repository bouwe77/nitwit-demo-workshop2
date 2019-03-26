import React from "react";

export default class Header extends React.Component {
  timelineClick = event => {
    event.preventDefault();
    this.props.renderTimeline();
  };

  followingClick = event => {
    event.preventDefault();
    this.props.renderFollowing();
  };

  render = () => {
    return (
      <div>
        <a href="">
          <img src="nitwit-logo.png" alt="nitwit" className="logo" />
        </a>
        <ul className="nav">
          <li>
            <a href="#" onClick={this.timelineClick}>
              timeline
            </a>
          </li>
          <li>
            <a href="#" onClick={this.followingClick}>
              following
            </a>
          </li>
        </ul>
      </div>
    );
  };
}
