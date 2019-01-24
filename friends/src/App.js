import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import FriendList from "./components/FriendsListComponent/FriendList";
import FriendForm from "./components/FriendFormComponent/FriendForm";
import NavbarContainer from "./components/NavbarComponent/NavbarContainer";
import { Route } from "react-router-dom";

class App extends Component {
  state = {
    friends: [],
    shownFriends: [],
    newFriendName: "",
    newFriendAge: "",
    newFriendEmail: "",
    message: "",
    id: "",
    searchInput: ""
  };

  getData = () => {
    axios
      .get("http://localhost:5000/friends")
      .then(res =>
        this.setState(
          {
            friends: res.data,
            shownFriends: res.data,
            message: res.statusText
          },
          () => console.log(this.state.friends)
        )
      )
      .catch(err =>
        this.setState({
          error: err
        })
      );
  };

  componentDidMount() {
    this.getData();
  }

  clearForm = () => {
    this.setState({
      newFriendName: "",
      newFriendAge: "",
      newFriendEmail: "",
      message: "",
      id: ""
    });
  };

  searchFriends = () => {
    if (this.state.searchInput) {
      const searched = this.state.shownFriends.filter(friend => {
        if (
          JSON.stringify(friend.name)
            .toLowerCase()
            .includes(this.state.searchInput.toLowerCase())
        ) {
          return true;
        } else {
          return false;
        }
      });
      this.setState({
        shownFriends: searched
      });
    } else {
      this.setState({
        shownFriends: this.state.friends
      });
    }
  };

  onChange = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => {
        this.searchFriends();
      }
    );
  };

  postNewFriend = e => {
    e.preventDefault();
    if (this.state.id) {
      axios
        .put(`http://localhost:5000/friends/${this.state.id}`, {
          name: this.state.newFriendName,
          age: this.state.newFriendAge,
          email: this.state.newFriendEmail
        })
        .then(res => {
          return this.setState(
            {
              message: res.statusText,
              friends: res.data
            },
            () => console.log(res)
          );
        })
        .catch(err => {
          return this.setState({
            message: err
          });
        });
    } else {
      axios
        .post("http://localhost:5000/friends", {
          name: this.state.newFriendName,
          age: this.state.newFriendAge,
          email: this.state.newFriendEmail
        })
        .then(res => {
          return this.setState(
            {
              message: res.statusText,
              friends: res.data,
              newFriendName: "",
              newFriendAge: "",
              newFriendEmail: ""
            },
            () => console.log(this.state.message)
          );
        })
        .catch(err => {
          return this.setState({
            message: err
          });
        });
    }
  };

  modifyFriend = id => {
    this.state.friends.map(friend => {
      if (friend.id === id) {
        return this.setState({
          newFriendName: friend.name,
          newFriendAge: friend.age,
          newFriendEmail: friend.email,
          id: friend.id
        });
      } else {
        return false;
      }
    });
  };

  deleteFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        return this.setState({
          message: res.statusText,
          friends: res.data,
          shownFriends: res.data,
          newFriendName: "",
          newFriendAge: "",
          newFriendEmail: "",
          id: ""
        });
      })
      .catch(err => {
        return this.setState({
          message: err.statusText
        });
      });
  };

  render() {
    return (
      <div className="App">
        <NavbarContainer
          searchInput={this.state.searchInput}
          onChange={this.onChange}
        />
        <Route
          exact
          path="/"
          render={props => (
            <FriendList
              {...props}
              friendsOnProps={this.state.shownFriends}
              deleteFriend={this.deleteFriend}
              modifyFriend={this.modifyFriend}
            />
          )}
        />
        <Route
          path="/Form"
          render={props => (
            <FriendForm
              {...props}
              stateOnProps={this.state}
              onChange={this.onChange}
              postNewFriend={this.postNewFriend}
              clearForm={this.clearForm}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
