import React, { Component } from "react";
import "./App.css";
import Loading from "./Loading";
import InputPassword from "./InputPassword";
import BadPass from "./BadPass";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      BadPass: false
    };
  }
  ManageLogin = (newlogin, newpassword) => {
    if (newlogin === "admin" && newpassword === "admin") {
      this.setState({
        user: "admin"
      });
    } else {
      this.setState({
        BadPass: true
      });
    }
  };
  render() {
    if (this.state.user !== null) {
      return (
        <div>
          <Loading />
        </div>
      );
    } else {
      return (
        <div className="App">
          <InputPassword ManageLogin={this.ManageLogin.bind(this)} />
          <BadPass badpass={this.state.BadPass} />
        </div>
      );
    }
  }
}

export default App;
