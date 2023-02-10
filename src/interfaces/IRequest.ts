import { AxiosHeaders } from "axios";

export interface IRequest {
  data: [];
  headers: AxiosHeaders;
  status: number;
  bodyType: string;
}
