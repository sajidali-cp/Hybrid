import React from "react";
import { CheckBoxWrapper, CheckBox, CheckBoxLabel } from "./StyledSwitch";

export default function StyledSwitch() {
  return (
    <CheckBoxWrapper>
      <CheckBox id="checkbox" type="checkbox" />
      <CheckBoxLabel htmlFor="checkbox" />
    </CheckBoxWrapper>
  );
}
