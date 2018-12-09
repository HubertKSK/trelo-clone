import React, { Component } from "react";

class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: ""
    };
  }
  handleLogin = event => {
    this.setState({
      login: event.target.value
    });
  };
  handlePassword = event => {
    this.setState({
      password: event.target.value
    });
  };
  submit = () => {
    this.props.onSubmit(this.state.login, this.state.password);
  };

  render() {
    return (
      <div className="FormComponent">
        <form>
          <h3>Login</h3>
          <input
            type="text"
            value={this.state.login}
            onChange={this.handleLogin}
          />
          <hr />

          <h3>Password</h3>
          <input
            type="text"
            value={this.state.password}
            onChange={this.handlePassword}
          />
          <hr />

          <button onClick={this.submit} type="button">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default FormComponent;
