import styled from "styled-components";

const Main = styled.main`
  height: calc(100vh - (4rem + 2.5rem));
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  color: ${({ theme }) => theme.color};
  border: 1px solid ${({ theme }) => theme.borderColor};
`;

export const Styles = {
  Main,
};
