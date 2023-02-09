import styled from "styled-components";

const Row1 = styled.div`
  grid-row: 1;
  height: 100%;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.borderColor};
`;

const Row2 = styled.div`
  grid-row: 2;
  height: 100%;
  /* border-bottom: 0.0625rem solid ${({ theme }) => theme.borderColor}; */
`;

const Form = styled.form`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Method = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.blue};
  margin-left: 0.625rem;
`;

const InputRequest = styled.input`
  font-size: 1rem;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.backgroundSecondary};
  width: 100%;
  height: 100%;
  padding: 0 0.625rem;
  border: none;

  &:focus,
  &:focus-visible {
    outline: none;
    text-decoration: underline;
    background-color: ${({ theme }) =>
      theme.name === "dark" ? theme.colors.darkOne : theme.colors.softGray};
  }
`;

const ButtonRequest = styled.button`
  width: max-content;
  height: 100%;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.625rem 1.5rem;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const Styles = {
  Row1,
  Row2,
  Form,
  Method,
  InputRequest,
  ButtonRequest,
};