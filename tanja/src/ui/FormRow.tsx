"use client";

import styled from "styled-components";
import { S } from "@/src/styles/spacing";

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${S.x3};
  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default Row;
