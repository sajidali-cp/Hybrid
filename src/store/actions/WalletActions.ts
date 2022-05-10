import { batch } from "react-redux";
import PlaceHolder from "../../assets/icons/my-assets/placeholder_coin.png";
import XRPIcon from "../../assets/icons/my-assets/xrp_coin.png";
import { AccountStatus } from "../../enums";
import { registerAccountOnServer } from "../../services/account.service";
import { getAssets, getTomal } from "../../services/assets.service";
import {
  CheckIsValidDomain,
  parseHexDomain,
  parseHexValue,
} from "../../services/helper.service";
import XRPL_CLIENT from "../../services/xrpl.client.service";
import { AppDispatch, RootState } from "../configureStore";
import { resetSettings } from "../reducers/settingsReducer";
import { resetUser } from "../reducers/userReducer";
import {
  resetWallet,
  setAssets,
  setAssetsLoading,
  setDefaultAsset,
  setNativeAssets,
} from "../reducers/walletReducer";
import { Wallet } from "../types";

export const importAccount = (phrase: string) => async (
  dispatch: AppDispatch,
  getState: () => RootState
) => {
  const { nativeAssets } = getState().wallet;

  try {
    const wallet: Wallet = XRPL_CLIENT.generateWallet(phrase);

    let fetchedMnemonic = {
      mnemonic_phrase: phrase,
      is_restore: true,
    };
    dispatch(
      setNativeAssets([
        ...nativeAssets,
        {
          ...wallet,
          mnemonic: fetchedMnemonic,
          accountStatus: AccountStatus.CHECKING,
          isRendered: true,
          name: "Ripple",
          symbol: "XRP",
          ticker: "XRP",
          icon: XRPIcon,
          address: wallet.address,
        },
      ])
    );
    dispatch(
      setDefaultAsset({
        ...wallet,
        mnemonic: fetchedMnemonic,
        accountStatus: AccountStatus.CHECKING,
        isRendered: true,
        name: "Ripple",
        symbol: "XRP",
        ticker: "XRP",
        icon: XRPIcon,
        address: wallet.address,
      })
    );
  } catch (e: any) {
    // AppShowToast(e.message || e);
  }
};

export const createAccount = (phrase: string) => async (
  dispatch: AppDispatch,
  getState: () => RootState
) => {
  const { nativeAssets } = getState().wallet;

  try {
    const wallet: Wallet = XRPL_CLIENT.generateWallet(phrase);

    let fetchedMnemonic = {
      mnemonic_phrase: phrase,
      is_restore: false,
    };

    dispatch(
      setNativeAssets([
        ...nativeAssets,
        {
          ...wallet,
          mnemonic: fetchedMnemonic,
          accountStatus: AccountStatus.REQUIRES_ACTIVATION,
          isRendered: true,
          name: "Ripple",
          symbol: "XRP",
          ticker: "XRP",
          address: wallet.address,
        },
      ])
    );
    dispatch(
      setDefaultAsset({
        ...wallet,
        mnemonic: fetchedMnemonic,
        accountStatus: AccountStatus.REQUIRES_ACTIVATION,
        isRendered: true,
        name: "Ripple",
        symbol: "XRP",
        ticker: "XRP",
        address: wallet.address,
      })
    );
  } catch (e: any) {
    // AppShowToast(e.message || e);
  }
};

export const checkAccountActivation = () => async (
  dispatch: AppDispatch,
  getState: () => RootState
) => {
  const { defaultAsset, nativeAssets } = getState().wallet;

  try {
    
    const status = await XRPL_CLIENT.checkAccountActivated(
      defaultAsset.address
    );
    if (status === AccountStatus.REQUIRES_ACTIVATION) {
      dispatch(setDefaultAsset({ ...defaultAsset, accountStatus: status }));
    }

    if (status === AccountStatus.ACTIVATED) {
      // HIT THE ACCOUNT ACTIVATION API HERE
      const jwt=await registerAccountOnServer(
        defaultAsset.address,
        defaultAsset.mnemonic.mnemonic_phrase
      );
      console.log("JWT",jwt);
      
      const account = await XRPL_CLIENT.getAccountInfo(defaultAsset.address);
      const updatedNativeAssets = nativeAssets.map((a) =>
        a.address === defaultAsset.address
          ? {
              ...a,
              ...account,
              accountStatus: AccountStatus.ACTIVATED,
              authToken: jwt,
            }
          : a
      );
      dispatch(setNativeAssets(updatedNativeAssets));
      dispatch(
        setDefaultAsset({
          ...defaultAsset,
          ...account,
          accountStatus: AccountStatus.ACTIVATED,
          authToken: jwt,
        })
      );
    }
  } catch (e: any) {
    dispatch(
      setDefaultAsset({
        ...defaultAsset,
        accountStatus: AccountStatus.REQUIRES_ACTIVATION,
      })
    );
    // AppShowToast(e.message);
  }
};

export const updateAssets = (address: string) => async (
  dispatch: AppDispatch,
  getState: () => RootState
) => {
  try {
    dispatch(setAssetsLoading(true));
    const assets = await getAssets(address);
    const issuedAssets = await XRPL_CLIENT.getIssuedAssets(address);

    if (!assets || !issuedAssets) {
      return null;
    }

    const merged = await Promise.all(
      issuedAssets.map(async (ia: any) => {
        let a = assets.find(
          (asset: any) =>
            asset.ticker === ia.currency && asset.issuer === ia.account
        );
        const res = await XRPL_CLIENT.getAccountInfo(ia.account);
        let domain = "";
        let tomalDetails = {};
        if (res && res.Domain) {
          domain = parseHexDomain(res.Domain);
          if (CheckIsValidDomain(domain)) {
            domain = domain + "/.well-known/xrp-ledger.toml";
            const res = await getTomal(domain);
            tomalDetails = res;
          } else {
            domain = "";
          }
        }
        console.log(res, "WALLET ACTION ISSUER RES");
        console.log(domain, "WALLET ACTION ISSUER DOMAIN");

        if (a) {
          return {
            name: a.name,
            symbol: a.coinSymbol,
            publicKey: a.publicKey,
            address: a.address,
            Balance: ia.balance,
            icon: a.icon,
            ticker: a.ticker,
            issuer: ia.account,
            isCustomToken: false,
            ...tomalDetails,
          };
        } else {
          const currency =
            ia.currency.length > 3 ? parseHexValue(ia.currency) : ia.currency;
          return {
            name: currency,
            symbol: currency,
            publicKey: "",
            address: address,
            Balance: ia.balance,
            icon: PlaceHolder,
            ticker: ia.currency,
            issuer: ia.account,
            isCustomToken: true,
            ...tomalDetails,
          };
        }
      })
    );

    dispatch(setAssets(merged));
    dispatch(setAssetsLoading(false));
  } catch (e: any) {
    console.log(e);
  }
};

export const logout = () => (
  dispatch: AppDispatch,
  getState: () => RootState
) => {
  try {
    
    batch(() => {
      dispatch(resetWallet());
      dispatch(resetSettings());
      dispatch(resetUser());
    });
  } catch (e: any) {
    console.log(e);
  }
};
