import BodySection from './BodySection';
import { StyleSheet, css } from 'aphrodite';
import React from 'react';
import PropTypes from 'prop-types';


class BodySectionWithMarginBottom extends React.Component {
  render() {
    return (
      <BodySection {...this.props} styles={css(styles.BodySection)} />
    );
  }
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string
};

const styles = StyleSheet.create({
  BodySection: {
    marginBottom: '40px',
    minWidth: "789px",
    maxWidth: "800px"
  }
});
export default BodySectionWithMarginBottom;


