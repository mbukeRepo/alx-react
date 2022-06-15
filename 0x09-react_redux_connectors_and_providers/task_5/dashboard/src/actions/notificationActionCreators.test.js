import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
  SET_LOADING_STATE,
  FETCH_NOTIFICATIONS_SUCCESS
} from './notificationActionTypes';

import {
  markAsAread,
  setNotificationFilter,
  setNotifications,
  setLoadingState
} from './notificationActionCreators';

describe('action creators', () => {
  it('markAsRead', () => {
    const data = {
      type: MARK_AS_READ,
      index: 1,
    };
    const result = markAsAread(1);

    expect(result).toEqual(data);
  });

  it('setNotificationFilter', () => {
    const data = {
      type: SET_TYPE_FILTER,
      filter: 'DEFAULT',
    };
    const result = setNotificationFilter(NotificationTypeFilters.DEFAULT);

    expect(result).toEqual(data);
  });
  it('setNotifications', () => {
    const data = {1: "mbuke", 2: "Prince"};
    const expectedReturn = {
      type:  FETCH_NOTIFICATIONS_SUCCESS,
      data
    };
   const result = setNotifications(data);
   expect(result).toEqual(expectedReturn);
  });
 it("setLoadingState", () => {
   const expectedReturn = {
     type: SET_LOADING_STATE,
     loading: true
   };
   const result = setLoadingState(true);
   expect(result).toEqual(expectedReturn);
 });
});
