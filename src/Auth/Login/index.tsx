import React from "react";
import { HeadingH1,PoweredBy } from "./StyledLogin";
import { BrandLogo } from "../../components/BasicLayout/Header/Header.styled";
import { Dots, PrimaryButton, TransparentButton } from "../../theme";
import { FormWrapper } from "../AuthLayout/StyledAuthlayout";
import useRouterHook from "../../hooks/useRouterHook";
import { RootState } from "../../store/configureStore";
import { useDispatch, useSelector } from "react-redux";
import { setAddMultiple } from "../../store/reducers/walletReducer";
export default function Login() {
  const { handleNavigate } = useRouterHook();
  const dispatch = useDispatch();
  const { addMultiple } = useSelector((state: RootState) => state.wallet);
  return (
    <FormWrapper maxWidth="438px">
      <BrandLogo maxWidth="267px" />
      <HeadingH1>Add an Account.</HeadingH1>
      <p
        style={{
          margin: "10px 0",
        }}
      >
        Import your existing account, or create a new account.
      </p>
      <PrimaryButton
        margin={"0.625rem 0"}
        height={"3.125rem"}
        borderRadius={"0.625rem"}
        maxWidth={""}
        onClick={() => handleNavigate({ to: "/auth/seed-phrase/get-phrase" })}
      >
        Create A New Account
      </PrimaryButton>
      <TransparentButton
        margin={"0.625rem 0"}
        height={"3.125rem"}
        borderRadius={"0.625rem"}
        maxWidth={""}
        onClick={() =>
          handleNavigate({ to: "/auth/seed-phrase/import-account" })
        }
      >
        Import An Existing Account
      </TransparentButton>
      {addMultiple && (
        <TransparentButton
          margin={"0.625rem 0"}
          height={"3.125rem"}
          borderRadius={"0.625rem"}
          maxWidth={""}
          onClick={() => {
            if (addMultiple) dispatch(setAddMultiple(false));
          }}
        >
          Go To Main
        </TransparentButton>
      )}
      <PoweredBy>POWERED BY BISON ARMY</PoweredBy>
    </FormWrapper>
  );
}
