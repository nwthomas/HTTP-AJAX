import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import FriendList from "./components/FriendsListComponent/FriendList";
import FriendForm from "./components/FriendFormComponent/FriendForm";

class App extends Component {
  state = {
    friends: [],
    newFriendName: "",
    newFriendAge: "",
    newFriendEmail: "",
    message: "",
    id: ""
  };

  getData = () => {
    axios
      .get("http://localhost:5000/friends")
      .then(res =>
        this.setState(
          {
            friends: res.data,
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

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
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
              friends: res.data
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
        <FriendForm
          stateOnProps={this.state}
          onChange={this.onChange}
          postNewFriend={this.postNewFriend}
        />
        <FriendList
          friendsOnProps={this.state.friends}
          deleteFriend={this.deleteFriend}
          modifyFriend={this.modifyFriend}
        />
      </div>
    );
  }
}

export default App;
