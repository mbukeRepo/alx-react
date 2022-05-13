import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';

describe('<CourseList />', () => {
  const wrapper = shallow(<CourseList />);
  it('renders without crashing', () => {
    expect(wrapper.exists());
  });
  it('renders rows', () => {
    const row = wrapper.find('CourseListRow');
    expect(row).toHaveLength(5);
  });

});
