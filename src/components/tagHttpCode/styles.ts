import styled from "styled-components";
import { colors } from "../../styles/colors";

export const TagCodeHttp = styled.span`
  font-weight: 500;
  padding: 0.25rem 0.5rem;
  border-radius: 0.125rem;
`;

export const TagHttpCode100 = styled(TagCodeHttp)`
  color: ${colors.darkTwo};
  background-color: ${colors.lightGray};
`;

export const TagHttpCode200 = styled(TagCodeHttp)`
  color: ${colors.darkTwo};
  background-color: ${colors.green};
`;

export const TagHttpCode400 = styled(TagCodeHttp)`
  color: ${colors.darkTwo};
  background-color: ${colors.yellow};
`;

export const TagHttpCode500 = styled(TagCodeHttp)`
  color: ${colors.softWhite};
  background-color: ${colors.red};
`;
