import React from "react";
import "./Notifications.css";
import close_btn from "./close-icon.png";
import {getLatestNotification} from '../utils/utils.js';
import NotificationItem from "./NotificationItem";
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

export default function Notification({displayDrawer, listNotifications}) {
  const handleCloseNotifications = (e) => console.log("Close button has been clicked");
  const nots = (
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
         {listNotifications.length === 0 && (
              <NotificationItem value='No new notification for now' />
         )}
         {listNotifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                type={notification.type}
                value={notification.value}
                html={notification.html}
              />
         ))}
      </ul>
    </div>
  );
  return (
    <div className="nots_container">
        <div className='menuItem'>
            <p>Your notifications</p>
        </div>
        {displayDrawer ? nots: null}
    
    </div>
    
  );
}

Notification.defaultProps = {
  displayDrawer: false,
  listNotifications: []
}

Notification.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
}
