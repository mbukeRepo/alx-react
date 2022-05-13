import Header from './Header.js';
import { shallow } from 'enzyme';

const HeaderWrapper = shallow(<Header/>);

describe('<Header/>', () => {
  it('checks if header runs without crashing', () => {
    shallow(<Header/>);
  });

  it('check if h1 is rendered', () => {
    expect(HeaderWrapper.find('header h1')).toEqual(true);
  });

  it('checks if img is rendered', () => {
    expect(HeaderWrapper.find('header img')).toEqual(true);
  });
});
