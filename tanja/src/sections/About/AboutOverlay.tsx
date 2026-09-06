"use client";

import React from "react";
import { track } from "@vercel/analytics";
import styled, { keyframes } from "styled-components";
import { S } from "@/src/styles/spacing";
import { FONT_BODY, FONT_DISPLAY } from "@/src/styles/fonts";
import { colors } from "@/src/styles/colors";
import { BP } from "@/src/styles/breakpoints";

const Overlay = styled.div<{ $open: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 3000;
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transition: opacity 250ms ease;
`;

const Scrim = styled.button<{ $open: boolean }>`
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.4);
  border: none;
  padding: 0;
  margin: 0;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transition: opacity 250ms ease;
`;

const Sheet = styled.div<{ $open: boolean }>`
  position: fixed;
  inset: 0;
  background: #ffffff;
  border-radius: 0;
  transform: translateY(${({ $open }) => ($open ? 0 : 12)}px);
  opacity: ${({ $open }) => ($open ? 1 : 0.98)};
  transition: transform 300ms cubic-bezier(.2,.8,.2,1), opacity 300ms ease;
  box-shadow: 0 0 0 rgba(0,0,0,0);
`;

const SheetHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${S.x5} ${S.x6} ${S.x4};
  background: rgba(255,255,255,0.98);
  backdrop-filter: saturate(140%) blur(6px);
  border-bottom: 1px solid rgba(0,0,0,0.06);
  z-index: 1;
`;

const SheetTitle = styled.h3`
  margin: 0;
  font-family: ${FONT_DISPLAY};
  font-weight: 900;
  font-size: clamp(18px, 4.2vw, 26px);
  color: #0A0A0A;
`;

const CloseBtn = styled.button`
  appearance: none;
  background: transparent;
  border: none;
  color: #0A0A0A;
  border-radius: 0;
  padding: ${S.x2};
  min-width: 44px;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${FONT_BODY};
  font-size: 28px;
  line-height: 1;
`;

const SheetBody = styled.div`
  position: relative;
  height: 100svh;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior-y: contain;
  scroll-padding-top: 64px;
`;

const Story = styled.div``;

const StoryStep = styled.section`
  min-height: calc(100svh - 64px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${S.x3};
  padding: 0 ${S.x6};
  box-sizing: border-box;
  @media (min-width: ${BP.lg}px) {
    padding: 0 ${S.x8};
  }
`;

const StepHeading = styled.h4`
  margin: 0;
  font-family: ${FONT_DISPLAY};
  font-weight: 800;
  font-size: clamp(18px, 4vw, 24px);
  color: #0A0A0A;
  @media (min-width: ${BP.lg}px) {
    text-align: center;
  }
`;

const StepText = styled.p`
  margin: 0;
  font-family: ${FONT_BODY};
  font-size: clamp(14px, 3.6vw, 18px);
  line-height: 1.6;
  color: #333;
  @media (min-width: ${BP.lg}px) {
    text-align: center;
    max-width: 70ch;
    margin-left: auto;
    margin-right: auto;
  }
`;

const ProgressTrack = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 3px;
  background: rgba(0,0,0,0.06);
  overflow: hidden;
`;

const ProgressFill = styled.div`
  height: 100%;
  width: 0%;
  background: ${colors.neonMagenta};
  transition: width 160ms ease;
`;

const bounceY = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
`;

const ArrowWrap = styled.div`
  position: fixed;
  left: 50%;
  bottom: calc(env(safe-area-inset-bottom, 0px) + 16px);
  transform: translateX(-50%);
  z-index: 3001;
  pointer-events: none;
  opacity: 0.85;
`;

const ArrowButton = styled.button`
  appearance: none;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  pointer-events: auto;
`;

const ArrowSvg = styled.svg`
  width: 20px;
  height: 20px;
  color: ${colors.neonMagenta};
  animation: ${bounceY} 1.4s ease-in-out infinite;
  stroke: currentColor;
  stroke-width: 2.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
`;

type Props = {
  open: null | "leben" | "werte";
  onClose: () => void;
  renderLeben: React.ReactNode;
  renderWerte: React.ReactNode;
};

export default function AboutOverlay({ open, onClose, renderLeben, renderWerte }: Props) {
  const isOpen = open !== null;
  const bodyRef = React.useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = React.useState(0);
  const [canScrollDown, setCanScrollDown] = React.useState(false);
  const scrollMilestonesRef = React.useRef<Set<number>>(new Set());
  const scrollEventCountRef = React.useRef(0);
  const sectionTypeRef = React.useRef<string | null>(null);

  React.useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    
    // Track when overlay opens
    const sectionType = open === "leben" ? "mein_weg" : "politische_schwerpunkte";
    sectionTypeRef.current = sectionType;
    track('about_overlay_open', { section: sectionType });
    scrollMilestonesRef.current.clear();
    scrollEventCountRef.current = 0;
    
    return () => { document.body.style.overflow = prev; };
  }, [isOpen, open]);

  // auto-snapping disabled per request

  React.useEffect(() => {
    const el = bodyRef.current;
    if (!el || !isOpen) return;
    
    const update = () => {
      const max = el.scrollHeight - el.clientHeight;
      const p = max > 0 ? el.scrollTop / max : 0;
      setProgress(p);
      const hideThreshold = Math.min(120, el.clientHeight * 0.15);
      setCanScrollDown(el.scrollTop < max - hideThreshold);
      
      // Track scroll milestones (25%, 50%, 75%, 100%)
      const milestones = [0.25, 0.5, 0.75, 1.0];
      milestones.forEach(milestone => {
        if (p >= milestone && !scrollMilestonesRef.current.has(milestone)) {
          scrollMilestonesRef.current.add(milestone);
          track('about_overlay_scroll', { 
            section: sectionTypeRef.current || (open === "leben" ? "mein_weg" : "politische_schwerpunkte"),
            milestone: `${Math.round(milestone * 100)}%`
          });
        }
      });
      
      // Track scroll event count (increment on each scroll)
      scrollEventCountRef.current++;
    };
    
    update();
    el.addEventListener("scroll", update, { passive: true } as any);
    window.addEventListener("resize", update, { passive: true } as any);
    
    return () => {
      el.removeEventListener("scroll", update as any);
      window.removeEventListener("resize", update as any);
    };
  }, [isOpen, open]);


  return (
    <Overlay $open={isOpen} aria-hidden={!isOpen} id="about-overlay">
      <Scrim $open={isOpen} onClick={onClose} aria-label="Schließen" />
      <Sheet $open={isOpen} role="dialog" aria-modal="true">
        <SheetHeader>
          <SheetTitle>{open === "leben" ? "Mein Weg" : open === "werte" ? "Was mir wichtig ist" : ""}</SheetTitle>
          <CloseBtn onClick={onClose} aria-label="Schließen" title="Schließen">×</CloseBtn>
          <ProgressTrack aria-hidden>
            <ProgressFill style={{ width: `${Math.round(progress * 100)}%` }} />
          </ProgressTrack>
        </SheetHeader>
        <SheetBody ref={bodyRef} style={{ paddingTop: '64px' }}>
          <Story>
            {open === "leben" ? renderLeben : null}
            {open === "werte" ? renderWerte : null}
          </Story>
        </SheetBody>
        {canScrollDown && (
          <ArrowWrap>
            <ArrowButton aria-label="Weiter scrollen">
              <ArrowSvg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </ArrowSvg>
            </ArrowButton>
          </ArrowWrap>
        )}
      </Sheet>
    </Overlay>
  );
}

export { StoryStep, StepHeading, StepText };


