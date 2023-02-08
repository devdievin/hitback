import { colors } from "./../../styles/colors";
import styled from "styled-components";

const Menu = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;

  /* p {
    padding: 0 1rem;
  } */
`;

const Item = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  padding: 0 1rem;
  transition: all 0.3s linear;

  &:hover {
    background-color: ${({ theme }) =>
      theme.name === "dark" ? colors.darkTwo : colors.softGray};
    color: ${({ theme }) =>
      theme.name === "dark" ? colors.softWhite : colors.darkOne};
    cursor: pointer;
  }

  &.active {
    background-color: ${colors.darkGray};
    border-right: 1px solid ${colors.darkOne};
    border-bottom: 1px solid ${({ theme }) => theme.backgroundSecondary};
  }
`;

export const Styles = {
  Menu,
  Item,
};
