import {
  FlattenSimpleInterpolation,
  ThemedCssFunction,
} from "styled-components/macro";

export type Color = string;

export interface Buttons {
  color: Color;
  backGround: Color;
  border: Color;
}
export interface Colors {
  themeMode: ThemeMode;

  // base
  white: Color;
  black: Color;
  // Buttons
  primaryButton: Buttons;
  secondaryButton: Buttons;
  transparentButton: Buttons;
  // text
  defaultText: Color;
  primaryText: Color;
  secondaryText: Color;
  text1: Color;
  text2: Color;
  text3: Color;
  text4: Color;
  text5: Color;
  text6: Color;

  // Backgrounds Start

  // Side Bar Color Start
  sideBarPrimary: Color;
  sideBarSecondary: Color;
  // Side Bar Color End
  bgPrimary: Color;
  bgSecondary: Color;

  modalBG: Color;
  advancedBG: Color;

  error: Color;
  success: Color;
  warning: Color;
}

declare module "styled-components/macro" {
  export interface DefaultTheme extends Colors {
    grids: Grids;

    // shadows
    shadow1: string;

    // media queries
    mediaWidth: {
      mobileS: ThemedCssFunction<DefaultTheme>;
      mobileM: ThemedCssFunction<DefaultTheme>;
      mobileL: ThemedCssFunction<DefaultTheme>;
      tablet: ThemedCssFunction<DefaultTheme>;
      laptop: ThemedCssFunction<DefaultTheme>;
      laptopL: ThemedCssFunction<DefaultTheme>;
      desktop: ThemedCssFunction<DefaultTheme>;
    };

    // css snippets
    flexColumnNoWrap: FlattenSimpleInterpolation;
    flexRowNoWrap: FlattenSimpleInterpolation;
  }
}
