import { all } from "redux-saga/effects";
import User from "./users";
import Post from "./posts";

export default function* rootSaga(getState) {
  yield all([User(), Post()]);
}
