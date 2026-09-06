"use client";

import React from "react";
import styled, { css, keyframes } from "styled-components";
import Image from "next/image";
import portraitImg from "@/public/portrait.png";

/* Image styles live here so we can use next/image with className */
const imgStyles = css<{ $animate?: boolean }>`
  .portrait-img {
    width: 100%;
    height: auto;
    max-height: calc(100vh - var(--nav-offset, 0px));
    max-height: calc(100svh - var(--nav-offset, 0px));
    max-height: calc(100dvh - var(--nav-offset, 0px));
    object-fit: cover;
    object-position: right bottom;
    opacity: 0;
    transform-origin: center right;
    transform: translate3d(80px, 0, 0);
    will-change: opacity, transform;
  }
  ${({ $animate }) =>
    $animate &&
    css`
      .portrait-img { animation: ${slideInRight} 700ms ease-out 0.2s forwards; }
    `}
  @media (prefers-reduced-motion: reduce) {
    .portrait-img { animation: none; opacity: 1; transform: none; }
  }
  @media (min-width: 768px) {
    .portrait-img {
      height: calc(100vh - var(--nav-offset, 0, 0));
      height: calc(100svh - var(--nav-offset, 0, 0));
      height: calc(100dvh - var(--nav-offset, 0, 0));
      width: auto;
      max-width: 100%;
      object-position: right center;
    }
  }
`;

const Container = styled.div<{ $animate?: boolean }>`
  position: sticky;
  bottom: 0;
  top: auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  overflow: hidden;
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  @media (min-width: 768px) {
    top: var(--nav-offset, 0px);
    bottom: auto;
    height: calc(100vh - var(--nav-offset, 0px));
    height: calc(100svh - var(--nav-offset, 0px));
    height: calc(100dvh - var(--nav-offset, 0px));
    width: auto;
  }
  ${imgStyles}
  ${imgStyles}
`;

const slideInRight = keyframes`
  from { opacity: 0; transform: translate3d(80px, 0, 0); }
  to { opacity: 1; transform: translate3d(0, 0, 0); }
`;

type PortraitProps = {
  src: string;
  alt?: string;
  animate?: boolean;
  onLoaded?: () => void;
};

export default function Portrait({ src, alt = "Portrait", animate, onLoaded }: PortraitProps) {
  return (
    <Container $animate={animate}>
      <Image
        src={portraitImg}
        alt={alt}
        priority
        placeholder="blur"
        sizes="(min-width: 768px) 50vw, 90vw"
        className="portrait-img"
      />
    </Container>
  );
}


