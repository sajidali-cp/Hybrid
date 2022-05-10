import { useField } from "formik";
import React, { ChangeEvent, useState } from "react";
import { Error } from "../../../theme";
import {
  Wrapper,
  WithRightIcon,
  InputContainer,
  ImgContainer,
  WithMax,
} from "./StyledGenericInput";

interface ResProps {
  label?: string;
  name: string;
  type: string;
  placeholder: string;
}

interface InputProps {
  maxWidth?: string;
  value?: any;
  withRightIcon?: string;
  icon?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickRightIcon?: () => void;
  disabled?: boolean;
  label?: string;
  name: string;
  type: string;
  placeholder: string;
  max?: boolean;
  onMaxPress?: () => void;
}
const GenericInput = ({
  maxWidth,
  value,
  withRightIcon,
  icon,
  onChange,
  onClickRightIcon,
  disabled,
  max,
  onMaxPress,
  ...res
}: InputProps) => {
  return (
    <>
      <Wrapper maxWidth={maxWidth}>
        {res.label && <label>{res.label}</label>}
        <InputContainer>
          {icon && (
            <ImgContainer>
              <img src={icon} />
            </ImgContainer>
          )}
          <input
            {...res}
            value={value}
            onChange={onChange}
            disabled={disabled}
            autoComplete="off"
          />
          {withRightIcon && (
            <WithRightIcon src={withRightIcon} onClick={onClickRightIcon} />
          )}
          {max && <WithMax onClick={onMaxPress}>max</WithMax>}
        </InputContainer>
      </Wrapper>
    </>
  );
};

export default GenericInput;

interface Props {
  maxWidth?: string;
  value?: any;
  withRightIcon?: string;
  icon?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickRightIcon?: () => void;
  disabled?: boolean;
  label?: string;
  name: string;
  type: string;
  placeholder: string;
}

export const GenericInputFormik = ({
  maxWidth,
  value,
  withRightIcon,
  icon,
  onChange,
  disabled,
  ...res
}: Props) => {
  const [field, meta] = useField(res);
  return (
    <>
      <Wrapper maxWidth={maxWidth}>
        {res.label && <label>{res.label}</label>}
        <InputContainer>
          {icon && (
            <ImgContainer>
              <img src={icon} />
            </ImgContainer>
          )}
          <input {...field} {...res} disabled={disabled} autoComplete="off" />
          {withRightIcon && <WithRightIcon src={withRightIcon} />}
        </InputContainer>
        {meta.touched && meta.error ? <Error>{meta.error}</Error> : null}
      </Wrapper>
    </>
  );
};
