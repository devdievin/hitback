import { DropdownState, StandardAction } from "../../types";
import dropdownMenuTypes from "./actionTypes";

// ############# REMOVER TODO O REDUCER DROPDOWN MENU
const INITIAL_STATE: DropdownState = {
  isOpenDropHttpMethod: false,
  isOpenDropEnv: false,
};

const dropdownReducer = (
  state = INITIAL_STATE,
  action: StandardAction
): DropdownState => {
  switch (action.type) {
    case dropdownMenuTypes.TOGGLE_DROP_HTTP_METHOD:
      return {
        ...state,
        isOpenDropHttpMethod: action.payload,
      };

    default:
      return state;
  }
};

export default dropdownReducer;
