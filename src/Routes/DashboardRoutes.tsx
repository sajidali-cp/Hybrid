import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MyAssetsDetails from "../components/Dashboard/MyAssetsDetails";
import Receive from "../components/Dashboard/Receive";
import Send from "../components/Dashboard/Send";
import Dashboard from "../pages/Dashboard/Dashboard";

export default function DashboardRoutes() {
  return (
    <Routes>
      <Route index element={<Dashboard />}></Route>
      <Route path="send" element={<Send />} />
      <Route path="receive" element={<Receive />} />
      <Route path="my-asset-detail" element={<MyAssetsDetails />} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
}
