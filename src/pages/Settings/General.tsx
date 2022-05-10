import React from "react";
import { useSelector } from "react-redux";
import SelectedIcon from "../../assets/icons/selected.svg";
import StyledRightSectionLayout from "../../components/RightSectionLayout";
import GenaralSettingsDropdown from "../../components/Settings/GenaralSettingsDropdown";
import CustomOption from "../../components/Settings/CustomOption";
import { OptionWrapper } from "../../components/Settings/CustomOption/StyledCustomOption";
import ThemeOptions from "../../components/Settings/ThemeOptions";
import useRouterHook from "../../hooks/useRouterHook";
import { RootState } from "../../store/configureStore";
import { TransparentButton } from "../../theme";

const languageData = ["English"];
const currency = [
  { symbol: "USD", name: "US Dollar" },
];

export const LanguageOptions = () => {
  return (
    <>
      {languageData.map((item, index) => (
        <OptionWrapper>
          <p>{item}</p>
          {item === "English" && <img src={SelectedIcon} />}
        </OptionWrapper>
      ))}
    </>
  );
};

const CurrencyOptions = () => {
  return (
    <>
      {currency.map((item, index) => (
        <OptionWrapper>
          <p>
            {item.symbol} - {item.name}
          </p>
          {item.symbol === "USD" && <img src={SelectedIcon} />}
        </OptionWrapper>
      ))}
    </>
  );
};

export default function General() {
  const { handleNavigate } = useRouterHook();
  const { themeMode } = useSelector((state: RootState) => state.settings);

  return (
    <StyledRightSectionLayout heading={<h2>General</h2>}>
      <GenaralSettingsDropdown name={"Theme"} selected={themeMode}>
        <ThemeOptions />
      </GenaralSettingsDropdown>
      <GenaralSettingsDropdown name={"Language"} selected={"English"}>
        <CustomOption placeholder={"Please select a language"}>
          <LanguageOptions />
        </CustomOption>
      </GenaralSettingsDropdown>
      <GenaralSettingsDropdown name={"Currency"} selected={"USD"}>
        <CustomOption placeholder={"Enter currency code or name"}>
          <CurrencyOptions />
        </CustomOption>
      </GenaralSettingsDropdown>
      <TransparentButton
        margin={"2rem 0 0 0"}
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
    </StyledRightSectionLayout>
  );
}
