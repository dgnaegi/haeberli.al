"use client";

import React from "react";
import Section from "../../components/Section";
import Reveal from "../../components/Reveal";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import { BP } from "@/src/styles/breakpoints";
import { FONT_DISPLAY, FONT_BODY } from "../../styles/fonts";
import { S } from "../../styles/spacing";
import testimonials from "./testimonialsData";
import Container from "@/src/ui/Container";
import CardBase from "@/src/ui/Card";
import SectionTitle from "@/src/ui/SectionTitle";
import Button from "@/src/ui/Button";
import { track } from "@vercel/analytics";
import { 
  getTestimonialUrl, 
  generateTestimonialImageBlob, 
  downloadImage, 
  isMobileDevice as checkIsMobileDevice 
} from "./testimonialShare";

const Inner = styled(Container)``;

const Title = styled(SectionTitle)`
  font-size: clamp(32px, 8vw, 48px);
`;

const Carousel = styled.div`
  position: relative;
  overflow: visible;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Viewport = styled.div<{ $isCarousel: boolean }>`
  ${({ $isCarousel }) => $isCarousel ? `
    overflow: visible;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${S.x4};
    @media (min-width: ${BP.lg}px) {
      gap: ${S.x6};
    }
  ` : `
    overflow: visible;
  `}
`;

const Track = styled.div<{ $isCarousel: boolean }>`
  display: flex;
  gap: 0;
  align-items: stretch;
  ${({ $isCarousel }) => $isCarousel ? `
    overflow: hidden;
    scroll-snap-type: none;
    scroll-behavior: smooth;
    padding: 0;
    margin: 0;
    position: relative;
  ` : `
    overflow: visible;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;
    margin: 0;
    gap: ${S.x5};
  `}
`;

const Slide = styled.div<{ $isCarousel: boolean }>`
  display: flex;
  ${({ $isCarousel }) => $isCarousel ? `
    width: 100%;
    max-width: 600px;
    flex: 0 0 auto;
  ` : `
    flex: 0 0 calc(100% - ${S.x5});
    @media (min-width: ${BP.sm}px) { 
      flex: 0 0 calc(50% - ${S.x5} / 2);
    }
    @media (min-width: ${BP.lg}px) { 
      flex: 0 0 calc(33.333% - ${S.x5} * 2 / 3);
      max-width: 400px;
    }
  `}
`;

const Card = styled(CardBase)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0;
  border: 1px solid rgba(0,0,0,0.12) !important;
  overflow: hidden;
  cursor: pointer;
  position: relative;
`;

const TopSection = styled.div`
  background: ${colors.neonMagenta};
  color: #ffffff;
  padding: ${S.x5} ${S.x4};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  @media (max-width: ${BP.lg - 1}px) {
    padding-left: calc(${S.x4} + 50px);
    padding-right: calc(${S.x4} + 50px);
  }
`;

const CardShareButtonTop = styled.button`
  position: absolute;
  top: ${S.x3};
  right: ${S.x3};
  appearance: none;
  border: none;
  background: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 200ms ease;
  backdrop-filter: blur(4px);
  z-index: 10;
  
  /* Hide on desktop, show only on mobile */
  @media (min-width: ${BP.md}px) {
    display: none;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.95);
  }
`;

const CardShareIconTop = styled.svg`
  width: 16px;
  height: 16px;
  display: block;
  fill: currentColor;
`;

const BottomSection = styled.div`
  background: #ffffff;
  color: #0A0A0A;
  padding: ${S.x3} ${S.x3};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex: 1;
`;


const AvatarWrapper = styled.div`
  position: relative;
  margin-bottom: ${S.x3};
`;

const AvatarRing = styled.div`
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 3px solid transparent;
  pointer-events: none;
`;

const Avatar = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  display: block;
  border: 3px solid #ffffff;
  @media (min-width: ${BP.sm}px) {
    width: 140px;
    height: 140px;
  }
`;

const ImageCopyright = styled.div`
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 10px;
  color: rgba(255, 255, 255, 0.7);
  font-family: ${FONT_BODY};
  white-space: nowrap;
  pointer-events: none;
  @media (min-width: ${BP.sm}px) {
    font-size: 11px;
  }
`;

const NameTitle = styled.div`
  color: #ffffff;
  font-size: clamp(14px, 2.2vw, 18px);
  font-family: ${FONT_BODY};
  display: flex;
  flex-direction: column;
  gap: ${S.x1};
`;

const Name = styled.span`
  font-weight: 600;
`;

const TitleText = styled.span`
  display: block;
  font-weight: 400;
