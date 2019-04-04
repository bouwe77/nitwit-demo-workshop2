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
      users: [
        { user: "piet", youAreFollowing: true, isFollowingYou: true },
        {
          user: "miepertje miep",
          youAreFollowing: true,
          isFollowingYou: false
        },
        {
          user: "ruftert de knuftert",
          youAreFollowing: false,
          isFollowingYou: true
        },
        { user: "met je hoofd", youAreFollowing: false, isFollowingYou: false }
      ]
    };
  }

  componentDidMount = () => {
    //this.getUsers();
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

  toggleFollowing = username => {
    const users = this.state.users.map(user => {
      if (user.user === username) {
        return {
          ...user,
          youAreFollowing: !user.youAreFollowing
        };
      }
      return user;
    });
    this.setState({ users });

    //TODO API call...
  };

  render() {
    return (
      <div>
        <Following
          users={this.state.users}
          toggleFollowing={this.toggleFollowing}
        />
      </div>
    );
  }
}

export default FollowingContainer;
