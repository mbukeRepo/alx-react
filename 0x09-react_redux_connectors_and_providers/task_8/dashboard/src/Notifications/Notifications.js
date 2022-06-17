import React, { PureComponent, Fragment } from 'react';
import close_icon from './close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { connect } from "react-redux";
import { fetchNotifications, setNotificationFilter } from "../actions/notificationActionCreators";
import { getUnreadNotificationsByType } from "../selectors/notificationSelector";
import { markAsAread } from "../actions/notificationActionCreators"

class Notifications extends PureComponent {
  componentDidMount () {
    this.props.fetchNotifications();
  };
  render() {
    const {
      displayDrawer,
      listNotifications,
      handleDisplayDrawer,
      handleHideDrawer,
      setNotificationFilter
    } = this.props;
    const show = css(displayDrawer ? styles.showOff : styles.showOn);
    return (
      <Fragment>
        <div
          className={css(styles.menuItem)}
          onClick={handleDisplayDrawer}
          id='menuItem'
        >
          <p className={show}>Your notifications</p>
        </div>
        {displayDrawer && (
          // <div className="backdrop"></div>
          <div className={css(styles.notifications)}>
            <p>Here is the list of notifications</p>
            <button
              type="button"
              className={css(styles.filterButton)}
              id="buttonFilterUrgent"
              onClick={() => {
                setNotificationFilter("URGENT");
              }}
            >
              ❗❗
            </button>
            <button
              type="button"
              className={css(styles.filterButton)}
              id="buttonFilterDefault"
              onClick={() => {
                setNotificationFilter("DEFAULT");
              }}
            >
              💠
            </button>

            <ul>
              {listNotifications.length === 0 && (
                <NotificationItem value='No new notification for now' />
              )}
              {listNotifications && listNotifications.map((notification) => {
                // console.log(notification.guid)
                return (
                <NotificationItem
                  key={notification.guid}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                  guid = {notification.guid}
                  markAsRead={this.props.markNotificationAsRead}
                />
              )})}
            </ul>
            <button
              type='button'
              aria-label='Close'
              onClick={handleHideDrawer}
              id='close'
              style={{
                display: 'inline-block',
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 0,
                border: 0,
                outline: 'none',
                cursor: 'pointer',
                zIndex: 1,
              }}
            >
              <img
                src={close_icon}
                alt=''
                style={{ width: '12px', height: '12px' }}
              />
            </button>
          </div>
        )}
      </Fragment>
    );
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markNotificationAsRead: () => {},
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  // listNotifications: PropTypes.object,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func
};

const screenSize = {
  small: '@media screen and (max-width: 900px)',
};

const opacityKf = {
  from: {
    opacity: 0.5,
  },

  to: {
    opacity: 1,
  },
};

const translateYkf = {
  '0%': {
    transform: 'translateY(0)',
  },

  '50%': {
    transform: 'translateY(-5px)',
  },

  '75%': {
    transform: 'translateY(5px)',
  },

  '100%': {
    transform: 'translateY(0)',
  },
};

// const borderKf = {
//   '0%': {
//     border: `3px dashed cyan`,
//   },

//   '100%': {
//     border: `3px dashed #e0344a`,
//   },
// };

const styles = StyleSheet.create({
  notifications: {
    fontSize: '20px',
    border: 'thin dotted #e0344a',
    padding: '4px 16px',
    position:"fixed",
    top: "7.2rem",
    borderRadius: "1.5rem",
    marginLeft: "50px",
    marginRight: "50px",
    background:"white"
    // float: 'right',
    // zIndex: "500",
    // animationName: [borderKf],
    // animationDuration: '0.8s',
    // animationIterationCount: 1,
    // animationFillMode: 'forwards',
    // [screenSize.small]: {
    //   width: '90%',
    //   border: 'none',
    //   backgroundColor: 'white',
    // },
  },
  menuItem: {
    textAlign: 'right',
    marginRight: '16px',
    ':hover': {
      cursor: 'pointer',
      animationName: [opacityKf, translateYkf],
      animationDuration: '1s, 0.5s',
      animationIterationCount: 3,
    },
  },
  showOff: {
    marginRight: '8px',
    [screenSize.small]: {
      display: 'none',
    },
  },

  showOn: {
    marginRight: '8px',
  },
});

export const mapStateToProps = state => {
  const unreads = getUnreadNotificationsByType(state);
  return {
    listNotifications: unreads,
  }
}

const mapDispatchToProps = dispatch =>  {
  return {
    fetchNotifications: () => dispatch(fetchNotifications()),
    markNotificationAsRead: (id) => dispatch(markAsAread(id)),
    setNotificationFilter: (filter) => dispatch(setNotificationFilter(filter))
  }
  
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
