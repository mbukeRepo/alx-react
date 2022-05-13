import React from "react";
import "./Notifications.css";
import close_btn from "./close-icon.png";
import {getLatestNotification} from '../utils/utils.js';
import NavigationItem from "./NotificationItem";

export default function Notification() {
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
        {
         [
           {key:"1", type: "default", value: "New course available"},
           {key:"2", type: "urgent", value: "New resume available"},
           {key:"4", type:"urgent", html: `${getLatestNotification()}`}
         ].map(obj => <NavigationItem {...obj}/>)
         }
      </ul>
    </div>
  );
}

