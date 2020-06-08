import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

export default function configureStore(preloadedStore) {
  const sagaMiddleware = createSagaMiddleware();
  return {
    ...createStore(
      rootReducer,
      preloadedStore,
      applyMiddleware(sagaMiddleware)
    ),
    runSaga: sagaMiddleware.run(rootSaga),
  };
}
