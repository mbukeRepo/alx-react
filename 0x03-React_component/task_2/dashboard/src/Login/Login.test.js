import {shallow} from 'enzyme';
import Login from './Login.js';

const wrapper = shallow(<Login/>);

describe('<Login/>', () => {
  it('check login renders without crashing', () => {
    shallow(<Login/>);
  });

  it('check if login renders two input', () => {
    expect(wrapper.find('input')).toHaveLength(2);
  });

  it('check if login renders two labels', () => {
    expect(wrapper.find('label')).toHaveLength(2);
  });
});

