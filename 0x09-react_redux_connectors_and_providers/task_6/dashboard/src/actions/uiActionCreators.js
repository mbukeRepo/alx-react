import {
  LOGIN,
  LOGOUT,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';

export const login = (email, password) => {
  return {
    type: LOGIN,
    user: { email, password },
  };
};
//export const boundLogin = (email, password) => dispatch(login(email, password));

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
//export const boundLogout = () => dispatch(logout());

export const displayNotificationDrawer = () => {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER,
  };
};
//export const boundDisplayNotificationDrawer = () =>
//  dispatch(displayNotificationDrawer());

export const hideNotificationDrawer = () => {
  return {
    type: HIDE_NOTIFICATION_DRAWER,
  };
};
//export const boundHideNotificationDrawer = () =>
  //dispatch(hideNotificationDrawer());

export const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS,
  };
};

export const loginFailure = () => {
  return {
    type: LOGIN_FAILURE,
  };
};

export const loginRequest = (email, password) => {
  console.log("hello world");
  return (dispatch) => {
    dispatch(login(email, password));
    return fetch('http://localhost:3001/')
      .then((res) => res.json())
      .then((json) => dispatch(loginSuccess()))
      .catch((error) => dispatch(loginFailure()));
  };
};
