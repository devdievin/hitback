import { AxiosHeaders } from "axios";
import { BodyTypes } from "../../enums/BodyTypes";
import { IRequest } from "../../interfaces/IRequest";
import requestTypes from "./requestTypes";

const INITIAL_STATE: IRequest = {
  data: [],
  headers: new AxiosHeaders(undefined),
  status: 100,
  bodyType: BodyTypes.NONE,
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
    case requestTypes.SET_BODY_TYPE:
      return {
        ...state,
        bodyType: action.payload,
      };

    default:
      return state;
  }
};

export default requestReducer;
