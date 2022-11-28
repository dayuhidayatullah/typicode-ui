import createSagaMidddleWare from "redux-saga";
import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  legacy_createStore,
} from "redux";
import thunk from "redux-thunk";
import createRootReducer from "../reducers";
import reducer from "../reducers";
import rootSaga from "../sagas";
const sagaMiddleware = createSagaMidddleWare();

const store = createStore(reducer, applyMiddleware(thunk, sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
