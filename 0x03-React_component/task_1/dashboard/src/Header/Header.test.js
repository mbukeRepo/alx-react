import Header from './Header.js';
import { shallow } from 'enzyme';
import React from 'react';


const HeaderWrapper = shallow(<Header/>);

describe('<Header/>', () => {
  it('checks if header runs without crashing', () => {
    shallow(<Header/>);
  });

  it('check if h1 is rendered', () => {
    expect(HeaderWrapper.find('header h1').exists()).toEqual(true);
  });

  it('checks if img is rendered', () => {
    expect(HeaderWrapper.find('header img').exists()).toEqual(true);
  });
});
