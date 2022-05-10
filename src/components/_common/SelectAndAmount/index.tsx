import React, {
  ChangeEvent,
  ChangeEventHandler,
  useRef,
  useState,
} from "react";
import { useSelector } from "react-redux";
import { setSyntheticLeadingComments } from "typescript";
import arrowDark from "../../../assets/icons/dropdown-arrow.svg";
import BNBIcon from "../../../assets/icons/my-assets/bnb.svg";
import useModal from "../../../hooks/useModal";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";
import { RootState } from "../../../store/configureStore";
import { Wallet } from "../../../store/types";
import { InfoText } from "../../Dashboard/Send/StyledSend";
import CoinDropdown from "../CoinDropdown";

import {
  ArrowDownIcon,
  Bottom,
  Input,
  Selector,
  Top,
  Wrapper,
  CoinRow,
  ColumnWrapper,
  CoinSymbol,
  SmallerText,
} from "./StyledSelectAndAmount";

interface SelectAndAmountProps {
  label?: string;
  selected: Wallet;
  otherSelected?: Wallet;
  name: string;
  value: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSelect: (item: Wallet) => void;
  isDisabled: boolean;
  isStaking?: boolean;
  onBlur?: () => void;
}

const SelectAndAmount = ({
  label,
  selected,
  otherSelected,
  name,
  value,
  handleInputChange,
  handleSelect,
  isDisabled,
  isStaking,
  ...res
}: SelectAndAmountProps) => {
  const { visible, handleToggle, handleClose } = useModal();
  const _handleSelect = (item: Wallet) => {
    if (
      otherSelected?.ticker === item.ticker &&
      otherSelected?.issuer === item.issuer
    ) {
      return;
    }
    handleSelect(item);
    handleClose();
  };

  return (
    <>
      {label && <Top>{label}</Top>}
      <Wrapper>
        <Bottom isStaking={isStaking}>
          <Selector onClick={handleToggle}>
            <CoinRow style={{ padding: "0" }}>
              <img src={selected?.icon} alt="icon" />
              <ColumnWrapper>
                {" "}
                <SmallerText>{selected?.name}</SmallerText>
                <CoinSymbol>{selected?.symbol}</CoinSymbol>
              </ColumnWrapper>
            </CoinRow>
            <ArrowDownIcon
              src={arrowDark}
              // src={isDarkTheme ? arrowDark : arrowLight}
              alt="arrow"
            />
          </Selector>
          <Input
            {...res}
            min="0"
            type="text"
            placeholder="Enter Amount"
            name={name}
            value={value}
            onChange={handleInputChange}
            disabled={isDisabled}
          />
        </Bottom>
        <InfoText
        // style={{ marginBottom: "1rem" }}
        >{`Available ${Number(selected?.Balance).toFixed(6)} ${
          selected.symbol
        }`}</InfoText>
        {visible && (
          <CoinDropdown
            visible={visible}
            onClose={handleClose}
            handleSelect={_handleSelect}
          />
        )}
      </Wrapper>
    </>
  );
};

export default SelectAndAmount;
