import React, { useState, useEffect, useCallback } from "react";
import { batch, useDispatch, useSelector } from "react-redux";
import { validationSchema } from "../components/KycProfile/FormModel/validationSchema";
import { KYCStatus, KycStep } from "../enums";
import { RootState } from "../store/configureStore";
import WhatIsKYC from "../components/KycProfile/WhatIsKYC";
import ContactInformation from "../components/KycProfile/ContactInformation";
import Information from "../components/KycProfile/Information";
import IDDocumentation from "../components/KycProfile/IDDocumentation";
import Verification from "../components/KycProfile/Verification";
import {
  InitialFormikState,
  resetInitialState,
  setKycInitialFormik,
  setKycStep,
  status,
} from "../store/reducers/kycReducer";
import { FormikHelpers, FormikValues } from "formik";
import HTTP_CLIENT from "../services/http.client.service";
import { API_URL } from "../utils/constants/api.constants";
import KycSteps from "../components/KycProfile/KycSteps";

export interface StepContentProps {
  step?: KycStep;
  formikProps: any;
}
export default function useKYC() {
  const dispatch = useDispatch();
  const {
    kyc: { kycStep, initialFormikState },
    wallet: { defaultAsset },
  } = useSelector((state: RootState) => state);

  useEffect(() => {
    getKycDetails();
  }, [defaultAsset.address]);

  console.log({ kycStep });
  const currentValidationSchema = validationSchema(
    initialFormikState?.accountType
  )[kycStep];
  console.log(initialFormikState, "redux");

  const [isAccountActive, setIsAccountActive] = useState(false);

  const getKycDetails = useCallback(async () => {
    try {
      
      const res = await HTTP_CLIENT.get(
        `${API_URL.KYC}/${defaultAsset.address}`
      );
      const data = res?.data?.payload;
      batch(() => {
        dispatch(resetInitialState());
        if (Object.values(status).includes(data?.status)) {
          dispatch(setKycStep(KycStep.Verification));
        }
        dispatch(
          setKycInitialFormik({
            ...data,
            is_mobile_number_verified: data?.mobile_number ? true : false,
            is_email_address_verified: data?.email_address ? true : false,
          })
        );
      });
    } catch (error) {
      dispatch(resetInitialState());
    }
  }, [defaultAsset.address]);

  const submitKyc = async (values: InitialFormikState) => {
    try {
      const {
        proofImage_yup,
        photo_yup,
        photo_id_back_yup,
        photo_id_front_yup,
        is_mobile_number_verified,
        is_email_address_verified,
        status,
        ...rest
      } = values;
      const res = await HTTP_CLIENT.post(`${API_URL.KYC}`, {
        ...rest,
        xaccount: defaultAsset.address,
      });
      
      batch(() => {
        dispatch(
          setKycInitialFormik({
            ...res.data.payload,
            is_mobile_number_verified: res.data.payload.mobile_number
              ? true
              : false,
            is_email_address_verified: res.data.payload.email_address
              ? true
              : false,
            status: KYCStatus.UnderReview,
          })
        );
        dispatch(setKycStep(kycStep + 1));
      });
    } catch (error) {
      console.log(error);
    }
  };

  function _renderStepContent(props: StepContentProps) {
    const { step, formikProps } = props;

    switch (step) {
      case KycStep.What:
        return <WhatIsKYC step={step} formikProps={formikProps} />;
      case KycStep.ContactVerification:
        return <ContactInformation step={step} formikProps={formikProps} />;
      case KycStep.Information:
        return <Information step={step} formikProps={formikProps} />;
      case KycStep.IDDocumentation:
        return <IDDocumentation step={step} formikProps={formikProps} />;
      case KycStep.Verification:
        return <Verification step={step} formikProps={formikProps} />;
      default:
        return <div>Not Found</div>;
    }
  }
  const handleNext = (values: InitialFormikState) => {
    console.log(values, "<<<<<<values>>>>>>");

    dispatch(setKycStep(kycStep + 1));
    dispatch(setKycInitialFormik(values));
  };
  const handleBack = () => {
    dispatch(setKycStep(kycStep - 1));
  };

  function _submitForm(values: any, actions: any) {
    submitKyc(values);
    actions.setSubmitting(false);
  }

  function _handleSubmit(values: any, actions: any) {
    
    if (kycStep === KycStep.IDDocumentation) {
      _submitForm(values, actions);
    } else {
      handleNext(values);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }
  return {
    initialFormikState,
    kycStep,
    currentValidationSchema,
    _renderStepContent,
    handleBack,
    _handleSubmit,
  };
}
