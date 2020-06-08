import { takeLatest, call, put, select } from "redux-saga/effects";
import * as types from "./News.constant";

function* getNews() {
  let pageProps = yield select((state) => state.customers.pageProps);

  try {
    const response = yield call(fetch, "news", {
      method: "get",
      params: pageProps,
    });
    if (response.data) {
      yield put({
        type: types.GET_NEWS_REQUESTING_SUCCESS,
        response: response,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

export default function* watchNews() {
  yield takeLatest(types.GET_NEWS_REQUESTING, getNews);
}
