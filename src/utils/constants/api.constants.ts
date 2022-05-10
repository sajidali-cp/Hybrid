import { isMainNet } from "../../xrpl.config";

export const BASE_URL = isMainNet
  ? "https://hybridapi.kryptomind.net/"
  : "http://8df3-101-53-234-165.ngrok.io/";

export const API_URL = {
  // ASSETS
  ASSETS: BASE_URL + "coin",
  GENERATE_ASSET: BASE_URL + "wallet/generate-wallet",
  GET_ASSETS: BASE_URL + "wallet/retrieve-wallets?xaccount=",

  // ACCOUNT
  REGISTER_ACCOUNT: BASE_URL + "account",

  // KYC
  KYC: BASE_URL + "kyc",
  SEND_EMAIL: BASE_URL + "kyc/sendEmail",
  VERIFY_EMAIL: BASE_URL + "kyc/verifyEmailOtp",
  SEND_MESSAGE: BASE_URL + "kyc/sendText",
  VERIFY_MESSAGE: BASE_URL + "kyc/verifyMobileOtp",
  UPLOADDOCUMENT: BASE_URL + "kyc/uploadDocument",

  // TRANSFER ASSET
  TRANSFER_ASSET: BASE_URL + "transaction/create-deposit",
  CONFIRM_DEPOSIT: BASE_URL + "transaction/confirm-deposit",

  // FEES
  NETWORK_FEE: BASE_URL + "blockcypher/network-fee/",
  PROCESSING_FEE: BASE_URL + "fee/get-withdraw-fee",

  // DUMMY_EXCHANGE_RATE
  DUMMY_EXCHANGE_RATE: "https://min-api.cryptocompare.com/data/price?",

  // FIAT_RATE
  FIAT_RATE: "https://xumm.app/api/v1/platform/rates/",

  // WITHDRAW_LIMITS
  WITHDRAW_LIMITS: BASE_URL + "fee/get-withdraw-setting-all",

  // MANUAL_SWAP
  MANUAL_SWAP: "swap-master/createOffer",
  CANCEL_SWAP: "swap-master/cancelOffer",

  // STAKE
  STAKE_ACCOUNTS: "staking/get-staker-hot-cold",
  STAKE_INFO: "staking/get-staker-information",
  STAKED_DETAILS: "/staking/Staked-info",
  STAKE_AMOUNT: "/staking/stake-amount",
  UNSTAKE_AMOUNT: "/staking/unstake",
  CLAIM_AMOUNT: "/staking/claim",
};
