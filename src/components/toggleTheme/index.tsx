import { useLayoutEffect, useState } from "react";
import { useThemeContext } from "../../hooks/useThemeContext";

// Components
import MoonIcon from "../svgIcon/moonIcon";
import SunIcon from "../svgIcon/sunIcon";

// Styles
import { Toggle, ToggleButton, ToggleIcon } from "./styles";
import { colors } from "../../styles/colors";

type ToggleThemeProps = {
  onClick: () => void;
};

export default function ToggleTheme({ onClick }: ToggleThemeProps) {
  const { state } = useThemeContext();
  const [element, setElement] = useState<JSX.Element | null>(null);

  useLayoutEffect(() => {
    switch (state.themeName) {
      case "dark":
        setElement(
          <>
            <Toggle />
            <ToggleIcon>
              <MoonIcon width={26} height={26} fill={colors.darkTwo} />
            </ToggleIcon>
          </>
        );
        break;
      case "light":
        setElement(
          <>
            <ToggleIcon>
              <SunIcon width={26} height={26} fill={colors.softWhite} />
            </ToggleIcon>
            <Toggle />
          </>
        );
        break;
    }
  }, [state.themeName]);

  return <ToggleButton onClick={onClick}>{element}</ToggleButton>;
}
