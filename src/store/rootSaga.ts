import {fork} from '@redux-saga/core/effects';
import {newsSaga} from './news';

export default function* rootSaga() {
  yield fork(newsSaga);
}
