import { Form, Formik } from "formik";
import React from "react";
import KycSteps from "../../components/KycProfile/KycSteps";
import StepsButton from "../../components/KycProfile/StepsButton";
import StyledRightSectionLayout from "../../components/RightSectionLayout";
import useKYC from "../../hooks/useKYC";

export default function Profile() {
  const {
    initialFormikState,
    kycStep,
    currentValidationSchema,
    _renderStepContent,
    handleBack,
    _handleSubmit,
  } = useKYC();
  return (
    <StyledRightSectionLayout
      heading={<h2>Profile</h2>}
      isFull={true}
      verticalCenter={false}
    >
      <KycSteps />
      <Formik
        enableReinitialize={true}
        initialValues={initialFormikState}
        validationSchema={currentValidationSchema}
        onSubmit={_handleSubmit}
      >
        {({ isSubmitting, ...res }) => (
          <Form>
            {_renderStepContent({
              step: kycStep,
              formikProps: res,
            })}
            <StepsButton isSubmitting={isSubmitting} handleBack={handleBack} />
          </Form>
        )}
      </Formik>
    </StyledRightSectionLayout>
  );
}
