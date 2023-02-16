import { createContext, useState } from "react";
import { IThemeProvider } from "../interfaces/IThemeProvider";

export const INITIAL_STATE = {
  themeName: "dark",
};

// 1 Create context
export const ThemeContext = createContext({
  state: INITIAL_STATE,
  toggleTheme: () => {},
});

// 2 Create provider
export const ThemeContextProvider = ({ children }: IThemeProvider) => {
  const [state, setState] = useState({
    themeName: localStorage.getItem("theme") || "dark",
  });

  const toggleTheme = () => {
    const theme = state.themeName === "dark" ? "light" : "dark";
    setState({ themeName: theme });
    localStorage.setItem("theme", theme);
  };

  return (
    <ThemeContext.Provider value={{ state, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
