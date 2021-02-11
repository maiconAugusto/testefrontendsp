import * as COURSE_TYPE from '../../types/courses/index';

export function RESQUEST(payload) {
  return {
    type: COURSE_TYPE.REQUEST_COURSES,
    payload,
  };
}
export function SUCCESS_REQUEST(payload) {
  return {
    type: COURSE_TYPE.SUCCESS_REQUEST_COURSES,
    payload,
  };
}
export function FAILURE_REQUEST(payload) {
  return {
    type: COURSE_TYPE.FAILURE_REQUEST_COURSES,
    payload,
  };
}
