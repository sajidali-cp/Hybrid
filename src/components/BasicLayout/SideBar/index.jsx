import React from "react";
import { ReactComponent as DashBoardIcon } from "../../../assets/icons/dashboard icon.svg";
import { ReactComponent as SettingIcon } from "../../../assets/icons/setting.svg";
import { ReactComponent as LogoutIcon } from "../../../assets/icons/logout.svg";
import { ReactComponent as StakingIcon } from "../../../assets/icons/Staking.svg";
import { ReactComponent as SwapIcon } from "../../../assets/icons/vuesax-linear-repeat-circle.svg";
// const Heading = BoxShadow.withComponent("h1");
import { NavLinksWrapper, StyledNavLink, Wrapper, LogOut } from "./SideBar";
import { persistor } from "../../../store/configureStore";
import { logout } from "../../../store/actions/WalletActions";
import { useDispatch } from "react-redux";

export function SideBar() {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <NavLinksWrapper>
        <StyledNavLink
          // className={({ isActive }) => (isActive ? "navLinkActive" : "navLink")}
          to="/dashboard"
        >
          <DashBoardIcon />
          <span>Dashboard</span>
        </StyledNavLink>
        <StyledNavLink to="/swap">
          <SwapIcon />
          <span>Swap</span>
        </StyledNavLink>
        <StyledNavLink to="/staking">
          <StakingIcon />
          <span>Stake</span>
        </StyledNavLink>
        <StyledNavLink to="/settings">
          <SettingIcon />

          <span>Settings</span>
        </StyledNavLink>
      </NavLinksWrapper>
      <LogOut onClick={() => dispatch(logout())}>
        <LogoutIcon />
        <span>Logout</span>
      </LogOut>
    </Wrapper>
  );
}
