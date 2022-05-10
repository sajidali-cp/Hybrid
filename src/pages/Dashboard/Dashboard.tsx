import React from "react";
import BalanceCard from "../../components/BalanceCard";
import Transaction from "../../components/Dashboard/Transaction";
import AddAssetsModal from "../../components/Modals/AddAssetsModal";
import MyAssetsTable from "../../components/Tables/MyAssetsTable/Index";
import RightSectionHeading from "../../components/_common/RightSectionHeading";
import useModal from "../../hooks/useModal";
import useRouterHook from "../../hooks/useRouterHook";
import {
  BalanceHistoryWrapper,
  BottomSeparator,
  DashboardWrapper,
  HeadingAndTabsWrapper,
  MyAssetsWrapper,
  Tab,
  TabsWrapper,
  TopSectionWrapper,
  TransactionWrapper,
} from "./StyledDashboard";

export default function Dashboard() {
  const { visible, handleToggle, handleClose } = useModal();
  return (
    <>
      <DashboardWrapper>
        <TopSectionWrapper>
          <BalanceHistoryWrapper>
            <HeadingAndTabsWrapper>
              <h2>Account</h2>
            </HeadingAndTabsWrapper>
            <BalanceCard />
            <BottomSeparator />
          </BalanceHistoryWrapper>
          <TransactionWrapper>
            <Transaction />
          </TransactionWrapper>
        </TopSectionWrapper>
        <MyAssetsWrapper>
          <RightSectionHeading heading="My Assets" handleAdd={handleToggle} editIcon={true} />
          {/* <h2>My Assets</h2> */}
          <MyAssetsTable />
        </MyAssetsWrapper>
      </DashboardWrapper>
      <AddAssetsModal visible={visible} onClose={handleClose} />
    </>
  );
}
