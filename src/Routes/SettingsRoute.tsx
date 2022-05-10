import React, { useEffect } from "react";
import { useAlert } from "react-alert";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import MyAccounts from "../components/MyAccounts";
import { AccountStatus } from "../enums";
import Settings from "../pages/Settings";
import General from "../pages/Settings/General";
import Profile from "../pages/Settings/Profile";
import { RootState } from "../store/configureStore";
import { Dots } from "../theme";
import { GetElement } from "./PrivateRoutes";

export default function SettingsRoutes() {
  return (
    <Routes>
      <Route index element={<Settings />}></Route>
      <Route path="my-accounts" element={<MyAccounts />} />
      <Route path="profile" element={<GetElement comp={<Profile />} />} />
      <Route path="general" element={<General />} />
    </Routes>
  );
}
