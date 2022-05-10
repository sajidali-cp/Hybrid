import React from "react";
import CoinURL from "../../../assets/icons/my-assets/bnb.svg";
import ArrowURL from "../../../assets/icons/swap-arrow-down.png";

import {
  SelectionWrapper,
  CoinImg,
  ArrowDown,
  Heading,
} from "./StyledSwapCoinSelection";

interface SwapCoinSelectionProps {
  coinURL?: string;
  arrowURL?: string;
}

export default function SwapCoinSelection({
  coinURL,
  arrowURL,
}: SwapCoinSelectionProps) {
  return (
    <>
      <SelectionWrapper>
        <CoinImg src={CoinURL} />
        <ArrowDown src={ArrowURL} />
      </SelectionWrapper>
      <Heading>
        <h3>From</h3> <h3>RPL</h3>
      </Heading>
      {/* <Paragraph>0.12384 RPL</Paragraph> */}
    </>
  );
}
