import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Container = styled.div`
  height: 100%;
`;

export const DropButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  height: inherit;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: ${colors.softWhite};
  background-color: transparent;
  border: none;
  padding: 0.625rem;
  cursor: pointer;

  :hover {
    opacity: 0.7;
  }

  :focus,
  :focus-visible {
    outline: none;
    border: none;
  }
`;

export const IconButton = styled.span`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DropMenu = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 0.375rem;
  z-index: 10;
`;
