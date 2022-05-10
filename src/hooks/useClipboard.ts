import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import copy from "copy-to-clipboard";
export default function useClipboard(text: string) {
  const alert = useAlert();
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    setCopied(false);
  }, [text]);
  const copyTextToClipboard = () => {
    copy(text);
    setCopied(true);
    alert.show("Copying to clipboard was successful!", { type: "success" });
  };

  return { copyTextToClipboard, copied };
}
