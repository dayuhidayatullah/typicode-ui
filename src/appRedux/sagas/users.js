import {
  all,
  call,
  fork,
  put,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import { getData } from "../../api";
import { getDataUserSuccess } from "../actions/users";
import * as ActionType from "../constants/users";
function* getDataUserSaga({ payload }) {
  try {
    const result = yield call(
      getData,
      "https://jsonplaceholder.typicode.com/users"
    );
    yield put(getDataUserSuccess({ data: result, username: payload.username }));
  } catch (error) {
    console.info(error);
  }
}

function* watchGetDataUser() {
  yield takeEvery(ActionType.GET_DATA_USER, getDataUserSaga);
}

export default function* rootSaga() {
  yield all([fork(watchGetDataUser)]);
}
