import * as COURSE_TYPE from '../../types/courses/index';

const INITIAL_STATE = {
  list: [],
  loading: false,
  error: false,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case COURSE_TYPE.REQUEST_COURSES: {
      const newState = {...state, action};
      newState.loading = true;
      newState.error = false;
      return newState;
    }
    case COURSE_TYPE.SUCCESS_REQUEST_COURSES: {
      const newState = {...state, action};
      newState.loading = false;
      newState.list = action.payload;
      return newState;
    }
    case COURSE_TYPE.FAILURE_REQUEST_COURSES: {
      const newState = {...state, action};
      newState.loading = false;
      newState.error = null;
      return newState;
    }
    default: {
      return state;
    }
  }
}
