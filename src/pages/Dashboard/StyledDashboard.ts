import styled from "styled-components";
import { ShadowedSection } from "../../theme";
import { ThemeMode } from "../../enums";

export const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 2.5rem;
  column-gap: 2.5rem;
`;

export const TopSectionWrapper = styled.div`
  display: flex;
  width: 100%;
  row-gap: 2.5rem;
  column-gap: unset;
  flex-direction: column;
  ${({ theme }) => theme.mediaWidth.tablet`
  flex-direction: row;
  column-gap: 2.5rem;
  row-gap: unset;

  `}
`;

export const BalanceHistoryWrapper = styled(ShadowedSection)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => theme.mediaWidth.tablet`
    width: 70%;
  `}
`;

export const HeadingAndTabsWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const BottomSeparator = styled.div`
  max-width: 976px;
  width: 80%;
  height: 0px;
  background: ${({ theme }) =>
    theme.themeMode === ThemeMode.Light ? theme.bgSecondary : theme.bgPrimary};
  border: 1px solid
    ${({ theme }) =>
      theme.themeMode === ThemeMode.Light
        ? theme.bgSecondary
        : theme.bgPrimary};
  margin-top: 1.25rem;
`;

export const TabsWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const Tab = styled.button<{ isActive?: boolean }>`
  width: 33.333%;
  font-weight: ${(props) => (props.isActive ? "bold" : "")};
  border-bottom: 2px solid
    ${(props) => (props.isActive ? props.theme.defaultText : "transparent")};
  color: ${({ theme }) => theme.defaultText};
  padding-bottom: 0.7rem;
`;

export const BalanceCardsWrapper = styled.div`
  display: flex;
  column-gap: 0.5rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const TransactionWrapper = styled(ShadowedSection)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  ${({ theme }) => theme.mediaWidth.tablet`
    width: 30%;
  `}
`;

export const MyAssetsWrapper = styled(ShadowedSection)``;
