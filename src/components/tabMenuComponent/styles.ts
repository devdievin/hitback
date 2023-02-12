import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Container = styled.div`
  height: 100%;
`;

export const TabMenu = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 3rem;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.borderColor};
`;

export const Content = styled.div`
  height: calc(100% - 3rem);
`;

export const Item = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  padding: 0 1rem;
  box-sizing: content-box;
  transition: background 0.3s linear;

  &:hover {
    background-color: ${({ theme }) =>
      theme.name === "dark" ? colors.darkTwo : colors.softGray};
    color: ${({ theme }) =>
      theme.name === "dark" ? colors.softWhite : colors.darkOne};
    cursor: pointer;
  }
`;

export const ItemActive = styled(Item)`
  border-bottom: 0.0625rem solid ${({ theme }) => theme.backgroundSecondary};

  &:first-child {
    border-right: 0.0625rem solid ${({ theme }) => theme.borderColor};
  }

  &:not(:first-child) {
    border-left: 0.0625rem solid ${({ theme }) => theme.borderColor};
    border-right: 0.0625rem solid ${({ theme }) => theme.borderColor};
  }
`;
