import {  
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER
} from '../actions/notificationActionTypes';

export const initialState = {
  notifications: [],
  filter: 'DEFAULT'
};


const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
    return {
      ...state,
      notifications: action.data.map(notification => ({...notification, isRead: false}))
    };
    case MARK_AS_READ:
    return {
      ...state,
      notifications: state.notifications.map(notification => {
       const current = {...notification};
       if (notification.id === action.index)
         current.isRead = true
       return current;
      })
    };
    case SET_TYPE_FILTER:
    return {
       ...state,
       filter: action.filter
    };
    default:
    return state;
  }
};
export default reducer;
