import styled from "styled-components";
import { colors } from "../../styles/colors";

export const DisplayContent = styled.div`
  height: 100%;
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
