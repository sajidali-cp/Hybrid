import styled from "styled-components";
import { ReactComponent as History } from "../../assets/icons/history.svg";
export {};
export const HistoryIconWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  margin: 1rem 0;
`;
export const HistoryIcon = styled(History)`
  cursor: pointer;
`;

export const AssetDetail = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1.2rem;
  margin-bottom: 1rem;
  img {
    /* width: 2.8rem; */
    max-width: 40px;
    margin-right: 0.5rem;
  }
  h3{
    font-size: 1.3rem;
  }
`;
