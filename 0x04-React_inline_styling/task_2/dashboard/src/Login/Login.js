import React from 'react';
import {StyleSheet, css} from 'aphrodite';

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
         className = {css(styles.button)}
        >
          OK
        </button>
   </React.Fragment>
  );
}


const styles = StyleSheet.create({
  button: {
    margin: '1.2rem'
  }
});
