import { AxiosHeaders } from "axios";
import { BodyTypes } from "../enums/BodyTypes";
import { HttpMethods } from "../enums/HttpMethods";

export interface IRequest {
  data: [];
  headers: AxiosHeaders;
  status: number;
  httpMethod: HttpMethods;
  bodyType: BodyTypes;
  bodyData: string;
}
