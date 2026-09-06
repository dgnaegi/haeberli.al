"use client";

import styled from "styled-components";
import { S } from "@/src/styles/spacing";
import { FONT_DISPLAY } from "@/src/styles/fonts";
import { colors } from "@/src/styles/colors";

const Button = styled.button`
  appearance: none;
  border: 1px solid #0A0A0A;
  background: #ffffff;
  color: #0A0A0A;
  border-radius: ${S.x2};
  padding: ${S.x3} ${S.x4};
  font-family: ${FONT_DISPLAY};
  font-weight: 800;
  font-size: clamp(14px, 2.2vw, 16px);
  cursor: pointer;
  transition: border-color 160ms ease, color 160ms ease;
  &:hover { 
    border-color: ${colors.neonMagenta}; 
    color: ${colors.neonMagenta};
  }
  &:focus-visible { 
    outline: 2px solid #00E5FF; 
    outline-offset: 2px; 
    box-shadow: 0 0 0 3px rgba(0,229,255,0.25); 
  }
`;

export default Button;
