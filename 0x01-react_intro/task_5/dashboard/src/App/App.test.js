import App from './App';
import {shallow} from "enzyme";

const AppWrapper = shallow(<App/>);

it('App renders without crashing', () => {
  shallow(<App/>);
});


it('App contains .App-header', () => {
  expect(AppWrapper.find('header.App-header').exists()).toEqual(true);
});


it('App contains .App-body', () => {
  expect(AppWrapper.find('main.App-body').exists()).toEqual(true);
});


it('App contains .App-footer', () => {
  expect(AppWrapper.find('footer.App-footer').exists()).toEqual(true);
});


