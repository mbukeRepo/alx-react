import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Login from '../Login/Login.js';
import Notifications from "../Notifications/Notifications.js";
import "./App.css";

import React from 'react';


export default function App() {
  return (
      <div className="App">
        <Notifications/>
        <Header/>
        <main className="App-body">
          <Login/>
        </main>
        <Footer/>
      </div>
  );
}
