import { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HttpMethods } from "../../enums/HttpMethods";
import { useThemeContext } from "../../hooks/useThemeContext";
import { toggleDropMenuHttpMethod } from "../../redux/dropdownMenu/actionCreators";

// Components
import DropdownIcon from "../svgIcon/dropdownIcon";

// Styles
import { Container, DropButton, DropMenu, IconButton } from "./styles";
import { colors } from "../../styles/colors";

type DropdownProps = {
  children: JSX.Element;
};

export default function Dropdown({ children }: DropdownProps) {
  const dispatch = useDispatch();
  const { state } = useThemeContext();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { httpMethod } = useSelector(
    (rootReducer: any) => rootReducer.requestReducer
  );

  const { isOpenDropHttpMethod } = useSelector(
    (rootReducer: any) => rootReducer.dropdownReducer
  );

  const font_color = useMemo(() => {
    switch (httpMethod) {
      case HttpMethods.GET:
        return colors.blue;
      case HttpMethods.POST:
        return colors.green;
      case HttpMethods.PUT:
        return colors.yellow;
      case HttpMethods.DEL:
        return colors.red;
    }
  }, [httpMethod]);

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const handleClick = (event: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      dispatch(toggleDropMenuHttpMethod(false));
    }
  };

  const handleToggle = () => {
    dispatch(toggleDropMenuHttpMethod(!isOpenDropHttpMethod));
  };

  return (
    <Container ref={dropdownRef}>
      <DropButton onClick={handleToggle} style={{ color: font_color }}>
        {httpMethod}
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
      {isOpenDropHttpMethod && <DropMenu>{children}</DropMenu>}
    </Container>
  );
}
