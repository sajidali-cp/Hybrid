import { createSlice } from "@reduxjs/toolkit";
import { AccountStatus } from "../../enums";
import { WalletState } from "../types";

const initialState: WalletState = {
  mnemonic: {
    mnemonic_phrase: "",
    is_restore: false,
  },
  isRendered: false,
  assetsLoading: false,
  addMultiple: false,
  txHistory: [],
  loadingTxHistory:false,
  accountStatus: AccountStatus.IMPORT_WALLET,
  assets: [],
  supportedAssetList: [],
  nativeAssets: [],
  defaultAsset: {
    mnemonic: {
      mnemonic_phrase: "",
      is_restore: false,
    },
    isRendered: false,
    accountStatus: AccountStatus.CHECKING,
    name: "",
    classicAddress: "",
    privateKey: "",
    publicKey: "",
    address: "",
    seed: "",
    actualBalance: "",
    Balance: "",
    baseReserve: "",
    ownerReserve: "",
    authToken: '',
  },
  withdrawLimits: [],
  stakeAccounts: [],
  
};

export const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    resetWallet: () => initialState,
    setMnemonic(state, action) {
      state.mnemonic = action.payload;
    },
    setIsRendered(state, action) {
      state.isRendered = action.payload;
    },
    setAddMultiple(state, action) {
      state.addMultiple = action.payload;
    },
    setAccountStatus(state, action) {
      state.accountStatus = action.payload;
    },
    setSupportedAssetList(state, action) {
      state.supportedAssetList = action.payload;
    },
    setAssets(state, action) {
      state.assets = action.payload;
    },
    setNativeAssets(state, { payload }) {
      // @ts-ignore
      const uniqueNativeAssets = [...new Map(payload.map((item, key) => [item["address"], item])).values()]
      state.nativeAssets = uniqueNativeAssets;
    },
    setDefaultAsset(state, action) {
      console.log(action.payload.address, "Wallet reducer");

      state.defaultAsset = action.payload;
    },
    setAssetsLoading(state, action) {
      state.assetsLoading = action.payload;
    },
    setTxHistory(state, { payload }) {
      state.txHistory = payload;
    },
    setLoadingTxHistory(state, { payload }) {
      state.loadingTxHistory = payload;
    },
    setWithdrawLimits(state, action) {
      state.withdrawLimits = action.payload;
    },
    setStakeAccounts(state, action) {
      state.stakeAccounts = action.payload;
    },
  },
});

export const {
  resetWallet,
  setMnemonic,
  setIsRendered,
  setAddMultiple,
  setAccountStatus,
  setSupportedAssetList,
  setAssets,
  setNativeAssets,
  setDefaultAsset,
  setAssetsLoading,
  setTxHistory,
  setLoadingTxHistory,
  setWithdrawLimits,
  setStakeAccounts
} = walletSlice.actions;

export default walletSlice.reducer;
