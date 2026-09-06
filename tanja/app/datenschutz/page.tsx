"use client";

import React from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import Section from "../../src/components/Section";
import Container from "@/src/ui/Container";
import SectionTitle from "@/src/ui/SectionTitle";
import { S } from "@/src/styles/spacing";
import { FONT_BODY, FONT_DISPLAY } from "@/src/styles/fonts";
import { colors } from "@/src/styles/colors";

const Inner = styled(Container)`
  display: grid;
  gap: ${S.x5};
  /* mobile overflow protection for long emails/urls */
  overflow-wrap: anywhere;
  word-break: break-word;
`;

const Title = SectionTitle;

const H3 = styled.h3`
  margin: ${S.x3} 0 ${S.x2};
  font-family: ${FONT_DISPLAY};
  color: #0A0A0A;
  font-size: clamp(18px, 3vw, 22px);
`;

const P = styled.p`
  margin: 0 0 ${S.x3};
  color: #333333;
  font-family: ${FONT_BODY};
  font-size: clamp(14px, 2.4vw, 18px);
`;

const UL = styled.ul`
  margin: 0 0 ${S.x3};
  padding-left: ${S.x5};
  color: #333333;
  font-family: ${FONT_BODY};
  font-size: clamp(14px, 2.4vw, 18px);
  list-style: disc;
`;

const LI = styled.li`
  margin: 0 0 ${S.x2};
  &::marker { color: ${colors.neonMagenta}; }
`;

const CloseBtn = styled.button`
  appearance: none;
  background: transparent;
  border: none;
  color: #0A0A0A;
  padding: ${S.x2};
  min-width: 44px;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${FONT_BODY};
  font-size: 28px;
  line-height: 1;
  align-self: end;
`;

