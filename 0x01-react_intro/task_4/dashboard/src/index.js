import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Notifications from "./Notifications.js";

const notifications = ReactDOM.createRoot(document.getElementById('root-notifications'));
const root = ReactDOM.createRoot(document.getElementById('root'));
notifications.render(<Notifications/>);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

