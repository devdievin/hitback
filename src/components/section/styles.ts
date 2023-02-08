import styled from "styled-components";

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3rem 3rem auto;
  justify-content: center;
  align-items: center;

  &:nth-child(2) {
    border-left: 0.0625rem solid ${({ theme }) => theme.borderColor};
    border-right: 0.0625rem solid ${({ theme }) => theme.borderColor};
  }
`;

export const Styles = {
  Section,
};
