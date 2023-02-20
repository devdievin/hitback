import { ErrorState } from "../../types";
import errorsActionTypes from "./actionTypes";

export const showErrorAction = ({ status, message }: ErrorState) => {
  return {
    type: errorsActionTypes.SHOW_ERROR,
    payload: { status, message },
  };
};
