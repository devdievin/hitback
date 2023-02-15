import { combineReducers } from "redux";

// Reducers
import dropdownReducer from "./dropdownMenu/reducer";
import errorReducer from "./errors/reducer";
import modalReducer from "./modal/reducer";
import requestReducer from "./request/reducer";
import tabMenuReducer from "./tabMenu/reducer";

const rootReducer = combineReducers({
  tabMenuReducer,
  requestReducer,
  dropdownReducer,
  modalReducer,
  errorReducer,
});

export default rootReducer;
