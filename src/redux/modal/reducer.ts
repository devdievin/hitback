import { ModalState, StandardAction } from "../../types";
import modalActionTypes from "./actionTypes";

const INITIAL_STATE: ModalState = {
  modalIsOpen: false,
};

const modalReducer = (
  state = INITIAL_STATE,
  action: StandardAction
): ModalState => {
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
