import styled from "styled-components";
import PatternLight from "../../assets/backgrounds/pattern-light.svg";
import RightTopLight from "../../assets/backgrounds/right-top-light.svg";
import PrivateLight from "../../assets/backgrounds/private-light.svg";

export const AuthlayoutContainer = styled.div<{ isLogin: boolean }>`
  background-image: url(${RightTopLight});
  background-position: top right, 5% center;
  background-repeat: no-repeat;
  background-size: 30vh, 62vh;
  ${(props) => props.theme.mediaWidth.laptop`
  background-image: url(${RightTopLight}),
  url(${props.isLogin ? PatternLight : PrivateLight});
    background-position: top right, 5% center;
    background-repeat: no-repeat;
    background-size: 30vh, 62vh;
  `};
  min-height: 100vh;
  width: 100%;
  background-attachment: fixed;
  padding: 4%;
  display: flex;
  justify-content: right;
  align-items: center;
`;
export const AuthlayoutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  ${({ theme }) => theme.mediaWidth.laptop`
     width: 70%;
  `};
`;

export const FormWrapper = styled.div<{ maxWidth: string; center?: boolean }>`
  max-width: ${(props) => props.maxWidth};
  width: 100%;
  ${(props) =>
    props.center
      ? `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;`
      : ``}
`;
