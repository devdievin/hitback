import { AxiosHeaders } from "axios";
import { IRequest } from "../../interfaces/IRequest";
import requestTypes from "./requestTypes";

const INITIAL_STATE: IRequest = {
  data: [],
  headers: new AxiosHeaders(undefined),
  status: 0,
};

const requestReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case requestTypes.SEND:
      return {
        ...state,
        data: action.payload.data,
        headers: action.payload.headers,
        status: action.payload.status,
      };

    default:
      return state;
  }
};

export default requestReducer;
