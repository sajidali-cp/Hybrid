import XRPL_CLIENT from "../../services/xrpl.client.service";
import { AppDispatch, RootState } from "../configureStore";
import { setDefaultAsset, setNativeAssets } from "../reducers/walletReducer";

export const updateBalances = () => async (
  dispatch: AppDispatch,
  getState: () => RootState
) => {
  const { defaultAsset, nativeAssets } = getState().wallet;

  try {
    const account = await XRPL_CLIENT.getAccountInfo(defaultAsset.address);
    const updatedNativeAssets = nativeAssets.map((a) =>
      a.address === defaultAsset.address ? { ...a, ...account } : a
    );
    dispatch(setNativeAssets(updatedNativeAssets));
    dispatch(setDefaultAsset({ ...defaultAsset, ...account }));
  } catch (e: any) {
    // AppShowToast(e.message);
  }
};
