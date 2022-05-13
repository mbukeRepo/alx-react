import { shallow } from 'enzyme';
import Notifications from './Notifications';

const wrapper = shallow(<Notifications/>);

it('renders without crashing', () => {
  shallow(<Notifications/>);
});

it('checking if NotificationItem is rendered', () => {
  const lis = wrapper.find('NotificationItem');
  expect(lis).toHaveLength(3);
  expect(lis.first().html()).toEqual(
    '<li data-priority="default">New course available</li>'
  );
});

