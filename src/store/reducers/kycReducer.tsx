import { createSlice } from "@reduxjs/toolkit";
import { KYCStatus, KycStep, KYCType, ThemeMode } from "../../enums";

export const status = {
  inprogress: "inprogress",
  approved: "approved",
  rejected: "rejected",
};

export interface InitialFormikState {
  proofImage: string;
  proofImage_yup: string;
  realName: string;
  companyName: string;
  businessName: string;
  companyWebsite: string;
  photo_id_back: string;
  photo_id_front: string;
  photo_id_back_yup: string;
  photo_id_front_yup: string;
  id_number: string;
  id_expiration_date: Date | string;
  id_issue_date: Date | string;
  id_country_code: string;
  id_type: string;
  registration_date: Date | string;
  buisness_name_on_doc: string;
  photo: string;
  photo_yup: string;
  address: string;
  postal_code: string;
  city: string;
  state_or_province: string;
  address_country_code: string;
  birth_date: Date | string;
  mobile_number: string;
  email_address: string;
  is_mobile_number_verified: boolean;
  is_email_address_verified: boolean;
  additional_name: string;
  last_name: string;
  first_name: string;
  accountType: KYCType;
  status: KYCStatus;
  admin_notes: string;
}

export interface UserState {
  kycStep: KycStep;
  initialFormikState: InitialFormikState;
}

const initialState: UserState = {
  kycStep: KycStep.What,
  initialFormikState: {
    accountType: KYCType.Individual,
    // common
    mobile_number: "",
    is_mobile_number_verified: false,
    email_address: "",
    is_email_address_verified: false,
    address: "",
    postal_code: "",
    city: "",
    state_or_province: "",
    address_country_code: "",
    photo_id_back: "",
    photo_id_front: "",
    realName: "",
    id_number: "",
    id_country_code: "",
    id_type: "",
    status: KYCStatus.INIT,
    admin_notes: "",
    //company
    companyName: "",
    businessName: "",
    companyWebsite: "",
    registration_date: "",
    buisness_name_on_doc: "",

    //individual
    proofImage: "",
    id_expiration_date: "",
    id_issue_date: "",
    photo: "",
    birth_date: "",
    additional_name: "",
    last_name: "",
    first_name: "",
    // yup
    proofImage_yup: "",
    photo_yup: "",
    photo_id_back_yup: "",
    photo_id_front_yup: "",
  },
};

export const kycSlice = createSlice({
  name: "kyc",
  initialState,
  reducers: {
    setKycStep: (state, { payload }) => {
      state.kycStep = payload;
    },
    setKycType: (state, { payload }) => {
      state.initialFormikState = {
        ...state.initialFormikState,
        accountType: payload,
      };
    },
    setKycInitialFormik: (state, { payload }) => {
      
      console.log("state.initialFormikState", state.initialFormikState);
      console.log("payload", payload);

      state.initialFormikState = { ...state.initialFormikState, ...payload };
    },
    resetInitialState: () => initialState,
  },
});

export const {
  setKycStep,
  setKycType,
  setKycInitialFormik,
  resetInitialState,
} = kycSlice.actions;

export default kycSlice.reducer;
