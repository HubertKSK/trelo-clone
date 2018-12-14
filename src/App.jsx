import React, { Component } from "react";
import "./App.css";
import Loading from "./Loading";
import FormComponent from "./FormComponent";

class AppComponent extends Component {
   constructor(props) {
      super(props);
      this.state = {
         user: null,
         login: "",
         passoword: "",
         badPass: false
      };
   }
   onSubmit = () => {
      const { login, password } = this.state;
      if (login === "admin" && password === "admin") {
         this.setState({
            user: "admin"
         });
      } else {
         this.setState({
            badPass: true
         });
      }
   };
   handleOnChange = evt => {
      console.log("event::", evt.target.name);
      this.setState({ [evt.target.name]: evt.target.value });
   };
   render() {
      if (this.state.user !== null) {
         return (
            <div className="AppComponent">
               <Loading />
            </div>
         );
      } else if (this.state.user === null && this.state.badPass === false) {
         return (
            <div className="AppComponent">
               <FormComponent
                  title="Sign in"
                  loginValue={this.login}
                  passwordValue={this.password}
                  onChange={this.handleOnChange}
                  onSubmit={this.onSubmit}
               />
            </div>
         );
      } else if (this.state.user === null && this.state.badPass === true) {
         return (
            <div className="AppComponent">
               <FormComponent
                  title="Sign in"
                  loginValue={this.login}
                  passwordValue={this.password}
                  onChange={this.handleOnChange}
                  onSubmit={this.onSubmit}
               />
               <h3>Enter correct login details</h3>
            </div>
         );
      }
   }
}
export default AppComponent;
