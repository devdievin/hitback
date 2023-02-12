import styled from "styled-components";

export const Row1 = styled.div`
  grid-row: 1;
  height: 100%;
`;

export const Row2 = styled.div`
  grid-row: 2;
  height: 100%;
`;

export const InputGroup = styled.div`
  height: 3rem;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.borderColor};
`;

export const WorkspaceContent = styled.div`
  height: calc(100% - 3rem);
`;
