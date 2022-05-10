import { ErrorMessage, useField } from "formik";
import React, { useState, useRef } from "react";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";
import { FormikError } from "../../../theme";
import CoinDropdown from "../CoinDropdown";
import { InputContainer, RightArrow, Wrapper } from "./SelectorPrimary.styled";

interface Props {
  selected?: string;
  visible: boolean;
  label?: string;
  toggle: () => void;
}
const SelectorPrimary: React.FC<Props> = ({
  selected,
  visible,
  children,
  label,
  toggle,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(modalRef, visible ? toggle : undefined);
  return (
    <>
      <Wrapper ref={modalRef}>
        {label && <label>{label}</label>}
        <InputContainer onClick={toggle}>
          <p>{selected}</p>
          <RightArrow />
        </InputContainer>
        {visible && children}
      </Wrapper>
    </>
  );
};

export default SelectorPrimary;
interface FormikProps {
  name: string;
  label: string;
  data: Array<{
    value: string;
    label: string;
  }>;
}
export const SelectorPrimaryFormik: React.FC<FormikProps> = (props) => {
  const { label, data, ...rest } = props;
  const [field, meta] = useField(props);
  const { value: selectedValue } = field;

  return (
    <>
      <Wrapper>
        {label && <label>{label}</label>}
        <select {...field} value={selectedValue ? selectedValue : ""}>
          <option value={""}>Select Option</option>
          {data.map((item, index) => (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        <ErrorMessage component={FormikError} name={field.name} />
      </Wrapper>
    </>
  );
};
