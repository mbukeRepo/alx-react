import React from 'react';
import "./Login.css";

export default function Login() {
  return (
   <React.Fragment>
        <p>Login to access the full dashboard</p>
        <label>Email: </label><input name="email" />
        <label>Password: </label><input name="password"/>
        <button>OK</button>
   </React.Fragment>
  );
}
