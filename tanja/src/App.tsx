"use client";

import React from "react";
import Welcome from "./sections/Welcome/Welcome";
import Navbar from "./components/Navbar";
import dynamic from "next/dynamic";
import styled, { keyframes } from "styled-components";
import { colors } from "./styles/colors";
import { track } from "@vercel/analytics";

// Defer below-the-fold sections to reduce unused JS on initial load
const About = dynamic(() => import("./sections/About/About"));
const Testimonials = dynamic(() => import("./sections/Testimonials/Testimonials"));
const Dates = dynamic(() => import("./sections/Dates/Dates"));
const Footer = dynamic(() => import("./components/Footer"));

// Load analytics after hydration only
const Analytics = dynamic(() => import("@vercel/analytics/react").then(m => m.Analytics), { ssr: false });
const SHOW_ELECTION_OVERLAY = true;

const confettiFall = keyframes`
  0% {
    transform: translate3d(0, -15vh, 0) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  100% {
    transform: translate3d(0, 115vh, 0) rotate(540deg);
    opacity: 0.9;
  }
`;

const ElectionOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 4000;
  background: radial-gradient(circle at top, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.88));
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  overflow: hidden;
`;

const OverlayScrim = styled.button`
  position: absolute;
  inset: 0;
  border: none;
  margin: 0;
  padding: 0;
  background: rgba(255, 255, 255, 0.55);
  cursor: pointer;
`;

const ConfettiRain = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
`;

const ConfettiPiece = styled.span`
  position: absolute;
  display: block;
  left: var(--left);
  top: -20px;
  width: var(--w);
  height: var(--h);
  border-radius: 2px;
  background: var(--color);
  animation: ${confettiFall} var(--duration) linear var(--delay) infinite;
  will-change: transform, opacity;
  transform: translate3d(0, -15vh, 0);
`;

const OverlayCard = styled.div`
  position: relative;
  z-index: 2;
  width: min(820px, 94vw);
  max-height: 88vh;
  overflow: auto;
  background: #ffffff;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);
  padding: clamp(20px, 4vw, 36px);
  text-align: center;
  color: ${colors.neonMagenta};
  font-family: var(--font-unica), var(--font-display), sans-serif;
  @media (max-width: 899px) {
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const OverlayContent = styled.div`
  display: grid;
  gap: 18px;
  align-items: center;
  @media (min-width: 900px) {
    grid-template-columns: minmax(260px, 0.9fr) minmax(320px, 1.1fr);
    text-align: left;
    gap: 24px;
  }
`;

const OverlayImage = styled.img`
  width: min(520px, 100%);
  border-radius: 14px;
  display: block;
  margin: 0 auto 18px;
  @media (min-width: 900px) {
    margin: 0;
    width: 100%;
  }
`;

const OverlayTitle = styled.h2`
  margin: 0 0 14px 0;
  font-size: clamp(26px, 5vw, 42px);
  line-height: 1.1;
  color: ${colors.neonMagenta};
  font-family: var(--font-unica), var(--font-display), sans-serif;
`;

const OverlayText = styled.p`
  margin: 0 0 12px 0;
  color: ${colors.neonMagenta};
  line-height: 1.6;
  font-size: clamp(15px, 2.2vw, 19px);
  font-family: var(--font-unica), var(--font-display), sans-serif;
`;

const OverlayClose = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 3;
  appearance: none;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background: rgba(255, 25, 117, 0.13);
  color: ${colors.neonMagenta};
  font-size: 28px;
  line-height: 1;
  cursor: pointer;
  transition: transform 160ms ease, opacity 160ms ease;
  &:hover { opacity: 0.9; transform: scale(1.04); }
`;

const confettiColors = ["#ffffff", "#0A0A0A", colors.neonMagenta];


