import React, { Component } from "react";
import LoadingAnim from './Loading_Gear.svg'
class Loading extends Component {
  render() {
    return (
      <div className="Loading">
        <h1>Loading</h1>
        <img src={LoadingAnim} alt=""/>
      </div>
    );
  }
}

export default Loading;
