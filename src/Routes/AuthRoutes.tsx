import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../Auth/Login";
import SeedPhrase, {
  CopyPhraseAndPoliciesView,
  ConfirmPhraseView,
  ImportAccountView,
} from "../Auth/SeedPhrase";

export default function AuthRoutes() {
  return (
    <Routes>
      <Route path="/add_account" element={<Login />} />
      <Route path="/seed-phrase/*" element={<SeedPhrase />}>
        <Route path="get-phrase" element={<CopyPhraseAndPoliciesView />} />
        <Route path="confirm-phrase" element={<ConfirmPhraseView />} />
        <Route path="import-account" element={<ImportAccountView />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Route>
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
}
