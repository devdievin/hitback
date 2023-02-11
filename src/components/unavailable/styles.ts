import { colors } from "./../../styles/colors";
import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) =>
    theme.name === "dark" ? colors.darkGray : colors.lightGray};
`;
