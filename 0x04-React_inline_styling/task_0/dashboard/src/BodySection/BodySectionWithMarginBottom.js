import BodySection from './BodySection';
import "./BodySectionWithMarginBottom.css";
import React from 'react';
import PropTypes from 'prop-types';


class BodySectionWithMarginBottom extends React.Component {
  render() {
    return (
      <BodySection {...this.props} />
    );
  }
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string
};

export default BodySectionWithMarginBottom;


