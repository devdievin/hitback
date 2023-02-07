import styled from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4.375rem;
  padding: 0.625rem 1rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
`;

const Logo = styled.h1`
  color: ${({ theme }) => theme.colors.blue};
`;

export const Styles = {
  Header,
  Logo,
};
