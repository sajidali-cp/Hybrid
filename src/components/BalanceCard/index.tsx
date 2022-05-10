import React, { useState } from "react";
import { useSelector } from "react-redux";
import XRPL_CLIENT from "../../services/xrpl.client.service";
import InfoUrl from "../../assets/icons/Icon feather-info.svg";
import { RootState } from "../../store/configureStore";
import {
  BalanceCardWrapper,
  StatsWrapper,
  LowHight,
  LowHightIcon,
  RightTopIconWrapper,
} from "./StyledBalanceCard";
import WalletInfoModal from "../Modals/WalletInfoModal";
import useModal from "../../hooks/useModal";

export default function BalanceCard() {
  const { defaultAsset } = useSelector((state: RootState) => state.wallet);
  const { symbol, rate } = useSelector(
    (state: RootState) => state.settings.defaultCurrency
  );
  console.log({ rate });

  const { visible, handleToggle, handleClose } = useModal();
  const balance = Number(defaultAsset.Balance || 0);
  return (
    <>
      <BalanceCardWrapper>
        <RightTopIconWrapper>
          <img src={InfoUrl} onClick={handleToggle} />
          <StatsWrapper>
            <label>Balance</label>
            <h2>
              {(defaultAsset?.Balance || 0).toLocaleString("en-US", {
                maximumFractionDigits: 6,
              })}{" "}
              XRP
            </h2>
          </StatsWrapper>
          <StatsWrapper>
            <label>Fiat Balance</label>
            <h2>
              {symbol} {Number(balance * rate).toFixed(2)}
            </h2>
            <LowHight>
              <LowHightIcon />
              100%
            </LowHight>
          </StatsWrapper>
        </RightTopIconWrapper>
      </BalanceCardWrapper>
      <WalletInfoModal visible={visible} onClose={handleClose} />
    </>
  );
}
