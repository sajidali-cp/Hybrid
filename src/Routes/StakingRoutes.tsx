import React from "react";
import { Route, Routes } from "react-router-dom";
import Stake from "../pages/Stake";
import StakeHistory from "../pages/Stake/StakeHistory";

export default function StakingRoutes() {
  return (
    <Routes>
      <Route index element={<Stake />}></Route>
      <Route path="history" element={<StakeHistory />} />
    </Routes>
  );
}
