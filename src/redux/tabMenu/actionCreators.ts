import { MenuTitleType } from "../../types";
import tabMenuActionTypes from "./actionTypes";

export const changeMenuRequest = ({ id, text }: MenuTitleType) => {
  return {
    type: tabMenuActionTypes.CHANGE_MENU_REQUEST,
    payload: { id, text },
  };
};

export const changeMenuResponse = ({ id, text }: MenuTitleType) => {
  return {
    type: tabMenuActionTypes.CHANGE_MENU_RESPONSE,
    payload: { id, text },
  };
};
