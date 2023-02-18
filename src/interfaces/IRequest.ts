// import { AxiosHeaders } from "axios";
import { AuthorizationTypes } from "../enums/AuthorizationTypes";
import { BodyTypes } from "../enums/BodyTypes";
import { HttpMethods } from "../enums/HttpMethods";
import { HitbackHeaders, HitbackRequestHeaders } from "../types";

export interface IRequest {
  data: [];
  headers: HitbackHeaders;
  status: number;
  httpMethod: HttpMethods;
  bodyType: BodyTypes;
  bodyData: string;
  authorizationType: AuthorizationTypes;
  authorizationToken: string;
  requestHeaders: HitbackRequestHeaders;
  isLoading: boolean;
}
