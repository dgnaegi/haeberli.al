"use client";
import React from "react";
import { track } from "@vercel/analytics";
import Section from "../../components/Section";
import Reveal from "../../components/Reveal";
import styled, { keyframes } from "styled-components";
import { S } from "../../styles/spacing";
import Container from "@/src/ui/Container";
import { FONT_BODY, FONT_DISPLAY } from "../../styles/fonts";
import SectionTitle from "@/src/ui/SectionTitle";
import Button from "@/src/ui/Button";
import { colors } from "../../styles/colors";
import { BP } from "@/src/styles/breakpoints";
import { gesundheitSection, gesellschaftSection, bauenSection, steuernSection, fraktionSection, initiativesSection, MotionSection } from "./motions";
import { focusSections, FocusSection } from "./focusData";

const Inner = styled(Container)`
  display: grid;
  gap: ${S.x4};
`;

const Title = SectionTitle;

const Sub = styled.p`
  margin: 0 auto ${S.x3};
  color: #333333;
  font-family: ${FONT_BODY};
  font-size: clamp(14px, 2.6vw, 18px);
  max-width: 70ch;
  text-align: center;
`;

const FocusLayout = styled.div`
  display: grid;
  gap: ${S.x4};
  @media (min-width: ${BP.lg}px) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
`;

const VideoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${S.x2};
`;

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 9 / 16;
  border-radius: ${S.x4};
  overflow: hidden;
  background: #000;
  max-height: 560px;
  @media (min-width: ${BP.lg}px) {
    max-height: 520px;
  }
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;


const FocusColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${S.x3};
`;

const FocusHeading = styled.h3`
  margin: 0;
  font-family: ${FONT_DISPLAY};
  font-weight: 900;
  font-size: clamp(24px, 4vw, 32px);
  color: #0A0A0A;
`;

const Accordion = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${S.x2};
`;

const AccordionItem = styled.div`
  border: 1px solid rgba(10, 10, 10, 0.08);
  border-radius: ${S.x3};
  overflow: hidden;
`;

const AccordionHeader = styled.button<{ $expanded: boolean }>`
  width: 100%;
  background: ${({ $expanded }) => ($expanded ? "#f8f8f8" : "#ffffff")};
  border: none;
  padding: ${S.x3} ${S.x4};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${S.x3};
  cursor: pointer;
  text-align: left;
  font-family: ${FONT_DISPLAY};
  font-size: clamp(16px, 2.8vw, 20px);
  font-weight: 700;
  color: #0a0a0a;
  &:focus-visible {
    outline: 2px solid ${colors.neonMagenta};
    outline-offset: 3px;
  }
`;

const AccordionHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${S.x1};
  flex: 1;
`;

const AccordionIndicator = styled.span`
  font-size: 28px;
  line-height: 1;
  font-weight: 700;
  color: #0a0a0a;
`;

const AccordionContent = styled.div<{ $expanded: boolean }>`
  display: ${({ $expanded }) => ($expanded ? "block" : "none")};
  padding: ${({ $expanded }) => ($expanded ? `${S.x3} ${S.x4}` : "0 0")};
  background: #ffffff;
`;

const FocusDetail = styled.p`
  margin: 0;
  font-size: clamp(14px, 2.4vw, 16px);
  line-height: 1.6;
  font-family: ${FONT_BODY};
  color: #333333;
`;

const MoreButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-top: ${S.x3};
`;

const MoreButton = styled(Button)`
  padding: ${S.x3} ${S.x6};
`;

/* removed image-based card visuals for b/w design */


/* hint icon removed per request */

const Overlay = styled.div<{ $open: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 3000; /* above navbar */
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
  inset: 0; /* full screen */
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
  font-size: 28px; /* larger × */
  line-height: 1;
`;

const SheetBody = styled.div`
  position: relative;
  height: 100svh; /* full viewport height */
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior-y: contain;
  /* ensure snap positions account for fixed header height */
  scroll-padding-top: 64px;
`;

const Story = styled.div`
  /* vertical scroll story container */
`;

