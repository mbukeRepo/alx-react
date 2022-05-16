import React from 'react';
import PropTypes from 'prop-types';

const CourseListRow = ({isHeader, textFirstCell, textSecondCell}) => {
  let th = <th colSpan='2'>{textFirstCell}</th>;
  let td = (
     <React.Fragment>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </React.Fragment>
  );
  if(textSecondCell) {
    th = (
      <React.Fragment>
        <th>{textFirstCell}</th>
        <th>{textSecondCell}</th>
      </React.Fragment>
    );
  };
  return  (
    <tr>
      {
         isHeader ? th : td
      }
    </tr>
  );
};


CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
};

export default CourseListRow;
