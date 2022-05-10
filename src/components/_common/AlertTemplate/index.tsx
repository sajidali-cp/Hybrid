import React from "react";
// import InfoIcon from "./icons/InfoIcon";
// import SuccessIcon from "./icons/SuccessIcon";
// import ErrorIcon from "./icons/ErrorIcon";
import { AlertStyle, Close, CloseIcon } from "./StyledAlertTemplate";

const imgStyle = { height: "20px", marginRight: "6px" };

const AlertTemplate = ({ message, options, style, close }: any) => {
  return (
    <AlertStyle style={{ ...style }}>
      {/* {options.type === "info" && <InfoIcon />}
      {options.type === "success" && <SuccessIcon />}
      {options.type === "error" && <ErrorIcon />} */}
      <span style={{ flex: 2 }}>{message}</span>
      <Close onClick={close}>
        <CloseIcon />
      </Close>
    </AlertStyle>
  );
};

export default AlertTemplate;
