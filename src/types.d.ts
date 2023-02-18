import { INITIAL_STATE } from "./contexts/ThemeContext";

type InitialStateType = typeof INITIAL_STATE;

type MenuTitleType = {
  id: string;
  text: string;
};

type TabMenuContentProps = {
  menu: string;
};

type RequestHeadersType = {
  contentType: string | undefined;
  authorization: string | undefined;
  accept: string | undefined;
  cacheControl: string | undefined;
  userAgent: string | undefined;
};

type ErrorContextType = {
  isError: boolean;
  message: string;
};

// ## Hitback Request/Response Types
type HitbackHeaderValue = string | string[] | number | boolean | null | unknown;

type HitbackHeaders = HeadersInit & {
  [key: string]: HitbackHeaderValue;
};

type HitbackRequestHeadersList =
  | "Accept"
  | "Content-Length"
  | "User-Agent"
  | "Content-Encoding"
  | "Authorization";

type ContentType =
  | "text/html"
  | "text/plain"
  | "multipart/form-data"
  | "application/json"
  | "application/x-www-form-urlencoded"
  | "application/octet-stream";

export type HitbackRequestHeaders = Partial<
  HitbackHeaders & {
    [Key in HitbackRequestHeadersList]: HitbackHeaderValue;
  } & {
    "Content-Type": ContentType;
  }
>;

export interface IHitbackResponse {
  data: any;
  status: number;
  statusText: string;
  headers: HitbackHeaders;
  config: Record<string, unknown>;
}
