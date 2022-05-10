import React, { useEffect, useState } from "react";
import {
  Heading,
  PhraseWrapper,
  Paragraph,
  SeedList,
  SeedListItem,
  ListNumber,
  CopyIcon,
  CheckBoxWrapper,
  CheckBox,
  Label,
  StyledTextarea,
  CheckIcon,
} from "./StyledSeedPhrase";
import * as Yup from "yup";
import { FormWrapper } from "../AuthLayout/StyledAuthlayout";
import {
  Dots,
  Error,
  PrimaryButton,
  SecondaryButton,
  TransparentButton,
} from "../../theme";
import { Outlet } from "react-router-dom";
import useRouterHook from "../../hooks/useRouterHook";
import { generateBIP39Mnemonic } from "../../services/mnemonic.service";
import useValidateSeed from "../../hooks/useValidateSeed";
import { Formik, Form, useField, Field, useFormik } from "formik";
import { FlexCol } from "../../components/Dashboard/MyAssetsDetails/StyledMyAssetsDetails";
import useImportAccount from "../../hooks/useImportAccount";
import useClipboard from "../../hooks/useClipboard";
import CopyFromClipboard from "../../components/_common/CopyFromClipboard";
const HeadingAndDetail = ({
  heading,
  paragraph,
}: {
  heading: string;
  paragraph: string;
}) => {
  return (
    <>
      <Heading>{heading}</Heading>

      <Paragraph>{paragraph}</Paragraph>
    </>
  );
};
interface Props {
  name: string;
  id: string;
}
export const MyCheckbox: React.FC<Props> = ({ children, ...props }) => {
  // React treats radios and checkbox inputs differently other input types, select, and textarea.
  // Formik does this too! When you specify `type` to useField(), it will
  // return the correct bag of props for you -- a `checked` prop will be included
  // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <FlexCol style={{ width: "100%" }}>
      <CheckBoxWrapper>
        <CheckBox {...field} {...props} />
        <Label htmlFor={props.id}> {children}</Label>
      </CheckBoxWrapper>
      {/* {meta.touched && meta.error ? <Error>{meta.error}</Error> : null} */}
    </FlexCol>
  );
};

export const CopyPhraseAndPoliciesView = () => {
  const { handleNavigate } = useRouterHook();
  const [phrase, setPhrase] = useState("");
  const generateMnemonic = () => {
    try {
      let bip39Phrase = generateBIP39Mnemonic();
      setPhrase(bip39Phrase);
      return bip39Phrase;
    } catch (error) {}
  };
  useEffect(() => {
    const mnenonic = generateMnemonic();
    console.log(mnenonic);
  }, []);
  return (
    <>
      <HeadingAndDetail
        heading={"Seed Phrase!"}
        paragraph={
          "Your Seed Phrase has been generated. Your Seed Phrase  is 12 words long."
        }
      />
      <PhraseWrapper>
        <SeedList
          style={{
            color: "#012251",
          }}
        >
          {phrase.split(" ").map((item, index) => (
            <SeedListItem>
              <ListNumber>{index + 1}</ListNumber>
              <p>{item}</p>
            </SeedListItem>
          ))}
        </SeedList>
      </PhraseWrapper>
      <CopyFromClipboard phrase={phrase} />
      <Formik
        initialValues={{
          term1: false,
          term2: false,
          term3: false,
        }}
        validationSchema={Yup.object({
          term1: Yup.boolean()
            .required("Required")
            .oneOf([true], "You must accept the term 1"),
          term2: Yup.boolean()
            .required("Required")
            .oneOf([true], "You must accept the term 2"),
          term3: Yup.boolean()
            .required("Required")
            .oneOf([true], "You must accept the terms 3"),
        })}
        onSubmit={(values: any, { setSubmitting, resetForm }: any) => {
          handleNavigate({
            to: "/auth/seed-phrase/confirm-phrase",
            state: { mnemonic_phrase: phrase },
          });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          handleBlur,
          isSubmitting,
        }) => {
          console.log(errors);

          return (
            <Form
              // role="form"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <MyCheckbox id="term1" name="term1">
                I understand that if I lose this secret key, I will lose access
                to any crypto tokens held in the wallet address linked to this
                Secret Key.
              </MyCheckbox>
              <MyCheckbox id="term2" name="term2">
                I understand that I should not share this Secret Key with anyone
                else.
              </MyCheckbox>
              <MyCheckbox id="term3" name="term3">
                I have written down or copied this Secret Key and saved in a
                secure location. (Click on the Secret Key above to copy to your
                clipboard)
              </MyCheckbox>
              {Object.keys(errors).length > 0 && (
                <Error>You must accept all the terms 3</Error>
              )}
              <br></br>
              <PrimaryButton
                margin={"0.625rem 0"}
                height={"3.125rem"}
                borderRadius={"0.625rem"}
                maxWidth={""}
                type="submit"
              >
                {isSubmitting ? <Dots>Loading</Dots> : "I've written it down"}
              </PrimaryButton>
            </Form>
          );
        }}
      </Formik>
      <TransparentButton
        margin={"0.625rem 0"}
        height={"3.125rem"}
        borderRadius={"0.625rem"}
        maxWidth={""}
        onClick={(e) => {
          e.preventDefault();
          handleNavigate({ delta: -1 });
        }}
      >
        Back
      </TransparentButton>
      <SecondaryButton
        margin={"0.625rem 0"}
        height={"3.125rem"}
        borderRadius={"0.625rem"}
        maxWidth={""}
        // disabled={true}
        onClick={(e) => {
          e.preventDefault();
          generateMnemonic();
        }}
      >
        Get New Seed
      </SecondaryButton>
    </>
  );
};

