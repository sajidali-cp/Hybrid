import React, { useState } from "react";
import {
  AssetsDetailsCard,
  FlexRow,
  FlexCol,
  ButtonOption,
  ButtonOptionsWrapper,
} from "../../components/Dashboard/MyAssetsDetails/StyledMyAssetsDetails";
import {
  ButtonWrapper,
  InfoText,
} from "../../components/Dashboard/Send/StyledSend";
import StyledRightSectionLayout from "../../components/RightSectionLayout";
import { BisonCoins } from "../../utils/constants/bison.constants";

import { CoinDetails } from "../../components/RightSectionLayout/StyledRightSectionLayout";
import SelectAndAmount from "../../components/_common/SelectAndAmount";
import { PrimaryButton, TransparentButton } from "../../theme";
import ETHIcon from "../../assets/icons/my-assets/eth.svg";
import XRPLIcon from "../../assets/icons/my-assets/xrpl.svg";
import DoubleCurrencyLogo from "../../components/_common/DoubleCurrencyLogo/DoubleCurrencyLogo";
import { AssetDetail, HistoryIcon, HistoryIconWrapper } from "./StyledStake";
import { useNavigate } from "react-router-dom";
import StakeUnstakeModal from "../../components/Modals/StakeUnstakeModal";
import SuccessModal from "../../components/Modals/SuccessModal";
import { RootState } from "../../store/configureStore";
import { useSelector } from "react-redux";
import { Wallet } from "../../store/types";
import useModal from "../../hooks/useModal";
import useStake from "../../hooks/useStake";
import { TailSpin } from "react-loader-spinner";

interface StakeCardProps {
  coin: string;
  title: string;
  icon: any;
  monthly: string;
  yearly: string;
  amount: string;
}

const StakingCard = (props: StakeCardProps) => {
  const { title, icon, monthly, yearly, amount, ...rest } = props;
  return (
    <AssetsDetailsCard style={{ marginTop: "0", cursor: "pointer" }} {...rest}>
      <AssetDetail>
        <img src={icon} alt="coin-icon" />
        <h3>{`${title}`}</h3>
      </AssetDetail>
      <FlexRow>
        <FlexCol>
          <p>Monthly</p>
          <p>{monthly}%</p>
        </FlexCol>
        <FlexCol>
          <p>Yearly</p>
          <p>{yearly}%</p>
        </FlexCol>
        <FlexCol>
          <p>Total</p>
          <p>{amount}</p>
        </FlexCol>
      </FlexRow>
    </AssetsDetailsCard>
  );
};

export default function Stake() {
  const { defaultAsset } = useSelector((state: RootState) => state.wallet);
  const {
    loading,
    stakeAccounts,
    details,
    onStakePress,
    detail,
    info,
    visible,
    handleToggle,
    success,
    handleToggleSuccess,
    handleCloseSuccess,
    handleClose,
  } = useStake();
  // @ts-ignore
  const isStaked = detail?.isStaked! ? true : false;

  return (
    <>
      <StyledRightSectionLayout heading={<h2>Stake</h2>}>
        {loading ? (
          <TailSpin color="#00AEEF" />
        ) : (
          stakeAccounts &&
          stakeAccounts.info &&
          stakeAccounts.info.map((info: any, index: number) => {
            const detail: any = details.find(
              (d: any) =>
                d.assetCode.toLowerCase() === info.coin.toLowerCase() &&
                !d.refunded &&
                d.isStaked &&
                !d.isClaimed
            );

            return (
              <StakingCard
                {...info}
                key={index}
                amount={
                  detail?.amountIn && !detail?.refunded
                    ? detail?.amountIn?.toFixed(4)
                    : "0.00"
                }
                onClick={() => onStakePress(detail, info)}
              />
            );
          })
        )}
        {/* <AssetsDetailsCard
          style={{ marginTop: "0", cursor: "pointer" }}
          onClick={handleToggle}
        >
          <AssetDetail>
            <img src={bison?.icon} alt="coin-icon" />
            <h3>{`${bison?.name}`}</h3>
          </AssetDetail>
          <FlexRow>
            <FlexCol>
              <p>Monthly</p>
              <p>0.5%</p>
            </FlexCol>
            <FlexCol>
              <p>Yearly</p>
              <p>7%</p>
            </FlexCol>
            <FlexCol>
              <p>Total</p>
              <p>0.00</p>
            </FlexCol>
          </FlexRow>
        </AssetsDetailsCard> */}
      </StyledRightSectionLayout>
      <StakeUnstakeModal
        visible={visible}
        onClose={handleClose}
        handleAction={handleToggleSuccess}
        detail={detail}
        info={info}
      />
      <SuccessModal
        heading={`${isStaked ? "Un" : ""}Stake Successfully`}
        visible={success}
        onClose={handleCloseSuccess}
      />
    </>
  );
}

{
  /* <CoinDetails style={{ margin: "1rem 0" }}>
          <DoubleCurrencyLogo currency1={ETHIcon} currency2={XRPLIcon} />
          <h3>100.024 XRPL</h3>
          <span>30.095 USD</span>
        </CoinDetails>
        <HistoryIconWrapper>
          <HistoryIcon
            onClick={() => {
              navigate(`/staking/history`);
            }}
          />
        </HistoryIconWrapper>
        <SelectAndAmount
          selected={selected}
          handleSelect={handleSelect}
          name={"name"}
          value={"name"}
          handleInputChange={() => console.log("hello")}
          isDisabled={false}
          isStaking={true}
        /> */
}
{
  /* <InfoText style={{ marginBottom: "1rem" }}>
          Available 00250300.01
        </InfoText> */
}
{
  /* <ButtonOptionsWrapper gap="1rem" style={{ marginBottom: "1rem" }}>
          <ButtonOption
            height={"2rem"}
            borderRadius={"0.5rem"}
            maxWidth={"25%"}
            isActive={true}
          >
            25%
          </ButtonOption>
          <ButtonOption
            height={"2rem"}
            borderRadius={"0.625rem"}
            maxWidth={"25%"}
            isActive={false}
          >
            50%
          </ButtonOption>
          <ButtonOption
            height={"2rem"}
            borderRadius={"0.625rem"}
            maxWidth={"25%"}
            isActive={false}
          >
            75%
          </ButtonOption>
          <ButtonOption
            height={"2rem"}
            borderRadius={"0.625rem"}
            maxWidth={"25%"}
            isActive={false}
          >
            100%
          </ButtonOption>
        </ButtonOptionsWrapper> */
}
