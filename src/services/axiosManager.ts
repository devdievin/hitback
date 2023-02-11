import axios from "axios";
import { HttpMethods } from "../enums/HttpMethods";

export default async function axiosManager(
  httpMethod: string,
  url: string,
  data?: any
) {
  const axios_instance = axios.create({
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    timeout: 10000,
    maxContentLength: Infinity,
    maxBodyLength: Infinity,
  });

  axios_instance.interceptors.request.use((config) => {
    config.headers["request-startTime"] = new Date().getTime();
    return config;
  });

  axios_instance.interceptors.response.use(
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

  switch (httpMethod) {
    case HttpMethods.GET:
      return await axios_instance.get(url);
    case HttpMethods.POST:
      return await axios_instance.post(url, JSON.parse(data));
    case HttpMethods.PUT:
      return await axios_instance.put(url, JSON.parse(data));
    case HttpMethods.DEL:
      return await axios_instance.delete(url);
  }
}
