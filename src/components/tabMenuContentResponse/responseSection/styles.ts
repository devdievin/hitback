import styled from "styled-components";
import { colors } from "../../../styles/colors";

const Container = styled.div`
  width: 420px;
  height: 380px;
  /* overflow: scroll; */
  /* background-color: ${colors.darkTwo}; */
  /* padding: 1rem; */

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Styles = {
  Container,
};
