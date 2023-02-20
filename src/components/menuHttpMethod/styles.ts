import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-width: 12.5rem; //200px
`;

export const MenuItem = styled.div`
  width: 100%;
  font-weight: 400;
  padding: 0.75rem;
  transition: background 0.2s linear;
  cursor: pointer;

  :not(:last-child) {
    border-bottom: 1px solid
      ${({ theme }) =>
        theme.name === "dark" ? colors.darkThree : colors.pacificGray};
  }

  :hover {
    background-color: ${({ theme }) =>
      theme.name === "dark" ? colors.darkThree : colors.pacificGray};
  }
`;
