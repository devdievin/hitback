import dropdownMenuTypes from "./actionTypes";

const INITIAL_STATE = {
  isOpenDropHttpMethod: false,
  isOpenDropEnv: false,
};

const dropdownReducer = (state = INITIAL_STATE, action: any) => {
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
