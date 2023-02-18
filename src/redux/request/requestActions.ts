import { HitbackRequestHeaders, IHitbackResponse } from "../../types";
import requestTypes from "./requestTypes";

export const getRequestAction = (payload: IHitbackResponse) => {
  return {
    type: requestTypes.SEND,
    payload,
  };
};

export const setHttpMethod = (method: string) => {
  return {
    type: requestTypes.SET_HTTP_METHOD,
    payload: method,
  };
};

export const setBodyType = (type: string) => {
  return {
    type: requestTypes.SET_BODY_TYPE,
    payload: type,
  };
};

export const setBodyData = (data: string) => {
  return {
    type: requestTypes.SET_BODY_DATA,
    payload: data,
  };
};

export const setHitbackHeaders = (headers: HitbackRequestHeaders) => {
  return {
    type: requestTypes.SET_REQUEST_HEADERS,
    payload: headers,
  };
};

export const setIsLoading = (status: boolean) => {
  return {
    type: requestTypes.SET_IS_LOADING,
    payload: status,
  };
};
