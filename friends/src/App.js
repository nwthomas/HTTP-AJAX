import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import FriendList from "./components/FriendsListComponent/FriendList";
import FriendForm from "./components/FriendFormComponent/FriendForm";

class App extends Component {
  state = {
    friends: [],
    error: "",
    newFriendName: "",
    newFriendAge: "",
    newFriendEmail: ""
  };

  componentDidMount() {
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
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = () => {
    // enter information
  };

  render() {
    return (
      <div className="App">
        <FriendForm stateOnProps={this.state} onChange={this.onChange} />
        <FriendList friendsOnProps={this.state.friends} />
      </div>
    );
  }
}

export default App;
