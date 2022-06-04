import {LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER} from './uiActionTypes.js';
import {login, logout, displayNotificationDrawer, hideNotificationDrawer, loginRequest} from './uiActionCreators.js';

describe('tests for action creators', () => {
  it('login action creator', () => {
    const action = {type: LOGIN, user: {email: 'test@test.com', password: '123'}};
    expect(login('test@test.com', '123')).toEqual(action);
  });

  it('logout action creator', () => {
    const action = {type: LOGOUT};
    expect(logout()).toEqual(action);
  });

  it('displayNotificationDrawer action creator', () => {
    const action = {type: DISPLAY_NOTIFICATION_DRAWER};
    expect(displayNotificationDrawer()).toEqual(action);
  });
  it('hideNotificationDrawer', () => {
    const action = {type: HIDE_NOTIFICATION_DRAWER};
    expect(hideNotificationDrawer()).toEqual(action);
  });
  it('testing loginRequest if request is successful', () => {
    const actions = [{type: LOGIN, user: {email: 'test@test.com', password: '123'}}, {type: LOGIN_SUCCESS}]
    expect(loginRequest('test@test.com', '123')).toEqual(actions);
  });
});
