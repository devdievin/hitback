import { INITIAL_STATE } from "./contexts/ThemeContext";

type InitialStateType = typeof INITIAL_STATE;

type MenuTitleType = {
  id: string;
  text: string;
};

type TabMenuContentProps = {
  menu: string;
};
