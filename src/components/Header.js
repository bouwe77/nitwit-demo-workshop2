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
      <div className="header">
        <div className="logo">
          <a href="">
            <img
              src="https://fontmeme.com/permalink/190618/9e3030abcf79d598d68c87c766e2f03c.png"
              alt="nitwit"
              className="img-logo"
            />
          </a>
        </div>
        <div className="header-nav">
          <ul className="nav">
            <li>
              <a className="selected" href="#" onClick={this.timelineClick}>
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
      </div>
    );
  };
}
