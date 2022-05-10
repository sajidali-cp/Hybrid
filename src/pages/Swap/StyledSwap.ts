import styled from "styled-components";
import { ReactComponent as Swap } from "../../assets/icons/swap-icon.svg";
import { Card } from "../../components/RightSectionLayout/StyledRightSectionLayout";
import { FlexRow } from "../../components/Dashboard/MyAssetsDetails/StyledMyAssetsDetails";

export const RowWrapper = styled(FlexRow)`
  width: 100%;
  justify-content: space-between;
`;

export const CardWrapper = styled(Card)<{ direction: string }>`
  flex-direction: ${({ direction }) => (direction ? direction : "row")};
  width: 100%;
  align-items: center;
  justify-content: space-between;
  div {
    svg {
      width: 3rem;
      height: 3rem;
    }
  }
`;

export const SwapIcon = styled(Swap)`
  width: 3rem;
  height: 3rem;
  /* margin: 0.6rem 0 -0.6rem 0; */
  transform: rotate(90deg);
  cursor: pointer;
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NotesWrapper = styled(Card)`
  background: transparent;
  width: 100%;
  padding-top: 0;
  padding-bottom: 0;
`;

export const NoteRow = styled.div`
  align-items: baseline;
  display: flex;
  width: 100%;
  img {
    margin-right: 1rem;
  }
  p {
    width: auto;
    text-align: left;
    font-size: 0.9rem;
  }
`;
