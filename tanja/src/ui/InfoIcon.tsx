"use client";

import React from "react";
import styled from "styled-components";
import { S } from "@/src/styles/spacing";
import { FONT_BODY } from "@/src/styles/fonts";
import { BP } from "@/src/styles/breakpoints";
import { colors } from "@/src/styles/colors";

const InfoIconWrapper = styled.div`
  position: relative;
  display: inline-flex;
  overflow: visible;
`;

const InfoIcon = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #ffffff;
  color: #0A0A0A;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  position: relative;
  border: 1px solid #0A0A0A;
  padding: 0;
  appearance: none;
  transition: background-color 160ms ease, border-color 160ms ease, color 160ms ease;
  vertical-align: middle;
  flex-shrink: 0;
  
  &:hover {
    background: ${colors.neonMagenta};
    border-color: ${colors.neonMagenta};
    color: #ffffff;
  }
`;

const Tooltip = styled.div<{ $below?: boolean }>`
  position: absolute;
  left: 50%;
  ${props => props.$below ? `top: calc(100% + ${S.x2});` : `bottom: calc(100% + ${S.x2});`}
  transform: translateX(-50%);
  background: #0A0A0A;
  color: #ffffff;
  padding: ${S.x2} ${S.x3};
  border-radius: ${S.x2};
  font-family: ${FONT_BODY};
  font-size: 12px;
  font-weight: 400;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 200ms ease;
  z-index: 99999;
  max-width: 300px;
  width: max-content;
  white-space: normal;
  text-align: left;
  
  @media (min-width: ${BP.md}px) {
    max-width: 400px;
  }
  
  @media (max-width: ${BP.md - 1}px) {
    display: none;
  }
  
  ${InfoIconWrapper}:hover & {
    opacity: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    ${props => props.$below ? 'bottom: 100%; top: auto;' : 'top: 100%;'}
    left: 50%;
    transform: translateX(-50%);
    border: 6px solid transparent;
    ${props => props.$below ? 'border-bottom-color: #0A0A0A; border-top-color: transparent;' : 'border-top-color: #0A0A0A;'}
  }
`;

type InfoIconProps = {
  text: string;
  id: string;
  onMobileClick?: (id: string) => void;
};

export default function InfoIconComponent({ text, id, onMobileClick }: InfoIconProps) {
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const iconRef = React.useRef<HTMLButtonElement>(null);
  const tooltipRef = React.useRef<HTMLDivElement>(null);
  const [below, setBelow] = React.useState(false);

  const handleClick = () => {
    if (onMobileClick && window.innerWidth < BP.md) {
      onMobileClick(id);
    }
  };

  const checkPosition = React.useCallback(() => {
    if (typeof window === 'undefined' || !iconRef.current || !tooltipRef.current) return;
    
    const iconRect = iconRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    
    // Check if tooltip would be cut off at the top
    const gap = 8;
    const topPosition = iconRect.top - tooltipRect.height - gap;
    const padding = 16;
    
    // If tooltip would be cut off, position it below instead
    if (topPosition < padding) {
      setBelow(true);
    } else {
      setBelow(false);
    }
  }, []);

  React.useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const handleMouseEnter = () => {
      setTimeout(() => {
        checkPosition();
      }, 0);
    };

    wrapper.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', checkPosition);

    return () => {
      wrapper.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('scroll', checkPosition);
      window.removeEventListener('resize', checkPosition);
    };
  }, [checkPosition]);

  return (
    <InfoIconWrapper ref={wrapperRef}>
      <InfoIcon ref={iconRef} type="button" data-info-id={id} onClick={handleClick}>i</InfoIcon>
      <Tooltip ref={tooltipRef} $below={below}>
        {text}
      </Tooltip>
    </InfoIconWrapper>
  );
}

export const MobileInfoBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background: transparent;
  z-index: 999;
  display: none;
  cursor: pointer;
  
  @media (max-width: ${BP.md - 1}px) {
    display: block;
  }
`;

export const MobileInfoSection = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: #0A0A0A;
  color: #ffffff;
  padding: ${S.x10} ${S.x5} ${S.x12};
  z-index: 1000;
  display: none;
  cursor: pointer;
  
  @media (max-width: ${BP.md - 1}px) {
    display: block;
  }
`;

export const MobileInfoContent = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  font-family: ${FONT_BODY};
  font-size: 14px;
  line-height: 1.6;
  pointer-events: none;
`;
