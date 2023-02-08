import styled from "styled-components";

const Environment = styled.div`
  grid-row: 1;
  height: 100%;
`;

const InputGroup = styled.div`
  grid-row: 2;
  height: 100%;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.borderColor};
`;

const Workspace = styled.div`
  grid-row: 3;
  height: 100%;
`;

export const Styles = {
  Environment,
  InputGroup,
  Workspace,
};
