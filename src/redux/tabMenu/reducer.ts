import { StandardAction, TabMenuState } from "../../types";
import {
  menuRequestTitles,
  menuResponseTitles,
} from "../../utils/tabMenuTitles";
import tabMenuActionTypes from "./actionTypes";

const INITIAL_STATE: TabMenuState = {
  menuRequestSelected: menuRequestTitles[0],
  menuResponseSelected: menuResponseTitles[0],
};

const tabMenuReducer = (
  state = INITIAL_STATE,
  action: StandardAction
): TabMenuState => {
  switch (action.type) {
    case tabMenuActionTypes.CHANGE_MENU_REQUEST:
      return {
        ...state,
        menuRequestSelected: action.payload,
      };
    case tabMenuActionTypes.CHANGE_MENU_RESPONSE:
      return {
        ...state,
        menuResponseSelected: action.payload,
      };
    default:
      return state;
  }
};

export default tabMenuReducer;
