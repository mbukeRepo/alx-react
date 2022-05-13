import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Login from '../Login/Login.js';
import Notifications from "../Notifications/Notifications.js";
import CourseList from "../CourseList/CourseList";
import PropTypes from 'prop-types';
import "./App.css";
import { getLatestNotification } from '../utils/utils';
import React from 'react'


class App extends React.Component {
  render() {
    const {isLoggedIn} = this.props;
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
      ];
      const listNotifications = [
          { id: 1, type: 'default', value: 'New course available' },
          { id: 2, type: 'urgent', value: 'New resume available' },
          { id: 3, type: 'urgent', html: getLatestNotification()},
      ];
    return (
      <div className="App">
        <Notifications listNotifications={listNotifications} />
        <Header/>
        <main className="App-body">
          {isLoggedIn ? <CourseList listCourses={listCourses}/> : <Login/>}
        </main>
        <Footer/>
      </div>
    );
  }
}


App.defaultProps = {
  isLoggedIn: false
};
App.propTypes = {
  isLoggedIn: PropTypes.bool
};
export default App;
