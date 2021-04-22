import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import thunk, { ThunkMiddleware } from "redux-thunk";

export default createStore(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware)
);
