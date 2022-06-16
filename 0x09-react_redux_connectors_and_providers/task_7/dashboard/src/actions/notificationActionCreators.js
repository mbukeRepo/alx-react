import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS, SET_LOADING_STATE} from './notificationActionTypes';
import axios from "axios";

export const markAsAread = (index) => {
  return {
    type: MARK_AS_READ,
    index,
  };
};
//export const boundMarkAsAread = (index) => dispatch(markAsAread(index));

export const setNotificationFilter = (filter) => {
  return {
    type: SET_TYPE_FILTER,
    filter,
  };
};
//export const boundSetNotificationFilter = (filter) =>
  //dispatch(setNotificationFilter(filter));


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
  return async (dispatch) => {
    try {
      const {data} = await axios.get("http://localhost:3001/notifications");
      dispatch(setNotifications(data));
      dispatch(setLoadingState(false))
    } catch(err) {
      console.log(err);
      dispatch(setLoadingState(false));
    }
 };
};
