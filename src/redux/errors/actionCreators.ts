import errorsActionTypes from "./actionTypes";

export const showErrorAction = (payload: any) => {
  return {
    type: errorsActionTypes.SHOW_ERROR,
    payload: payload,
  };
};
