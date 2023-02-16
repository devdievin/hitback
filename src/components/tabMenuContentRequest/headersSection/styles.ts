import { colors } from "./../../../styles/colors";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;
`;

export const Item = styled.div`
  /* background-color: ${colors.darkTwo}; */
  color: ${colors.softWhite};
  border-radius: 0.375rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 1rem 0; */
`;

export const Key = styled.span``;

export const Value = styled.span``;

export const HeaderGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const Input = styled.input`
  font-size: 1rem;
  width: 100%;
  color: ${({ theme }) => theme.color};
  padding: 0.5rem 0.375rem;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid
    ${({ theme }) =>
      theme.name === "dark" ? colors.darkGray : colors.lightGray};

  :focus,
  :focus-visible {
    outline: none;
    border-bottom-color: ${({ theme }) =>
      theme.name === "dark" ? colors.green : colors.blue};
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) =>
    theme.name === "dark" ? colors.darkOne : colors.softGray};
  border: none;
  border-radius: 0.375rem;
  padding: 0.5rem;
  cursor: pointer;

  :hover {
    opacity: 0.7;
  }

  :focus,
  :focus-visible {
    background-color: ${({ theme }) =>
      theme.name === "dark" ? colors.darkTwo : colors.softGray};
  }
`;
