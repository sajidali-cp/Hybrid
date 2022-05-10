import styled from "styled-components";

export const Heading = styled.div`
  display: flex;
  gap: 0.5rem;
  h3 {
    color: ${({ theme }) => theme.defaultText};
    &:first-child {
      color: ${({ theme }) => theme.text6};
    }
  }
`;

export const SelectionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: fit-content;
`;

export const CoinImg = styled.img`
  width: 4rem;
  height: 4rem;
`;

export const ArrowDown = styled.img`
  width: 1.1625rem;
  height: 0.665rem;
`;
