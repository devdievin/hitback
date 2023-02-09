import { AxiosResponse } from "axios";
import { IRequest } from "../../interfaces/IRequest";
import requestTypes from "./requestTypes";

export const getRequestAction = (payload: AxiosResponse) => {
  return {
    type: requestTypes.SEND,
    payload,
  };
};
