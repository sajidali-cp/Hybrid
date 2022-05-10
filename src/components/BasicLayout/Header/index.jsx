import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { ThemeMode } from "../../../enums";
import { ReactComponent as LogOutIcon } from "../../../assets/icons/logout.svg";

import {
  Wrapper,
  Container,
  BrandLogo,
  ActionButtonsWrapper,
  ActionButton,
  QRCodeIcon,
  AccountIcon,
  SwitchIcon,
} from "./Header.styled";
import QrCodeModal from "../../Modals/QrCodeModal";
import Notification from "../../Notification";
import useModal from "../../../hooks/useModal";
import useRouterHook from "../../../hooks/useRouterHook";
import { Menu } from "../../HeaderMenu";
export default function Header() {
  const { visible, handleToggle, handleClose } = useModal();
  const { handleNavigate } = useRouterHook();
  return (
    <>
      <Container>
        <Wrapper>
          <BrandLogo onClick={() => handleNavigate({ to: "/dashboard" })} />
          <ActionButtonsWrapper>
            <ActionButton onClick={handleToggle}>
              <QRCodeIcon />
              <p>Scan QR-Code</p>
            </ActionButton>
            <ActionButton
              onClick={() => handleNavigate({ to: "/settings/my-accounts" })}
            >
              <AccountIcon />
              <p>My Accounts</p>
            </ActionButton>
            <Notification />
            <Menu/>
            {/* <LogOutIcon /> */}
            {/* <ActionButton>
              <SwitchIcon /> <p>Switch Account</p>
            </ActionButton> */}
          </ActionButtonsWrapper>
        </Wrapper>
      </Container>
      <QrCodeModal visible={visible} onClose={handleClose} />
    </>
  );
}
