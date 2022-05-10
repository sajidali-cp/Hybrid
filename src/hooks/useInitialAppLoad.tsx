import { useEffect } from "react";
import { useDispatch, useSelector, batch } from "react-redux";
import { AccountStatus } from "../enums";
import { getAssetsList, getWithdrawLimits } from "../services/assets.service";
import { getFiatExchangeRate } from "../services/fiat.service";
import { getStakeAccounts } from "../services/stake.service";
import { RootState } from "../store/configureStore";
import { setDefaultCurrency } from "../store/reducers/settingsReducer";
import {
  setStakeAccounts,
  setSupportedAssetList,
  setWithdrawLimits,
} from "../store/reducers/walletReducer";

const useInitialAppLoad = () => {
  const dispatch = useDispatch();

  const {
    wallet: {
      defaultAsset: { accountStatus },
    },
  } = useSelector((state: RootState) => state);

  const getMetadata = async () => {
    const assets = await getAssetsList();
    const exchangeRate = await getFiatExchangeRate("USD");
    const withdrawLimits = await getWithdrawLimits();
    const stakeAccounts = await getStakeAccounts();

    batch(() => {
      if (assets) dispatch(setSupportedAssetList(assets));
      if (exchangeRate) dispatch(setDefaultCurrency(exchangeRate));
      if (withdrawLimits) dispatch(setWithdrawLimits(withdrawLimits));
      if (stakeAccounts) dispatch(setStakeAccounts(stakeAccounts));
    });
  };

  useEffect(() => {
    if (accountStatus === AccountStatus.ACTIVATED) getMetadata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accountStatus]);

  return null;
};

export default useInitialAppLoad;
