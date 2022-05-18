import React from 'react';
import PropTypes from 'prop-types';

const CourseListRow = ({isHeader, textFirstCell, textSecondCell}) => {
  let th = <th colSpan='2' style={{backgroundColor: '#deb5b545'}}>{textFirstCell}</th>;
  let td = (
     <React.Fragment>
        <td  style={{backgroundColor: '#f5f5f5ab'}}>{textFirstCell}</td>
        <td  style={{backgroundColor: '#f5f5f5ab'}}>{textSecondCell}</td>
      </React.Fragment>
  );
  if(textSecondCell) {
    th = (
      <React.Fragment>
        <th  style={{backgroundColor: '#deb5b545'}}>{textFirstCell}</th>
        <th  style={{backgroundColor: '#deb5b545'}}>{textSecondCell}</th>
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
