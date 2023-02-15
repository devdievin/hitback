import styled, { keyframes } from "styled-components";
import { colors } from "../../styles/colors";

export const fadeToLeft = keyframes`
    from{
        transform: translateX(-380px);
        visibility: hidden;
        opacity: 0;
    }
    
    to{
        transform: translateX(0);
        visibility: visible;
        opacity: 1;
    }
`;

export const Card = styled.div`
  position: absolute;
  bottom: 0.625rem;
  left: 0.625rem;
  width: 300px;
  height: fit-content;
  background-color: ${({ theme }) =>
    theme.name === "dark" ? colors.darkOne : colors.softGray};
  color: ${({ theme }) =>
    theme.name === "dark" ? colors.softWhite : colors.darkOne};
  font-size: 1rem;
  padding: 1rem;
  border-radius: 0.375rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  animation: ${fadeToLeft} 0.5s ease-in-out both;
`;

export const LabelGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
`;

export const TextMessage = styled.p`
  word-break: break-all;
`;
