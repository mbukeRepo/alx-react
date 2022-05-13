import React from 'react';
import "./Header.css";
import logo from './logo.jpg';
export default function Header () {
  return (
      <header className="App-header">
        <div className="logo-container">
          <img src={logo} alt="" />
        </div>
        <div className='logo-title'>
        <h1>School dashboard</h1>
        </div>
      </header>
  );
}
