import { combineReducers } from "redux";
import tabMenuReducer from "./tabMenu/reducer";

const rootReducer = combineReducers({ tabMenuReducer });

export default rootReducer;
