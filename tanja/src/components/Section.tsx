"use client";

import React from "react";
import styled, { css } from "styled-components";
import { colors } from "@/src/styles/colors";

type SectionProps = {
  background?: string;
  children: React.ReactNode;
  id?: string;
  fullHeight?: boolean;
};

const SectionRoot = styled.section<{ $background?: string; $fullHeight?: boolean }>`
  width: 100%;
  background: ${({ $background }) =>
    $background || `linear-gradient(180deg, ${colors.black}, ${colors.dark})`};
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  ${({ $fullHeight }) =>
    $fullHeight &&
    css`
      /* fallback chain for mobile browser UI */
      min-height: 100vh;
      min-height: 100svh;
      min-height: 100dvh;
      height: 100vh;
      height: 100svh;
      height: 100dvh;
    `}
`;

export default function Section({ background, children, id, fullHeight }: SectionProps) {
  return (
    <SectionRoot id={id} $background={background} $fullHeight={fullHeight}>
      {children}
    </SectionRoot>
  );
}


