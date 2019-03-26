import React from "react";

import Header from "./Header";
import TimelineContainer from "./timeline/TimelineContainer";
import FollowingContainer from "./following/FollowingContainer";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { renderFollowing: true };
  }

  renderTimeline = () => {
    this.setState({ renderFollowing: false });
  };

  renderFollowing = () => {
    this.setState({ renderFollowing: true });
  };

  render() {
    return (
      <div>
        <Header
          renderTimeline={this.renderTimeline}
          renderFollowing={this.renderFollowing}
        />

        {this.state.renderFollowing ? (
          <FollowingContainer />
        ) : (
          <TimelineContainer />
        )}
      </div>
    );
  }
}