`;

const QuoteWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const Quote = styled.blockquote`
  position: relative;
  margin: 0;
  color: #0A0A0A;
  line-height: 1.6;
  font-size: clamp(15px, 2.5vw, 19px);
  font-family: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  padding-left: ${S.x7};
  padding-right: ${S.x7};
  &::before {
    content: '\u201C';
    position: absolute;
    left: 0;
    top: -4px;
    font-size: 3em;
    line-height: 0.8;
    color: ${colors.neonMagenta};
    font-weight: 900;
    font-family: ${FONT_DISPLAY};
    opacity: 1;
  }
  &::after {
    content: '\u201D';
    position: absolute;
    right: 0;
    bottom: -8px;
    font-size: 3em;
    line-height: 0.8;
    color: ${colors.neonMagenta};
    font-weight: 900;
    font-family: ${FONT_DISPLAY};
    opacity: 1;
  }
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: ${S.x4};
  @media (min-width: ${BP.lg}px) {
    gap: ${S.x6};
  }
`;

const NavButton = styled.button`
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.95);
  color: ${colors.neonMagenta};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(255, 25, 117, 0.2);
  cursor: pointer;
  transition: transform 200ms ease, box-shadow 200ms ease;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(255, 25, 117, 0.3);
  }
  &:active {
    transform: scale(0.95);
  }
  @media (max-width: ${BP.lg - 1}px) {
    display: none;
  }
`;

const MobileNavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.95);
  color: ${colors.neonMagenta};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  z-index: 20;
  transition: transform 200ms ease, box-shadow 200ms ease;
  &:hover {
    transform: translateY(-50%) scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
  &:active {
    transform: translateY(-50%) scale(0.95);
  }
  @media (min-width: ${BP.lg}px) {
    display: none;
  }
`;

const MobilePrev = styled(MobileNavButton)`
  left: ${S.x3};
`;

const MobileNext = styled(MobileNavButton)`
  right: ${S.x3};
`;

const ArrowIcon = styled.svg`
  width: 20px;
  height: 20px;
  stroke: currentColor;
  stroke-width: 2.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
`;

const Prev = styled(NavButton)``;

const Next = styled(NavButton)``;

const ControlsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${S.x4};
  margin-bottom: ${S.x5};
`;

const ShowAllButton = styled(Button)`
  padding: ${S.x2} ${S.x5};
`;

const VoteCounter = styled.div`
  text-align: center;
  margin-bottom: ${S.x2};
  font-family: ${FONT_BODY};
  font-size: clamp(14px, 2vw, 16px);
  color: #666;
  font-weight: 700;
`;

const SubmitVoteLink = styled.a`
  display: block;
  text-align: center;
  margin-bottom: ${S.x6};
  color: #0A0A0A;
  font-family: ${FONT_BODY};
  font-size: clamp(14px, 2vw, 16px);
  font-weight: 600;
  text-decoration: underline;
  transition: opacity 200ms ease;
  &:hover {
    opacity: 0.7;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${S.x5};
  @media (min-width: ${BP.sm}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${BP.lg}px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Dots = styled.div`
  display: flex;
  gap: ${S.x2};
  align-items: center;
  justify-content: center;
  margin-top: ${S.x5};
  flex-wrap: wrap;
`;

const Dot = styled.button<{ $active: boolean }>`
  appearance: none;
  -webkit-appearance: none;
  padding: 0;
  margin: 0;
  width: 10px;
  height: 10px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  display: inline-block;
  line-height: 0;
  flex: 0 0 auto;
  border: none;
  box-sizing: content-box;
  background: ${({ $active }) => ($active ? colors.neonMagenta : "#DDD")};
  opacity: ${({ $active }) => ($active ? 1 : 0.6)};
  transform: ${({ $active }) => ($active ? "scale(1.2)" : "scale(1)")};
  transition: transform 160ms ease, opacity 160ms ease, background 160ms ease;
  cursor: pointer;
`;

const TestimonialOverlay = styled.div<{ $open: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 3000;
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transition: opacity 300ms cubic-bezier(0.4, 0, 0.2, 1);
`;

const TestimonialScrim = styled.button<{ $open: boolean }>`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  border: none;
  padding: 0;
  margin: 0;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transition: opacity 300ms ease;
  cursor: pointer;
`;

const TestimonialSheet = styled.div<{ $open: boolean }>`
  position: fixed;
  inset: 0;
  background: ${colors.neonMagenta};
  transform: ${({ $open }) => ($open ? 'scale(1)' : 'scale(0.95)')} translateY(${({ $open }) => ($open ? '0' : '20px')});
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transition: transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1), opacity 300ms ease;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const TestimonialHeader = styled.div`
  position: relative;
  padding: ${S.x8} ${S.x10} ${S.x6} ${S.x6};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const TestimonialCloseBtn = styled.button`
  position: absolute;
  right: ${S.x6};
  top: ${S.x8};
  transform: none;
  appearance: none;
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid #ffffff;
  color: #ffffff;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${FONT_BODY};
  font-size: 24px;
  line-height: 1;
  cursor: pointer;
  transition: background 200ms ease, transform 200ms ease;
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.95);
  }
