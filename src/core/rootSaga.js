import { all } from "redux-saga/effects";
import newsSaga from "../components/organism/News/News.saga";

export default function* rootSaga() {
  yield all([newsSaga()]);
}
