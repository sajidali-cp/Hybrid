import styled from "styled-components";
import { ShadowedSection } from "../../theme";
import TopIcont from "../../assets/backgrounds/Ellipse-8.svg";
import { ReactComponent as Icon } from "../../assets/icons/Polygon 1.svg";

export const BalanceCardWrapper = styled.div`
  filter: drop-shadow(0px 2px 10px rgba(39, 45, 59, 0.12));
  border-radius: 1.25rem;
  background: linear-gradient(to left, #00aeef, #3e68df);
  width: 100%;
  min-width: 200px;
  margin: 0.25rem 0;
  position: relative;
`;

export const RightTopIconWrapper = styled.div`
  background-image: url(${TopIcont});
  background-position: 112% -45px;
  background-repeat: no-repeat;
  background-size: 185px;
  padding: 1.25rem;
  position: relative;
  img {
    width: 2rem;
    position: absolute;
    right: 1.25rem;
    cursor: pointer !important;
    z-index: 2;
  }
`;

export const StatsWrapper = styled.div`
  max-width: 100%;
  color: white;
  position: relative;
  label {
  }
  h2 {
    color: white;
  }
`;
export const LowHight = styled.div`
  background: rgba(255, 255, 255, 0.37);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  border-radius: 0.5rem;
  font-size: 1rem;
  top: 58%;
  right: 0;
  padding: 0.5rem 1rem;
`;

export const LowHightIcon = styled(Icon)`
  width: 0.7rem;
  margin-right: 0.2rem;
`;
// background: rgba(255, 255, 255, 0.37);
