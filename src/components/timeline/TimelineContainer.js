import React from "react";
import axios from "axios";

import Timeline from "./Timeline";
import Compose from "./Compose";

class TimelineContainer extends React.Component {
  constructor(props) {
    super(props);

    this.user = "bouwe";
    this.baseUrl = `https://nitwit-api.azurewebsites.net/users/${this.user}`;

    this.state = {
      isLoaded: false,
      timeline: [
        {
          user: "bouwe",
          post:
            "nitwit aan het uitvogelen :) Lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum",
          created: "2019-04-03T17:00:00"
        },
        {
          user: "henk",
          post: "Hallo Wereld, ik ben Henk",
          created: "2019-04-02T15:14:57.8425465"
        }
      ]
    };
  }

  componentDidMount = () => {
    //this.getTimeline();

    //todo Deze regel kan weg als de API het weer doet
    this.setState({ isLoaded: true });
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
    const newPost = {
      post: content,
      user: this.user,
      created: new Date().toString()
    };

    this.setState(prevState => ({
      timeline: [newPost, ...prevState.timeline]
    }));

    //TODO Let op, deze return verwijderen zodra API weer in de lucht is
    return;

    axios.post(`${this.baseUrl}/posts`, newPost).catch(error => {
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
