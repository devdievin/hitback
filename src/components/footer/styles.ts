import { colors } from "./../../styles/colors";
import styled from "styled-components";

export const FooterContainer = styled.footer`
  height: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.625rem 1rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
`;

export const ButtonPreferences = styled.button`
  font-size: 1rem;
  font-family: "Inter", sans-serif;
  color: ${({ theme }) => theme.color};
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  border: none;
  cursor: pointer;

  :hover {
    opacity: 0.7;
    text-decoration: underline;
    /* color: ${colors.blue}; */
  }

  :focus,
  :focus-visible {
    border: none;
    outline: none;
  }
`;
