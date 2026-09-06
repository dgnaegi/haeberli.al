"use client";

import styled from "styled-components";
import { FONT_DISPLAY } from "@/src/styles/fonts";
import { S } from "@/src/styles/spacing";

const SectionTitle = styled.h2`
  margin: 0 0 ${S.x6};
  color: #0A0A0A;
  font-family: ${FONT_DISPLAY};
  font-size: 48px;
  font-weight: 900;
  text-align: center;
`;

export default SectionTitle;


