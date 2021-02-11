import {all, takeLatest, call, put} from 'redux-saga/effects';
import api from '../../../services/index';
import * as COURSE_TYPES from '../../types/courses/index';
import * as COURSE_ACTION from '../../actions/course';

function* getListCourse() {
  try {
    const response = yield call(api.get, 'products');
    yield put(COURSE_ACTION.SUCCESS_REQUEST(response.data));
  } catch (error) {
    yield put(COURSE_ACTION.FAILURE_REQUEST());
  }
}
export default all([takeLatest(COURSE_TYPES.REQUEST_COURSES, getListCourse)]);