`;

const TestimonialBody = styled.div`
  flex: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: 0 ${S.x6};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 0;
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 3px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
  }
`;

const TestimonialContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 800px;
  padding: clamp(40px, 10vh, 120px) ${S.x5} clamp(40px, 10vh, 120px) ${S.x5};
  min-height: min-content;
  flex-shrink: 0;
`;

const TestimonialFullAvatarWrapper = styled.div`
  position: relative;
  margin-bottom: ${S.x4};
`;

const TestimonialFullAvatar = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #ffffff;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  display: block;
  @media (min-width: ${BP.sm}px) {
    width: 140px;
    height: 140px;
  }
`;

const TestimonialImageCopyright = styled.div`
  margin-top: ${S.x2};
  font-size: 11px;
  color: rgba(255, 255, 255, 0.7);
  font-family: ${FONT_BODY};
  text-align: center;
  @media (min-width: ${BP.sm}px) {
    font-size: 12px;
  }
`;

const TestimonialFullName = styled.h3`
  margin: 0 0 ${S.x2} 0;
  color: #ffffff;
  font-family: ${FONT_DISPLAY};
  font-weight: 800;
  font-size: clamp(20px, 4vw, 28px);
`;

const TestimonialFullTitle = styled.p`
  margin: 0 0 ${S.x5} 0;
  color: rgba(255, 255, 255, 0.9);
  font-family: ${FONT_BODY};
  font-size: clamp(14px, 2.5vw, 18px);
`;

const TestimonialFullQuote = styled.blockquote`
  margin: 0;
  color: #ffffff;
  line-height: 1.8;
  font-size: clamp(16px, 3vw, 22px);
  font-family: ${FONT_BODY};
  font-style: normal;
  font-weight: normal;
  width: 100%;
  padding: 0;
`;

const ShareButtons = styled.div`
  display: flex;
  gap: ${S.x3};
  align-items: center;
  justify-content: center;
  margin-top: ${S.x6};
  flex-wrap: wrap;
`;

const TestimonialVoteCounter = styled.div`
  text-align: center;
  margin-bottom: ${S.x4};
  font-family: ${FONT_BODY};
  font-size: clamp(14px, 2vw, 16px);
  color: rgba(255, 255, 255, 0.8);
  font-weight: 700;
`;

const TestimonialSubmitLink = styled.a`
  display: block;
  text-align: center;
  margin-top: ${S.x4};
  color: #ffffff;
  font-family: ${FONT_BODY};
  font-size: clamp(14px, 2vw, 16px);
  font-weight: 600;
  text-decoration: underline;
  transition: opacity 200ms ease;
  &:hover {
    opacity: 0.8;
  }
`;

const NamesList = styled.div`
  margin-top: ${S.x8};
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;

const NamesListTitle = styled.h3`
  font-family: ${FONT_DISPLAY};
  font-size: clamp(20px, 4vw, 24px);
  font-weight: 800;
  color: #0A0A0A;
  margin: 0 0 ${S.x4} 0;
  text-align: center;
  width: 100%;
`;

const NamesListCounter = styled.p`
  font-family: ${FONT_BODY};
  font-size: clamp(14px, 2vw, 16px);
  color: #666;
  margin: 0 0 ${S.x4} 0;
  text-align: center;
  width: 100%;
  font-weight: 600;
`;

const NamesListContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  text-align: justify;
  text-align-last: left;
  -moz-text-align-last: left;
  -webkit-text-align-last: left;
  display: block;
  align-self: stretch;
`;

const NameItem = styled.span`
  font-family: ${FONT_BODY};
  font-size: clamp(14px, 2vw, 16px);
  color: #0A0A0A;
  display: inline;
  text-align: left;
  margin-right: ${S.x1};
  white-space: normal;
  word-break: break-word;
  hyphens: auto;
`;

const DesktopLayout = styled.div`
  display: none;
  @media (min-width: ${BP.lg}px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${S.x4};
    align-items: stretch;
    width: 100%;
  }
`;

const DesktopLeftColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const DesktopRightColumn = styled.div`
  min-width: 0;
`;

const MobileLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media (min-width: ${BP.lg}px) {
    display: none;
  }
`;

