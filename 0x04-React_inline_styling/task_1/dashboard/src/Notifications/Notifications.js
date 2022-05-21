import React from "react";
import close_btn from "./close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

export default class Notification extends React.Component {
  handleCloseNotifications = (e) => console.log("Close button has been clicked");
  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  } 
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.listNotifications.length > this.props.listNotifications.length ) {
      return true;
    }
    return false
  }

  render() {
    const {displayDrawer, listNotifications} = this.props;
    const nots = (
      <div className={css(styles.Notifications)}>
        <button 
          arial-label="close" 
          onClick={this.handleCloseNotifications} 
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
                  id = {notification.id}
                  markAsRead = {this.markAsRead}
                />
           ))}
        </ul>
      </div>
    );
    return (
      <div className={css(styles.nots_container)}>
          <div className={css(styles.menuItem)}>
              <p>Your notifications</p>
          </div>
          {displayDrawer ? nots: null}
      
      </div>
      
    );
  }
  
  
}

Notification.defaultProps = {
  displayDrawer: false,
  listNotifications: []
}

Notification.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
}


const styles = StyleSheet.create({
  Notifications: {
    border: '1px red dashed',
    padding: '.3rem',
    position: 'relative',
    margin: 0,
  },
  nots_container: {
    position: 'fixed',
    right: 0,
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'column',
    padding: '10px',
    top: 0,
  },
  menuItem: {
    margin: 0,
    padding: 0,
  }
});
