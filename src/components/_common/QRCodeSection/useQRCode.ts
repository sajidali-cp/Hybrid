import React, { useState } from "react";
import { useSelector } from "react-redux";
import useClipboard from "../../../hooks/useClipboard";
import useModal from "../../../hooks/useModal";
import { RootState } from "../../../store/configureStore";
import { Wallet } from "../../../store/types";

export default function useQRCode(address?: any) {
  const { visible, handleToggle, handleClose } = useModal();

  const { defaultAsset, assets } = useSelector(
    (state: RootState) => state.wallet
  );
  const [selected, setselected] = useState(defaultAsset);
  const { copyTextToClipboard, copied } = useClipboard(
    address || selected.address
  );
  const handleSelect = (item: Wallet) => {
    
    setselected(item);
    handleToggle();
  };

  return {
    selected,
    visible,
    handleSelect,
    copyTextToClipboard,
    copied,
    handleClose,
    handleToggle,
  };
}
