import { colors } from "./../../styles/colors";
import styled, { keyframes } from "styled-components";

export const fadeToBottom = keyframes`
  from {
    /* top: -80px; */
    transform: translateY(-80px);
    visibility: hidden;
    opacity: 0;
  }
  
  to {
    /* top: 0; */
    transform: translateY(0);
    visibility: visible;
    opacity: 1;
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const Modal = styled.div`
  width: 70%;
  height: 60%;
  border-radius: 0.875rem;
  background-color: ${({ theme }) =>
    theme.name === "dark" ? colors.darkOne : colors.softWhite};
  padding: 1rem;
  transition: all 0.5s linear;
  animation: ${fadeToBottom} 0.3s linear both;
`;

export const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
