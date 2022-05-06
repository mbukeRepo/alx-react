import Notifications from "./Notifications.js"
import {shallow} from "enzyme";

const NotsWrapper = shallow(<Notifications/>);

it('render Notification without crashing', () => {
  shallow(<Notifications/>);
});

it('renders three li children', () => {
  expect(NotsWrapper.find('li').children().length).toEqual(3);
});

it('render p element', () => {
  expect(
    NotsWrapper.containsMatchingElement(<p>Here is the list of notifications</p>)
  )
  .toBeTruthy();
});
