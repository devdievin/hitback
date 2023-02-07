import { createContext, useCallback, useReducer } from "react";
import { ThemeContextActions } from "../enums/ThemeContextActions";
import { IDispatchAction } from "../interfaces/IDispatchAction";
import { IThemeProvider } from "../interfaces/IThemeProvider";
import { InitialStateType } from "../types";

export const INITIAL_STATE = {
  themeName: "dark",
};

// 1 Create the Context
export const ThemeContext = createContext({
  state: INITIAL_STATE,
  toggleTheme: () => {},
});

//2 Create the Reducer
const ThemeReducer = (
  state = INITIAL_STATE,
  action: IDispatchAction
): InitialStateType => {
  switch (action.type) {
    case ThemeContextActions.ToggleTheme:
      return {
        ...state,
        themeName: state.themeName === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
};

// 3 Create the Provider
export const ThemeContextProvider = ({ children }: IThemeProvider) => {
  const [state, dispatch] = useReducer(ThemeReducer, INITIAL_STATE);

  const toggleTheme = useCallback(() => {
    dispatch({
      type: ThemeContextActions.ToggleTheme,
      payload: "",
    });
  }, [dispatch]);

  return (
    <ThemeContext.Provider value={{ state, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
