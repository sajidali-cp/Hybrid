import { createSlice } from "@reduxjs/toolkit";
import { KycStep, ThemeMode } from "../../enums";

const initialState = {
  language: "EN",
  themeMode: ThemeMode.Light,
  defaultCurrency: {
    code: 'USD',
    symbol: '$',
    rate: 0,
  },
  // defaultTaxRate: '0',
  // testnet: false,
  // showBalances: true,
  // fcmToken: '',
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    resetSettings: () => initialState,
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    changeTheme: (state, { payload }) => {
      state.themeMode = payload;
    },
    setDefaultCurrency: (state, action) => {
      state.defaultCurrency = action.payload;
    },
    // setTestnet: (state, action) => {
    //   state.testnet = action.payload;
    // },
    // setShowBalances: (state, action) => {
    //   state.showBalances = action.payload;
    // },
    // setFCMToken: (state, action) => {
    //   state.fcmToken = action.payload;
    // },
  },
});

export const {
  setLanguage,
  changeTheme,
  setDefaultCurrency,
  // setTestnet,
  // setShowBalances,
  // setFCMToken,
  resetSettings,
} = settingsSlice.actions;

export default settingsSlice.reducer;
