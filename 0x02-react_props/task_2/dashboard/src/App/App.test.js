import {shallow} from "enzyme";
import React from 'react';
import App from './App.js';

const wrapper = shallow(<App/>);

describe('<App/>', () => {
  it('renders without crashing', () => {
    shallow(<App/>);
  });

  it('renders notifications', () => {
    expect(wrapper.find('Notifications')).toHaveLength(0);
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

});
