import { combineReducers } from "redux";
import auth from "./modules/auth/reducer";
import communication from "./modules/communication/reducer";

const reducers = {
  auth,
  communication,
};

export default combineReducers(reducers);
