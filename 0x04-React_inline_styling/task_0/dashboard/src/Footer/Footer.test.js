import {shallow} from 'enzyme';
import Footer from './Footer';
import React from 'react';

const wrapper = shallow(<Footer/>);

describe('<Footer/>', () => {
  it('renders footer without crashing', () => {
    shallow(<Footer/>);
  });

  it('renders p with Copyright', () => {
    expect(wrapper.find('footer p').text()).toContain('Copyright');
  });
});
