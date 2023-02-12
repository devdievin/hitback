import { colors } from "./../../styles/colors";
import styled from "styled-components";

export const Row1 = styled.div`
  grid-row: 1;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 1rem;
`;

export const EnvGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.25rem;
`;

export const EnvStatus = styled.span`
  color: ${colors.green};
  font-weight: 600;
`;

export const Row2 = styled.div`
  grid-row: 2;
  height: 100%;
`;

export const InputContainer = styled.div`
  height: 3rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 0 1rem;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.borderColor};
`;

export const InputGroup = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
`;

export const ButtonAdd = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: not-allowed;

  :hover {
    opacity: 0.7;
  }
`;

export const WorkspaceContent = styled.div`
  height: calc(100% - 3rem);
  padding: 1rem;
`;
