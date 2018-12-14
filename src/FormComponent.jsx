import React from "react";

const FormComponent = props => {
   return (
      <div>
         <h3>Sign In</h3>
         login:{" "}
         <input
            name="login"
            value={props.loginValue}
            type="text"
            onChange={props.onChange}
         />
         password:{" "}
         <input
            name="password"
            value={props.passwordValue}
            type="password"
            onChange={props.onChange}
         />
         <button type="button" onClick={props.onSubmit}>
            Sign In
         </button>
      </div>
   );
};

export default FormComponent;
