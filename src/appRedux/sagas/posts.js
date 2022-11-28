import {
  all,
  call,
  fork,
  put,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";

import { getData } from "../../api";
import {
  getAllCommentByPostIdSuccess,
  getAllPostSuccess,
  getDetailPostSuccess,
} from "../actions/posts";
import * as ActionType from "../constants/posts";

function* getAllPostSagas({ payload }) {
  try {
    const result = yield call(
      getData,
      "https://jsonplaceholder.typicode.com/posts"
    );
    yield put(getAllPostSuccess([...result]));
  } catch (error) {
    console.info(error);
  }
}

function* watchGetAllPost() {
  yield takeEvery(ActionType.GET_ALL_POST, getAllPostSagas);
}

function* getDetailPostSagas({ payload }) {
  try {
    console.info(payload, "M<<< detail");
    const result = yield call(
      getData,
      `https://jsonplaceholder.typicode.com/posts/${payload?.id}`
    );
    yield put(getDetailPostSuccess({ ...result }));
  } catch (error) {
    console.info(error);
  }
}

function* watchGetDetailPost() {
  yield takeEvery(ActionType.GET_DETAIL_POST, getDetailPostSagas);
}

function* getAllCommentByPostIdSagas({ payload }) {
  try {
    console.info(payload, "M<<< comments");

    const result = yield call(
      getData,
      `https://jsonplaceholder.typicode.com/posts/${payload.id}/comments`
    );
    yield put(getAllCommentByPostIdSuccess([...result]));
  } catch (error) {
    console.info(error);
  }
}

function* watchGetAllCommentByPostId() {
  yield takeEvery(
    ActionType.GET_ALL_COMMENT_BY_POST_ID,
    getAllCommentByPostIdSagas
  );
}
export default function* rootSaga() {
  yield all([
    fork(watchGetAllPost),
    fork(watchGetDetailPost),
    fork(watchGetAllCommentByPostId),
  ]);
}
