import React, { Component } from "react";
import LoadingAnim from './Loading_Anim.svg'
class Loading extends Component {
  render() {
    return (
      <div className="Loading">
        <img src={LoadingAnim} alt=""/>
      </div>
    );
  }
}

export default Loading;
