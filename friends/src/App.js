import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import FriendList from "./components/FriendList";

class App extends Component {
  state = {
    friends: []
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
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <FriendList friendsOnProps={this.state.friends} />
      </div>
    );
  }
}

export default App;
