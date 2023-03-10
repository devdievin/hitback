import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

// Store
import store from "./redux/store";

// Contexts
import { ThemeContextProvider } from "./contexts/ThemeContext";

//Components
import App from "./app/App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </Provider>
  </React.StrictMode>
);
