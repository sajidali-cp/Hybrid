import React, { useCallback, useState } from "react";
import { Bars, TailSpin } from "react-loader-spinner";
import {
  AssetsDetailsCard,
  FlexRow,
  FlexCol,
} from "../../components/Dashboard/MyAssetsDetails/StyledMyAssetsDetails";
import StyledRightSectionLayout from "../../components/RightSectionLayout";
import SelectAndAmount from "../../components/_common/SelectAndAmount";
import SwapCoinSelection from "../../components/_common/SwapCoinSelection";
import {
  CardWrapper,
  SwapIcon,
  RowWrapper,
  NotesWrapper,
  NoteRow,
} from "./StyledSwap";
import SendIcon from "../../assets/icons/swap-send.svg";
import NotesArrow from "../../assets/icons/notes-arrow.svg";
import ReceiveIcon from "../../assets/icons/swap-receive.svg";
import { ButtonWrapper } from "../../components/Dashboard/Send/StyledSend";
import { Error, PrimaryButton, TransparentButton } from "../../theme";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/configureStore";
import { Wallet } from "../../store/types";
import useSwap from "../../hooks/useSwap";

export const Note = ({ note }: any) => {
  return (
    <NoteRow>
      <img src={NotesArrow} />
      <p>{note}</p>
    </NoteRow>
  );
};

export default function Swap() {
  const navigate = useNavigate();
  const { defaultAsset } = useSelector((state: RootState) => state.wallet);
  const {
    selected,
    fromText,
    onChangeValue,
    onSubmitEditing,
    toText,
    toggleDirection,
    onSelectFromAsset,
    onSelectToAsset,
    loadingRate,
    swapping,
    swapFunds,
    exRate,
    needsSwapManual,
  } = useSwap();
  console.log({ selected }, "<<<<selected>>>>>>>");
  const isSwapDisabled = useCallback(() => {
    
    if (needsSwapManual && toText && !swapping && !loadingRate) return false;
    if (!toText || swapping || loadingRate || !exRate) return true;
  }, [needsSwapManual, toText, swapping, loadingRate, exRate]);

  return (
    <>
      <StyledRightSectionLayout heading={<h2>Swap</h2>}>
        {" "}
        <CardWrapper direction="column">
          <SelectAndAmount
            selected={selected.from}
            otherSelected={selected.to}
            handleSelect={onSelectFromAsset}
            label="From"
            name={""}
            value={fromText}
            handleInputChange={onChangeValue}
            isDisabled={swapping}
            // onBlur={onSubmitEditing}
          />
          {swapping || loadingRate ? (
            <TailSpin color="#00AEEF" />
          ) : (
            <SwapIcon onClick={toggleDirection} />
          )}
          {/* <Loader type="Bars" color="#ffffff" height={30} width={40} /> */}
          <SelectAndAmount
            selected={selected.to}
            otherSelected={selected.from}
            handleSelect={onSelectToAsset}
            label="To"
            name={"name"}
            value={toText || "--"}
            handleInputChange={() => console.log("hello")}
            isDisabled={true}
          />
        </CardWrapper>
        <AssetsDetailsCard style={{ marginTop: "1rem" }}>
          <FlexRow>
            <FlexCol style={{ width: "fit-content" }}>
              <p>
                Send <img src={SendIcon} style={{ marginLeft: "0.5rem" }} />
              </p>
              <p>
                {fromText || "--"} {selected.from.symbol}
              </p>
            </FlexCol>
            <FlexCol style={{ width: "fit-content" }}>
              <p>
                Receive{" "}
                <img src={ReceiveIcon} style={{ marginLeft: "0.5rem" }} />
              </p>
              <p>
                {toText || "-- "} {selected.to.symbol}
              </p>
            </FlexCol>
          </FlexRow>
        </AssetsDetailsCard>
        {selected.from.address === selected.to.address &&
          selected.from.issuer === selected.to.issuer && (
            <Error>* Same asset can not be swapped</Error>
          )}
        {!needsSwapManual &&
          fromText.length > 0 &&
          !exRate &&
          !swapping &&
          !loadingRate && (
            <Error>
              * The amount can't be exchanged. There are not enough orders
              available on the Decentralized exchange.
            </Error>
          )}
        <NotesWrapper>
          <h3>Notes</h3>
          <Note note="Only DEX offers are available for Swapping" />
          <Note
            note="It is possible to have an exchange rate but no offers that could
              fulfill the swap"
          />
          <Note note="If all the funds are can’t be swapped then a partial swap will occur" />
        </NotesWrapper>
        <ButtonWrapper>
          <TransparentButton
            margin={"0.625rem 0"}
            height={"3.125rem"}
            borderRadius={"0.625rem"}
            maxWidth={""}
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
          >
            Cancel
          </TransparentButton>
          <PrimaryButton
            margin={"0.625rem 0"}
            height={"3.125rem"}
            borderRadius={"0.625rem"}
            maxWidth={""}
            onClick={swapFunds}
            disabled={isSwapDisabled()}
          >
            {swapping || loadingRate ? (
              <Bars color="#00AEEF" height={48} width={48} />
            ) : (
              "Swap"
            )}
          </PrimaryButton>
        </ButtonWrapper>
      </StyledRightSectionLayout>
    </>
  );
}
