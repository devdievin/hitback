import styled from "styled-components";

const Row1 = styled.div`
  grid-row: 1;
  height: 100%;
  padding: 0 1rem;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.borderColor};
`;

const Row2 = styled.div`
  grid-row: 2;
  height: 100%;
`;

const Content = styled.div`
  grid-row: 3;
  height: 100%;
`;

const InfoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.875rem;
`;

export const Styles = {
  Row1,
  Row2,
  Content,
  InfoContainer,
};
