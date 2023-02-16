import { colors } from "./../../styles/colors";
import styled, { keyframes } from "styled-components";
import { device } from "../../styles/sizes";

export const fadeToBottom = keyframes`
  from {
    transform: translateY(-5rem); // 80px
    visibility: hidden;
    opacity: 0;
  }
  
  to {
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

  @media only screen and (${device.mobile}) {
    width: 90%;
  }
`;

export const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonClose = styled.div`
  cursor: pointer;

  :hover {
    opacity: 0.7;
  }
`;

export const ModalContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
