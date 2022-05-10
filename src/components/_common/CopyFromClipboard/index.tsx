import React from "react";
import useClipboard from "../../../hooks/useClipboard";
import { PrimaryButton } from "../../../theme";
import { CheckIcon, CopyIcon } from "./StyledCopyFromClipboard";

interface Props {
  phrase: string;
}

export default function CopyFromClipboard({ phrase }: Props) {
  const { copyTextToClipboard, copied } = useClipboard(phrase);
  return (
    <PrimaryButton
      margin={"0.625rem 0"}
      height={"30px"}
      borderRadius={"20px"}
      maxWidth={"100px"}
      onClick={(e) => {
        e.preventDefault();
        copyTextToClipboard();
      }}
    >
      {copied ? <CheckIcon /> : <CopyIcon />}
      {copied ? "Copied" : "Copy"}
    </PrimaryButton>
  );
}
