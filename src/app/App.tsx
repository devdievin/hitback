import { ThemeProvider } from "styled-components";
import { useThemeContext } from "../hooks/useThemeContext";

// Components
import Header from "../components/header";
import Footer from "../components/footer";

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
        <Styles.Main>{/* anything here... */}</Styles.Main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