export default function App() {
  const [showElectionOverlay, setShowElectionOverlay] = React.useState(false);
  const [isFirefox, setIsFirefox] = React.useState(false);

  React.useEffect(() => {
    if (!SHOW_ELECTION_OVERLAY) return;
    const firefox = typeof navigator !== "undefined" && /firefox/i.test(navigator.userAgent);
    setIsFirefox(firefox);
    setShowElectionOverlay(true);
    track("election_overlay_view", { browser: firefox ? "firefox" : "other" });
  }, []);

  const closeElectionOverlay = React.useCallback(() => {
    setShowElectionOverlay(false);
    track("election_overlay_close", { browser: isFirefox ? "firefox" : "other" });
  }, [isFirefox]);

  const confettiData = React.useMemo(() => {
    const count = isFirefox ? 18 : 28;
    return Array.from({ length: count }, (_, i) => ({
      left: `${(i * 17 + 9) % 100}%`,
      delay: `${(i % 9) * 0.24}s`,
      duration: `${5.8 + (i % 5) * 0.55}s`,
      color: confettiColors[i % confettiColors.length],
      width: `${6 + (i % 5)}px`,
      height: `${Math.max(10, (6 + (i % 5)) * 1.8)}px`,
    }));
  }, [isFirefox]);

  React.useEffect(() => {
    if (!showElectionOverlay) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeElectionOverlay();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [showElectionOverlay, closeElectionOverlay]);

  React.useEffect(() => {
    const aboutEl = document.getElementById("ueber-mich");
    const homeEl = document.getElementById("home");
    if (!aboutEl || !homeEl) return;

    let isSnapping = false;
    let touchStartY = 0;

    const getAboutTop = () => aboutEl.getBoundingClientRect().top + window.scrollY;

    const scrollToY = (y: number) => {
      isSnapping = true;
      window.scrollTo({ top: y, behavior: "smooth" });
      window.setTimeout(() => { isSnapping = false; }, 600);
    };

    const onWheel = (e: WheelEvent) => {
      // if about overlay is open, skip page-level snapping
      const overlayOpen = !!document.getElementById('about-overlay')?.getAttribute('aria-hidden') === false;
      if (overlayOpen) return;
      if (isSnapping) return;
      const aboutTop = getAboutTop();
      const y = window.scrollY;
      const goingDown = e.deltaY > 0;

      // Snap from hero to About when near top and scrolling down
      if (y < aboutTop - 40 && goingDown) {
        e.preventDefault();
        scrollToY(aboutTop);
        return;
      }
      // Snap from About back to top when near its top and scrolling up
      if (y <= aboutTop + 80 && !goingDown && y > 0) {
        e.preventDefault();
        scrollToY(0);
        return;
      }
    };

    const onTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0]?.clientY || 0;
    };
    const onTouchEnd = (e: TouchEvent) => {
      const overlayOpen = !!document.getElementById('about-overlay')?.getAttribute('aria-hidden') === false;
      if (overlayOpen) return;
      if (isSnapping) return;
      const endY = e.changedTouches[0]?.clientY || touchStartY;
      const dy = touchStartY - endY;
      const aboutTop = getAboutTop();
      const y = window.scrollY;

      // thresholds to avoid accidental snaps
      const threshold = 16;

      if (y < aboutTop - 40 && dy > threshold) {
        scrollToY(aboutTop);
        return;
      }
      if (y <= aboutTop + 80 && dy < -threshold && y > 0) {
        scrollToY(0);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false } as any);
    window.addEventListener("touchstart", onTouchStart, { passive: true } as any);
    window.addEventListener("touchend", onTouchEnd, { passive: true } as any);
    return () => {
      window.removeEventListener("wheel", onWheel as any);
      window.removeEventListener("touchstart", onTouchStart as any);
      window.removeEventListener("touchend", onTouchEnd as any);
    };
  }, []);

  return (
    <>
      {SHOW_ELECTION_OVERLAY && showElectionOverlay && (
        <ElectionOverlay role="dialog" aria-modal="true" aria-label="Wahldank">
          <OverlayScrim aria-label="Schließen" onClick={closeElectionOverlay} />
          <ConfettiRain aria-hidden="true">
            {confettiData.map((piece, idx) => (
              <ConfettiPiece
                key={idx}
                style={{
                  "--left": piece.left,
                  "--delay": piece.delay,
                  "--duration": piece.duration,
                  "--color": piece.color,
                  "--w": piece.width,
                  "--h": piece.height,
                } as React.CSSProperties}
              />
            ))}
          </ConfettiRain>
          <OverlayCard onClick={(e) => e.stopPropagation()}>
            <OverlayClose aria-label="Schließen" onClick={closeElectionOverlay}>
              ×
            </OverlayClose>
            <OverlayContent>
              <OverlayImage src="/tanja/merci.jpg" alt="Merci" />
              <div>
                <OverlayTitle>Merci!</OverlayTitle>
                <OverlayText>
                  Merci für euer Vertrauen und 37’267 Stimmen. Ich bin stolz und dankbar, dass ich für die
                  Alternative Liste ins Stadtratsrennen steigen durfte.
                </OverlayText>
                <OverlayText>
                  Besonders freut mich, dass unsere Gemeinderatsfraktion zu acht weiterarbeitet, inklusive mir.
                  Von Herzen danke ich meiner Familie, Freund*innen und allen Unterstützer*innen für dieses
                  starke Teamwork.
                </OverlayText>
              </div>
            </OverlayContent>
          </OverlayCard>
        </ElectionOverlay>
      )}
      <Navbar />
      <Welcome />
      <About />
      <Testimonials />
      <Dates />
      <Footer />
      <Analytics />
    </>
  );
}

