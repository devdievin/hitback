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
