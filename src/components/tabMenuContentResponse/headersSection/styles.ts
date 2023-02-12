import { colors } from "./../../../styles/colors";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) =>
    theme.name === "dark" ? colors.darkTwo : colors.white};
  padding: 1rem;
  border-radius: 0.375rem;
  word-break: break-all;
`;

export const Key = styled.span`
  color: ${({ theme }) =>
    theme.name === "dark" ? colors.yellow : colors.blue};
`;

export const Value = styled.span`
  /* font-weight: 500; */
`;
