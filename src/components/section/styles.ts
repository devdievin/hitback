import styled from "styled-components";

export const SectionContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3rem calc(100vh - (4rem + 2.5rem + 3rem)); // h-headers + h-footer + h-row1
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;

  &:nth-child(2) {
    border-left: 0.0625rem solid ${({ theme }) => theme.borderColor};
    border-right: 0.0625rem solid ${({ theme }) => theme.borderColor};
  }
`;
