import { useEffect } from "react";
import { useThemeContext } from "../../hooks/useThemeContext";
import Button from "../button";
import { Styles } from "./styles";

export default function Header() {
  const { state, toggleTheme } = useThemeContext();

  useEffect(() => {
    console.log({ state });
  }, [state]);

  return (
    <Styles.Header>
      <Styles.Logo>Logo</Styles.Logo>
      <div>
        <p>Hitback/My Workspace</p>
      </div>

      <div>
        <Button type="button" text="Toggle" onClick={toggleTheme} />
      </div>
    </Styles.Header>
  );
}