const StoryStep = styled.section<{ $bg?: string }>`
  /* allow normal scrolling when content exceeds viewport */
  position: relative;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: center; /* centers short content; tall content flows normally */
  gap: ${S.x3};
  padding: 0 ${S.x6};
  box-sizing: border-box;
  background-image: url(${({ $bg }) => $bg ? `/tanja/about/${$bg}` : '/tanja/about/femdemo.JPG'});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #FFFFFF;
  opacity: 0.96;
  transform: translateY(6px);
  transition: transform 260ms ease, opacity 260ms ease;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 0;
  }
  & > * {
    position: relative;
    z-index: 1;
  }
  &.is-active {
    opacity: 1;
    transform: translateY(0);
  }
  @media (min-width: ${BP.lg}px) {
    gap: ${S.x3};
    padding: 0 ${S.x8};
  }
`;

const StepHeading = styled.h4`
  margin: 0;
  font-family: ${FONT_DISPLAY};
  font-weight: 800;
  font-size: clamp(18px, 4vw, 24px);
  color: #FFFFFF;
  @media (min-width: ${BP.lg}px) {
    text-align: center;
  }
`;

const StepText = styled.p`
  margin: 0;
  font-family: ${FONT_BODY};
  font-size: clamp(14px, 3.6vw, 18px);
  line-height: 1.6;
  color: #FFFFFF;
  @media (min-width: ${BP.lg}px) {
    text-align: center;
    max-width: 70ch;
    margin-left: auto;
    margin-right: auto;
  }
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
  opacity: 0.9;
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
  width: 22px;
  height: 22px;
  color: ${colors.neonMagenta};
  animation: ${bounceY} 1.4s ease-in-out infinite;
  stroke: currentColor;
  stroke-width: 2.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
`;

const MotionsButton = styled.button`
  appearance: none;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #FFFFFF;
  padding: ${S.x2} ${S.x4};
  border-radius: ${S.x2};
  font-family: ${FONT_BODY};
  font-size: clamp(12px, 2.5vw, 14px);
  margin-top: ${S.x3};
  cursor: pointer;
  transition: background 200ms ease, border-color 200ms ease;
  backdrop-filter: blur(4px);
  align-self: center;
  @media (min-width: ${BP.lg}px) {
    align-self: center;
  }
  &:hover {
    background: rgba(255, 255, 255, 0.25);
    border-color: rgba(255, 255, 255, 0.5);
  }
`;

const MotionsOverlay = styled.div<{ $open: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 3001;
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transition: opacity 250ms ease;
`;

const MotionsScrim = styled.button<{ $open: boolean }>`
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.6);
  border: none;
  padding: 0;
  margin: 0;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transition: opacity 250ms ease;
`;

const MotionsSheet = styled.div<{ $open: boolean }>`
  position: fixed;
  inset: 0;
  background: #ffffff;
  transform: translateY(${({ $open }) => ($open ? 0 : 12)}px);
  opacity: ${({ $open }) => ($open ? 1 : 0.98)};
  transition: transform 300ms cubic-bezier(.2,.8,.2,1), opacity 300ms ease;
  display: flex;
  flex-direction: column;
`;

const MotionsSheetHeader = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  background: #ffffff;
  border-bottom: 1px solid #e0e0e0;
  padding: ${S.x4} ${S.x6};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${S.x4};
`;

const MotionsSheetTitle = styled.h2`
  margin: 0;
  font-family: ${FONT_DISPLAY};
  font-weight: 900;
  font-size: clamp(18px, 4.2vw, 26px);
  color: #0A0A0A;
`;

const MotionsSheetBody = styled.div`
  flex: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: ${S.x6};
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.3);
  }
`;

const MotionsCloseBtn = styled.button`
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
  cursor: pointer;
`;

const MotionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${S.x3};
`;

const MotionCategoryTitle = styled.h5`
  margin: 0 0 ${S.x4} 0;
  font-family: ${FONT_DISPLAY};
  font-weight: 700;
  font-size: clamp(18px, 3vw, 22px);
  color: #0A0A0A;
  text-align: center;
`;

const MotionItem = styled.div`
  padding: ${S.x4};
  background: #f5f5f5;
  border-radius: ${S.x2};
  border-left: 4px solid ${colors.neonMagenta};
  margin-bottom: ${S.x3};
