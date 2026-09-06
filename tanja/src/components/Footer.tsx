"use client";

import React from "react";
import styled from "styled-components";
import { colors } from "@/src/styles/colors";
import { FONT_BODY } from "@/src/styles/fonts";
import { S } from "@/src/styles/spacing";
import Share from "@/src/ui/Share";

const Wrap = styled.footer`
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding: ${S.x4} ${S.x6};
  background: linear-gradient(180deg, ${colors.dark}, ${colors.black});
`;

const Inner = styled.div`
  width: 100%;
  max-width: 1300px;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: ${S.x3};
`;

const LinkSmall = styled.a`
  color: ${colors.textSecondary};
  font-family: ${FONT_BODY};
  font-size: 12px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  height: 44px; /* match round share button height for vertical centering */
  &:hover { color: ${colors.neonMagenta}; text-shadow: 0 0 10px rgba(255,0,255,0.3); }
`;

export default function Footer() {
  return (
    <Wrap>
      <Inner>
        <LinkSmall href="/tanja/datenschutz" style={{ justifySelf: 'end' }}>Datenschutz / Impressum</LinkSmall>
      </Inner>
    </Wrap>
  );
}


