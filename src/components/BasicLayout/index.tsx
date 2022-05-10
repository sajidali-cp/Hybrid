import React, { useEffect } from "react";
import { useAlert } from "react-alert";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import useActivationService from "../../hooks/useActivationService";
import useInitialAppLoad from "../../hooks/useInitialAppLoad";
import useTxListener from "../../hooks/useTxListener";
import PrivateRoutes from "../../Routes/PrivateRoutes";
import TxUpdater from "../TxUpdater";
import Header from "./Header";
import { SideBar } from "./SideBar";

const RightSection = styled.section`
  display: flex;
  /* z-index: -1; */
  width: 100%;
  padding: calc(clamp(1.5em, 1.5em + 1vw, 4em));
  padding-bottom: calc(
    clamp(0.5em, 0.2em + 1vw, 0.8em) + clamp(3em, 1.5em + 1vw, 4em) + 50px
  );
  ${(props) => props.theme.mediaWidth.laptop`
    display: flex;
    width: 80%;
    overflow: hidden;
    padding: calc(clamp(3em, 1.5em + 1vw, 4em));
  `};
`;

const RowWrapper = styled.div`
  display: flex;
`;

const Com = () => {
  return <>hello</>;
};
export default function BasicLayout() {
  const alert = useAlert();
  useActivationService();
  useInitialAppLoad();
  const { txData } = useTxListener();
  useEffect(() => {
    
    if(txData?.type === 'sent'){
      alert.show("Transaction sent", { type: "success" });
    }
    if(txData?.type === 'received'){
      alert.show("Transaction received", { type: "success" });
    }
    if(txData?.type === 'swap'){
      alert.show("Swap successful", { type: "success" });
    }
  }, [txData]);

  return (
    <>
    <TxUpdater txData={txData} />
      <Header />
      <RowWrapper>
        <SideBar />
        <RightSection>
          <PrivateRoutes />
        </RightSection>
      </RowWrapper>
    </>
  );
}
