import React from "react";
import "./Notifications.css";
import close_btn from "./close-icon.png";
import {getLatestNotification} from './utils.js'

export default function Notification() {
  const latestNotifications = () => ({__html:`${getLatestNotification()}`});
  const handleCloseNotifications = (e) => console.log("Close button has been clicked");
  return (
    <div className="Notifications">
      <button 
        arial-label="close" 
        onClick={handleCloseNotifications} 
        style={{
          width: '25px', 
          height: '25px', 
          position: 'absolute', 
          top: 0, right: 0,
          margin: '.9rem',
          background: 'none',
          border: 'none'
        }}
      >
        <img src={close_btn} alt="x" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li data-priority="urgent">
          <div 
            dangerouslySetInnerHTML={latestNotifications()}>
          </div>
       </li>
      </ul>
    </div>
  );
}
