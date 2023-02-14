import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  padding: 0.625rem 1rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
`;

export const TextWorkspace = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
`;
