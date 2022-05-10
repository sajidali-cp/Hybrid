import styled, {
  createGlobalStyle,
  css,
  DefaultTheme,
} from "styled-components/macro";
import { ThemeMode } from "../enums";
import { Colors } from "./styled";

export const FramerMotionVariant = {
  hidden: {
    y: -10,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
    },
  },
};

export const MEDIA_WIDTHS = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
};

const mediaWidthTemplates: {
  [width in keyof typeof MEDIA_WIDTHS]: typeof css;
} = Object.keys(MEDIA_WIDTHS).reduce((accumulator, size) => {
  (accumulator as any)[size] = (a: any, b: any, c: any) => css`
    @media (min-width: ${(MEDIA_WIDTHS as any)[size]}px) {
      ${css(a, b, c)}
    }
  `;
  return accumulator;
}, {}) as any;

const white = "#FFFFFF";
const black = "#000000";

function colors(themeMode: ThemeMode): Colors {
  return {
    themeMode: themeMode,

    // base
    white: white,
    black: black,

    // Buttons
    primaryButton: {
      color: white,
      backGround: "#00AEEF",
      border: "transparent",
    },
    secondaryButton: {
      color: "#012251",
      backGround: white,
      border: "transparent",
    },
    transparentButton: {
      color: themeMode === ThemeMode.Light ? "#012251" : white,
      backGround: "transparent",
      border: themeMode === ThemeMode.Light ? "#012251" : white,
    },

    // Text Color Start
    defaultText: themeMode === ThemeMode.Light ? "#012251" : white,
    primaryText: themeMode === ThemeMode.Light ? black : white,
    secondaryText: themeMode === ThemeMode.Light ? "#7F819A" : "#D9D9D9",
    text1: "#003075",
    text2: "#747D9C",
    text3: "#414A5B",
    text4: "#FAFCFE",
    text5: "#77838F",
    text6: "#B9B9B9",
    // Text Color End

    // Backgrounds Start

    // Side Bar Color Start
    sideBarPrimary: "#00AEEF",
    sideBarSecondary: "#919191",
    // Side Bar Color End
    bgPrimary:
      themeMode === ThemeMode.Light
        ? white
        : themeMode === ThemeMode.Dark
        ? "#262626"
        : "#002066",
    bgSecondary:
      themeMode === ThemeMode.Light
        ? "#F2F5FF"
        : themeMode === ThemeMode.Dark
        ? "#393939"
        : "#003075",

    modalBG:
      themeMode === ThemeMode.Light
        ? ""
        : themeMode === ThemeMode.Dark
        ? ""
        : "",
    advancedBG:
      themeMode === ThemeMode.Light
        ? ""
        : themeMode === ThemeMode.Dark
        ? ""
        : "",
    // Backgrounds End
    error:
      themeMode === ThemeMode.Light
        ? ""
        : themeMode === ThemeMode.Dark
        ? ""
        : "",
    success:
      themeMode === ThemeMode.Light
        ? ""
        : themeMode === ThemeMode.Dark
        ? ""
        : "",
    warning:
      themeMode === ThemeMode.Light
        ? ""
        : themeMode === ThemeMode.Dark
        ? ""
        : "",
  };
}

export default function theme(themeMode: ThemeMode): DefaultTheme {
  return {
    ...colors(themeMode),

    grids: {
      sm: 8,
      md: 12,
      lg: 24,
    },

    //shadows
    shadow1: themeMode ? "#000" : "#2F80ED",

    // media queries
    mediaWidth: mediaWidthTemplates,

    // css snippets
    flexColumnNoWrap: css`
      display: flex;
      flex-flow: column nowrap;
    `,
    flexRowNoWrap: css`
      display: flex;
      flex-flow: row nowrap;
    `,
  };
}

export const BoxShadow = styled.div`
  box-shadow: 0px 3px 6px rgba(39, 45, 59, 0.14);
`;

export const InnerSection = styled.div`
  border-radius: 1.25rem;
  padding: 1.25rem;
  background-color: ${({ theme }) =>
    theme.themeMode === ThemeMode.Light ? theme.bgSecondary : theme.bgPrimary};
`;

export const ShadowedSection = styled.section`
  filter: drop-shadow(0px 2px 10px rgba(39, 45, 59, 0.12));
  border-radius: 1.25rem;
  padding: 1.25rem;
  background-color: ${({ theme }) =>
    theme.themeMode === ThemeMode.Light ? theme.bgPrimary : theme.bgSecondary};
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1600px;
  padding: 0 calc(clamp(1em, 0.5em + 1vw, 2em));
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 calc(clamp(1em, 0.5em + 1vw, 2em));
  font-size: 1.2rem;
  p {
    margin-left: 10px;
  }
  &:hover {
    opacity: ${({ theme, disabled }) => !disabled && 0.8};
  }
  pointer-events: ${({ disabled }) => disabled && "none"};
`;

export const Error = styled.p`
  color: #e23e47 !important;
  font-size: 0.875rem;
`;

export const FormikError = styled.p`
  width: 100%;
  color: #e23e47 !important;
  font-size: 0.875rem;
  /* position: absolute;
  bottom: 0; */
`;

