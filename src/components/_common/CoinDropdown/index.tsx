import React, { forwardRef, useState } from "react";
import {
  CoinDropdownWrapper,
  InputContainer,
  SearchIcon,
  CoinRow,
  ColumnWrapper,
  CoinSymbol,
  SmallerText,
} from "./StyledCoinDropdown";
import BNBIcon from "../../../assets/icons/my-assets/bnb.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/configureStore";
import { Wallet } from "../../../store/types";
import useClose from "../../../hooks/useClose";

interface Props {
  handleSelect: (item: Wallet) => void;
  visible: boolean;
  onClose: () => void;
}
const CoinDropdown = ({ handleSelect, visible, onClose }: Props) => {
  const { defaultAsset, assets } = useSelector(
    (state: RootState) => state.wallet
  );
  const { modalRef } = useClose({ visible, onClose });
  const [search, setSearch] = useState("");
  console.log(visible);

  return (
    <CoinDropdownWrapper ref={modalRef}>
      <InputContainer>
        <SearchIcon />
        <input
          autoComplete="off"
          type={"text"}
          name={"search"}
          value={search}
          placeholder={"Search"}
          onChange={(e) => setSearch(e.target.value)}
          disabled={false}
        />
      </InputContainer>
      {[defaultAsset, ...assets]
        .filter((asset) => {
          return (
            asset.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
            asset.symbol.toLowerCase().includes(search.toLocaleLowerCase())
          );
        })
        .map((item: Wallet) => (
          <CoinRow onClick={() => handleSelect(item)}>
            <img src={item?.icon} alt="icon" />
            <ColumnWrapper>
              {" "}
              <CoinSymbol>{item.name}</CoinSymbol>
              <SmallerText>{item.symbol}</SmallerText>
            </ColumnWrapper>
          </CoinRow>
        ))}
      {[defaultAsset, ...assets].filter((asset) => {
        return (
          asset.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
          asset.symbol.toLowerCase().includes(search.toLocaleLowerCase())
        );
      }).length === 0 && <p style={{ padding: "1rem" }}>No data found</p>}
    </CoinDropdownWrapper>
  );
};
export default CoinDropdown;
