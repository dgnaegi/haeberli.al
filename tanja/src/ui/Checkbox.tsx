"use client";

import React from "react";
import styled from "styled-components";
import { colors } from "@/src/styles/colors";
import { S } from "@/src/styles/spacing";
import { FONT_DISPLAY } from "@/src/styles/fonts";
import { BP } from "@/src/styles/breakpoints";
import InfoIcon from "./InfoIcon";

const CheckboxLabel = styled.label<{ $checked: boolean }>`
  display: flex;
  align-items: center;
  gap: ${S.x3};
  cursor: pointer;
  font-family: ${FONT_DISPLAY};
  font-weight: 800;
  font-size: clamp(16px, 2.5vw, 20px);
  color: #0A0A0A;
  user-select: none;
  position: relative;
  
  @media (max-width: ${BP.md - 1}px) {
    position: relative;
    padding-right: ${S.x6};
  }
`;

const CheckboxText = styled.span`
  display: flex;
  align-items: center;
  gap: ${S.x2};
  flex: 1;
  position: relative;
  overflow: visible;
  
  @media (max-width: ${BP.md - 1}px) {
    /* On mobile, position info icon absolutely on the right side of the page */
    button[data-info-id] {
      cursor: pointer;
      position: fixed;
      right: ${S.x5};
      top: auto;
      transform: none;
      z-index: 100;
      display: inline-flex;
      align-items: center;
      vertical-align: middle;
    }
  }
`;

const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

const CheckboxCustom = styled.div<{ $checked: boolean }>`
  width: 24px;
  height: 24px;
  border: 2px solid #0A0A0A;
  border-radius: 4px;
  background: ${props => props.$checked ? colors.neonMagenta : '#ffffff'};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 200ms ease;
  
  ${CheckboxLabel}:hover & {
    border-color: ${colors.neonMagenta};
  }
  
  ${props => props.$checked && `
    border-color: ${colors.neonMagenta};
  `}
`;

const Checkmark = styled.svg<{ $checked: boolean }>`
  width: 16px;
  height: 16px;
  stroke: #ffffff;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  opacity: ${props => props.$checked ? 1 : 0};
  transition: opacity 200ms ease;
`;

type CheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  infoText?: string;
  infoId?: string;
  onInfoClick?: (id: string) => void;
};

export default function Checkbox({ checked, onChange, label, infoText, infoId, onInfoClick }: CheckboxProps) {
  return (
    <CheckboxLabel $checked={checked}>
      <CheckboxInput
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <CheckboxCustom $checked={checked}>
        <Checkmark $checked={checked} viewBox="0 0 24 24">
          <path d="M20 6L9 17l-5-5" />
        </Checkmark>
      </CheckboxCustom>
      <CheckboxText>
        {label}
        {infoText && <InfoIcon text={infoText} id={infoId || label} onMobileClick={onInfoClick} />}
      </CheckboxText>
    </CheckboxLabel>
  );
}
