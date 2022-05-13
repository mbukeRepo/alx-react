import React from 'react';
import "./Login.css";

export default function Login({setIsLoggedIn}) {
  const onClick = (event) => {
    setIsLoggedIn(true);
    console.log("Hello")
  }
  return (
   <React.Fragment>
        <p>Login to access the full dashboard</p>
        <label>Email: </label><input name="email" />
        <label>Password: </label><input name="password"/>
        <button
         onClick={onClick}
        >
          OK
        </button>
   </React.Fragment>
  );
}
