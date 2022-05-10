import styled from "styled-components";
import { ThemeMode } from "../../../enums";

export const Top = styled.div`
  width: 100%;
  font-size: 0.875rem;
`;

export const Wrapper = styled.div`
  width: 100%;
  // height: 3.125rem;
  border-radius: 0.625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Bottom = styled.div<{ isStaking?: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  display: flex;
  border-radius: 7px;
  background-color: ${({ theme, isStaking }) =>
    isStaking
      ? theme.themeMode === ThemeMode.Light
        ? theme.bgPrimary
        : theme.bgSecondary
      : theme.themeMode === ThemeMode.Light
      ? theme.bgSecondary
      : theme.bgPrimary};
  // border: 1px solid rgba(1, 34, 81, 0.2);
  width: 100%;
`;

export const Selector = styled.div`
  display: flex;
  align-content: center;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 10px 0 0 10px;
  border-right: 1px solid
    ${({ theme }) =>
      theme.themeMode === ThemeMode.Light ? "#707070" : "#77838F"};
  align-items: center;
  gap: 1rem;
`;

export const CoinRow = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 3rem;
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
  white-space: nowrap;
`;

export const CoinSymbol = styled.p`
  font-weight: bold;
  font-size: 1rem;
`;

export const SmallerText = styled.span`
  font-size: 0.7rem;
`;
export const Input = styled.input`
  width: 100%;
  outline: none;
  padding: 0 1rem;
  background: transparent;
  border: 1px solid transparent;
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) =>
      theme.themeMode === ThemeMode.Light ? theme.black : theme.white};
  &::placeholder {
    font-size: 1rem;
    font-weight: 500;
  }
`;

// pointer-events: ${({ isTransaction }) => isTransaction && "none"};
export const CoinIcon = styled.img`
  width: 20px;
  height: auto;
  margin-right: 10px;
`;

export const SelectorText = styled.div`
  color: #fff;
  font-weight: 500;
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

export const ArrowDownIcon = styled.img`
  width: 1.25rem;
  height: 0.5rem;
`;
export const RowBetween = styled("div")`
  justify-content: space-between;
`;
export const MenuItem = styled(RowBetween)`
  padding: 1.25rem;
  height: 56px;
  display: grid;
  grid-template-columns: auto minmax(auto, 1fr) auto minmax(0, 72px);
  grid-gap: 16px;
`;
