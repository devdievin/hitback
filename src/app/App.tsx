import { ThemeProvider } from "styled-components";
import { useThemeContext } from "../hooks/useThemeContext";
import { useSelector } from "react-redux";
import { RootReducer } from "../redux/rootReducer";

// Components
import Header from "../components/header";
import Footer from "../components/footer";
import Section from "../components/section";
import Workspace from "../components/workspace";
import ManageRequest from "../components/manageRequest";
import ResponseInfo from "../components/responseInfo";
import Error from "../components/error";

// Styles
import { GlobalStyles } from "../styles/global";
import { theme } from "../styles/theme";
import { Main } from "./styles";
import { useEffect } from "react";

function App() {
  const { state } = useThemeContext();

  const { status, message } = useSelector(
    (rootReducer: RootReducer) => rootReducer.errorReducer
  );

  const currentTheme = (theme as any)[state.themeName];

  useEffect(() => {
    function handleKeyDown(event: any) {
      if (event.ctrlKey && event.key === "c") {
        console.log("Ctrl + C pressed");
        // Do something when "Ctrl + C" is pressed
      }

      if (event.ctrlKey && event.key === "Enter") {
        console.log("Ctrl + Enter pressed");
      }

      if (event.ctrlKey && event.key === "y") {
        console.log("Ctrl + y pressed");
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <ThemeProvider theme={currentTheme}>
      <div>
        <GlobalStyles />
        <Header />
        <Main>
          <Section>
            <Workspace />
          </Section>
          <Section>
            <ManageRequest />
          </Section>
          <Section>
            <ResponseInfo />
          </Section>
          {status && <Error message={message} />}
        </Main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
