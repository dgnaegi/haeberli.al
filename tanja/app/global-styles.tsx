"use client";

import { createGlobalStyle } from "styled-components";
import { colors } from "@/src/styles/colors";
 

const GlobalStyles = createGlobalStyle`
  ::selection { background: ${colors.neonMagenta}; color: ${colors.black}; }
`;

export default GlobalStyles;


