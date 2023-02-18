import { useEffect, useRef, useState } from "react";
// import { useSelector } from "react-redux";
import { HttpMethods } from "../../enums/HttpMethods";
import { useThemeContext } from "../../hooks/useThemeContext";

// Components
import DropdownIcon from "../svgIcon/dropdownIcon";

// Styles
import { Container, DropButton, DropMenu, IconButton } from "./styles";
import { colors } from "../../styles/colors";

type DropdownProps = {
  text: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: JSX.Element;
};

export default function Dropdown({
  text,
  isOpen,
  setIsOpen,
  children,
}: DropdownProps) {
  const { state } = useThemeContext();
  const [colorText, setColorText] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // const { httpMethod } = useSelector(
  //   (rootReducer: any) => rootReducer.requestReducer
  // );

  useEffect(() => {
    switch (text) {
      case HttpMethods.GET:
        setColorText(colors.blue);
        break;
      case HttpMethods.POST:
        setColorText(colors.green);
        break;
      case HttpMethods.PUT:
        setColorText(colors.yellow);
        break;
      case HttpMethods.DEL:
        setColorText(colors.red);
        break;
      default:
        const defaultTextColor =
          state.themeName === "dark" ? colors.softWhite : colors.darkThree;
        setColorText(defaultTextColor);
        break;
    }
  }, [text, state.themeName]);

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const handleClick = (event: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <Container ref={dropdownRef}>
      <DropButton onClick={handleToggle} style={{ color: colorText }}>
        {text}
        <IconButton>
          <DropdownIcon
            width={14}
            height={8}
            fill={
              state.themeName === "dark" ? colors.softWhite : colors.darkThree
            }
          />
        </IconButton>
      </DropButton>
      {isOpen && <DropMenu>{children}</DropMenu>}
    </Container>
  );
}
