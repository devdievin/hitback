import { ErrorState, StandardAction } from "../../types";
import errorsActionTypes from "./actionTypes";

const INITIAL_STATE: ErrorState = {
  // errorState: {
  status: false,
  message: "Standard error message!",
  // },
};

const errorReducer = (
  state = INITIAL_STATE,
  action: StandardAction
): ErrorState => {
  switch (action.type) {
    case errorsActionTypes.SHOW_ERROR:
      return {
        ...state,
        status: action.payload.status,
        message: action.payload.message,
      };

    default:
      return state;
  }
};

export default errorReducer;
