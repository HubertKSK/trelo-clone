import React, { Component } from 'react';
import './App.css';
import Loading from './Loading';
import InputPassword from './InputPassword';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      login: '',
      password: ''
    }
}
ManageLogin = (newlogin,newpassword) => {
  this.setState ({
    login: newlogin,
    password: newpassword
  })
}
  render() {
    if (this.state.login === 'admin' &&this.state.password === 'admin') {
    this.setState({
      user: 'admin'
    })
    }
    if (this.state.user !== null) {
      return (
      <div>
        <Loading />
      </div>
      )
    }
    else {
      return (
        <div className="App">
          <InputPassword ManageLogin={this.ManageLogin.bind(this)} />
          
        </div>
      )
    }
    }
}

export default App;
