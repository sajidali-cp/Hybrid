import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";
import { BoxShadow } from "../../../theme";
export const Wrapper = styled(BoxShadow)`
  overflow: hidden;
  justify-self: center;
  position: fixed;
  min-width: 250px;
  bottom: 0;
  z-index: 2;
  left: 0;
  right: 0;
  margin: auto;
  width: 80%;
  min-width: 250px;
  margin-bottom: 1rem;
  border-radius: 4rem;
  min-height: unset;
  ${(props) => props.theme.mediaWidth.tablet`
  width: 50%;
  `}
  ${(props) => props.theme.mediaWidth.laptop`
  margin-bottom: unset;
    width: 20%;
    left: 0;
    right: 0;
    margin: unset;
    position: relative;
    width: 20%;
    min-height: 100vh;
    height: auto;
    bottom: unset;
    z-index: unset;
    border-radius: unset;
  `};

  background-color: ${({ theme }) => theme.bgSecondary};
`;

export const NavLinksWrapper = styled.nav`
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  ${(props) => props.theme.mediaWidth.laptop`
  flex-direction: column;
  margin-top: 3rem;
`};
`;

export const LogOut = styled.div`
  /* position: absolute; */
  cursor: pointer;
  bottom: 1rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.sideBarSecondary};
  :first-child {
    margin: 0;
  }
  margin: 10px 0;
  font-weight: 600;
  justify-content: center;
  padding: 0;
  display: none;
  flex-direction: column;
  align-items: center;
  svg {
    width: 20px;
    height: 20px;
    path {
      stroke: ${({ theme }) => theme.sideBarSecondary};
    }
  }
  span {
    display: none;
  }
  ${(props) => props.theme.mediaWidth.tablet`
  span{
    display:block;
  }
  `};
  ${(props) => props.theme.mediaWidth.laptop`
  display: flex;
  padding: calc(clamp(0.5em, 0.2em + 1vw, 0.8em))
      calc(clamp(1.5em, 0.8em + 2vw, 3em));
      flex-direction: row;
  justify-content: flex-start;
  svg{
    width: 33px;
    height: 33px;
    min-width:30px;
    margin-right: 30px;
  }
  ::before {
    content: "";
    width: 8px;
    border-radius: 5px;
    height: 100%;
    position: absolute;
    left: 0;
  }
    span{
      display:block;
    }

  `};
`;

export const StyledNavLink = styled(NavLink).attrs({
  activeClassName: "active",
})`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.sideBarSecondary};
  :first-child {
    margin: 0;
  }
  margin: 10px 0;
  font-weight: 600;
  justify-content: center;
  padding: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  &.active {
    color: ${({ theme }) => theme.sideBarPrimary};
    ::before {
      background-color: ${({ theme }) => theme.sideBarPrimary};
    }
    svg {
      path {
        stroke: ${({ theme }) => theme.sideBarPrimary};
      }
    }
  }
  svg {
    width: 20px;
    height: 20px;
    path {
      stroke: ${({ theme }) => theme.sideBarSecondary};
    }
  }
  span {
    display: none;
  }
  ${(props) => props.theme.mediaWidth.tablet`
  span{
    display:block;
  }
  `};
  ${(props) => props.theme.mediaWidth.laptop`
  padding: calc(clamp(0.5em, 0.2em + 1vw, 0.8em))
      calc(clamp(1.5em, 0.8em + 2vw, 3em));
      flex-direction: row;
  justify-content: flex-start;
  svg{
    width: 33px;
    height: 33px;
    min-width:30px;
    margin-right: 30px;
  }
  ::before {
    content: "";
    width: 8px;
    border-radius: 5px;
    height: 100%;
    position: absolute;
    left: 0;
  }
    span{
      display:block;
    }

  `};
`;
