import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { validateBIP39Mnemonic } from "../services/mnemonic.service";
import { importAccount } from "../store/actions/WalletActions";
import { RootState } from "../store/configureStore";
import { setAddMultiple } from "../store/reducers/walletReducer";
import useRouterHook from "./useRouterHook";

export default function useImportAccount() {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { addMultiple } = useSelector((state: RootState) => state.wallet);
  const { handleNavigate } = useRouterHook();
  const [phrase, setPhrase] = useState("");
  const [loading, setLoading] = useState(false);
  const [shortPhrase, setShortPhrase] = useState(false);

  useEffect(() => {
    setShortPhrase(false);
  }, [phrase]);

  const onImport = async () => {
    if (phrase.split(" ").length < 12) {
      setShortPhrase(true);
      return;
    }

    if (!validateBIP39Mnemonic(phrase)) {
      alert.show("Invalid Mnemonic", { type: "error" });
      return;
    }

    try {
      setLoading(true);
      dispatch(importAccount(phrase));
      if (addMultiple) dispatch(setAddMultiple(false));
      handleNavigate({ to: "/dashboard" });
    } catch (e: any) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return { loading, shortPhrase, phrase, setPhrase, onImport };
}
