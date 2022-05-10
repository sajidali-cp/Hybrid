import React from "react";
import StyledRightSectionLayout from "../../components/RightSectionLayout";
import StakeHistoryTable from "../../components/Tables/StakeHistoryTable";
import RightSectionHeading from "../../components/_common/RightSectionHeading";

export default function StakeHistory() {
  return (
    <StyledRightSectionLayout
      isFull={true}
      heading={
        <RightSectionHeading heading={"Stake History"} showBack={true} />
      }
    >
      <StakeHistoryTable />
    </StyledRightSectionLayout>
  );
}
