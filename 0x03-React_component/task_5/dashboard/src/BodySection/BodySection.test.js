import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('BodySection', () => {
  it('testing h2 and children', () => {
    const wrapper = shallow(
      <BodySection title="test title">
	<p>test children node</p>
      </BodySection>
    );
    const h2 = wrapper.find('h2');
    expect(h2).toHaveLength(1);
    const p = wrapper.find('p');
    expect(p).toHaveLength(1);
    expect(h2.text()).toEqual('test title');
    expect(p.text()).toEqual('test children node');
  });
});
