import styled from "styled-components";
import { ThemeMode } from "../../../enums";

export const Wrapper = styled.div<{ maxWidth?: string }>`
  padding: 0.5rem 0;
  width: 100%;
  ${({ theme, maxWidth }) =>
    maxWidth &&
    theme.mediaWidth.laptop`
    max-width:calc(${maxWidth} - 1rem)
    `};
`;
export const WithRightIcon = styled.img`
  cursor: pointer;
  max-width: 20px;
  height: auto;
`;

export const WithMax = styled.p`
  cursor: pointer;
  width: fit-content;
  color: ${({ theme }) => theme.defaultText};
  font-weight: bold;
`;
export const InputContainer = styled.div`
  display: flex;
  border-radius: 7px;
  background-color: ${({ theme }) =>
    theme.themeMode === ThemeMode.Light ? theme.bgPrimary : theme.bgSecondary};
  border: 1px solid rgba(1, 34, 81, 0.2);
  padding: 0.625rem;
  width: 100%;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
  min-height: 3.125rem;
  max-height: 3.125rem;
  input {
    border: none;
    background-color: ${({ theme }) =>
      theme.themeMode === ThemeMode.Light
        ? theme.bgPrimary
        : theme.bgSecondary};
    color: ${({ theme }) =>
      theme.themeMode === ThemeMode.Light ? theme.black : theme.white};
    resize: none;
    outline: none;
    display: flex;
    flex: 1;
    width: 100%;
    appearance: none;
    padding: 0.625rem 0.375rem;
    font-size: 1rem;
  }
`;

export const ImgContainer = styled.div`
  min-height: 26px;
  min-width: 26px;
  max-height: 26px;
  max-width: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
