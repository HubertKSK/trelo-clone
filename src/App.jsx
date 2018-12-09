import React, { Component } from "react";
import "./App.css";
import Loading from "./Loading";
import FormComponent from "./FormComponent";

class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      login: null,
      passoword: null,
      badPass: false
    };
  }
  onSubmit = (newlogin, newpassword) => {
    this.setState({
      login: newlogin,
      passoword: newpassword
    })
    if (newlogin === "admin" && newpassword === "admin") {
      this.setState({
        user: "admin"
      });
    } else {
      this.setState({
        badPass: true
      });
    }
  };
  render() {
    if (this.state.user !== null) {
      return (
        <div className="AppComponent">
          <Loading />
        </div>
      );
    }
    else if (this.state.user === null && this.state.badPass === false) {
      return (
        <div className="AppComponent">
          <FormComponent onSubmit={this.onSubmit} />
        </div>
      );
    }
    else if (this.state.user === null && this.state.badPass === true) {
      return (
        <div className="AppComponent">
          <FormComponent onSubmit={this.onSubmit} />
          <h3>Enter correct login details</h3>
        </div>
      );
    }
  }
}
export default AppComponent;