export const Dots = styled.span`
  &::after {
    display: inline-block;
    animation: ellipsis 1.25s infinite;
    content: ".";
    width: 2em;
    text-align: left;
  }
  @keyframes ellipsis {
    0% {
      content: ".";
    }
    20% {
      content: "..";
    }
    40% {
      content: "...";
    }
    60% {
      content: "....";
    }
    80% {
      content: ".....";
    }
  }
`;

export const PrimaryButton = styled(Button).attrs({
  type: "submit",
})<{
  margin: string;
  height: string;
  borderRadius: string;
  maxWidth: string;
  disabled?: boolean;
}>`
  margin: ${(props) => props.margin ?? "0"};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius ?? "16px"};
  max-width: ${(props) => props.maxWidth};
  width: 100%;
  border: 1px solid ${({ theme: { primaryButton } }) => primaryButton.border};
  background-color: ${({ theme: { primaryButton }, disabled }) =>
    disabled ? "#B9B9B9" : primaryButton.backGround};
  pointer-events: ${({ disabled }) => disabled && "none"};
  cursor: ${({ disabled }) => disabled && "not-allowed"};
  color: ${({ theme: { primaryButton } }) => primaryButton.color};
  &:active {
    box-shadow: 0 0 0 1pt
      ${({ theme: { primaryButton } }) => primaryButton.backGround};
  }
  div {
    svg {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`;

export const SecondaryButton = styled(Button)<{
  margin: string;
  height: string;
  borderRadius: string;
  maxWidth: string;
}>`
  margin: ${(props) => props.margin ?? "0"};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius ?? "16px"};
  max-width: ${(props) => props.maxWidth};
  width: 100%;
  border: 1px solid
    ${({ theme: { secondaryButton } }) => secondaryButton.border};
  background-color: ${({ theme: { secondaryButton } }) =>
    secondaryButton.backGround};

  color: ${({ theme: { secondaryButton } }) => secondaryButton.color};
  &:active {
    box-shadow: 0 0 0 1pt
      ${({ theme: { secondaryButton } }) => secondaryButton.backGround};
  }
`;

export const TransparentButton = styled(Button)<{
  margin: string;
  height: string;
  borderRadius: string;
  maxWidth: string;
}>`
  margin: ${(props) => props.margin ?? "0"};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius ?? "16px"};
  max-width: ${(props) => props.maxWidth};
  width: 100%;
  border: 1px solid
    ${({ theme: { transparentButton } }) => transparentButton.border};

  background-color: ${({ theme: { transparentButton } }) =>
    transparentButton.backGround};

  color: ${({ theme: { transparentButton } }) => transparentButton.color};
  &:active {
    box-shadow: 0 0 0 1pt
      ${({ theme: { transparentButton } }) => transparentButton.backGround};
  }
`;

export const ThemedGlobalStyle = createGlobalStyle`
html {
  padding: 0;
  margin: 0;
  font-size: 10px;
  line-height: inherit;
  color: ${(props) => props.theme.primaryText};
  background-color: ${({ theme }) => theme.bgPrimary};
  
  ${({ theme }) => theme.mediaWidth.mobileM`
    font-size: 12px !important;
  `};

  ${({ theme }) => theme.mediaWidth.tablet`
    font-size: 14px !important;
  `};

  ${({ theme }) => theme.mediaWidth.laptop`
    font-size: 16px !important;
  `};

  ${({ theme }) => theme.mediaWidth.desktop`
    font-size: 20px !important;
  `};
  font-family: 'Lato', sans-serif;
  scroll-behavior: smooth;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

iframe{
  display:none;
}

ol {
        list-style-type: none;
        counter-reset: item;
        margin: 0;
        padding: 0;
      }
      li {
        display: table;
        counter-increment: item;
        margin-bottom: 0.6em;
      }
      li:before {
        content: counters(item, ".") ". ";
        display: table-cell;
        padding-right: 0.6em;
      }
      li li {
        margin: 0;
      }
      li li:before {
        content: counters(item, ".") " ";
      }

input{
  color: ${({ theme }) =>
    theme.themeMode === ThemeMode.Light ? theme.black : theme.white};
}
a {
  color: ${({ theme }) => theme.sideBarPrimary};
  text-decoration: none;
  cursor: pointer;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 5px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.defaultText};
  font-family: 'Lato', sans-serif;
}
h1 {
  font-size: 2rem;
}
h2 {
  font-size: 1.5rem;
}
h3 {
  font-size: 1.17rem;
}
h4 {
  font-size: 1rem;
}
h5 {
  font-size: 0.83rem;
}
h6 {
  font-size: 0.67rem;
}
div,
section,
ul,
ol,
li,
table,
tr,
td,
p,
a,
header,
footer,
header,
footer,
nav,
section,
select,
input,
button {
  font-size: 1rem;
  outline: none;
  background: none;
  font-family: 'Lato', sans-serif;
}
ul,
ol,
li,
a {
  text-decoration: none;
  list-style: none;
}

small{
  color: ${({ theme }) => theme.text3};
}
p{
  line-height: 1.3rem;
}

button,
link,
a {
  cursor: default;
  ${({ theme }) => theme.mediaWidth.laptop`
    cursor: pointer;
  `};
}

button,
link,
a {
  outline: none;
  border: transparent;
}
`;
