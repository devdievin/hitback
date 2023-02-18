// import { AxiosHeaders } from "axios";
import { BodyTypes } from "../enums/BodyTypes";
import { HttpMethods } from "../enums/HttpMethods";
import {
  HitbackHeaders,
  HitbackRequestHeaders,
  // RequestHeadersType,
} from "../types";

export interface IRequest {
  data: [];
  headers: HitbackHeaders;
  status: number;
  httpMethod: HttpMethods;
  bodyType: BodyTypes;
  bodyData: string;
  requestHeaders: HitbackRequestHeaders;
  isLoading: boolean;
}
