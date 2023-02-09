import styled from "styled-components";
import { colors } from "../../styles/colors";

const TagCodeHttp = styled.span`
  font-weight: 500;
  padding: 0.25rem 0.5rem;
  border-radius: 0.125rem;
`;

const TagHttpCode100 = styled(TagCodeHttp)`
  color: ${colors.darkTwo};
  background-color: ${colors.lightGray};
`;

const TagHttpCode200 = styled(TagCodeHttp)`
  color: ${colors.darkTwo};
  background-color: ${colors.green};
`;

const TagHttpCode400 = styled(TagCodeHttp)`
  color: ${colors.darkTwo};
  background-color: ${colors.yellow};
`;

const TagHttpCode500 = styled(TagCodeHttp)`
  color: ${colors.softWhite};
  background-color: ${colors.red};
`;

export const Styles = {
  TagCodeHttp,
  TagHttpCode100,
  TagHttpCode200,
  TagHttpCode400,
  TagHttpCode500,
};