export const ConfirmPhraseView = () => {
  const { handleNavigate } = useRouterHook();
  const {
    actualPhrase,
    enteredPhrase,
    shortPhrase,
    validatePhrase,
    handleEnteredPhrase,
    handleRemovedPhrase,
    onPressImport,
  } = useValidateSeed();
  console.log(actualPhrase, "ConfirmPhraseView");

  return (
    <>
      <HeadingAndDetail
        heading={"Seed Confirm!"}
        paragraph={
          "Please enter your Seed Phrase.It consist of 12 words separated by space."
        }
      />
      <PhraseWrapper>
        <SeedList
          style={{
            color: "#012251",
          }}
        >
          {enteredPhrase.map((item, index) => (
            <SeedListItem onClick={() => handleRemovedPhrase(item)}>
              <ListNumber>{index + 1}</ListNumber>
              <p>{item}</p>
            </SeedListItem>
          ))}
        </SeedList>
      </PhraseWrapper>
      {!validatePhrase() && <Paragraph>Invalid phrase entered</Paragraph>}
      {shortPhrase && <Paragraph>Phrase should be 12 words long</Paragraph>}
      <PhraseWrapper>
        <SeedList
          style={{
            color: "#012251",
          }}
        >
          {actualPhrase.map((item, index) => (
            <SeedListItem onClick={() => handleEnteredPhrase(item)}>
              {/* <ListNumber>{index + 1}</ListNumber> */}
              <p>{item}</p>
            </SeedListItem>
          ))}
        </SeedList>
      </PhraseWrapper>

      <PrimaryButton
        margin={"0.625rem 0"}
        height={"3.125rem"}
        borderRadius={"0.625rem"}
        maxWidth={""}
        // disabled={true}
        onClick={onPressImport}
      >
        Import
      </PrimaryButton>
      <TransparentButton
        margin={"0.625rem 0"}
        height={"3.125rem"}
        borderRadius={"0.625rem"}
        maxWidth={""}
        onClick={(e) => {
          e.preventDefault();
          handleNavigate({ delta: -1 });
        }}
      >
        Back
      </TransparentButton>
    </>
  );
};

export const ImportAccountView = () => {
  const { handleNavigate } = useRouterHook();
  const {
    loading,
    shortPhrase,
    onImport,
    phrase,
    setPhrase,
  } = useImportAccount();
  return (
    <>
      <HeadingAndDetail
        heading={"Import Account!"}
        paragraph={
          "Please enter your Seed Phrase.It consist of 12 words separated by space."
        }
      />
      <StyledTextarea
        value={phrase}
        onChange={(e) => {
          setPhrase(e.target.value);
        }}
        placeholder="Please enter your seed phrase here."
      />
      {shortPhrase && <Error>Phrase should be 12 words long</Error>}

      {/*  */}
      <Formik
        initialValues={{
          term1: false,
        }}
        validationSchema={Yup.object({
          term1: Yup.boolean()
            .required("Required")
            .oneOf([true], "You must accept the term 1"),
        })}
        onSubmit={(values: any, { setSubmitting, resetForm }: any) => {
          onImport();
        }}
      >
        {({ errors, handleSubmit, isSubmitting }) => {
          console.log(errors);

          return (
            <Form
              // role="form"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              style={{ width: "100%" }}
            >
              <MyCheckbox id="term1" name="term1">
                I have read and agree to the <a href="#">Terms of Use</a>
              </MyCheckbox>
              {Object.keys(errors).length > 0 && (
                <Error>You must accept terms of use.</Error>
              )}
              <br></br>
              <PrimaryButton
                margin={"0.625rem 0"}
                height={"3.125rem"}
                borderRadius={"0.625rem"}
                maxWidth={""}
                // disabled={true}
                type="submit"
              >
                {loading ? <Dots>Loading</Dots> : " Import"}
              </PrimaryButton>
            </Form>
          );
        }}
      </Formik>
      {/*  */}
      <TransparentButton
        margin={"0.625rem 0"}
        height={"3.125rem"}
        borderRadius={"0.625rem"}
        maxWidth={""}
        onClick={(e) => {
          e.preventDefault();
          handleNavigate({ delta: -1 });
        }}
      >
        Back
      </TransparentButton>
    </>
  );
};

export default function SeedPhrase() {
  return (
    <>
      <FormWrapper maxWidth="450px" center={true}>
        <Outlet />
      </FormWrapper>
    </>
  );
}
