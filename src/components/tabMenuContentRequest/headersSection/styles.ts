import { colors } from "./../../../styles/colors";
import styled from "styled-components";

export const Container = styled.div`
  display: block;
  gap: 1rem;
`;

export const Item = styled.div`
  background-color: ${colors.darkTwo};
  color: ${colors.softWhite};
  border-radius: 0.375rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

export const Key = styled.span``;

export const Value = styled.span``;
