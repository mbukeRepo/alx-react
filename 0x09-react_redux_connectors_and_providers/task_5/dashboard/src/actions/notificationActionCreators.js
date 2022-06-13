import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS, SET_LOADING_STATE} from './notificationActionTypes';
import fetch from "node-fetch";

export const markAsAread = (index) => {
  return {
    type: MARK_AS_READ,
    index,
  };
};
export const boundMarkAsAread = (index) => dispatch(markAsAread(index));

export const setNotificationFilter = (filter) => {
  return {
    type: SET_TYPE_FILTER,
    filter,
  };
};
export const boundSetNotificationFilter = (filter) =>
  dispatch(setNotificationFilter(filter));


export const setLoadingState = loading => {
  return {
    type: SET_LOADING_STATE,
    loading
  };
};
export const setNotifications = data => {
  return {
    type: FETCH_NOTIFICATIONS_SUCCESS,
    data
  };
};

export const fetchNotifications = () => {
  return dispatch => {
    return fetch("./notifications.json")
    .then(res => res.json())
    .then(data => dispatch(setNotifications(data)))
    .catch(error => {})
    .finally(() => dispatch(setLoadingState(false)))
  };
};
