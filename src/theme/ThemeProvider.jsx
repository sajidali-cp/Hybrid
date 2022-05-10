import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components/macro";
import theme from "./index";
export default function ThemeProvider({ children }) {
  const themeMode = useSelector((state) => state.settings.themeMode);
  console.log(themeMode)
  const themeObject = useMemo(() => theme(themeMode), [themeMode]);
  console.log(themeObject,"=======themeObject=======")
  return (
    <StyledComponentsThemeProvider theme={themeObject}>
      {children}
    </StyledComponentsThemeProvider>
  );
}
