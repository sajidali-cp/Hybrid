import styled from "styled-components";
import { ThemeMode } from "../../../enums";
import { ReactComponent as Search } from "../../../assets/icons/Icon feather-search.svg";

export const CoinDropdownWrapper = styled.div`
  position: absolute;
  top: 4.5rem;
  width: 100%;
  max-height: 15rem;
  overflow: auto;
  z-index: 2;
  border-radius: 0.625rem;
  border: 1px solid rgba(1, 34, 81, 0.2);
  color: ${({ theme }) => theme.defaultText};
  background-color: ${({ theme }) =>
    theme.themeMode === ThemeMode.Light ? theme.bgPrimary : theme.bgSecondary};
`;

export const SearchIcon = styled(Search)`
  max-width: 20px;
  height: auto;
`;

export const InputContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) =>
    theme.themeMode === ThemeMode.Light ? theme.bgPrimary : theme.bgSecondary};
  padding: 0.3rem 1.5rem;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 0.625rem;
  border-top-left-radius: 0.625rem;
  border-bottom: 1px solid #566291;
  input {
    border: none;
    background-color: ${({ theme }) =>
      theme.themeMode === ThemeMode.Light
        ? theme.bgPrimary
        : theme.bgSecondary};
    resize: none;
    outline: none;
    display: flex;
    flex: 1;
    width: 100%;
    appearance: none;
    padding: 0 1.25rem;
    font-size: 1.2rem;
  }
`;

export const CoinRow = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 3rem;
  cursor: pointer;
  img {
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 0.5rem;
  }
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

export const CoinSymbol = styled.p`
  font-weight: bold;
  font-size: 1.125rem;
`;

export const SmallerText = styled.span`
  font-size: 0.7rem;
`;
