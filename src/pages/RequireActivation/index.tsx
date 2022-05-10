import React from "react";
import { useSelector } from "react-redux";
import {
  ActivationErrorWrapper,
  ErrorIcon,
  ActivationError,
} from "../../components/KycProfile/WhatIsKYC/StyledWhatIsKYC";
import StyledRightSectionLayout from "../../components/RightSectionLayout";
import QRCodeSection from "../../components/_common/QRCodeSection";
import { RootState } from "../../store/configureStore";

export default function RequireActivation() {
  const { address } = useSelector(
    (state: RootState) => state.wallet.defaultAsset
  );
  return (
    <>
      <StyledRightSectionLayout heading={<h2>Activation</h2>}>
        <QRCodeSection isModal={true} />
        <ActivationErrorWrapper>
          <ErrorIcon />
          <ActivationError>
            Activate your wallet before proceeding to verification.
          </ActivationError>
        </ActivationErrorWrapper>
      </StyledRightSectionLayout>
    </>
  );
}
