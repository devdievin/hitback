import styled from "styled-components";

const Row1 = styled.div`
  grid-row: 1;
  height: 100%;
`;

const Row2 = styled.div`
  grid-row: 2;
  height: 100%;
`;

const InputGroup = styled.div`
  height: 3rem;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.borderColor};
`;

const Workspace = styled.div`
  height: calc(100% - 3rem);
`;

export const Styles = {
  Row1,
  Row2,
  InputGroup,
  Workspace,
};