`;

const MotionTitle = styled.p`
  margin: 0;
  font-family: ${FONT_BODY};
  font-size: clamp(14px, 2.5vw, 16px);
  line-height: 1.6;
  color: #0A0A0A;
  text-align: center;
`;

const MotionLink = styled.a`
  color: #0A0A0A;
  text-decoration: underline;
  text-decoration-color: ${colors.neonMagenta};
  text-underline-offset: 3px;
  transition: text-decoration-color 200ms ease;
  &:hover {
    text-decoration-color: #0A0A0A;
  }
`;

const SectionDivider = styled.div`
  margin: ${S.x6} 0;
  border-top: 2px solid #e0e0e0;
`;

interface MotionsButtonProps {
  sections?: MotionSection[];
  onClick: () => void;
}

const MotionsButtonComponent: React.FC<MotionsButtonProps> = ({ sections, onClick }) => {
  if (!sections || sections.length === 0) return null;

  const handleClick = () => {
    const sectionTitles = sections.map(s => s.title).join(', ');
    track('motions_button_click', { 
      sections: sectionTitles,
      sectionCount: sections.length
    });
    onClick();
  };

  return (
    <MotionsButton onClick={handleClick}>
      Parlamentarische Vorstösse anzeigen
    </MotionsButton>
  );
};

interface MotionsOverlayComponentProps {
  open: boolean;
  sections: MotionSection[];
  onClose: () => void;
}

const MotionsOverlayComponent: React.FC<MotionsOverlayComponentProps> = ({ open, sections, onClose }) => {
  React.useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  return (
    <MotionsOverlay $open={open} aria-hidden={!open}>
      <MotionsScrim $open={open} onClick={onClose} aria-label="Schließen" />
      <MotionsSheet $open={open} role="dialog" aria-modal="true">
        <MotionsSheetHeader>
          <MotionsSheetTitle>Parlamentarische Vorstösse</MotionsSheetTitle>
          <MotionsCloseBtn onClick={onClose} aria-label="Schließen" title="Schließen">×</MotionsCloseBtn>
        </MotionsSheetHeader>
        <MotionsSheetBody>
          <MotionsList>
            {sections.map((section, idx) => (
              <div key={idx}>
                {idx > 0 && <SectionDivider />}
                <MotionCategoryTitle>{section.title}</MotionCategoryTitle>
                {section.motions.map((motion, mIdx) => (
                  <MotionItem key={motion.key || mIdx}>
                    <MotionTitle>
                      {motion.link ? (
                        <MotionLink 
                          href={motion.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          onClick={() => {
                            track('motion_click', { 
                              motionKey: motion.key,
                              motionTitle: motion.title.substring(0, 100),
                              section: section.title
                            });
                          }}
                        >
                          {motion.title}
                        </MotionLink>
                      ) : (
                        motion.title
                      )}
                    </MotionTitle>
                  </MotionItem>
                ))}
              </div>
            ))}
          </MotionsList>
        </MotionsSheetBody>
      </MotionsSheet>
    </MotionsOverlay>
  );
};

export default function About() {
  const [open, setOpen] = React.useState<null | "leben" | "werte">(null);
  const [motionsOpen, setMotionsOpen] = React.useState<MotionSection[] | null>(null);
  const isOpen = open !== null;
  const bodyRef = React.useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = React.useState(0);
  const [canScrollDown, setCanScrollDown] = React.useState(false);
  const isAnimatingRef = React.useRef(false);
  const wheelAccumRef = React.useRef(0);
  const lastWheelTsRef = React.useRef(0);
  const handleVideoPlay = () => {
    if (!videoTracked) {
      setVideoTracked(true);
      track("about_video_play");
    }
  };

  const [expandedSection, setExpandedSection] = React.useState<string | null>(null);
  const [videoTracked, setVideoTracked] = React.useState(false);
  const handleAccordionToggle = (section: FocusSection) => {
    setExpandedSection((prev) => {
      const next = prev === section.id ? null : section.id;
      if (next === section.id) {
        track("focus_expand", { focusId: section.id, focusTitle: section.title });
      }
      return next;
    });
  };

  // lock scroll when open (mobile-friendly)
  React.useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isOpen]);

  // Snap between steps on small gestures near boundaries; allow free scroll within a step
  React.useEffect(() => {
    if (!isOpen) return;
    const el = bodyRef.current;
    if (!el) return;
    let isSnapping = false;
    let touchStartY = 0;

    const getTops = () => {
      const steps = Array.from(el.querySelectorAll('section')) as HTMLElement[];
      const tops = steps.map((s) => s.offsetTop);
      return { steps, tops };
    };

    const getCenteredIndex = (steps: HTMLElement[], tops: number[]) => {
      const containerCenter = el.scrollTop + el.clientHeight / 2;
      let bestIdx = 0;
      let bestDist = Infinity;
      for (let i = 0; i < steps.length; i++) {
        const stepCenter = tops[i] + steps[i].offsetHeight / 2;
        const dist = Math.abs(stepCenter - containerCenter);
        if (dist < bestDist) { bestDist = dist; bestIdx = i; }
      }
      return bestIdx;
    };

    const snapToIndex = (idx: number) => {
      const { steps, tops } = getTops();
      if (!tops.length) return;
      const maxIdx = tops.length - 1;
      const targetIdx = Math.max(0, Math.min(idx, maxIdx));
      const stepH = steps[targetIdx].offsetHeight;
      // Only center short steps. For tall content, align to top to avoid big jumps.
      const centerOffset = stepH <= el.clientHeight ? (stepH - el.clientHeight) / 2 : 0;
      const targetTop = Math.max(0, Math.min(tops[targetIdx] + Math.max(0, centerOffset), el.scrollHeight - el.clientHeight));
      isSnapping = true;
      const finalTop = Math.max(0, Math.min(targetTop, el.scrollHeight - el.clientHeight));
      if ((el as any).scrollTo) {
        el.scrollTo({ top: finalTop, behavior: 'smooth' });
      } else {
        el.scrollTop = finalTop;
      }
      window.setTimeout(() => {
        isSnapping = false;
      }, 650);
    };

    const onWheel = (e: WheelEvent) => {
      if (isSnapping) { e.preventDefault(); return; }
      const dy = e.deltaY;
      const { steps, tops } = getTops();
      if (!tops.length) return;
      const idx = getCenteredIndex(steps, tops);
      const step = steps[idx];
      const stepTop = tops[idx];
      const stepBottom = stepTop + step.offsetHeight;
      const insideTallStep = step.offsetHeight > el.clientHeight + 8 &&
        el.scrollTop > stepTop + 16 &&
        el.scrollTop + el.clientHeight < stepBottom - 16;
      // If we're inside a tall step, allow native scroll and don't snap.
      if (insideTallStep) return;

      // Otherwise, we control snapping and prevent native scroll.
      e.preventDefault();
      const now = Date.now();
      // reset accumulator if idle for a bit
      if (now - lastWheelTsRef.current > 180) wheelAccumRef.current = 0;
      lastWheelTsRef.current = now;
      wheelAccumRef.current += dy;

      const threshold = 120; // require a stronger intent to advance one step
      if (Math.abs(wheelAccumRef.current) < threshold) return;

      const dir = wheelAccumRef.current > 0 ? 1 : -1;
      wheelAccumRef.current = 0;
      const target = Math.max(0, Math.min(idx + dir, tops.length - 1));
      if (target !== idx) snapToIndex(target);
    };

    const onTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0]?.clientY || 0;
    };
    const onTouchEnd = (e: TouchEvent) => {
      if (isSnapping) return;
      const endY = e.changedTouches[0]?.clientY || touchStartY;
      const dy = touchStartY - endY;
      const { steps, tops } = getTops();
      if (!tops.length) return;
      const idx = getCenteredIndex(steps, tops);
      const step = steps[idx];
      const stepTop = tops[idx];
      const stepBottom = stepTop + step.offsetHeight;
      const insideTallStep = step.offsetHeight > el.clientHeight + 8 &&
        el.scrollTop > stepTop + 16 &&
        el.scrollTop + el.clientHeight < stepBottom - 16;
      if (insideTallStep) return; // let native touch scroll handle tall content

      if (dy > 10) {
        snapToIndex(Math.min(idx + 1, tops.length - 1));
      } else if (dy < -10) {
        snapToIndex(Math.max(idx - 1, 0));
      }
    };

    el.addEventListener('wheel', onWheel, { passive: false } as any);
    el.addEventListener('touchstart', onTouchStart, { passive: true } as any);
    el.addEventListener('touchend', onTouchEnd, { passive: true } as any);
    return () => {
      el.removeEventListener('wheel', onWheel as any);
      el.removeEventListener('touchstart', onTouchStart as any);
      el.removeEventListener('touchend', onTouchEnd as any);
    };
  }, [isOpen]);

  // update progress based on scroll position of the sheet body
  React.useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    const update = () => {
      const max = el.scrollHeight - el.clientHeight;
      if (max <= 0) {
        setProgress(0);
        setCanScrollDown(false);
        return;
      }
      setProgress(el.scrollTop / max);
      const hideThreshold = Math.min(120, el.clientHeight * 0.15);
      setCanScrollDown(el.scrollTop < max - hideThreshold);

      // determine active (centered) step and toggle micro animation class
      const steps = Array.from(el.querySelectorAll('section')) as HTMLElement[];
      if (steps.length) {
        const containerCenter = el.scrollTop + el.clientHeight / 2;
        let bestIdx = 0;
        let bestDist = Infinity;
        for (let i = 0; i < steps.length; i++) {
          const step = steps[i];
          const top = step.offsetTop;
          const center = top + step.offsetHeight / 2;
          const dist = Math.abs(center - containerCenter);
          if (dist < bestDist) { bestDist = dist; bestIdx = i; }
        }
        steps.forEach((s, i) => {
          if (i === bestIdx) s.classList.add('is-active');
          else s.classList.remove('is-active');
        });
      }
    };
    update();
    el.addEventListener("scroll", update, { passive: true } as any);
    window.addEventListener("resize", update, { passive: true } as any);
    return () => {
      el.removeEventListener("scroll", update as any);
      window.removeEventListener("resize", update as any);
    };
  }, [isOpen]);
  const scrollNextStep = () => {
    const el = bodyRef.current;
    if (!el || isAnimatingRef.current) return;
    const steps = Array.from(el.querySelectorAll('section')) as HTMLElement[];
    if (steps.length === 0) return;
    const tops = steps.map((s) => s.offsetTop);
    // find centered index
    const containerCenter = el.scrollTop + el.clientHeight / 2;
    let idx = 0;
    let bestDist = Infinity;
    for (let i = 0; i < steps.length; i++) {
      const center = tops[i] + steps[i].offsetHeight / 2;
      const dist = Math.abs(center - containerCenter);
      if (dist < bestDist) { bestDist = dist; idx = i; }
    }
    const targetIdx = Math.min(idx + 1, steps.length - 1);
    const stepH = steps[targetIdx].offsetHeight;
    const centerOffset = Math.max(0, (stepH - el.clientHeight) / 2);
    const targetTop = Math.max(0, Math.min(tops[targetIdx] + centerOffset, el.scrollHeight - el.clientHeight));
    isAnimatingRef.current = true;
    if ((el as any).scrollTo) {
      el.scrollTo({ top: targetTop, behavior: 'smooth' });
    } else {
      el.scrollTop = targetTop;
    }
    window.setTimeout(() => {
      isAnimatingRef.current = false;
    }, 500);
  };


  return (
    <Section id="ueber-mich" background="#ffffff">
      <Inner>
        <Reveal>
          <Title>Über mich</Title>
        </Reveal>
        <Reveal delaySec={0.05}>
          <FocusLayout>
            <VideoColumn>
              <VideoWrapper>
                <StyledVideo
                  src="https://flqtqnqcpycr2bus.public.blob.vercel-storage.com/video.mp4"
                  poster="/cover.png"
                  controls
                  preload="metadata"
                  playsInline
                  loop
                  onPlay={handleVideoPlay}
                  title="Tanja Maag – Stadtratskandidatin der Alternativen Liste Zürich"
                  aria-label="Video: Tanja Maag stellt sich als Stadtratskandidatin für Zürich vor"
                />
              </VideoWrapper>
            </VideoColumn>
            <FocusColumn>
              <FocusDetail>
                Als Gemeinderätin, Pflegefachfrau und Bildungsverantwortliche setze ich mich für eine starke Gesundheitsversorgung, bezahlbaren Wohnraum und faire Arbeitsbedingungen ein. Nah an den Menschen und klar in der Sache.
              </FocusDetail>
              <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.12)', margin: 0 }} />
              <Accordion role="list" aria-label="Politische Schwerpunkte von Tanja Maag">
                {focusSections.map((section) => {
                  const expanded = expandedSection === section.id;
                  return (
                    <AccordionItem key={section.id}>
                      <AccordionHeader
                        type="button"
                        $expanded={expanded}
                        aria-expanded={expanded}
                        aria-controls={`focus-${section.id}`}
                        onClick={() => handleAccordionToggle(section)}
                      >
                        <AccordionHeaderContent>
                          <span>{section.title}</span>
                        </AccordionHeaderContent>
                        <AccordionIndicator aria-hidden>{expanded ? "−" : "+"}</AccordionIndicator>
                      </AccordionHeader>
                      <AccordionContent
                        id={`focus-${section.id}`}
                        role="region"
                        aria-hidden={!expanded}
                        $expanded={expanded}
                      >
                        <FocusDetail dangerouslySetInnerHTML={{ __html: section.detail }} />
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
              <MoreButtonWrapper>
                <MoreButton
                  type="button"
                  onClick={() => {
                    track("about_click", { which: "mehr_ueber_mich" });
                    setOpen("leben");
                  }}
                >
                  Mehr über mich erfahren
                </MoreButton>
              </MoreButtonWrapper>
            </FocusColumn>
          </FocusLayout>
        </Reveal>
      </Inner>

      {/* Mobile-first overlay sheet with scroll story */}
      <Overlay
        $open={isOpen}
        aria-hidden={!isOpen}
        // Prevent focus on hidden overlay content for AT users
        {...(!isOpen ? { inert: true as any } : {})}
        id="about-overlay"
      >
        <Scrim $open={isOpen} onClick={() => setOpen(null)} aria-label="Schließen" />
        <Sheet $open={isOpen} role="dialog" aria-modal="true">
          <SheetHeader>
            <SheetTitle>
              {open === "leben" ? "Mein Weg" : open === "werte" ? "Politischer Fokus" : ""}
            </SheetTitle>
            <CloseBtn onClick={() => setOpen(null)} aria-label="Schließen" title="Schließen">×</CloseBtn>
            <ProgressTrack aria-hidden>
              <ProgressFill style={{ width: `${Math.round(progress * 100)}%` }} />
            </ProgressTrack>
          </SheetHeader>
          <SheetBody ref={bodyRef} style={{ paddingTop: '64px' }}>
            <Story>
              {open === "leben" && (
                <>
                  <StoryStep $bg="farbe.jpeg">
                    <StepHeading>Wer ich bin</StepHeading>
                    <StepText>
                    Mein Name ist Tanja Maag. Ich bin 51 Jahre alt und wohne seit 20 Jahren mit meiner Familie, Partner und zwei Teenagern im Kreis 9.
                    </StepText>
                  </StoryStep>
                  <StoryStep $bg="skelett.png">
                    <StepHeading>Beruf und Erfahrung</StepHeading>
                    <StepText>
                    Als Bildungsverantwortliche habe ich täglich mit jungen Menschen in Ausbildung und Studium zu tun. Ich bin sowohl Lerncoach, Vorgesetzte, wie auch beratende Anlaufstelle für fast alle Berufe in meinem Betrieb. Als gelernte Pflegefachfrau kenne ich die Herausforderungen im Gesundheitswesen von der Pike auf. Nach meiner Erstausbildung holte ich auf dem zweiten Bildungsweg die Matura nach. Danach absolvierte ich das Grundstudium in Chemie/Biochemie an der Universität Zürich und entwickelte mich beruflich in der Erwachsenenbildung weiter.
                    </StepText>
                  </StoryStep>
                  <StoryStep $bg="gr.jpeg">
                    <StepHeading>Politischer Einstieg</StepHeading>
                    <StepText>
                    Meine Laufbahn in der institutionellen Politik startete 2022 mit meiner Wahl in den Zürcher Gemeinderat. Damals schon haben mir meine Wähler*innen ihr Vertrauen geschenkt. Als neue Kandidatin habe ich den Sprung ins Parlament geschafft. Seit meinem Tag eins als Gemeinderätin für die AL habe ich über drei Jahre im Co-Präsidium mit David Garcia Nuñez die Fraktion geführt und mich in die komplexe Aufsichtstätigkeit in der Rechnungsprüfungskommission eingearbeitet
                    </StepText>
                  </StoryStep>
                  <StoryStep $bg="femdemo.JPG">
                    <StepHeading>Heute & Ziel</StepHeading>
                    <StepText>
                    Nun will ich einen nächsten grossen Schritt machen und kandidiere für Zürichs Exekutive. Für den Stadtrat bin ich deine Alternative! Hart und klar in der Sache, besonnen und konstruktiv im Umgang mit Menschen. Ich denke vernetzt und über den Tellerrand hinaus, wobei mir die tägliche Freude, Neues zu lernen, nie abhanden kommt. Und leere Versprechungen liegen mir nicht!
                    </StepText>
                  </StoryStep>
                  <StoryStep $bg="konzert.jpeg">
                    <StepHeading>Was mich ausgleicht</StepHeading>
                    <StepText>
                    Man trifft mich bevorzugt auf dem Fahrrad an, und wann immer es sich einrichten lässt, suche ich Erholung im nahen Wald, denn die Natur in all ihren Facetten bedeutet mir viel. Besonders gerne verbringe ich Zeit mit meiner Familie, liebe aber auch Konzerte – vorzugsweise aus dem Metal- oder Punkbereich – sowie Fussballspiele. Hätte mein Tag mehr als 24 Stunden, würde ich wohl häufiger ein Buch zur Hand nehmen und hin und wieder eine Partie Schach spielen.
                   </StepText>
                  </StoryStep>
                </>
              )}

              {open === "werte" && (
                <>
                  <StoryStep $bg="femdemo.JPG">
                    <StepHeading>Vision</StepHeading>
                    <StepText>
                    Meine Vision einer Caring Community oder sorgenden Gemeinschaft steht für das Bild einer inklusiven Gesellschaft mit starkem sozialem Zusammenhalt. Sie zeichnet sich durch gemeinschaftliche Verantwortung und gegenseitige Unterstützung aus.
                    <br /><br />Damit diese Vision Gestalt annimmt, benötigen wir eine gerechte Ressourcenverteilung. Sie ist der Schlüssel zu allem: zu bezahlbarem Wohnraum, zu gerechter Besteuerung, zu fairen Löhnen, usw.
                    </StepText>
                  </StoryStep>
                  <StoryStep $bg="steuern.jpeg">
                    <StepHeading>Gerechte Ressourcenverteilung!</StepHeading>
                    <StepText>
                    Ressourcen der öffentlichen Hand müssen fair verteilt sein. Eine gerechte Verteilung ist zentral – für Wohnraum, faire Löhne und eine angemessene Besteuerung von Grosskonzernen.
                    Steuergerechtigkeit endet nicht an der Stadtgrenze: Im Frühjahr hat die AL in einer Mitte-Links-Koalition eine Senkung der Unternehmenssteuern verhindert. Das dazugehörige Gemeindereferendum der Stadt Zürichhabe ich mit aufbereitet. Nun gilt es, den geplanten Raubzug des Kantons auf ein Viertel der städtischen Grundstückgewinnsteuern und Steuerprivilegien für Superreiche – Stichwort Dividendenrabatt – abzuwehren.
                    </StepText>
                    <MotionsButtonComponent 
                      sections={[steuernSection, initiativesSection]}
                      onClick={() => setMotionsOpen([steuernSection, initiativesSection])}
                    />
                  </StoryStep>
                  <StoryStep $bg="halter.jpg">
                    <StepHeading>Soziale Stadtentwicklung und kostengünstiger Wohnraum!</StepHeading>
                    <StepText>
                    Als Stadträtin werde ich zuvorderst für bezahlbare Mieten kämpfen. Ersatzneubauten müssen auf ihre soziale und ökologische Verträglichkeit geprüft werden und Grundeigentümer*innen sollen beim Bau kostengünstiger Wohnungen einen Beitrag leisten. Mit der Revision der Bau- und Zonenordnung will der Stadtrat in vielen Quartieren dichteres und höheres Bauen zulassen. Die AL bietet nur Hand dazu, wenn im Gegenzug dringend benötigte preisgünstige Wohnungen entstehen. Menschen mit kleinem Portemonnaie sollen auch in Zürich leben können. Leerstehende Räume sollen, wo möglich, unkompliziert und günstig für alternative oder kulturelle Nutzungen bereitgestellt werden – dafür habe ich mich auch im Parlament eingesetzt.
                    </StepText>
                    <MotionsButtonComponent 
                      sections={[bauenSection]}
                      onClick={() => setMotionsOpen([bauenSection])}
                    />
                  </StoryStep>
                  <StoryStep $bg="skelett.png">
                    <StepHeading>Eine interdisziplinäre Gesundheit Grundversorgung für alle!</StepHeading>
                    <StepText>
                    Gesundheit ist Voraussetzung dafür, dass Menschen ihre Lebensziele selbstbestimmt verfolgen können. Sie hängt nicht nur von individueller Verantwortung ab, sondern wird stark durch gesellschaftliche Prozesse und politische Entscheide geprägt. Es ist eine Aufgabe des Staates, die Versorgung infrastrukturell, personell und finanziell sicherzustellen sowie sowie Qualitätsstandards und verbindliche, faire Arbeitsbedingungen festzulegen. Die Gesundheitsversorgung muss als Service Public für alle zugänglich sein. Beginnen tut die Gesundheitsversorgung nicht erst im Spital, sondern im Alltag: In Quartierzentren, Beratungsstellen, in der Nachbarschaft. Gesundheit und Soziales gehören zusammen. In diesem Kontext muss auch die departementale Trennung von Gesundheit und Sozialem in der Stadtregierung kritisch hinterfragt werden.
                    </StepText>
                    <MotionsButtonComponent 
                      sections={[gesundheitSection]}
                      onClick={() => setMotionsOpen([gesundheitSection])}
                    />
                  </StoryStep>
                  <StoryStep $bg="skelett.png">
                    <StepHeading>Faire Arbeitsbedingungen im Gesundheitswesen</StepHeading>
                    <StepText>
                    Wir alle sind irgendwann in unserem Leben auf irgendeine Art von Begleitung und Pflege angewiesen. Damit auch in 20 Jahren noch genügend Fachkräfte zur Verfügung stehen, müssen die Arbeitsbedingungen im Gesundheits- und Betreuungswesen schon heute verbessert werden. Im laufenden Amtsjahr habe ich mich für faire Löhne für das Assistenzpersonal in Pflege und Betreuung sowie für bessere Bedingungen für pflegende Angehörige eingesetzt. Ich bleibe dran beim vom Stadtrat verschleppten Pilotprojekt zur 35-Stunden-Woche für städtische Angestellte im Schichtbetrieb oder bei der Umsetzung der zweiten Tranche der Pflegeinitiative. Es gibt noch viel zu tun!
                    </StepText>
                    <MotionsButtonComponent 
                      sections={[fraktionSection, gesellschaftSection]}
                      onClick={() => setMotionsOpen([fraktionSection, gesellschaftSection])}
                    />
                  </StoryStep>
                </>
              )}
            </Story>
          </SheetBody>
          {canScrollDown && (
            <ArrowWrap>
              <ArrowButton aria-label="Weiter scrollen" onClick={scrollNextStep}>
                <ArrowSvg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </ArrowSvg>
              </ArrowButton>
            </ArrowWrap>
          )}
        </Sheet>
      </Overlay>
      
      {/* Motions Overlay */}
      {motionsOpen && (
        <MotionsOverlayComponent 
          open={motionsOpen !== null}
          sections={motionsOpen}
          onClose={() => setMotionsOpen(null)}
        />
      )}
    </Section>
  );
}



