import React, { Component } from "react";
import NavBar from "./navBar";
import Movies from "./movies";
import "../App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Movies />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