const ClickableNameItem = styled.span<{ $hasQuote: boolean; $active: boolean }>`
  font-family: ${FONT_BODY};
  font-size: clamp(14px, 2vw, 16px);
  color: #0A0A0A;
  display: inline;
  text-align: left;
  margin-right: ${S.x1};
  white-space: normal;
  word-break: break-word;
  hyphens: auto;
  transition: text-decoration-color 200ms ease, text-decoration-thickness 200ms ease;
  ${({ $hasQuote }) => $hasQuote ? `
    cursor: pointer;
    text-decoration: underline;
    text-underline-offset: 3px;
  ` : ``}
  ${({ $active, $hasQuote }) => $active && $hasQuote ? `
    text-decoration-color: ${colors.neonMagenta};
    text-decoration-thickness: 2.5px;
    font-weight: 600;
  ` : $hasQuote ? `
    text-decoration-color: rgba(10, 10, 10, 0.3);
    text-decoration-thickness: 1px;
  ` : ``}
  ${({ $hasQuote }) => $hasQuote ? `
    &:hover {
      text-decoration-color: ${colors.neonMagenta};
      text-decoration-thickness: 2px;
    }
  ` : ``}
`;

const ShareButton = styled.button`
  appearance: none;
  border: 2px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border-radius: ${S.x3};
  padding: ${S.x3} ${S.x5};
  font-family: ${FONT_BODY};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 200ms ease;
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  gap: ${S.x2};
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(0);
  }
`;

const ShareIcon = styled.svg`
  width: 18px;
  height: 18px;
  display: block;
`;

