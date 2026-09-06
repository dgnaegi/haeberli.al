"use client";

import React from "react";
import styled from "styled-components";
import { colors } from "@/src/styles/colors";
import { S } from "@/src/styles/spacing";
import { FONT_DISPLAY } from "@/src/styles/fonts";
import dates from "@/src/sections/Dates/datesData";

const NavContainer = styled.nav<{ $shrink: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: rgba(255,255,255,0.9);
  color: #0A0A0A;
  z-index: 2000;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  transition: height 220ms ease, background-color 220ms ease, backdrop-filter 220ms ease, transform 220ms ease;
  height: ${({ $shrink }) => ($shrink ? "56px" : "88px")};
  padding-top: ${({ $shrink }) => ($shrink ? "0px" : "6px")};
  padding-bottom: ${({ $shrink }) => ($shrink ? "0px" : "6px")};
  backdrop-filter: saturate(150%) blur(${({ $shrink }) => ($shrink ? "4px" : "8px")});
  transform: ${({ $shrink }) => ($shrink ? "translateY(0)" : "translateY(0)")};
  @media (min-width: 1024px) {
    height: ${({ $shrink }) => ($shrink ? "64px" : "96px")};
  }
  display: flex;
`;

const NavInner = styled.div`
  width: 100%;
  max-width: none;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 ${S.x6};
  height: 100%;
`;

const NavInnerCap = styled.div<{ $shrink: boolean }>`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transform: ${({ $shrink }) => ($shrink ? "scale(0.98)" : "scale(1)")};
  transition: transform 200ms ease;
`;

const Brand = styled.a<{ $shrink: boolean }>`
  font-weight: 800;
  letter-spacing: 0.5px;
  text-decoration: none;
  color: #0A0A0A;
  font-family: ${FONT_DISPLAY};
  font-size: ${({ $shrink }) => ($shrink ? "clamp(16px, 2vw, 20px)" : "clamp(18px, 2.4vw, 22px)")};
  display: flex;
  align-items: center;
  text-align: left;
`;

const NavLinks = styled.div`
  display: none;
  gap: ${S.x5};
  @media (min-width: 768px) {
    display: flex;
    align-items: center; /* vertically center on desktop */
  }
  margin-left: auto; /* push links to the far right */
`;

const NavLink = styled.a`
  color: #333333;
  text-decoration: none;
  opacity: 0.95;
  font-family: ${FONT_DISPLAY};
  font-size: clamp(14px, 2vw, 18px);
  transition: color 160ms ease, opacity 160ms ease, transform 160ms ease, text-shadow 160ms ease;
  display: flex;
  &:hover { opacity: 1; transform: translateY(-1px); color: ${colors.neonMagenta}; text-shadow: none; }
`;

const MenuButton = styled.button`
  appearance: none;
  border: none;
  background: transparent;
  color: #0A0A0A;
  padding: ${S.x2};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto; /* on mobile, push burger to the far right */
  @media (min-width: 768px) {
    display: none;
  }
`;

const Burger = styled.span`
  position: relative;
  width: 22px;
  height: 2px;
  background: #0A0A0A;
  display: inline-block;
  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 22px;
    height: 2px;
    background: #0A0A0A;
  }
  &::before { top: -6px; }
  &::after { top: 6px; }
`;

const MobileMenu = styled.div<{ $open: boolean }>`
  position: fixed;
  top: var(--nav-offset, 0px);
  left: 0;
  right: 0;
  background: rgba(255,255,255,0.98);
  backdrop-filter: saturate(150%) blur(8px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  transform: translateY(${({ $open }) => ($open ? "0%" : "-6px")});
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
  transition: transform 180ms ease, opacity 160ms ease, visibility 0s linear ${({ $open }) => ($open ? "0s" : "160ms")};
  z-index: 1100;
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
  will-change: transform;
  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileMenuInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${S.x6};
  padding: 16px 24px 20px;
`;

const MobileLink = styled.a`
  color: #0A0A0A;
  text-decoration: none;
  font-size: 18px;
  font-family: ${FONT_DISPLAY};
  &:hover { color: ${colors.neonMagenta}; }
`;

export default function Navbar() {
  const [shrink, setShrink] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [hasUpcomingDates, setHasUpcomingDates] = React.useState(false);

  React.useEffect(() => {
    const now = Date.now();
    const hasUpcoming = dates.some((item) => {
      const ts = new Date(item.date).getTime();
      return Number.isFinite(ts) && ts >= now;
    });
    setHasUpcomingDates(hasUpcoming);
  }, []);

  React.useEffect(() => {
    const update = () => {
      const scrolled = window.scrollY > 0;
      setShrink(scrolled);
      const navHeight = window.innerWidth >= 1024 ? (scrolled ? 64 : 96) : (scrolled ? 56 : 88);
      document.documentElement.style.setProperty("--nav-offset", `${navHeight}px`);
      if (window.innerWidth >= 768 && open) setOpen(false);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("wheel", update, { passive: true } as any);
    window.addEventListener("touchstart", update, { passive: true } as any);
    window.addEventListener("touchmove", update, { passive: true } as any);
    window.addEventListener("resize", update, { passive: true } as any);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("wheel", update as any);
      window.removeEventListener("touchstart", update as any);
      window.removeEventListener("touchmove", update as any);
      window.removeEventListener("resize", update as any);
    };
  }, []);

  return (
    <NavContainer $shrink={shrink} role="navigation" aria-label="Hauptnavigation">
      <NavInner>
        <NavInnerCap $shrink={shrink}>
          <Brand href="#home" $shrink={shrink}>Tanja Maag</Brand>
          <NavLinks>
          <NavLink href="#ueber-mich">Über mich</NavLink>
          <NavLink href="#testimonials">Empfehlungen</NavLink>
          {hasUpcomingDates && <NavLink href="#termine">Termine</NavLink>}
          </NavLinks>
          <MenuButton aria-label="Menü" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
            <Burger />
          </MenuButton>
        </NavInnerCap>
      </NavInner>
      <MobileMenu $open={open}>
        <MobileMenuInner>
          <MobileLink href="#ueber-mich" onClick={() => setOpen(false)}>Über mich</MobileLink>
          <MobileLink href="#testimonials" onClick={() => setOpen(false)}>Empfehlungen</MobileLink>
          {hasUpcomingDates && <MobileLink href="#termine" onClick={() => setOpen(false)}>Termine</MobileLink>}
        </MobileMenuInner>
      </MobileMenu>
    </NavContainer>
  );
}


