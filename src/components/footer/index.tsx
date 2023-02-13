import { useState } from "react";
import { useThemeContext } from "../../hooks/useThemeContext";

// Components
import HeartIcon from "../svgIcon/heartIcon";
import SettingsIcon from "../svgIcon/settingsIcon";
import Preferences from "../preferences";

// Styles
import { ButtonPreferences, Div, FooterContainer } from "./styles";
import { colors } from "../../styles/colors";

export default function Footer() {
  const { state } = useThemeContext();
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    console.log("open modal");
    setIsOpen(true);
  };

  return (
    <FooterContainer>
      <ButtonPreferences onClick={handleClick}>
        <SettingsIcon
          width={20}
          height={20}
          stroke={state.themeName === "dark" ? colors.white : colors.darkTwo}
        />
        Preferences
      </ButtonPreferences>
      <Div>
        Made with
        <HeartIcon width={20} height={20} fill={colors.blue} />
        by Dievin
      </Div>
      {isOpen && <Preferences setModalStatus={setIsOpen} />}
    </FooterContainer>
  );
}
