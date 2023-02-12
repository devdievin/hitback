import { colors } from "./../../styles/colors";
import styled from "styled-components";

export const ToggleButton = styled.div`
  width: 80px;
  height: 40px;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem;
  background-color: ${({ theme }) =>
    theme.name === "dark" ? colors.softWhite : colors.darkTwo};
  transition: all 0.3s ease-out;
  cursor: pointer;

  :hover {
    opacity: 0.85;
  }
`;

export const Toggle = styled.span`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({ theme }) =>
    theme.name === "dark" ? colors.darkTwo : colors.softWhite};
`;

export const ToggleIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem;
`;
