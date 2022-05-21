import {shallow} from 'enzyme';
import NotificationItem from './NotificationItem';
import React from 'react';

it('renders without crashing', () => {
  shallow(<NotificationItem/>);
});

it('renders correct passed in props', () => {
  const wrapper = shallow(<NotificationItem type="default"  value="test" />);
  const li = wrapper.find('li');
  expect(li).toHaveLength(1);
  expect(li.text()).toEqual("test");
  expect(li.prop('data-priority')).toEqual('default');
});

it('testing markAsRead', () => {
    const markAsRead = jest.fn((id) => console.log(`Notification ${id} has been marked as read`));
    const wrapper = shallow(<NotificationItem id={1} value={'test'} markAsRead={markAsRead}/>);
    const logSpy = jest.spyOn(console, 'log');
    const li = wrapper.find('li');
    expect(li).toHaveLength(1);
    li.simulate('click');
    expect(logSpy).toBeCalledWith('Notification 1 has been marked as read');
    jest.restoreAllMocks();
});



