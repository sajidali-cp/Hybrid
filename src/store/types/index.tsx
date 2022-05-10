import { AccountStatus } from "../../enums";

export type ColorScheme = "dark" | "light" | "blue";

export interface IntroSlide {
  key: number;
  title: string;
  text: string;
  image: any;
}

// export interface Asset {
//   id: number;
//   coin_name: string;
//   market_value_fiat: string;
//   last24: string;
//   coin_value: string;
//   coin_value_fiat: string;
//   icon: ImageSource;
//   coin_symbol: string;
// }

export interface Wallet {
  mnemonic: {
    mnemonic_phrase: string;
    is_restore: boolean;
  };
  isRendered: boolean;
  accountStatus: AccountStatus;
  name?: string;
  symbol?: string;
  classicAddress: string;
  privateKey: string;
  publicKey: string;
  address: string;
  seed?: string;
  Account?: string;
  Balance?: string;
  Flags?: string;
  LedgerEntryType?: string;
  OwnerCount?: number;
  PreviousTxnID?: string;
  PreviousTxnLgrSeq?: number;
  Sequence?: number;
  index?: string;
  actualBalance?: string;
  baseReserve?: string;
  ownerReserve?: string;
  icon?: any;
  ticker?: string;
  issuer?: string;
  isCustomToken?: boolean;
  authToken: string;
}

export interface WalletState {
  mnemonic: {
    mnemonic_phrase: string;
    is_restore: boolean;
  };
  addMultiple: boolean;
  txHistory: any[];
  loadingTxHistory:boolean;
  isRendered: boolean;
  assetsLoading: boolean;
  accountStatus: AccountStatus;
  supportedAssetList: SupportedAssetListItem[];
  assets: any;
  nativeAssets: Wallet[];
  defaultAsset: Wallet;
  withdrawLimits: any[];
  stakeAccounts: any;
}
export interface SupportedAssetListItem {
  id: string;
  name: string;
  symbol: string;
  icon: string;
  issuer: string;
  isBep20: boolean;
  isErc20: boolean;
  ticker: string;
}

export interface Currency {
  code: string;
  symbol: string;
  name: string;
}
