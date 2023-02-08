import styled from "styled-components";

const InputGroup = styled.div`
  grid-row: 1;
  height: 100%;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.borderColor};
`;

const TabMenu = styled.div`
  grid-row: 2;
  height: 100%;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.borderColor};
`;

const Content = styled.div`
  grid-row: 3;
  height: 100%;
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
    background-color: ${({ theme }) => theme.colors.darkOne};
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

// const Menu = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;

//   p {
//     padding: 0 1rem;
//   }
// `;

export const Styles = {
  InputGroup,
  TabMenu,
  Content,
  Form,
  Method,
  InputRequest,
  ButtonRequest,
  // Menu,
};
