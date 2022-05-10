import React from "react";
import { useLocation } from "react-router-dom";
import AuthRoutes from "../../Routes/AuthRoutes";
import { AuthlayoutContainer, AuthlayoutWrapper } from "./StyledAuthlayout";
export default function Authlayout() {
  const { pathname } = useLocation();
  console.log(pathname.split("/"));
  return (
    <AuthlayoutContainer isLogin={pathname.split("/")[2] === "login"}>
      <AuthlayoutWrapper>
        <AuthRoutes />
      </AuthlayoutWrapper>
    </AuthlayoutContainer>
  );
}
