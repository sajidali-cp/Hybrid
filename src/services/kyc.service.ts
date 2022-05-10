import { API_URL } from "../utils/constants/api.constants";
import HTTP_CLIENT from "./http.client.service";

export const sendEmail = async (email: string, xaccount: string) => {
  try {
    const response = await HTTP_CLIENT.post(API_URL.SEND_EMAIL, {
      email,
      xaccount,
    });
    return response;
  } catch (e: any) {
    throw new Error("Something went wrong");
  }
};

export const verifyEmailOtp = async (
  email: string,
  xaccount: string,
  code: number
) => {
  try {
    const response = await HTTP_CLIENT.post(API_URL.VERIFY_EMAIL, {
      email,
      xaccount,
      code,
    });
    return response;
  } catch (e: any) {
    throw new Error("Something went wrong");
  }
};

export const sendMessage = async (mobileNumber: string, xaccount: string) => {
  try {
    const response = await HTTP_CLIENT.post(API_URL.SEND_MESSAGE, {
      mobileNumber,
      xaccount,
    });
    return response;
  } catch (e: any) {
    throw new Error("Something went wrong");
  }
};

export const verifyMobileOtp = async (
  mobileNumber: string,
  xaccount: string,
  code: number
) => {
  try {
    const response = await HTTP_CLIENT.post(API_URL.VERIFY_MESSAGE, {
      mobileNumber,
      xaccount,
      code,
    });
    return response;
  } catch (e: any) {
    throw new Error("Something went wrong");
  }
};

export const uploadDocument = async (payload: any) => {
  try {
    const response = await HTTP_CLIENT.post(API_URL.UPLOADDOCUMENT, payload);
    return response;
  } catch (e: any) {
    throw new Error("Something went wrong");
  }
};
