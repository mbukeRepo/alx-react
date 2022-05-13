import {shallow} from 'enzyme';
import NotificationItem from './NotificationItem';

const wrapper = 

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

it('renders correct html', () => {
  const wrapper = shallow(<NotificationItem html="<u>test</u>"/>);
  const li = wrapper.find('li');
  expect(li.html()).toEqual('<li><div><u>test</u></div></li>');
});


