import { shallow } from 'enzyme';
import Notifications from './Notifications';
import { getLatestNotification } from '../utils/utils';
import React from 'react';

describe('ordinary tests', () => {

const wrapper = shallow(<Notifications/>);

it('renders without crashing', () => {
  shallow(<Notifications/>);
});

it('Notification Item with html', () => {
  const wrapper = shallow(<Notifications displayDrawer />);
  const nItem = wrapper.find('NotificationItem');
  expect(nItem).toBeDefined();
  expect(nItem.first().html()).toEqual(
    '<li data-priority="default">No new notification for now</li>'
  );
});

it('menuItem with displayDrawer false', () => {
  const wrapper = shallow(<Notifications />);
  const mItem = wrapper.find('div.menuItem');
  expect(mItem).toHaveLength(1);
});

it('Notification with displayDrawer false', () => {
  const wrapper = shallow(<Notifications />);
  const dNoti = wrapper.find('div.Notifications');
  expect(dNoti).toHaveLength(0);
});

it('menuItem with displayDrawer true', () => {
  const wrapper = shallow(<Notifications displayDrawer />);
  const mItem = wrapper.find('div.menuItem');
  expect(mItem).toHaveLength(1);
});

it('displayDrawer is true', () => {
  const wrapper = shallow(<Notifications displayDrawer />);
  const dNoti = wrapper.find('div.Notifications');
  expect(dNoti).toHaveLength(1);
});

});


describe('test without listNotifications', () => {
  let listNotifications = undefined;
  beforeEach(() => {
    listNotifications = [];
  });

  it('empty', () => {
    const wrapper = shallow(
      <Notifications displayDrawer listNotifications={listNotifications} />
    );
    expect(wrapper.exists());
    const nItem = wrapper.find('NotificationItem');
    expect(nItem).toHaveLength(1);
    expect(nItem.html()).toEqual(
      '<li data-priority="default">No new notification for now</li>'
    );
  });

  it('without listNotifications', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    const nItem = wrapper.find('NotificationItem');
    expect(nItem).toHaveLength(1);
    expect(nItem.html()).toEqual(
      '<li data-priority="default">No new notification for now</li>'
    );
  });
});


describe('test with listNotifications', () => {
  let latestNotification = undefined;
  let listNotifications = undefined;

  beforeEach(() => {
    latestNotification = getLatestNotification();
    listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html:  latestNotification },
    ];
  });

  it('values', () => {
    const wrapper = shallow(
      <Notifications displayDrawer listNotifications={listNotifications} />
    );
    expect(wrapper.exists());
    const nItem = wrapper.find('NotificationItem');
    expect(nItem).toBeDefined();
    expect(nItem).toHaveLength(3);
    expect(nItem.at(0).html()).toEqual(
      '<li data-priority="default">New course available</li>'
    );
    expect(nItem.at(1).html()).toEqual(
      '<li data-priority="urgent">New resume available</li>'
    );
    expect(nItem.at(2).html()).toEqual(
      `<li data-priority="urgent"><div>${latestNotification}</div></li>`
    );
  });
  it('testing markAsRead', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    console.log = jest.fn();
    const instance = wrapper.instance();
    const id = 0;
    instance.markAsRead(id);
    expect(console.log).toHaveBeenCalledWith(`Notification ${id} has been marked as read`);
    jest.restoreAllMocks();
  });
});

