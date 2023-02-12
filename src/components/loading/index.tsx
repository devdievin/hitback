import { useThemeContext } from "../../hooks/useThemeContext";

// Components
import SyncIcon from "../svgIcon/syncIcon";

// Styles
import { LoadingContainer, LoadingTitle, Rotate } from "./styles";
import { colors } from "../../styles/colors";

export default function Loading() {
  const { state } = useThemeContext();

  return (
    <LoadingContainer>
      <LoadingTitle>Loading...</LoadingTitle>
      <Rotate>
        <SyncIcon
          width={110}
          height={100}
          stroke={state.themeName === "dark" ? colors.green : colors.darkTwo}
          strokeWidth={6}
        />
      </Rotate>
    </LoadingContainer>
  );
}
