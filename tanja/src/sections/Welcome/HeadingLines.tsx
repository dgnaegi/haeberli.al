"use client";

import React from "react";
import styled, { css, keyframes } from "styled-components";
import Image from "next/image";
import zmtMobile from "@/public/zmt.png";
import zmtDesktop from "@/public/zmt-desktop.png";

const slideInLeft = keyframes`
  from { opacity: 0; transform: translate3d(-24px, 0, 0); }
  to { opacity: 1; transform: translate3d(0, 0, 0); }
`;

const Container = styled.div<{ $animate?: boolean }>`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  height: 100%;
  background: transparent; /* ensure transparent container */
  overflow: hidden;
  @media (min-width: 768px) {
    align-items: center; /* vertically center on desktop */
  }

  .heading-img {
    display: block;
    width: 100%;
    height: auto;
    background: transparent; /* ensure transparent img background */
    max-height: calc(100vh - var(--nav-offset, 0px));
    max-height: calc(100svh - var(--nav-offset, 0px));
    max-height: calc(100dvh - var(--nav-offset, 0px));
    object-fit: contain;
    object-position: left bottom;
    opacity: 0;
    transform: translate3d(-24px, 0, 0);
    will-change: opacity, transform;
    @media (min-width: 768px) {
      object-position: left center;
    }
  }

  /* show correct image without JS to avoid initial flash */
  .img-mobile { display: block; }
  .img-desktop { display: none; }
  @media (min-width: 768px) {
    .img-mobile { display: none; }
    .img-desktop { display: block; }
  }
  /* ensure desktop variant remains large enough on big screens */
  @media (min-width: 1024px) {
    .img-desktop {
      min-width: 460px;
      max-width: 40vw; /* leave room for portrait */
    }
  }

  ${({ $animate }) =>
    $animate &&
    css`
      .heading-img {
        animation: ${slideInLeft} 700ms ease-out 0.2s forwards;
      }
    `}
`;

type HeadingLinesProps = {
  animate?: boolean;
  onLoaded?: () => void;
};

export default function HeadingLines({ animate, onLoaded }: HeadingLinesProps) {
  const altText = "Zürich maag Tanja";

  return (
    <Container $animate={animate}>
      <Image
        src={zmtMobile}
        alt={altText}
        priority
        sizes="80vw"
        className="heading-img img-mobile"
        style={{ backgroundColor: 'transparent' }}
        onLoadingComplete={undefined}
      />
      <Image
        src={zmtDesktop}
        alt={altText}
        priority={false}
        sizes="(min-width: 2560px) 32vw, (min-width: 1920px) 36vw, (min-width: 1024px) 40vw, 80vw"
        className="heading-img img-desktop"
        style={{ backgroundColor: 'transparent' }}
        onLoadingComplete={undefined}
      />
    </Container>
  );
}


