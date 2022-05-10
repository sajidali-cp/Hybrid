import styled from "styled-components";
import { ReactComponent as QRCode } from "../../../assets/icons/qr-code.svg";
import { ReactComponent as Account } from "../../../assets/icons/account.svg";
import { ReactComponent as Icon } from "../../../assets/logo.svg";

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.bgSecondary};
  filter: drop-shadow(0px 3px 6px rgba(39, 45, 59, 0.14));
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: calc(clamp(0.5em, 0.3em + 1vw, 1em))
    calc(clamp(1em, 0.5em + 1vw, 2em));
`;

export const BrandLogo = styled(Icon)<{ maxWidth: string }>`
  cursor: pointer;
  width: 100%;
  max-width: ${(props) => props.maxWidth ?? "calc(clamp(150px, 20%, 300px))"};
  fill: red;
  text {
    fill: ${({ theme }) => theme.defaultText};
  }
`;

export const ActionButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  /* height: 2.25rem; */
  /* padding: 0 calc(clamp(1em, 0.5em + 1vw, 2em)); */
  padding: 0.8rem;

  border-radius: 1.5rem;
  background-color: ${({ theme: { primaryButton } }) =>
    primaryButton.backGround};

  color: ${({ theme: { primaryButton } }) => primaryButton.color};
  .actionSVG {
    max-width: 2rem;
    min-width: 2rem;
  }
  p {
    display: none;
  }
  ${(props) => props.theme.mediaWidth.tablet`
  p {
    display:block;
  }
  `};
  ${(props) => props.theme.mediaWidth.laptop`
    p {
      display:block;
    }
  `};

  &:hover {
    opacity: ${({ theme, disabled }) => !disabled && 0.8};
  }
  pointer-events: ${({ disabled }) => disabled && "none"};
  &:active {
    box-shadow: 0 0 0 1pt
      ${({ theme: { primaryButton } }) => primaryButton.backGround};
  }
  margin-right: 0.5rem;
  ${(props) => props.theme.mediaWidth.laptop`
    margin-right: 1rem;
  `};
`;
export const QRCodeIcon = styled(QRCode)`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0;
  ${(props) => props.theme.mediaWidth.tablet`
    margin-right: 10px;
  `};
  ${(props) => props.theme.mediaWidth.laptop`
     margin-right: 10px;
  `};
`;

export const AccountIcon = styled(Account)`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0;
  ${(props) => props.theme.mediaWidth.tablet`
    margin-right: 10px;
  `};
  ${(props) => props.theme.mediaWidth.laptop`
     margin-right: 10px;
  `};
`;
