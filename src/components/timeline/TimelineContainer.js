import React from "react";
import axios from "axios";

import Timeline from "./Timeline";
import Compose from "./Compose";

class TimelineContainer extends React.Component {
  constructor(props) {
    super(props);

    this.user = this.props.user;
    this.baseUrl = `https://nitwit-api.azurewebsites.net/users/${this.user}`;

    this.state = {
      isLoaded: false,
      timeline: []
    };
  }

  componentDidMount = () => {
    this.getTimeline();
  };

  getTimeline = () => {
    axios
      .get(`${this.baseUrl}/timeline`)
      .then(res => {
        const timeline = res.data;
        this.setState({ isLoaded: true, timeline });
      })
      .catch(error => {
        this.setState({ isLoaded: true, error });
      });
  };

  savePost = content => {
    const previousTimeline = this.state.timeline;

    // Update local state
    const newPost = { content, user: this.user };
    this.setState(prevState => ({
      timeline: [newPost, ...prevState.timeline]
    }));

    // Send post to the API
    const post = { content };
    axios.post(`${this.baseUrl}/posts`, post).catch(error => {
      console.log(error, error.response, error.request, error.config);
      this.setState({ timeline: previousTimeline, error });
    });
  };

  render = () => {
    if (this.state.error) {
      return <div>Error: {this.state.error.message}</div>;
    } else if (!this.state.isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="container">
          <Compose savePost={this.savePost} />
          <Timeline timeline={this.state.timeline} />
        </div>
      );
    }
  };
}

export default TimelineContainer;