const ShareImageButton = styled.button`
  appearance: none;
  border: 2px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border-radius: ${S.x3};
  padding: ${S.x3} ${S.x5};
  font-family: ${FONT_BODY};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 200ms ease;
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  gap: ${S.x2};
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(0);
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;


// Shuffle array function
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export default function Testimonials() {
  const trackRef = React.useRef<HTMLDivElement | null>(null);
  
  // Filter testimonials: only withQuote: true for carousel, all for list
  const testimonialsWithQuote = testimonials.filter(t => t.withQuote);
  
  // Sort all testimonials alphabetically by last name
  const allTestimonials = [...testimonials].sort((a, b) => {
    const getLastName = (name: string) => {
      const parts = name.trim().split(/\s+/);
      return parts[parts.length - 1] || name;
    };
    const lastNameA = getLastName(a.name).toLowerCase();
    const lastNameB = getLastName(b.name).toLowerCase();
    return lastNameA.localeCompare(lastNameB, 'de');
  });
  
  // Start with stable order for SSR, then shuffle on client mount to avoid hydration mismatch
  const [shuffledTestimonials, setShuffledTestimonials] = React.useState(testimonialsWithQuote);
  // Initialize with first testimonial (index 0)
  const [index, setIndex] = React.useState(0);
  const [isCarousel, setIsCarousel] = React.useState(true);
  const [showAll, setShowAll] = React.useState(false);
  const [openTestimonial, setOpenTestimonial] = React.useState<number | null>(null);
  const snapRef = React.useRef<number | null>(null);
  const [generatingImage, setGeneratingImage] = React.useState(false);
  const [isMobileDevice, setIsMobileDevice] = React.useState(false);
  const touchStartXRef = React.useRef<number | null>(null);
  const mobileCardRef = React.useRef<HTMLDivElement | null>(null);
  const SWIPE_THRESHOLD = 40;

  const [selectedId, setSelectedId] = React.useState<string>(
    testimonialsWithQuote.length > 0 ? testimonialsWithQuote[0].id : ''
  );

  // Shuffle on client mount to avoid SSR/client mismatch from Math.random()
  React.useEffect(() => {
    const shuffled = shuffleArray(testimonialsWithQuote);
    setShuffledTestimonials(shuffled);
    setSelectedId(shuffled.length > 0 ? shuffled[0].id : '');
  }, []);
  
  // Get current testimonial for carousel (use shuffled) or regular (use original)
  const getCurrentTestimonial = () => {
    if (isCarousel && !showAll) {
      return shuffledTestimonials[index];
    }
    return testimonials[index];
  };
  
  // Get testimonial index in original array for opening detail view
  const getOriginalIndex = (shuffledIndex: number) => {
    if (!isCarousel || showAll) return shuffledIndex;
    const shuffledTestimonial = shuffledTestimonials[shuffledIndex];
    return testimonials.findIndex(t => t.id === shuffledTestimonial.id);
  };

  const selectedTestimonial = testimonialsWithQuote.find(t => t.id === selectedId) || testimonialsWithQuote[0];
  const selectedOriginalIndex = testimonials.findIndex(t => t.id === selectedTestimonial?.id);

  // Check if mobile device on mount and resize
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobileDevice(checkIsMobileDevice());
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Generate shareable URL for a testimonial (wrapper)
  const getTestimonialUrlLocal = (testimonialIndex: number) => {
    const testimonial = testimonials[testimonialIndex];
    if (!testimonial) {
      if (typeof window === "undefined") return "";
      const baseUrl = window.location.origin + window.location.pathname;
      return `${baseUrl}`;
    }
    return getTestimonialUrl(testimonial.id);
  };

  // Update URL with testimonial query parameter
  const openTestimonialWithUrl = (testimonialIndex: number) => {
    if (typeof window === "undefined") {
      setOpenTestimonial(testimonialIndex);
      return;
    }
    
    const testimonial = testimonials[testimonialIndex];
    if (!testimonial) {
      setOpenTestimonial(testimonialIndex);
      return;
    }

    // Update URL with query parameter
    const url = new URL(window.location.href);
    url.searchParams.set("testimonial", testimonial.id);
    window.history.pushState({}, "", url.toString());
    
    setOpenTestimonial(testimonialIndex);
  };

  // Close testimonial and remove query parameter from URL
  const closeTestimonialWithUrl = () => {
    if (typeof window === "undefined") {
      setOpenTestimonial(null);
      return;
    }

    // Remove testimonial query parameter from URL
    const url = new URL(window.location.href);
    url.searchParams.delete("testimonial");
    window.history.pushState({}, "", url.toString());
    
    setOpenTestimonial(null);
  };

  // Handle URL query parameter to open specific testimonial
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    
    const openTestimonialById = (testimonialId: string) => {
      const testimonialIndex = testimonials.findIndex(t => t.id === testimonialId);
      if (testimonialIndex !== -1) {
        setSelectedId(testimonialId);
        // Scroll to testimonials section first
        const scrollToTestimonials = () => {
          const testimonialsEl = document.getElementById("testimonials");
          if (testimonialsEl) {
            testimonialsEl.scrollIntoView({ behavior: "smooth" });
            setTimeout(() => {
              setOpenTestimonial(testimonialIndex);
            }, 500);
            return true;
          }
          return false;
        };
        
        if (!scrollToTestimonials()) {
          // If section not found yet, wait a bit and try again
          setTimeout(() => {
            if (scrollToTestimonials()) return;
            // Last attempt after longer delay
            setTimeout(() => {
              scrollToTestimonials();
            }, 500);
          }, 100);
        }
      }
    };

    const syncTestimonialFromUrl = () => {
      const params = new URLSearchParams(window.location.search);
      const testimonialId = params.get("testimonial");
      
      if (testimonialId) {
        openTestimonialById(testimonialId);
      } else {
        // If no testimonial in URL, close any open testimonial
        setOpenTestimonial(null);
      }
    };
    
    // Check URL on mount
    syncTestimonialFromUrl();
    
    // Handle browser back/forward buttons
    const handlePopState = () => {
      syncTestimonialFromUrl();
    };
    window.addEventListener("popstate", handlePopState);
    
    // Also listen for hash changes (backward compatibility)
    const hashChangeHandler = () => {
      const hashParams = new URLSearchParams(window.location.hash.split('?')[1] || '');
      const hashTestimonialId = hashParams.get("testimonial") || hashParams.get("t");
      if (hashTestimonialId) {
        // Try as ID first, then as index
        const byId = testimonials.findIndex(t => t.id === hashTestimonialId);
        if (byId !== -1) {
          openTestimonialById(hashTestimonialId);
        } else {
          const index = parseInt(hashTestimonialId, 10);
          if (!isNaN(index) && index >= 0 && index < testimonials.length) {
            const testimonialsEl = document.getElementById("testimonials");
            if (testimonialsEl) {
              testimonialsEl.scrollIntoView({ behavior: "smooth" });
              setTimeout(() => {
                setOpenTestimonial(index);
              }, 500);
            }
          }
        }
      }
    };
    
    hashChangeHandler();
    window.addEventListener("hashchange", hashChangeHandler);
    
    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("hashchange", hashChangeHandler);
    };
  }, []);

  // Share testimonial with image (used for preview cards and full view)
  const shareTestimonialLink = async (testimonialIndex: number, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation(); // Prevent opening full testimonial
    }
    
    const t = testimonials[testimonialIndex];
    if (!t) return;
    
    const shareUrl = getTestimonialUrlLocal(testimonialIndex);
    
    if (isMobileDevice && navigator.share) {
      // Generate image first, then share with image, text, and URL
      const blob = await generateTestimonialImageBlob(t);
      
      if (blob) {
        try {
          // Try sharing with file first (for apps that support it like WhatsApp, Telegram)
          try {
            const file = new File([blob], `empfehlung-${t.id}.png`, { type: "image/png" });
            await navigator.share({
              title: `Empfehlung von ${t.name}`,
              text: `Tanja Maag in den Stadtrat\n\n${shareUrl}`,
              files: [file],
            });
            track("testimonial_share", { platform: "native-share-image", testimonial: testimonialIndex, location: "preview" });
            return;
          } catch (fileErr: any) {
            if (fileErr.name === "AbortError") return;
            // If file sharing fails (e.g., Instagram doesn't support files), try with URL
          }
          
          // Fallback: share with text and URL (some apps will show link preview)
          await navigator.share({
            title: `Empfehlung von ${t.name}`,
            text: `Tanja Maag in den Stadtrat\n\n${shareUrl}`,
            url: shareUrl,
          });
          track("testimonial_share", { platform: "native-share", testimonial: testimonialIndex, location: "preview" });
          return;
        } catch (err: any) {
          if (err.name === "AbortError") return;
        }
      }
      
      // Fallback: share without image
      try {
        await navigator.share({
          title: `Empfehlung von ${t.name}`,
          text: `Tanja Maag in den Stadtrat\n\n${shareUrl}`,
          url: shareUrl,
        });
        track("testimonial_share", { platform: "native-share", testimonial: testimonialIndex, location: "preview" });
        return;
      } catch (err: any) {
        if (err.name === "AbortError") return;
      }
    }
    
    // Desktop fallback: copy to clipboard
    try {
      await navigator.clipboard.writeText(`Tanja Maag in den Stadtrat ${shareUrl}`);
      track("testimonial_share", { platform: "copy", testimonial: testimonialIndex, location: "preview" });
    } catch (err) {
      // Clipboard failed
    }
  };

  // Share testimonial (mobile) or generate/download image (desktop)
  const generateTestimonialImage = async (testimonialIndex: number) => {
    const t = testimonials[testimonialIndex];
    if (!t) return;

    setGeneratingImage(true);

    // On mobile: Generate image and share with text and URL
    if (isMobileDevice && navigator.share) {
      const shareUrl = getTestimonialUrlLocal(testimonialIndex);
      const blob = await generateTestimonialImageBlob(t);
      
      if (blob) {
        try {
          // Try sharing with file first (for apps that support it)
          try {
            const file = new File([blob], `empfehlung-${t.id}.png`, { type: "image/png" });
            await navigator.share({
              title: `Empfehlung von ${t.name}`,
              text: `Tanja Maag in den Stadtrat\n\n${shareUrl}`,
              files: [file],
            });
            track("testimonial_share", { platform: "native-share-image", testimonial: testimonialIndex });
            setGeneratingImage(false);
            return;
          } catch (fileErr: any) {
            if (fileErr.name === "AbortError") {
              setGeneratingImage(false);
              return;
            }
            // If file sharing fails, try with URL and text
          }
          
          // Fallback: share with text and URL
          await navigator.share({
            title: `Empfehlung von ${t.name}`,
            text: `Tanja Maag in den Stadtrat\n\n${shareUrl}`,
            url: shareUrl,
          });
          track("testimonial_share", { platform: "native-share", testimonial: testimonialIndex });
          setGeneratingImage(false);
          return;
        } catch (err: any) {
          if (err.name === "AbortError") {
            setGeneratingImage(false);
            return;
          }
        }
      }
    }

    // Desktop or mobile fallback: Generate and download image
    track("testimonial_share", { platform: "image-download", testimonial: testimonialIndex });
    
    const blob = await generateTestimonialImageBlob(t);
    if (blob) {
      const fileName = `empfehlung-${t.name.toLowerCase().replace(/\s+/g, "-")}.png`;
      downloadImage(blob, fileName);
    }
    setGeneratingImage(false);
  };

  // Helper function to download image
  const downloadImage = (blob: Blob, fileName: string) => {
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };


  // Set carousel mode based on showAll state
  React.useEffect(() => {
    setIsCarousel(!showAll);
  }, [showAll]);

  const slideTo = (i: number) => {
    if (!isCarousel) return;
    const newIndex = Math.max(0, Math.min(i, testimonialsWithQuote.length - 1));
    setIndex(newIndex);
  };

  const slidePrev = () => {
    if (!isCarousel) return;
    const newIndex = index === 0 ? testimonialsWithQuote.length - 1 : index - 1;
    setIndex(newIndex);
  };

  const slideNext = () => {
    if (!isCarousel) return;
    const newIndex = index === testimonialsWithQuote.length - 1 ? 0 : index + 1;
    setIndex(newIndex);
  };

  const handleTouchStart = (event: React.TouchEvent) => {
    if (!isCarousel) return;
    touchStartXRef.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (!isCarousel || touchStartXRef.current === null) return;
    const touchEndX = event.changedTouches[0]?.clientX ?? null;
    if (touchEndX === null) {
      touchStartXRef.current = null;
      return;
    }
    const deltaX = touchEndX - touchStartXRef.current;
    touchStartXRef.current = null;

    if (Math.abs(deltaX) < SWIPE_THRESHOLD) return;
    if (deltaX > 0) {
      slidePrev();
    } else {
      slideNext();
    }
  };

  // Handle link to support section with public quote toggle
  const handleSubmitVoteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const supportSection = document.getElementById("unterstuetzen");
    if (supportSection) {
      supportSection.scrollIntoView({ behavior: "smooth" });
      // Set query parameter to trigger public quote checkbox
      const url = new URL(window.location.href);
      url.searchParams.set("publicQuote", "true");
      window.history.pushState({}, "", url.toString());
      
      // Trigger checkbox check after a short delay to ensure component is mounted
      setTimeout(() => {
        // Dispatch custom event that Support component can listen to
        window.dispatchEvent(new CustomEvent("setPublicQuote", { detail: true }));
      }, 500);
    }
  };

  const handleNameClick = (testimonialId: string) => {
    const testimonial = testimonials.find(t => t.id === testimonialId);
    track("testimonial_name_click", { 
      testimonialId, 
      name: testimonial?.name || testimonialId 
    });
    setSelectedId(testimonialId);
    if (typeof window !== 'undefined' && window.innerWidth < BP.lg && mobileCardRef.current) {
      mobileCardRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Lock body scroll when overlay is open
  React.useEffect(() => {
    if (openTestimonial !== null) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [openTestimonial]);

  // No scroll effect needed for single testimonial carousel

  const renderNamesList = () => (
    <NamesListContainer>
      {allTestimonials.map((t, i) => {
        const nameParts = t.name.trim().split(/\s+/);
        const defaultLastName = nameParts.pop() || t.name;
        const defaultFirstName = nameParts.join(" ");
        const lastName = t.displayLastName ?? defaultLastName;
        const firstName = t.displayFirstName ?? defaultFirstName;
        const isLast = i === allTestimonials.length - 1;

        return (
          <ClickableNameItem
            key={t.id}
            $hasQuote={t.withQuote}
            $active={t.id === selectedId}
            onClick={t.withQuote ? () => handleNameClick(t.id) : undefined}
            role={t.withQuote ? "button" : undefined}
            tabIndex={t.withQuote ? 0 : undefined}
          >
            <strong>{lastName}</strong>
            {firstName && ` ${firstName}`}
            {!isLast && ", "}
          </ClickableNameItem>
        );
      })}
    </NamesListContainer>
  );

  return (
    <Section id="testimonials" background="#ffffff" aria-label="Empfehlungen für Tanja Maag als Stadtratskandidatin">
      <Inner>
        <Reveal>
          <Title>Empfehlungen</Title>Empfehlungen für Tanja Maag
        </Reveal>

        {/* Desktop Layout: two columns */}
        <Reveal delaySec={0.03}>
          <DesktopLayout>
            <DesktopLeftColumn>
              {selectedTestimonial && (
                <Card onClick={() => openTestimonialWithUrl(selectedOriginalIndex)}>
                  <TopSection>
                    <AvatarWrapper>
                      <AvatarRing />
                      <Avatar
                        src={`/testemonials/${selectedTestimonial.image}`}
                        alt={selectedTestimonial.name}
                        fetchPriority="low"
                        loading="eager"
                        data-noindex="true"
                      />
                      {selectedTestimonial.imageCopyright && (
                        <ImageCopyright>© {selectedTestimonial.imageCopyright}</ImageCopyright>
                      )}
                    </AvatarWrapper>
                    <NameTitle>
                      <Name>{selectedTestimonial.name}</Name>
                      {selectedTestimonial.title && (
                        <TitleText dangerouslySetInnerHTML={{ __html: selectedTestimonial.title }} />
                      )}
                    </NameTitle>
                  </TopSection>
                  <BottomSection>
                    <QuoteWrapper>
                      <Quote dangerouslySetInnerHTML={{ __html: selectedTestimonial.quoteShort || selectedTestimonial.quote }} />
                      <footer style={{ marginTop: '8px', fontSize: '0', lineHeight: 0, height: 0, overflow: 'hidden' }}>
                        <cite>{selectedTestimonial.name}{selectedTestimonial.title ? `, ${selectedTestimonial.title.replace(/<[^>]*>/g, '')}` : ''}</cite>
                      </footer>
                    </QuoteWrapper>
                  </BottomSection>
                </Card>
              )}
            </DesktopLeftColumn>
            <DesktopRightColumn>
              <NamesListCounter>{allTestimonials.length} Unterstützer*innen</NamesListCounter>
              {renderNamesList()}
            </DesktopRightColumn>
          </DesktopLayout>
        </Reveal>

        {/* Mobile Layout: single card + names list */}
        <Reveal delaySec={0.04}>
          <MobileLayout>
            <div ref={mobileCardRef} />
            {selectedTestimonial && (
              <Card onClick={() => openTestimonialWithUrl(selectedOriginalIndex)}>
                <TopSection>
                  <AvatarWrapper>
                    <AvatarRing />
                    <Avatar
                      src={`/testemonials/${selectedTestimonial.image}`}
                      alt={selectedTestimonial.name}
                      fetchPriority="low"
                      loading="eager"
                      data-noindex="true"
                    />
                    {selectedTestimonial.imageCopyright && (
                      <ImageCopyright>© {selectedTestimonial.imageCopyright}</ImageCopyright>
                    )}
                  </AvatarWrapper>
                  <NameTitle>
                    <Name>{selectedTestimonial.name}</Name>
                    {selectedTestimonial.title && (
                      <TitleText dangerouslySetInnerHTML={{ __html: selectedTestimonial.title }} />
                    )}
                  </NameTitle>
                </TopSection>
                <BottomSection>
                  <QuoteWrapper>
                    <Quote dangerouslySetInnerHTML={{ __html: selectedTestimonial.quoteShort || selectedTestimonial.quote }} />
                    <footer style={{ marginTop: '8px', fontSize: '0', lineHeight: 0, height: 0, overflow: 'hidden' }}>
                      <cite>{selectedTestimonial.name}{selectedTestimonial.title ? `, ${selectedTestimonial.title.replace(/<[^>]*>/g, '')}` : ''}</cite>
                    </footer>
                  </QuoteWrapper>
                </BottomSection>
              </Card>
            )}
            <NamesList>
              <NamesListTitle>Alle Unterstützer*innen</NamesListTitle>
              <NamesListCounter>{allTestimonials.length} Unterstützer*innen</NamesListCounter>
              {renderNamesList()}
            </NamesList>
          </MobileLayout>
        </Reveal>
      </Inner>

      {/* Testimonial Full Screen Overlay */}
      {openTestimonial !== null && (
        <TestimonialOverlay 
          $open={openTestimonial !== null}
          aria-hidden={openTestimonial === null}
        >
          <TestimonialScrim 
            $open={openTestimonial !== null}
            onClick={() => closeTestimonialWithUrl()}
            aria-label="Schließen"
          />
          <TestimonialSheet 
            $open={openTestimonial !== null}
            role="dialog"
            aria-modal="true"
          >
            <TestimonialHeader>
              <TestimonialCloseBtn 
                onClick={() => closeTestimonialWithUrl()}
                aria-label="Schließen"
                title="Schließen"
              >
                ×
              </TestimonialCloseBtn>
            </TestimonialHeader>
            <TestimonialBody>
              {testimonials[openTestimonial] && (
                <TestimonialContent>
                  <TestimonialFullAvatarWrapper>
                    <TestimonialFullAvatar 
                      src={`/testemonials/${testimonials[openTestimonial].image}`} 
                      alt={testimonials[openTestimonial].name}
                      fetchPriority="low"
                      loading="lazy"
                      data-noindex="true"
                    />
                    {testimonials[openTestimonial].imageCopyright && (
                      <TestimonialImageCopyright>© {testimonials[openTestimonial].imageCopyright}</TestimonialImageCopyright>
                    )}
                  </TestimonialFullAvatarWrapper>
                  <TestimonialFullName>
                    {testimonials[openTestimonial].name}
                  </TestimonialFullName>
                  <TestimonialFullTitle
                    dangerouslySetInnerHTML={{ __html: testimonials[openTestimonial].title }}
                  />
                  <TestimonialFullQuote 
                    dangerouslySetInnerHTML={{ __html: testimonials[openTestimonial].quote }} 
                  />
                  <TestimonialVoteCounter style={{ marginTop: S.x5, marginBottom: S.x3 }}>
                    {(() => {
                      const current = testimonials[openTestimonial];
                      const nameParts = current.name.split(' ');
                      const firstName = nameParts[0];
                      const lastName = nameParts.slice(1).join(' ');
                      return `${firstName} ${lastName}, 1 von ${allTestimonials.length} Unterstützer*innen von Tanja`;
                    })()}
                  </TestimonialVoteCounter>
                  <ShareButtons>
                    <ShareImageButton 
                      onClick={() => generateTestimonialImage(openTestimonial)}
                      aria-label={isMobileDevice ? "Als Bild teilen" : "Als Bild herunterladen"}
                      disabled={generatingImage}
                    >
                      {isMobileDevice ? (
                        <>
                          <ShareIcon viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 11.5L22 2 12.5 22 11 13 2 11.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                          </ShareIcon>
                          {generatingImage ? "Wird erstellt..." : "Teilen"}
                        </>
                      ) : (
                        <>
                          <ShareIcon viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                          </ShareIcon>
                          {generatingImage ? "Wird erstellt..." : "Herunterladen"}
                        </>
                      )}
                    </ShareImageButton>
                  </ShareButtons>
                </TestimonialContent>
              )}
            </TestimonialBody>
          </TestimonialSheet>
        </TestimonialOverlay>
      )}

    </Section>
  );
}
