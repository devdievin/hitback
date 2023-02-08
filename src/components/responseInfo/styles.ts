import styled from "styled-components";

const BaseInfo = styled.div`
  grid-row: 1;
  height: 100%;
  padding: 0 1rem;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.borderColor};
`;

const TabMenu = styled.div`
  grid-row: 2;
  height: 100%;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.borderColor};
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

const TagCodeHttp = styled.span`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.darkTwo};
  background-color: ${({ theme }) => theme.colors.green};
  padding: 0.25rem 0.5rem;
  border-radius: 0.125rem;
`;

export const Styles = {
  BaseInfo,
  TabMenu,
  Content,
  InfoContainer,
  TagCodeHttp,
};
