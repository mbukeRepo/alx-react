import { shallow } from 'enzyme';
import Notifications from './Notifications';

const wrapper = shallow(<Notifications/>);

it('renders without crashing', () => {
  shallow(<Notifications/>);
});

it('Notification Item with html', () => {
  const wrapper = shallow(<Notifications displayDrawer />);
  const nItem = wrapper.find('NotificationItem');
  expect(nItem).toBeDefined();
  expect(nItem.first().html()).toEqual(
    '<li data-priority="default">New course available</li>'
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

