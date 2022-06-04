import React from 'react';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import PropTypes from 'prop-types';
import {StyleSheet, css} from 'aphrodite';

const CourseList = ({listCourses}) => {
  return (
    <table className={css(styles.table)}>
      <thead>
        <CourseListRow textFirstCell='Available courses' isHeader={true} />
        <CourseListRow
          textFirstCell='Course name'
          textSecondCell='Credit'
          isHeader={true}
        />
      </thead>
      <tbody>
        {
          listCourses.length === 0 && 
          (
            <CourseListRow
              textFirstCell='No course available yet'
              isHeader={false}
            />
          )
        }
        {
          listCourses.map(course => (
             <CourseListRow
               key={course.id}
               textFirstCell={course.name}
               textSecondCell={course.credit}
               isHeader={false}
             />
          ))
        }
      </tbody>
    </table>
  );
};

CourseList.defaultProps = {
  listCourses: []
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

const styles = StyleSheet.create({
  table :{
    width: '100%',
    borderCollapse: 'collapse',
    border: '1.3px solid rgb(63, 58, 58)',
    maxWidth: '890px',
    margin: 'auto',
    padding: '15px',
  }
});
export default CourseList;
