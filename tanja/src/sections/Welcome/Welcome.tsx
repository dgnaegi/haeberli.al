"use client";

import React from "react";
import Section from "../../components/Section";
import Portrait from "./Portrait";
import styled from "styled-components";
import { S } from "../../styles/spacing";
import HeadingLines from "./HeadingLines";

const SIDE_PAD = `clamp(${S.x2}, 6vw, ${S.x18})`;

const HeroInner = styled.div`
  flex: 1;
  display: grid;
  align-items: stretch;
  width: 100%;
  max-width: 1300px;
  @media (min-width: 2550px) { max-width: 1600px; }
  margin: 0 auto;
  overflow: hidden;
  height: calc(100vh - var(--nav-offset, 0px));
  height: calc(100svh - var(--nav-offset, 0px));
  height: calc(100dvh - var(--nav-offset, 0px));
  position: relative;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'stack';
  @media (min-width: 768px) {
    grid-template-columns: 1fr auto;
    grid-template-rows: 1fr;
    grid-template-areas: 'left right';
  }
`;

const Left = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding-left: ${SIDE_PAD};
  padding-bottom: clamp(12px, 6vh, 64px);
  grid-area: stack;
  z-index: 2;
  @media (min-width: 768px) {
    grid-area: left;
    align-items: center;
    padding-bottom: 0;
  }
`;

const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 0 ${SIDE_PAD} 0 0;
  overflow: hidden;
  grid-area: stack;
  z-index: 1;
  @media (min-width: 768px) {
    grid-area: right;
    align-items: center;
  }
`;

const VisuallyHiddenH1 = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
`;

export default function Welcome() {
  return (
    <Section background="#000000" fullHeight>
      <HeroInner id="home">
        <VisuallyHiddenH1>Tanja Maag – Stadtratskandidatin AL Zürich</VisuallyHiddenH1>
        <Left>
          <HeadingLines animate />
        </Left>
        <Right>
          <Portrait src="/tanja/portrait.png" alt="Tanja Maag" animate />
        </Right>
      </HeroInner>
    </Section>
  );
}

