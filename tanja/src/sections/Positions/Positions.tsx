"use client";

import React from "react";
import Section from "../../components/Section";
import styled from "styled-components";
import SectionTitle from "@/src/ui/SectionTitle";
import { S } from "@/src/styles/spacing";
import { FONT_BODY, FONT_DISPLAY } from "@/src/styles/fonts";

const Inner = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: ${S.x12} ${S.x6};
  display: grid;
  gap: ${S.x6};
`;

const Title = SectionTitle;

const Controls = styled.div`
  display: grid;
  gap: ${S.x3};
`;

const Search = styled.input`
  border: 1px solid rgba(0,0,0,0.18);
  background: #ffffff;
  color: #0A0A0A;
  border-radius: ${S.x2};
  padding: ${S.x3} ${S.x3};
  font-family: ${FONT_BODY};
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: ${S.x4};
`;

const Item = styled.li`
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: ${S.x3};
  background: #ffffff;
  padding: ${S.x4};
  display: grid;
  gap: ${S.x2};
`;

const Heading = styled.h3`
  margin: 0;
  font-family: ${FONT_DISPLAY};
  color: #0A0A0A;
  font-size: clamp(18px, 3vw, 22px);
`;

const Meta = styled.div`
  color: #666666;
  font-family: ${FONT_BODY};
  font-size: 14px;
`;

type Entry = { nr: string; kind: string; title: string };

const initial: Entry[] = [
  { nr: "2025/395", kind: "Motion", title: "Betrieb von niederschwelligen, dezentralen Anlaufstellen in Quartieren" },
  { nr: "2025/380", kind: "Postulat", title: "Verein Kafi Klick, Nutzung städtischer Liegenschaft" },
  { nr: "2025/376", kind: "Motion", title: "Lohnanpassungen für Assistenzberufe in Pflege und Betreuung" },
];

export default function Positions() {
  const [q, setQ] = React.useState("");
  const entries = React.useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return initial;
    return initial.filter((e) =>
      e.title.toLowerCase().includes(term) ||
      e.nr.toLowerCase().includes(term) ||
      e.kind.toLowerCase().includes(term)
    );
  }, [q]);

  return (
    <Section id="vorstoesse" background="#ffffff">
      <Inner>
        <Title>Politische vörstösse</Title>
        <Controls>
          <Search
            placeholder="Suchen"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            aria-label="Vorstösse suchen"
          />
        </Controls>
        <List>
          {entries.map((e) => (
            <Item key={e.nr}>
              <Heading>{e.title}</Heading>
              <Meta>{e.nr} · {e.kind}</Meta>
            </Item>
          ))}
        </List>
      </Inner>
    </Section>
  );
}


