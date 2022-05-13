import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Login from '../Login/Login.js';
import Notifications from "../Notifications/Notifications.js";
import CourseList from "../CourseList/CourseList";
import PropTypes from 'prop-types';
import "./App.css";

import React from 'react';


function App({isLoggedIn}) {
  return (
      <div className="App">
        <Notifications />
        <Header/>
        <main className="App-body">
          {isLoggedIn ? <CourseList/> : <Login/>}
        </main>
        <Footer/>
      </div>
  );
}
App.defaultProps = {
  isLoggedIn: false
};
App.propTypes = {
  isLoggedIn: PropTypes.bool
};
export default App;