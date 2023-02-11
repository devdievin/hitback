import { combineReducers } from "redux";

// Reducers
import dropdownReducer from "./dropdownMenu/reducer";
import requestReducer from "./request/reducer";
import tabMenuReducer from "./tabMenu/reducer";

const rootReducer = combineReducers({
  tabMenuReducer,
  requestReducer,
  dropdownReducer,
});

export default rootReducer;
