import { AuthorizationTypes } from "../../enums/AuthorizationTypes";
import { BodyTypes } from "../../enums/BodyTypes";
import { HttpMethods } from "../../enums/HttpMethods";
import { RequestState, StandardAction } from "../../types";
import requestTypes from "./requestTypes";

const INITIAL_STATE: RequestState = {
  data: [],
  headers: {},
  status: 100,
  httpMethod: HttpMethods.GET,
  bodyType: BodyTypes.NONE,
  authorizationType: AuthorizationTypes.NONE,
  authorizationToken: "",
  bodyData: "",
  requestHeaders: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  isLoading: false,
};

const requestReducer = (
  state = INITIAL_STATE,
  action: StandardAction
): RequestState => {
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
    case requestTypes.SET_AUTHORIZATION_TYPE:
      return {
        ...state,
        authorizationType: action.payload,
      };
    case requestTypes.SET_AUTHORIZATION_TOKEN:
      return {
        ...state,
        authorizationToken: action.payload,
      };
    case requestTypes.SET_BODY_DATA:
      return {
        ...state,
        bodyData: action.payload,
      };
    case requestTypes.SET_REQUEST_HEADERS:
      return {
        ...state,
        requestHeaders: action.payload,
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
