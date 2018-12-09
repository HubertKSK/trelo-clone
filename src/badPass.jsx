import React, { Component } from "react";

class badPass extends Component {
  render() {
    if (this.props.badPass === true) {
      return (
        <div className="badPass">
          <h3>Enter correct login details</h3>
        </div>
      );
    }
    return null;
  }
}
export default badPass;
