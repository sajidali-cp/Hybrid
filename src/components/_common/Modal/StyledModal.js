import styled, { keyframes } from "styled-components";
import { ReactComponent as Cancel } from "../../../assets/icons/cancel.svg";
import { motion } from "framer-motion";
import { ThemeMode } from "../../../enums";

export const ModalWrapper = styled(motion.div)`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  opacity: 0;
  overflow: auto;
  z-index: 999;
`;

export const Outer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 90%;
  ${({ theme }) => theme.mediaWidth.laptop`
    width: 80%;
  `}
  max-width: 37.5rem;
  margin: auto;
  padding: 32px;
  background-color: ${({ theme }) =>
    theme.themeMode === ThemeMode.Light ? theme.bgSecondary : theme.bgPrimary};
  border-radius: 1rem;
  z-index: 2;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => theme.mediaWidth.laptop`
    width: 70%;
  `}
`;

export const Close = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  outline: none;
  border: none;
  font-size: 0;
  svg {
    fill: #fff;
    transition: transform 0.2s;
  }
`;

export const CloseIcon = styled(Cancel)`
  path {
    fill: ${({ theme }) => theme.defaultText};
  }
`;
