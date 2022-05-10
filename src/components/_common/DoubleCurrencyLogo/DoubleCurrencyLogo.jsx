import React from "react";
import {
  DoubleCurrencyLogoWrapper,
  Coin1,
  Coin2,
} from "./StyledDoubleCurrencyLogo";

export default function DoubleCurrencyLogo({ currency1, currency2 }) {
  return (
    <DoubleCurrencyLogoWrapper>
      <Coin1 src={currency1 || "/assets/no-icon.svg"} alt="currency1" />
      <Coin2 src={currency2 || "/assets/no-icon.svg"} alt="currency2" />
    </DoubleCurrencyLogoWrapper>
  );
}
