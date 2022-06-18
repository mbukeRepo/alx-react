import courseReducer from "./courseReducer";
import {Map} from 'immutable';
import notificationReducer, {
  initialNotificationState,
} from "./notificationReducer";
import uiReducer, { initialUIState } from "./uiReducer";

export const initialState = {
  courses: [],
  notifications: Map(initialNotificationState),
  ui: Map(initialUIState),
};

const rootReducer = {
  courses: courseReducer,
  notifications: notificationReducer,
  ui: uiReducer,
};
export default rootReducer;
