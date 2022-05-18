import React from 'react';
const WithLogging = (WrappedComponent) => {
  WithLogging.displayName = `WithLogging(${WrappedComponent.displayName || 'Component'})`;
  class Wrapper extends React.Component {
    componentDidMount() {
      console.log(`Component ${WrappedComponent.name || 'Component'} is mounted`);
    }
    componentWillUnmount() {
      console.log(`Component ${WrappedComponent.name || 'Component'} is going to unmount`);
    }
    render() {
      return (<WrappedComponent {...this.props} />);
    }
  };
  return Wrapper;
};

export default WithLogging;
