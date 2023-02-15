import errorsActionTypes from "./actionTypes";

const INITIAL_STATE = {
  errorState: {
    status: false,
    message: "Standard error message!",
  },
};

const errorReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case errorsActionTypes.SHOW_ERROR:
      return {
        ...state,
        errorState: action.payload,
      };

    default:
      return state;
  }
};

export default errorReducer;
