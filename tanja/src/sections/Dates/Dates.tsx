"use client";

import React from "react";
import Section from "../../components/Section";
import Reveal from "../../components/Reveal";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import { FONT_BODY, FONT_DISPLAY } from "../../styles/fonts";
import { S } from "../../styles/spacing";
import dates from "./datesData";
import SectionTitle from "@/src/ui/SectionTitle";
import LinkIcon from "@/src/ui/icons/LinkIcon";

type DateItem = {
  date: string; // ISO string
  text: string;
  link?: string | null;
  linkText?: string | null;
};

type DisplayDateItem = DateItem & { dateObj: Date };

const Inner = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: ${S.x12} ${S.x6};
  display: grid;
  gap: ${S.x6};
`;

const Title = SectionTitle;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: ${S.x4};
`;

const Item = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: ${S.x4};
  align-items: center;
  padding: ${S.x4};
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: ${S.x3};
  background: #ffffff;
`;

const DateCol = styled.div`
  display: grid;
  gap: 2px;
  align-content: center;
`;

const DateText = styled.span`
  color: #0A0A0A;
  font-family: ${FONT_DISPLAY};
  font-weight: 800;
  font-size: clamp(14px, 3vw, 18px);
`;

const TimeText = styled.span`
  color: #666666;
  font-family: ${FONT_BODY};
  font-size: clamp(12px, 2.6vw, 14px);
`;

const Text = styled.span`
  color: #333333;
  font-family: ${FONT_BODY};
  font-size: clamp(14px, 2.4vw, 18px);
`;

const LinkIconBtn = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${colors.neonMagenta};
  text-decoration: none;
`;

export default function Dates() {
  // Compute all sorted dates for SSR, then filter to upcoming on client to avoid hydration mismatch
  const allSorted = React.useMemo<DisplayDateItem[]>(() => {
    return dates
      .map((item) => ({ ...item, dateObj: new Date(item.date) }))
      .filter((item) => {
        const ts = item.dateObj.getTime();
        if (!Number.isFinite(ts)) {
          console.error(`Invalid date format for item: ${item.text}, date: ${item.date}`);
          return false;
        }
        return true;
      })
      .sort((a, b) => a.dateObj.getTime() - b.dateObj.getTime());
  }, []);

  const [upcomingItems, setUpcomingItems] = React.useState<DisplayDateItem[]>(allSorted);

  React.useEffect(() => {
    const now = Date.now();
    setUpcomingItems(allSorted.filter((item) => item.dateObj.getTime() >= now));
  }, [allSorted]);

  const formatDate = (d: Date) => {
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const formatTime = (d: Date) => {
    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  if (allSorted.length === 0 || upcomingItems.length === 0) {
    return null;
  }

  return (
    <Section id="termine" background="#ffffff">
      <Inner>
        <Reveal>
          <Title>Termine</Title>
        </Reveal>
        <List>
          {upcomingItems.map((it, i) => {
            const d = it.dateObj;
            const dateStr = formatDate(d);
            const timeStr = `${formatTime(d)} Uhr`;
            return (
              <Reveal key={it.text} delaySec={i * 0.06} as="li">
                <Item>
                  <DateCol>
                    <DateText>{dateStr}</DateText>
                    <TimeText>{timeStr}</TimeText>
                  </DateCol>
                  <Text>{it.text}</Text>
                  {it.link ? (
                    <LinkIconBtn
                      href={it.link}
                      target={it.link?.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      aria-label={it.linkText || "Mehr"}
                      title={it.linkText || "Mehr"}
                    >
                      <LinkIcon width={24} height={24} aria-hidden="true" />
                    </LinkIconBtn>
                  ) : <span />}
                </Item>
              </Reveal>
            );
          })}
        </List>
      </Inner>
    </Section>
  );
}


