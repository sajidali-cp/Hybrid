import { TransactionResponse } from "../enums";
import { API_URL } from "../utils/constants/api.constants";
import HTTP_CLIENT from "./http.client.service";

export const performManualSwap = async (
  sellCurrency: string,
  sellAmount: string,
  buyCurrency: string,
  buyAmount: string
) => {
  try {
    const response = await HTTP_CLIENT.post(API_URL.MANUAL_SWAP, {
      sellCurrency,
      sellAmount: +sellAmount,
      buyCurrency,
      buyAmount: +buyAmount,
    });

    if (
      response.status === 200 &&
      response?.data?.status &&
      response.data.payload &&
      response.data.payload.status === TransactionResponse.SUCCESS
    ) {
      return response.data.payload.result.result.Sequence;
    } else return null;
  } catch (e: any) {
    if (
      e?.response?.data?.message?.length > 0 &&
      typeof e?.response?.data?.message[0] === "string"
    ) {
      throw new Error(e?.response?.data?.message[0]);
    }
    console.log(e.response.data.message, "CREATE OFFER");
    return null;
  }
};

export const cancelOffer = async (sequence: number) => {
  try {
    const response = await HTTP_CLIENT.post(API_URL.CANCEL_SWAP, {
      sequenceNumber: sequence,
    });

    if (
      response.status === 200 &&
      response?.data?.status &&
      response.data.payload &&
      response.data.payload.status === TransactionResponse.SUCCESS
    ) {
      return response.data.payload;
    } else return null;
  } catch (e: any) {
    return null;
  }
};
