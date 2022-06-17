import { Map } from "immutable";

import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from "../actions/courseActionTypes";


export const initialCourseState = [];

const courseReducer = (state = initialCourseState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      return action.data.map(course => {
        course.isSelected = false;
        return course
      });

    case SELECT_COURSE:
      const newState = [...state];
      newState[action.index] = true;
      return state.map(course => {
        if (course.id === action.index)
             course.isSelected = true
        return course
      });

    case UNSELECT_COURSE:
      return state.map(course => {
        if(course.id === action.index)
            course.isSelected = false
        return course
      })
    default:
      break;
  }
  return state;
};

export default courseReducer;
