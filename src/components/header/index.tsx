import { useThemeContext } from "../../hooks/useThemeContext";

// Components
import LogoIcon from "../svgIcon/logoIcon";
import ToggleTheme from "../toggleTheme";

// Styles
import { HeaderContainer, TextWorkspace } from "./styles";

export default function Header() {
  const { toggleTheme } = useThemeContext();

  return (
    <HeaderContainer>
      <LogoIcon width={46} height={46} />

      <TextWorkspace>Hitback/My Workspace</TextWorkspace>

      <ToggleTheme onClick={toggleTheme} />
    </HeaderContainer>
  );
}
