import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        {
          id: "4dt45e",
          name: "John",
        },
        {
          id: "4dt65e",
          name: "Hasan",
        },
        {
          id: "4dte2e",
          name: "Helen",
        },
        {
          id: "4dg11e",
          name: "Osas",
        },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.users.map((user) => {
          return (
            <div key={user.id}>
              <h1>{user.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
