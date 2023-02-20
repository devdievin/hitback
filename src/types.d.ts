import { INITIAL_STATE } from "./contexts/ThemeContext";

type InitialStateType = typeof INITIAL_STATE;

type StandardAction = {
  type: string;
  payload: any;
};

type RequestState = {
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
};

type ModalState = {
  modalIsOpen: boolean;
};

type ErrorState = {
  status: boolean;
  message: string;
};

type DropdownState = {
  isOpenDropHttpMethod: boolean;
  isOpenDropEnv: boolean;
};

type TabMenuState = {
  menuRequestSelected: MenuTitleType;
  menuResponseSelected: MenuTitleType;
};

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
  [key: string]: any;
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
