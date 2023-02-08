import { ThemeProvider } from "styled-components";
import { useThemeContext } from "../hooks/useThemeContext";

// Components
import Header from "../components/header";
import Footer from "../components/footer";
import Section from "../components/section";
import Workspace from "../components/workspace";
import ManageRequest from "../components/manageRequest";
import ResponseInfo from "../components/responseInfo";

// Styles
import { GlobalStyles } from "../styles/global";
import { theme } from "../styles/theme";
import { Styles } from "./styles";

function App() {
  const { state } = useThemeContext();

  const currentTheme = (theme as any)[state.themeName];

  return (
    <ThemeProvider theme={currentTheme}>
      <div>
        <GlobalStyles />
        <Header />
        <Styles.Main>
          <Section>
            <Workspace />
          </Section>
          <Section>
            <ManageRequest />
          </Section>
          <Section>
            <ResponseInfo />
          </Section>
        </Styles.Main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
