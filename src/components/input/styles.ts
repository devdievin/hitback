import styled from "styled-components";

export const InputComponent = styled.input`
  width: 100%;
  font-size: 1rem;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.backgroundSecondary};
  padding: 0.5rem;
  border-radius: 0.375rem;
  border: 1px solid ${({ theme }) => theme.colors.darkGray};

  &:focus,
  &:focus-visible {
    border: 0.0625rem solid
      ${({ theme }) =>
        theme.name === "dark" ? theme.colors.green : theme.colors.darkThree};
    outline: none;
  }
`;
