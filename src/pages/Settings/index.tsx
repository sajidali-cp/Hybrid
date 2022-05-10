import React from "react";
import MyAccounts from "../../assets/icons/my-accounts.svg";
import General from "../../assets/icons/genaral.svg";
import Profile from "../../assets/icons/Profile.svg";
import Notification from "../../assets/icons/notification.svg";
import StyledRightSectionLayout from "../../components/RightSectionLayout";
import SettingsCard from "../../components/Settings/SettingsDropdown";
import StyledSwitch from "../../components/_common/Switch";

export default function Settings() {
  return (
    <StyledRightSectionLayout heading={<h2>Settings</h2>}>
      <SettingsCard leftIcon={MyAccounts} name="Accounts" to={"/settings/my-accounts"} />
      <SettingsCard leftIcon={General} name="General" />
      <SettingsCard leftIcon={Profile} name="Profile" />
      <SettingsCard leftIcon={Notification} name="Enable/Disable Notifications">
        <StyledSwitch />
      </SettingsCard>
    </StyledRightSectionLayout>
  );
}
