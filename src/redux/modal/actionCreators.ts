import modalActionTypes from "./actionTypes";

export const toggleModal = (payload: boolean) => {
  return {
    type: modalActionTypes.TOGGLE_MODAL,
    payload: payload,
  };
};
