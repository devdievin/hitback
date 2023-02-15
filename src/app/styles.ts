import styled from "styled-components";

export const Main = styled.main`
  position: relative;
  height: calc(100vh - (4rem + 2.5rem));
  display: grid;
  grid-template-columns: 30% 35% 35%;
  grid-template-rows: 1fr;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  color: ${({ theme }) => theme.color};
  border: 1px solid ${({ theme }) => theme.borderColor};
`;
