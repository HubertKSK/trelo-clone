import React, { Component } from 'react';

class InputPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
          login: '',
          password: '',
        }

        
    }
handleLogin = (event) => {
    this.setState({
        login: event.target.value,
     })
}
handlePassword = (event) => {
  this.setState({
      password: event.target.value,
   })
}
submit = () => {
  this.props.ManageLogin(this.state.login,this.state.password)
}

  render() {
    
    return (
      <div className="InputPassword">
        <form>
            <h3 >Login</h3>
            <input type="text" value = {this.state.login} onChange={this.handleLogin} />
            
            <h3>Password</h3>
            <input type="text" value={this.state.password} onChange={this.handlePassword} />
            <br/>
            <button onClick={this.submit} type='button' >Submit</button>
        </form>
      </div>
    );
  }
}

export default InputPassword;
