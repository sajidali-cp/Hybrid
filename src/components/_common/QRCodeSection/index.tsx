import React, { useState } from "react";
import QRCode from "qrcode.react";
import GenericInput from "../GenericInput/GenericInput";
import Copy from "../../../assets/icons/copy.svg";
import Check from "../../../assets/icons/00AEEF-check.svg";
import { Heading } from "./StyledQRCodeSection";
import SelectorPrimary from "../SelectorPrimary/SelectorPrimary";
import CoinDropdown from "../CoinDropdown";
import useClipboard from "../../../hooks/useClipboard";
import { QRCodeWrapper } from "../../Dashboard/Receive/StyledReceive";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/configureStore";
import { Wallet } from "../../../store/types";
import useQRCode from "./useQRCode";

interface QRCodeSectionProps {
  isModal?: boolean;
}

export default function QRCodeSection({ isModal }: QRCodeSectionProps) {
  const {
    selected,
    visible,
    handleSelect,
    copyTextToClipboard,
    copied,
    handleClose,
    handleToggle,
  } = useQRCode();
  return (
    <>
      {" "}
      <QRCodeWrapper>
        <QRCode value={selected.address} includeMargin={true} />
      </QRCodeWrapper>
      {isModal ?? (
        <small style={{ marginBottom: "1rem" }}>
          Kindly scan the QR Code for access to the coin.
        </small>
      )}
      {isModal === false && (
        <SelectorPrimary
          selected={selected?.name}
          toggle={handleToggle}
          visible={visible}
        >
          <CoinDropdown
            visible={visible}
            onClose={handleClose}
            handleSelect={handleSelect}
          />
        </SelectorPrimary>
      )}
      <Heading>{`Your ${selected.symbol} Address`}</Heading>
      <GenericInput
        placeholder={"address"}
        type="text"
        value={selected.address}
        name="address"
        disabled={true}
        withRightIcon={copied ? Check : Copy}
        onClickRightIcon={copyTextToClipboard}
      />
    </>
  );
}
