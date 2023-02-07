import { ThemeContextActions } from "../enums/ThemeContextActions";

export interface IDispatchAction {
  type: ThemeContextActions;
  payload: any;
}
