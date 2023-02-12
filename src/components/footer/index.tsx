import { useThemeContext } from "../../hooks/useThemeContext";

// Components
import HeartIcon from "../svgIcon/heartIcon";
import SettingsIcon from "../svgIcon/settingsIcon";

// Styles
import { Div, FooterContainer } from "./styles";
import { colors } from "../../styles/colors";

export default function Footer() {
  const { state } = useThemeContext();

  return (
    <FooterContainer>
      <Div>
        <SettingsIcon
          width={20}
          height={20}
          stroke={state.themeName === "dark" ? colors.white : colors.darkTwo}
        />
        Preferences
      </Div>
      <Div>
        Made with
        <HeartIcon width={20} height={20} fill={colors.blue} />
        by Dievin
      </Div>
    </FooterContainer>
  );
}
