import { useState } from "react";

// Styles
import { Styles } from "./styles";

type DropdownProps = {
  text: string;
  children: JSX.Element;
};

export default function Dropdown({ text, children }: DropdownProps) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    // console.log("clicou");
    setClicked(!clicked);
  };

  return (
    <Styles.Container>
      <Styles.DropButton onClick={handleClick}>
        {text}
        <Styles.IconButton>&darr;</Styles.IconButton>
      </Styles.DropButton>
      {clicked && <Styles.DropMenu>{children}</Styles.DropMenu>}
    </Styles.Container>
  );
}
