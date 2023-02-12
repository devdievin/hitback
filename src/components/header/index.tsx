import { useThemeContext } from "../../hooks/useThemeContext";

// Components
import ToggleTheme from "../toggleTheme";

// Styles
import { HeaderContainer, Logo } from "./styles";

export default function Header() {
  const { toggleTheme } = useThemeContext();

  return (
    <HeaderContainer>
      <Logo>Logo</Logo>
      <div>
        <p>Hitback/My Workspace</p>
      </div>

      <div>
        <ToggleTheme onClick={toggleTheme} />
      </div>
    </HeaderContainer>
  );
}
