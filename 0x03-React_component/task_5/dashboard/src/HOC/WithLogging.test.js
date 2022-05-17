import WithLogging from './WithLogging';
import {mount} from 'enzyme';
import React from 'react';
import Login from '../Login/Login'


describe('testing WithLogging', () => {
  it('testing with pure html', () => {
    const Wrapper = WithLogging(() => <p>hello</p>);
    const instance = mount(<Wrapper/>).instance();
    expect(instance);
    const logSpy = jest.spyOn(console, 'log');
    instance.componentDidMount();
    expect(logSpy).toHaveBeenCalledWith('Component Component is mounted');
    jest.restoreAllMocks();
  });
  it('testing componentWillUnmount', () => {
    const Wrapper = WithLogging(Login);
    const instance = mount(<Wrapper/>).instance();
    const logSpy = jest.spyOn(console, 'log');
    instance.componentWillUnmount();
    expect(logSpy).toHaveBeenCalledWith('Component Login is going to unmount');
    jest.restoreAllMocks();
  });
  it('testing componentDidMount', () => {
    const Wrapper = WithLogging(Login);
    const instance = mount(<Wrapper/>).instance();
    const logSpy = jest.spyOn(console, 'log');
    instance.componentDidMount();
    expect(logSpy).toHaveBeenCalledWith('Component Login is mounted');
    jest.restoreAllMocks();
  });
});
