import {shallow} from "enzyme";
import React from 'react';
import App from './App.js';

const wrapper = shallow(<App/>);

describe('<App/>', () => {
  it('renders without crashing', () => {
    shallow(<App/>);
  });

  it('renders Header', () => {
    expect(wrapper.find('Header')).toHaveLength(1);
  });

  it('renders Footer', () => {
    expect(wrapper.find('Footer')).toHaveLength(1);
  });

  it('renders Login', () => {
    expect(wrapper.find('Login')).toHaveLength(1);
  });

  it('check CourseList is not displayed by default', () => {
    expect(wrapper.find('CourseList').exists()).toEqual(false);
  });
  it('check App when logged in', () => {
    const app = shallow(<App isLoggedIn={true}/>);
    expect(app.find('Login').exists()).toBeFalsy();
    expect(app.find('CourseList').exists()).toBeTruthy();
  });

});
