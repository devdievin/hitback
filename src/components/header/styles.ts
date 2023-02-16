import styled from "styled-components";
import { device, headerSize } from "../../styles/sizes";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${headerSize.height};
  padding: 0.625rem 1rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};

  @media only screen and (${device.mobile}) {
    p {
      font-size: 1rem;
    }
  }
`;

export const TextWorkspace = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
`;
