import React, { useState, useEffect } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { AddAssetsModalView } from "../enums";
import { generateAsset } from "../services/assets.service";
import XRPL_CLIENT from "../services/xrpl.client.service";
import { updateAssets } from "../store/actions/WalletActions";
import { RootState } from "../store/configureStore";
import { SupportedAssetListItem } from "../store/types";

interface Props {
  onClose: () => void;
  modalView?: AddAssetsModalView;
  asset?: any;
}
export default function useAddAsset({ onClose, modalView, asset }: Props) {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { defaultAsset, supportedAssetList, assets } = useSelector(
    (state: RootState) => state.wallet
  );
  const [fee, setFee] = useState("0.000012");
  const [loading, setLoading] = useState(false);
  const [view, setview] = useState(modalView || AddAssetsModalView.ASSETS);
  const [isDelete, setIsDelete] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState<SupportedAssetListItem>(
    asset || {
      id: "",
      name: "",
      symbol: "",
      icon: "",
      issuer: "",
      isBep20: false,
      isErc20: false,
      ticker: "",
    }
  );
  const handleClick = (asset: SupportedAssetListItem, del?: boolean) => {
    console.log("CLICKED");
    
    del ? setIsDelete(true) : setIsDelete(false);
    setSelectedAsset(asset);
    setview(AddAssetsModalView.REVIEW);
  };
  const handleSetView = (view: AddAssetsModalView) => {
    setview(view);
  };
  const _onClose = () => {
    setview(AddAssetsModalView.ASSETS);

    onClose();
  };
  console.log("selectedAsset>>>>.", selectedAsset);

  const onAccept = async () => {
    if (!isDelete && +defaultAsset.Balance! <= 2) {
      alert.show("You have insufficient funds to create a trust line", {
        type: "info",
      });
      return;
    }
    setLoading(true);

    try {
      await XRPL_CLIENT.createTrustLine(
        defaultAsset.address,
        selectedAsset.issuer,
        selectedAsset.symbol,
        fee,
        defaultAsset.mnemonic.mnemonic_phrase,
        isDelete
      );

      const isOurPick = supportedAssetList.find(
        (a: any) =>
          a.ticker === selectedAsset.ticker && a.issuer === selectedAsset.issuer
      );
      if (!isDelete && isOurPick) {
        await generateAsset(defaultAsset.address, selectedAsset.symbol);
      }
      // HIT THE retrieve assets ACTION
      dispatch(updateAssets(defaultAsset.address));
      alert.show(`Asset ${isDelete ? "removed" : "added"} successfully`, {
        type: "success",
      });
      setLoading(false);
      _onClose();
    } catch (error) {
      console.log(error);

      setLoading(false);
      alert.show("Something went wrong", { type: "error" });
    }
  };

  useEffect(() => {
    async function getFee() {
      const f = await XRPL_CLIENT.getTransactionCost();
      setFee(f?.toString() || "0.000012");
    }
    getFee();
  }, []);

  return {
    supportedAssetList,
    assets,
    view,
    handleSetView,
    handleClick,
    _onClose,
    selectedAsset,
    fee,
    loading,
    onAccept,
    isDelete,
  };
}
