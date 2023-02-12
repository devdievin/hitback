import styled, { keyframes } from "styled-components";
import { colors } from "../../styles/colors";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const LoadingContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  background-color: ${({ theme }) =>
    theme.name === "dark" ? "rgba(0, 0, 0, 0.25)" : "rgba(255, 255,255 , 0.5)"};
`;

export const LoadingTitle = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) =>
    theme.name === "dark" ? colors.green : colors.darkTwo};
`;

export const Rotate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
  animation: ${rotate} 1.5s linear infinite;
`;
