import { device, footerSize, headerSize } from "./../styles/sizes";
import styled from "styled-components";

export const Main = styled.main`
  position: relative;
  height: calc(100vh - (${headerSize.height} + ${footerSize.height}));
  display: grid;
  grid-template-columns: 30% 35% 35%;
  grid-template-rows: 1fr;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  color: ${({ theme }) => theme.color};
  border: 1px solid ${({ theme }) => theme.borderColor};

  @media screen and (${device.tablet}) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;

    section:first-child,
    section:last-child {
      display: none;
    }
  }
`;
