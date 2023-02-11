import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* overflow: scroll; */

  /* ::-webkit-scrollbar {
    display: none;
  } */
`;

export const DisplayContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  opacity: 0.2;
`;

export const TitleDisplay = styled.p`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({ theme }) =>
    theme.name === "dark" ? colors.softGray : colors.darkOne};
`;

export const SvgIcon = styled.svg`
  fill: ${({ theme }) =>
    theme.name === "dark" ? colors.softGray : colors.darkOne};
`;
