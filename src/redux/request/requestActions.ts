import { AxiosResponse } from "axios";
import requestTypes from "./requestTypes";

export const getRequestAction = (payload: AxiosResponse) => {
  return {
    type: requestTypes.SEND,
    payload,
  };
};

export const setBodyType = (type: string) => {
  return {
    type: requestTypes.SET_BODY_TYPE,
    payload: type,
  };
};
