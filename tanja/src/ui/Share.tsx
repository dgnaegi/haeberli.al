"use client";

import React from "react";
import styled from "styled-components";
import { S } from "@/src/styles/spacing";
import { colors } from "@/src/styles/colors";

const Row = styled.div`
  display: flex;
  gap: ${S.x2};
  justify-content: center;
`;

const RoundButton = styled.button`
  appearance: none;
  border: 1px solid rgba(255,255,255,0.1);
  background: rgba(255,255,255,0.05);
  color: ${colors.textPrimary};
  width: 44px;
  height: 44px;
  border-radius: 9999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 160ms ease, border-color 160ms ease, transform 160ms ease, box-shadow 160ms ease, color 160ms ease;
  box-shadow: 0 0 0 rgba(0,0,0,0);
  &:hover { background: rgba(255,255,255,0.07); border-color: rgba(255,255,255,0.18); transform: translateY(-1px); box-shadow: 0 0 12px rgba(255,255,255,0.08); }
  &:focus-visible { outline: 2px solid ${colors.cyan}; outline-offset: 2px; box-shadow: 0 0 0 3px rgba(0,255,255,0.25); }
`;

const Icon = styled.svg`
  width: 20px;
  height: 20px;
  display: inline-block;
`;

export default function Share() {
  const [url, setUrl] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [fallbackMsg, setFallbackMsg] = React.useState("");

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    setUrl(window.location.href);
    setTitle(document.title);
  }, []);

  const onShare = async () => {
    try {
      // @ts-ignore
      if (navigator.share) {
        // @ts-ignore
        await navigator.share({ title, url });
        return;
      }
    } catch (_) {}
    try {
      await navigator.clipboard.writeText(url);
      setFallbackMsg("Link kopiert");
      setTimeout(() => setFallbackMsg(""), 1500);
    } catch (_) {
      setFallbackMsg("");
    }
  };

  return (
    <Row>
      <RoundButton type="button" onClick={onShare} aria-label="Seite teilen">
        <Icon viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M2 11.5L22 2 12.5 22 11 13 2 11.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </Icon>
      </RoundButton>
    </Row>
  );
}


