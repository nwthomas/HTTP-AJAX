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
    message: ""
  };

  getData = () => {
    axios
      .get("http://localhost:5000/friends")
      .then(res =>
        this.setState(
          {
            friends: res.data
          },
          () => console.log(this.state.friends)
        )
      )
      .catch(err =>
        this.setState(
          {
            error: err
          },
          () => console.log(this.state.error)
        )
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
    axios
      .post("http://localhost:5000/friends", {
        name: this.state.newFriendName,
        age: this.state.newFriendAge,
        email: this.state.newFriendEmail
      })
      .then(res => {
        console.log(res);
        this.setState(
          {
            message: res.successText
          },
          () => console.log(this.state.postMessage)
        );
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <FriendForm
          stateOnProps={this.state}
          onChange={this.onChange}
          postNewFriend={this.postNewFriend}
        />
        <FriendList friendsOnProps={this.state.friends} />
      </div>
    );
  }
}

export default App;
