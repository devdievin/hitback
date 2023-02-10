import styled from "styled-components";

const Container = styled.div``;

const DropButton = styled.div`
  padding: 0.75rem;
  font-weight: 600;
  cursor: pointer;

  :hover {
    opacity: 0.7;
  }
`;

const IconButton = styled.span`
  color: ${({ theme }) => theme.color};
`;

const DropMenu = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 0.375rem;
  padding: 0.625rem;
`;

export const Styles = {
  Container,
  DropButton,
  IconButton,
  DropMenu,
};
