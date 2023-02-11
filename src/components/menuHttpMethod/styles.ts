import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-width: 12.5rem; //200px
`;

export const MenuItem = styled.div`
  width: 100%;
  font-weight: 400;
  padding: 0.75rem;
  transition: background 0.2s linear;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.backgroundSecondary};
  }
`;
