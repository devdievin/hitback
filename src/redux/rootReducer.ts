import { combineReducers } from "redux";
import requestReducer from "./request/reducer";
import tabMenuReducer from "./tabMenu/reducer";

const rootReducer = combineReducers({ tabMenuReducer, requestReducer });

export default rootReducer;
