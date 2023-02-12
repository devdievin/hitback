import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Wrapper = styled.div`
  width: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
`;

export const Radio = styled.input`
  -webkit-appearance: none;
  appearance: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 1.25rem;
  height: 1.25rem;
  background-color: ${({ theme }) =>
    theme.name === "dark" ? colors.softGray : colors.darkThree};
  border-radius: 50%;
  cursor: pointer;
  ::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 0.75rem;
    height: 0.75rem;
  }
  :hover {
    ::after {
      background-color: ${({ theme }) =>
        theme.name === "dark" ? colors.darkGray : colors.lightGray};
    }
  }
  :checked {
    ::after {
      background-color: ${colors.blue};
    }
  }
`;

export const Label = styled.label<{ disabled?: boolean }>`
  color: ${({ theme }) => theme.color};
`;
