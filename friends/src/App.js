import React, { Component } from "react";
import "./App.css";
import axios from "axios";

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
        <header className="App-header" />
      </div>
    );
  }
}

export default App;
