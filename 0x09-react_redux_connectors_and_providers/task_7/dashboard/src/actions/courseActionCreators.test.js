import { selectCourse, unSelectCourse, fetchCourses, setCourses } from './courseActionCreators';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
const fetchMock = require('fetch-mock').sandbox();

const middleware = [thunk];
const mockStore = configureStore(middleware);

describe('action creators', () => {
  it('selectCourse', () => {
    const result = selectCourse(1);
    expect(result).toEqual({ type: SELECT_COURSE, index: 1 });
  });

  it('unSelectCourse', () => {
    const result = unSelectCourse(1);
    expect(result).toEqual({ type: UNSELECT_COURSE, index: 1 });
  });
  it("fetchCourses", () => {
    const store = mockStore({});
    fetchMock.restore();
    fetchMock.get("http://localhost:3001/", {});
    return store.dispatch(fetchCourses()).then(() => {
        const actions = store.getActions();
        expect(actions[0].type).toEqual(FETCH_COURSE_SUCCESS);
    })
  })
});
