import styled from "styled-components";
import { ReactComponent as Arrow } from "../../../assets/icons/dropdown-arrow.svg";
import { ThemeMode } from "../../../enums";

export const Wrapper = styled.div`
  padding: 0.5rem 0;
  cursor: pointer;
  position: relative;
  width: 100%;
  label {
    display: flex;
    width: 100%;
  }
  select {
    display: flex;
    border-radius: 7px;
    color: ${({ theme }) => theme.defaultText};
    background-color: ${({ theme }) =>
      theme.themeMode === ThemeMode.Light
        ? theme.bgPrimary
        : theme.bgSecondary};
    border: 1px solid rgba(1, 34, 81, 0.2);
    padding: 10px 10px;
    width: 100%;
    margin-top: 10px;
    align-items: center;
    justify-content: space-between;
    min-height: 3.125rem;
    max-height: 3.125rem;
  }
`;
export const RightArrow = styled(Arrow)`
  max-width: 20px;
  height: auto;
`;
export const InputContainer = styled.div`
  display: flex;
  border-radius: 7px;
  background-color: ${({ theme }) =>
    theme.themeMode === ThemeMode.Light ? theme.bgPrimary : theme.bgSecondary};
  border: 1px solid rgba(1, 34, 81, 0.2);
  padding: 10px 10px;
  width: 100%;
  margin-top: 10px;
  align-items: center;
  justify-content: space-between;
  min-height: 3.125rem;
  max-height: 3.125rem;
  p {
    color: ${({ theme }) => theme.defaultText};
  }
`;
