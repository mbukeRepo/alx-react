import {shallow} from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

describe('BodySectionWithMarginBottom', () => {
  it('testing if BodySection is rendered correctly', () => {
        const wrapper = shallow(
          <BodySectionWithMarginBottom title="test title">
           <p>test children node</p>
          </BodySectionWithMarginBottom>
        );

        expect(wrapper.find(BodySection).exists()).toEqual(true);
        expect(wrapper.find(BodySection).prop('title')).toBe('test title');
  });

});
