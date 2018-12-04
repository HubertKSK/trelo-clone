import React, { Component } from "react";

class BadPass extends Component {
  render() {
    if (this.props.badpass === true) {
      return (
        <div className="BadPass">
          <h3>Enter correct login details</h3>
        </div>
      );
    }
    return null;
  }
}
export default BadPass;
