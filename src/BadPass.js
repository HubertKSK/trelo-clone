import React, { Component } from "react";

class BadPass extends Component {
  render() {
    if (this.props.badpass === true) {
      return (
        <div className="BadPass">
          <p>Enter correct login details</p>
        </div>
      );
    }
    return null;
  }
}
export default BadPass;
