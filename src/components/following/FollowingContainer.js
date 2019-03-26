import React from "react";
import axios from "axios";

import Following from "./Following";

class FollowingContainer extends React.Component {
  constructor(props) {
    super(props);
    this.user = "bouwe";
    this.baseUrl = `https://nitwit-api.azurewebsites.net/users?user=${
      this.user
    }`;

    this.state = {
      isLoaded: false,
      users: []
    };
  }

  componentDidMount = () => {
    this.getUsers();
  };

  getUsers = () => {
    axios
      .get(`${this.baseUrl}`)
      .then(res => {
        const users = res.data;
        this.setState({ isLoaded: true, users });
      })
      .catch(error => {
        this.setState({ isLoaded: true, error });
      });
  };

  render() {
    return (
      <div>
        <Following users={this.state.users} />
      </div>
    );
  }
}

export default FollowingContainer;
