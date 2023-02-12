import styled from "styled-components";
import { colors } from "../../../../styles/colors";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Wrapper = styled.div`
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Text = styled.p`
  color: ${({ theme }) =>
    theme.name === "dark" ? colors.lightGray : colors.darkThree};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Tag = styled.span`
  background-color: ${colors.darkTwo};
  color: ${({ theme }) =>
    theme.name === "dark" ? colors.lightGray : colors.softGray};
  padding: 0.5rem;
  border-radius: 0.25rem;
`;
