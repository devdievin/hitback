import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const TextAreaJson = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.background};
  border: none;
  border-radius: 0.5rem;
  resize: none;

  :focus,
  :focus-visible {
    border: none;
    outline: none;
  }
`;
