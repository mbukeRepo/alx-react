import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Login from '../Login/Login.js';
import "./App.css";

import React from 'react';


export default function App() {
  return (
      <div className="App">
        <Header/>
        <main className="App-body">
          <Login/>
        </main>
        <Footer/>
      </div>
  );
}
