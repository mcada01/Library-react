import { all, fork } from "redux-saga/effects";
import { watchBook } from "./bookSaga";
import { watchAuthor } from "./authorSaga";

export function* rootSaga() {
  yield all([fork(watchBook)]);
  yield all([fork(watchAuthor)]);
}
