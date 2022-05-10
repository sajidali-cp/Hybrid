import React, { Suspense, lazy } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { AccountStatus } from "../enums";
import Dashboard from "../pages/Dashboard/Dashboard";
import RequireActivation from "../pages/RequireActivation";
import Stake from "../pages/Stake";
import { RootState } from "../store/configureStore";
import { Dots } from "../theme";

const DashboardRoutes = lazy(() => import("./DashboardRoutes"));
const Swap = lazy(() => import("../pages/Swap"));
const StakingRoutes = lazy(() => import("./StakingRoutes"));
const SettingsRoutes = lazy(() => import("./SettingsRoute"));

export const GetElement = ({ comp }: any) => {
  const { accountStatus } = useSelector(
    (state: RootState) => state.wallet.defaultAsset
  );
  return accountStatus === AccountStatus.CHECKING ? (
    <Dots>Checking Account Activation</Dots>
  ) : accountStatus !== AccountStatus.ACTIVATED ? (
    <RequireActivation />
  ) : (
    comp
  );
};

export default function PrivateRoutes() {
  const { accountStatus } = useSelector(
    (state: RootState) => state.wallet.defaultAsset
  );
  console.log("accountStatus>>>>>>>>", accountStatus);
  return (
    <Suspense fallback={<Dots>Loading</Dots>}>
      <Routes>
        <Route
          path="dashboard/*"
          element={<GetElement comp={<DashboardRoutes />} />}
        />
        <Route path="swap" element={<GetElement comp={<Swap />} />} />
        <Route
          path="staking/*"
          element={<GetElement comp={<StakingRoutes />} />}
        />
        <Route path="settings/*" element={<SettingsRoutes />} />
        <Route path="*" element={<Navigate to="/auth/add_account" />} />
      </Routes>
    </Suspense>
  );
}
