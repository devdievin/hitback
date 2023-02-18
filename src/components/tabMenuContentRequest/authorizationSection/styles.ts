import { colors } from "./../../../styles/colors";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const DropMenuWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
`;

export const Label = styled.span`
  color: ${({ theme }) =>
    theme.name === "dark" ? colors.lightGray : colors.darkGray};
`;

export const DropMenuAuth = styled.div`
  min-width: 12.5rem; //200px
`;

export const DropItemMenu = styled.div`
  padding: 0.75rem 0.625rem;
  transition: background 0.2s linear;
  cursor: pointer;

  :first-child {
    border-radius: 0.375rem 0.375rem 0 0;
  }
  :last-child {
    border-radius: 0 0 0.375rem 0.375rem;
  }

  :not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  }

  :hover {
    background-color: ${({ theme }) => theme.borderColor};
  }
`;

export const TokenWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;

export const TokenLabel = styled.p`
  color: ${({ theme }) =>
    theme.name === "dark" ? colors.lightGray : colors.darkGray};
`;

export const TokenInput = styled.input`
  width: 100%;
  background-color: transparent;
  font-size: 1rem;
  font-family: inherit;
  color: ${({ theme }) => theme.color};
  padding: 0.25rem 0.25rem;
  border: none;
  border-bottom: 1px solid
    ${({ theme }) =>
      theme.name === "dark" ? colors.darkGray : colors.lightGray};

  :focus,
  :focus-visible {
    outline: none;
    border-bottom-color: ${({ theme }) =>
      theme.name === "dark" ? colors.softWhite : colors.darkGray};
  }
`;
