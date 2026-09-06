"use client";

import React from "react";
import { ThemeProvider } from "styled-components";
import { colors } from "@/src/styles/colors";

type Props = { children: React.ReactNode };

export default function AppThemeProvider({ children }: Props) {
  const theme = { colors } as const;
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}


