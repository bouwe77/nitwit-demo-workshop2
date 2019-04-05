import React from "react";
import axios from "axios";

import UserList from "./UserList";

class FollowingContainer extends React.Component {
  constructor(props) {
    super(props);
    this.user = "bouwe";
    this.usersUrl = "https://nitwit-api.azurewebsites.net/users";

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
    const url = `${this.usersUrl}?user=${this.user}`;
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
    //TODO as soon as this works: refactor!!!

    const previousUsers = this.state.users;

    const foundUser = this.state.users.find(function(u) {
      return u.user === username;
    });

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

    //TODO Let op, deze return verwijderen zodra API weer in de lucht is
    return;

    const unfollow = foundUser.youAreFollowing;
    if (unfollow) {
      const url = `${this.usersUrl}/${this.user}/following/${username}`;
      axios.delete(url).catch(error => {
        this.setState({ users: previousUsers, error });
      });
    } else {
      const data = { user: username };
      const url = `${this.usersUrl}/${this.user}/following`;
      axios.post(url, data).catch(error => {
        this.setState({ todos: previousUsers, error });
      });
    }
  };

  render() {
    return (
      <div className="container">
        <UserList
          users={this.state.users}
          toggleFollowing={this.toggleFollowing}
        />
      </div>
    );
  }
}

export default FollowingContainer;
