import changeNumber from "../reducer/DecInc";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  changeNumber,
});

export default rootReducer;
