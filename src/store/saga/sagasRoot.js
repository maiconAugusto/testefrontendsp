import {all} from 'redux-saga/effects';

import course from './courses/index';

export default function* rootSaga() {
  return yield all([course]);
}
