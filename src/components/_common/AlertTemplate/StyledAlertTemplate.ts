import styled from "styled-components";
import { ReactComponent as Cancel } from "../../../assets/icons/cancel.svg";
import { ThemeMode } from "../../../enums";

export const AlertStyle = styled.div`
  background-color: ${({ theme }) =>
    theme.themeMode === ThemeMode.Light ? theme.bgSecondary : theme.bgPrimary};
  color: ${({ theme }) => theme.defaultText};
  padding: 0.625rem;
  border-radius: 0.625rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  filter: drop-shadow(0px 6px 24px rgba(39, 45, 59, 0.12));
`;

export const Close = styled.button`
  margin-left: 1.25rem;
  background-color: transparent;
`;

export const CloseIcon = styled(Cancel)`
  path {
    fill: ${({ theme }) => theme.defaultText};
  }
`;
