import { colors } from "../../styles/colors";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
`;

const TabMenu = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 3rem;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.borderColor};
`;

const Content = styled.div`
  height: calc(100% - 3rem);
`;

const Item = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  padding: 0 1rem;
  box-sizing: content-box;
  transition: all 0.3s linear;

  &:hover {
    background-color: ${({ theme }) =>
      theme.name === "dark" ? colors.darkTwo : colors.softGray};
    color: ${({ theme }) =>
      theme.name === "dark" ? colors.softWhite : colors.darkOne};
    cursor: pointer;
  }

  /* &.active {
    border-bottom: 0.0625rem solid ${({ theme }) => theme.backgroundSecondary};
  }

  &.active:first-child {
    border-right: 0.0625rem solid ${colors.darkOne};
  }

  &.active:not(:first-child) {
    border-left: 0.0625rem solid ${colors.darkOne};
    border-right: 0.0625rem solid ${colors.darkOne};
  } */
`;

const ItemActive = styled(Item)`
  border-bottom: 0.0625rem solid ${({ theme }) => theme.backgroundSecondary};

  &:first-child {
    border-right: 0.0625rem solid ${colors.darkOne};
  }

  &:not(:first-child) {
    border-left: 0.0625rem solid ${colors.darkOne};
    border-right: 0.0625rem solid ${colors.darkOne};
  }
`;

export const Styles = {
  Container,
  TabMenu,
  Content,
  Item,
  ItemActive,
};
