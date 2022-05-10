import styled from "styled-components";

export const DoubleCurrencyLogoWrapper = styled.div`
  position: relative;
  display: flex;
  flexdirection: row;
  margin: 1rem 0;
`;

export const Coin = styled.img`
  width: 5rem;
`;

export const Coin1 = styled(Coin)`
  width: 5rem;
  margin-right: 1.25rem;
`;

export const Coin2 = styled(Coin)`
  position: absolute;
  zindex: 2;
  width: 3.5rem !important;
  right: 0.3125rem;
  top: 1.875rem;
`;
