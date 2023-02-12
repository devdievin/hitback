import { AxiosHeaders } from "axios";
import { BodyTypes } from "../../enums/BodyTypes";
import { HttpMethods } from "../../enums/HttpMethods";
import { IRequest } from "../../interfaces/IRequest";
import requestTypes from "./requestTypes";

const INITIAL_STATE: IRequest = {
  data: [],
  headers: new AxiosHeaders(undefined),
  status: 100,
  httpMethod: HttpMethods.GET,
  bodyType: BodyTypes.JSON,
  bodyData: "",
  isLoading: false,
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
    case requestTypes.SET_HTTP_METHOD:
      return {
        ...state,
        httpMethod: action.payload,
      };
    case requestTypes.SET_BODY_TYPE:
      return {
        ...state,
        bodyType: action.payload,
      };
    case requestTypes.SET_BODY_DATA:
      return {
        ...state,
        bodyData: action.payload,
      };
    case requestTypes.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export default requestReducer;
