import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import blokchain from "./reducers/blokchain";
import { loader } from "./reducers/loader";
import { dataSource } from "./reducers/dataSource";

const rootReducer = combineReducers({
  blokchain,
  loader,
  dataSource
});

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  return {
    ...createStore(rootReducer, composeWithDevTools(middleWareEnhancer)),
    runSaga: sagaMiddleware.run
  };
}