export default function DatenschutzPage() {
  const router = useRouter();
  const [dateStr, setDateStr] = React.useState<string>("");
  React.useEffect(() => {
    try {
      const fmt = new Intl.DateTimeFormat("de-CH");
      setDateStr(fmt.format(new Date()));
    } catch {
      setDateStr(new Date().toISOString().slice(0, 10));
    }
  }, []);
  return (
    <Section background="#ffffff">
      <Inner>
        <CloseBtn onClick={() => router.back()} aria-label="Schließen" title="Schließen">×</CloseBtn>
        <Title>Datenschutz / Impressum</Title>

        <H3>Impressum</H3>
        <P>Tanja Maag<br />
        c/o Alternative Liste Zürich<br />
        Molkenstrasse 21<br />
        8004 Zürich</P>
        <P>tanja.maag@al-zh.ch</P>

        <H3>Datenschutz</H3>
        <H3>1. Allgemeines</H3>
        <P>
          Wir behandeln deine Personendaten vertraulich und gemäss dem Schweizer Datenschutzgesetz (DSG). 
          Verantwortlich für die Datenverarbeitung ist Tanja Maag, c/o Alternative Liste Zürich, Molkenstrasse 21, 8004 Zürich.
        </P>

        <H3>2. Rechtliche Grundlage</H3>
        <P>
          Wir verarbeiten deine Daten auf Grundlage von:
        </P>
        <UL>
          <LI>Deiner Einwilligung (z. B. bei Testimonials, Komitee-Beitritt)</LI>
          <LI>Auftragserfüllung (z. B. bei Sticker-/Flyer-Bestellungen)</LI>
          <LI>Berechtigtem Interesse (z. B. technische Notwendigkeiten, Website-Betrieb)</LI>
        </UL>

        <H3>3. Technische Daten</H3>
        <P>
          Beim Besuch der Website werden automatisch technische Daten erfasst (z. B. IP-Adresse,
          Browsertyp, Betriebssystem, Besuchszeit, aufgerufene Seiten). Diese Daten sind technisch notwendig, 
          um die Website bereitzustellen und werden in Server-Logs gespeichert. Die Speicherdauer beträgt maximal 30 Tage.
        </P>

        <H3>4. Nutzungsanalyse</H3>
        <P>
          Wir erfassen anonymisierte Nutzungsdaten (z. B. Klicks auf bestimmte Elemente, Seitenaufrufe), 
          um zu verstehen, welche Inhalte interessieren und die Website zu verbessern. Diese Auswertungen 
          lassen keine Rückschlüsse auf einzelne Personen zu. Die Analyse wird mittels Vercel Analytics 
          ohne Einsatz von Cookies durchgeführt. Wenn du solche Analysen vermeiden möchtest, kannst du 
          spezifische Browser-Add-Ons oder Browser wie Brave verwenden.
        </P>

        <H3>5. Datenverarbeitung und Speicherung</H3>
        <P><strong>5.1 E-Mail-Verarbeitung</strong></P>
        <P>
          Formularanfragen werden per E-Mail an die verantwortliche Person übermittelt. Die E-Mails werden 
          nach Erledigung der Anfrage gelöscht, spätestens innerhalb von 30 Tagen nach Absendung.
        </P>
        
        <P><strong>5.2 Öffentliche Unterstützung</strong></P>
        <P>
          Wenn du dich für "Tanja öffentlich unterstützen" entscheidest, werden deine Daten (Name, 
          optional Funktion/Titel) zur Veröffentlichung auf dieser Website verwendet. Diese Daten werden dauerhaft 
          gespeichert, bis du deren Löschung verlangst. Auf deinen Wunsch hin werden deine Unterstützung und 
          zugehörige Daten innert 10 Werktagen gelöscht.
        </P>
        
        <P><strong>5.3 Bild-Uploads</strong></P>
        <P>
          Wenn du "Mit Zitat unterstützen" auswählst, werden hochgeladene Bilder für Testimonials auf Vercel Blob 
          Storage gespeichert und auf dieser Website veröffentlicht. Die Bilder werden dauerhaft gespeichert, bis 
          du deren Löschung verlangst. Auf deinen Wunsch hin werden Testimonials und zugehörige Bilder innert 
          10 Werktagen gelöscht.
        </P>
        
        <P><strong>5.4 Adressdaten</strong></P>
        <P>
          Adressdaten werden ausschliesslich für den Versand von Material (Sticker/Flyer) verwendet. Nach erfolgtem 
          Versand werden die Adressdaten aus den E-Mails gelöscht. Die Adressdaten werden nicht dauerhaft 
          gespeichert oder für andere Zwecke verwendet.
        </P>
        
        <P><strong>5.5 Komitee-Daten</strong></P>
        <P>
          Wenn du dem Komitee beitrittst, werden deine Daten (Name, E-Mail-Adresse) bis nach dem Wahlkampf 
          am 8. März 2025 gespeichert, um dich über Wahlkampf-Aktivitäten und wichtige Termine informieren 
          zu können. Nach dem Wahlkampf werden diese Daten gelöscht, sofern du nicht weiterhin informiert 
          werden möchtest.
        </P>

        <H3>6. Weitergabe an Dritte</H3>
        <P>
          Deine Daten werden nur an folgende Dienstleister weitergegeben, die für den Betrieb der Website 
          notwendig sind:
        </P>
        <UL>
          <LI><strong>Vercel Inc.</strong>: Hosting der Website und Speicherung von Bild-Uploads (Vercel Blob Storage).</LI>
          <LI><strong>Resend Inc.</strong>: Technischer Versand von E-Mails.</LI>
        </UL>
        <P>
          Diese Anbieter verarbeiten Daten gemäss ihren Datenschutzbestimmungen und sind vertraglich zur 
          Einhaltung der Datenschutzbestimmungen verpflichtet.
        </P>

        <H3>7. Datensicherheit</H3>
        <P>
          Wir setzen technische und organisatorische Massnahmen ein, um deine Daten vor unbefugtem Zugriff, 
          Verlust oder Veränderung zu schützen. Dazu gehören verschlüsselte Datenübertragung (HTTPS), 
          regelmässige Sicherheitsupdates und Zugriffsbeschränkungen.
        </P>

        <H3>8. Deine Rechte</H3>
        <P>
          Du hast folgende Rechte bezüglich deiner Personendaten:
        </P>
        <UL>
          <LI><strong>Auskunftsrecht:</strong> Du kannst Auskunft über die von uns gespeicherten Daten verlangen</LI>
          <LI><strong>Berichtigungsrecht:</strong> Du kannst die Berichtigung unrichtiger Daten verlangen</LI>
          <LI><strong>Löschungsrecht:</strong> Du kannst die Löschung deiner Daten verlangen, sofern keine gesetzlichen 
          Aufbewahrungspflichten bestehen</LI>
          <LI><strong>Widerspruchsrecht:</strong> Du kannst der Verarbeitung deiner Daten widersprechen</LI>
          <LI><strong>Widerruf der Einwilligung:</strong> Du kannst erteilte Einwilligungen jederzeit widerrufen</LI>
        </UL>
        <P>
          Zur Ausübung deiner Rechte kannst du dich per E-Mail an die Kontaktperson für Datenschutzanliegen wenden: 
          daniel.gnaegi@protonmail.ch. Wir bearbeiten deinen Antrag innert 10 Tagen.
        </P>

        <H3>9. Cookies und Tracking</H3>
        <P>
          Diese Website verwendet keine Cookies. Die Nutzungsanalyse erfolgt ohne Cookies mittels Vercel Analytics. 
          Es werden keine Tracking-Cookies oder Werbe-Cookies gesetzt.
        </P>

        <H3>10. Änderungen</H3>
        <P>
          Diese Datenschutzerklärung kann bei Bedarf angepasst werden, um sie an geänderte rechtliche 
          Rahmenbedingungen oder technische Entwicklungen anzupassen. Es gilt die jeweils aktuelle Version 
          auf der Website. Bei wesentlichen Änderungen informieren wir dich entsprechend.
        </P>

        <P>Stand: <span suppressHydrationWarning>{dateStr}</span></P>
      </Inner>
    </Section>
  );
}


