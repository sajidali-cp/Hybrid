import React, { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { AccountStatus } from "./enums";
import { positions, Provider as AlertProvider, transitions } from "react-alert";
import AlertTemplate from "./components/_common/AlertTemplate";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
const BasicLayout = lazy(() => import("./components/BasicLayout"));
const Authlayout = lazy(() => import("./Auth/AuthLayout"));

const NotFound = () => {
  return <h1>not-found</h1>;
};

const options = {
  position: positions.TOP_RIGHT,
  timeout: 5000,
  offset: "0.5rem",
  transition: transitions.SCALE,
  containerStyle: {
    zIndex: 1000,
  },
};
export default function App() {
  const { defaultAsset, addMultiple } = useSelector((state) => state.wallet);
  console.log(addMultiple);
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route
              path="/*"
              element={
                defaultAsset.isRendered && !addMultiple ? (
                  <BasicLayout />
                ) : (
                  <Navigate to="/auth/add_account" />
                )
              }
            />
            <Route
              path="/auth/*"
              element={
                defaultAsset.isRendered && !addMultiple ? (
                  <Navigate to="/dashboard" />
                ) : (
                  <Authlayout />
                )
              }
            />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/not-found" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </AlertProvider>
  );
}
