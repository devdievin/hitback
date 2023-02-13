import modalActionTypes from "./actionTypes";

const INITIAL_STATE = {
  modalIsOpen: false,
};

const modalReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case modalActionTypes.TOGGLE_MODAL:
      return {
        ...state,
        modalIsOpen: action.payload,
      };

    default:
      return state;
  }
};

export default modalReducer;