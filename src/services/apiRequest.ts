import axios from "axios";
import { HttpMethods } from "../enums/HttpMethods";
import { RequestHeadersType } from "../types";

type AxiosConfigProps = {
  method: string;
  url: string;
  data?: any;
  headers: {};
};

export default async function apiRequest(
  httpMethod: string,
  url: string,
  bodyData: string,
  headers: RequestHeadersType
) {
  const api = axios.create({
    // headers: { Accept: "application/json", "Content-Type": "application/json" },
    timeout: 10000,
    maxContentLength: Infinity,
    maxBodyLength: Infinity,
  });

  api.interceptors.request.use((config) => {
    config.headers["request-startTime"] = new Date().getTime();
    return config;
  });

  api.interceptors.response.use(
    (response) => {
      const startTime = response.config.headers["request-startTime"];
      const endTime = new Date().getTime();
      const duration = endTime - startTime;
      response.headers["request-duration"] = formatResponseDuration(duration);
      return response;
    }
    // (error) => {
    //   return Promise.reject(error);
    // }
  );

  const formatResponseDuration = (duration: number): string => {
    const millisecond = 1000;
    const milliseconds_limit = 2000;

    if (duration > milliseconds_limit) {
      return `${(duration / millisecond).toFixed(2)}s`;
    }

    return `${duration}ms`;
  };

  let config: AxiosConfigProps = {
    method: httpMethod,
    url: url,
    headers: headers,
  };

  if (httpMethod === HttpMethods.POST || httpMethod === HttpMethods.PUT) {
    config = {
      method: httpMethod,
      url: url,
      data: JSON.parse(bodyData),
      headers: headers,
    };
  }

  // console.log("CONFIG:", config);

  return await api(config);
}
