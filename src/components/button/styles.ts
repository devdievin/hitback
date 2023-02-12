import styled from "styled-components";

export const ButtonComponent = styled.button`
  font-size: 1rem;
  padding: 0.625rem 2rem;
  border-color: transparent;
  border-radius: 0.375rem;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  &:focus,
  &:focus-visible {
    outline: none;
  }
`;
