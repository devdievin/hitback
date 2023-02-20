import { HttpMethods } from "../enums/HttpMethods";
import {
  HitbackHeaders,
  HitbackRequestHeaders,
  IHitbackResponse,
} from "../types";
import { formatResponseDuration } from "../utils/formatter";

export default async function apiRequest(
  httpMethod: string,
  url: string,
  bodyData: string,
  headers: HitbackRequestHeaders
) {
  async function hitback(
    url: string,
    options?: RequestInit
  ): Promise<IHitbackResponse> {
    try {
      const startTime = performance.now();
      const response = await fetch(url, options);
      const endTime = performance.now();
      const duration = endTime - startTime;
      const responseCustomHeader = new Response(response.body, response);
      responseCustomHeader.headers.set(
        "X-Request-Duration",
        formatResponseDuration(duration)
      );
      return await fetchToAxios(responseCustomHeader);
    } catch (error) {
      // console.error("HITBACK error:", error.message);
      return {
        data: { ERROR: error.message },
        status: 500,
        statusText: "",
        headers: headers,
        config: {},
      };
    }
  }

  async function fetchToAxios<T>(
    fetchResponse: Response
  ): Promise<IHitbackResponse> {
    const data = await fetchResponse.json();
    const status = fetchResponse.status;
    const statusText = fetchResponse.statusText;
    const headers: Record<string, string> = {};
    fetchResponse.headers.forEach((value, name) => {
      headers[name] = value;
    });
    const config: Record<string, unknown> = {};
    return { data, status, statusText, headers, config };
  }

  let options: RequestInit = {
    method: httpMethod,
    headers: headers as HitbackHeaders,
    mode: "cors",
    cache: "default",
  };

  if (httpMethod === HttpMethods.POST || httpMethod === HttpMethods.PUT) {
    options = {
      method: httpMethod,
      headers: headers as HitbackHeaders,
      mode: "cors",
      cache: "default",
      body: JSON.stringify(JSON.parse(bodyData)),
    };
  }

  return hitback(url, options);
}
