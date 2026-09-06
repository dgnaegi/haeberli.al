export type Motion = {
  key: string;
  title: string;
  link?: string;
  role?: "Ersteinreichende" | "Zweiteinreichende" | "Zweitreinreichende";
};

export type MotionSection = {
  title: string;
  motions: Motion[];
};

// Gesundheit und Soziales
export const gesundheitSection: MotionSection = {
  title: "Gesundheit und Soziales",
  motions: [{ key: "gesundheit-1", 
      title: "Pikettentschädigung für Hebammen, die in eigener fachlicher Verantwortung Wöchnerinnen betreuen",
      role: "Zweiteinreichende",
      link: "https://www.gemeinderat-zuerich.ch/geschaefte/detail.php?gid=4df3b8e2b7d24d42bea89d728b151bd3"
    }, { key: "gesundheit-2", 
      title: "Medizinische Qualitätskriterien der Kaderärztinnen- und Kaderärzteverordnung (KAV), Ergänzung durch griffigeres Instrument",
      role: "Ersteinreichende",
      link: "https://www.gemeinderat-zuerich.ch/geschaefte/detail.php?gid=8a498fbdd6ce4a50b202ce90f602e017"
    }, { key: "gesundheit-3", 
      title: "Programm «Stärkung Pflege» der Stadt, Fortschritte bei der Implementierung des Programms, Massnahmen zur Förderung einer guten Führungskultur und im Bereich Selbstbestimmung des Personals, Weiterbildung und Entwicklung, Arbeitszeitmodelle sowie im Kontext der Ausbildung",
      role: "Ersteinreichende",
      link: "https://www.gemeinderat-zuerich.ch/geschaefte/detail.php?gid=5dfd4eea53e94ac2b4e90e3c48b4f59c"
    }, { key: "gesundheit-4", 
      title: "200 Stellenprozente für professionelle interkulturelle Übersetzende vor Ort am Stadtspital Zürich",
      role: "Ersteinreichende",
      link: "https://www.gemeinderat-zuerich.ch/geschaefte/detail.php?gid=651a8cb3b3314ff8bad6a3d8cd5d17dc"
    }, { key: "gesundheit-5", 
      title: "Regeln des Staatssekretariats für Wirtschaft (SECO) betreffend berufliche Weiterbildungspflicht für das ärztliche Fachpersonal, Protokollierungspraxis der Weiterbildungsstunden am Stadtspital, Nichterreichung der Soll-Stunden gemäss Weiterbildungsordnung, Beteiligungen der Kliniken sowie Einschätzung der Zuschüsse des Kantons",
      role: "Zweiteinreichende",
      link: "https://www.gemeinderat-zuerich.ch/geschaefte/detail.php?gid=7c8b19e4119b4b97b9bc853263d52fca"
    }, { key: "gesundheit-6", 
      title: "Angestellte in Berufen mit grosser körperlicher Belastung, Möglichkeit einer Rente im Alter von 60 Jahren mit guter finanzieller Absicherung",
      role: "Zweiteinreichende",
      link: "https://www.gemeinderat-zuerich.ch/geschaefte/detail.php?gid=5bfeab71d04241efb94669a614d49975"
    }, { key: "gesundheit-7", 
      title: "Pilotprojekt für sogenannte «Freundschaft»-Bänke (Friendship benches) in verschiedenen Quartieren in Zusammenarbeit mit der Gesundheitsförderung Schweiz und Peer-Organisationen",
      role: "Zweiteinreichende",
      link: "https://www.gemeinderat-zuerich.ch/geschaefte/detail.php?gid=384e26f6bb8141adb56fbafe57dad2c7"
    }, { key: "gesundheit-8", 
      title: "Stadtspital Triemli, Aufbau einer somatopsychiatrischen Dual Station",
      role: "Zweitreinreichende",
      link: "https://www.gemeinderat-zuerich.ch/geschaefte/detail.php?gid=4468db913f4f4a0cbcb3e3fd17a138ad"
    }, { key: "gesundheit-9", 
      title: "Stadtspital Zürich, Schaffung von «Gesundheitskiosken» an zentralen Standorten in der Stadt Zürich",
      role: "Zweitreinreichende",
      link: "https://www.gemeinderat-zuerich.ch/geschaefte/detail.php?gid=4041b96a6cb4446c9a595361100379b9"
    }, { key: "gesundheit-10", 
      title: "Teilnahme der Lernenden FaGe/AGS EFZ der Stiftung Alterswohnungen und der Spitex Zürich sowie weiteren Lernenden von stadtnahen Betrieben am Workshop «Tschäggschäss» der Fachstelle für Gleichstellung",
      role: "Ersteinreichende",
      link: "https://www.gemeinderat-zuerich.ch/geschaefte/detail.php?gid=d0d5f88acbe64bdc815e5ef6642cff70"
    }, { key: "gesundheit-11", 
      title: "Städtische sowie beauftragte stationäre und ambulante Gesundheits- und Betreuungsinstitutionen, Lohnanpassung oder Funktionsstufenerhöhung für die pflegerischen und betreuerischen Assistenzberufe",
      role: "Ersteinreichende",
      link: "https://www.gemeinderat-zuerich.ch/geschaefte/detail.php?gid=ab7de2650c994b46888b0d60d6e473ff"
    }]
};

// Gesellschaft / internationale Solidarität
export const gesellschaftSection: MotionSection = {
  title: "Gesellschaft / internationale Solidarität",
  motions: [{ key: "gesellschaft-1", 
      title: "Museum zur Vermittlung der Sinti und jenischen Kultur und Geschichte, Sicherstellung des Weiterbestehens mit einem jährlich wiederkehrenden Beitrag",
      role: "Zweitreinreichende",
      link: "https://www.gemeinderat-zuerich.ch/geschaefte/detail.php?gid=fa92b4f9915f47c7a6d2109eb593ee0b"
    }, { key: "gesellschaft-2", 
      title: "Inklusive barrierefreie Gestaltung von Pausen- und Spielräumen bei Neu- und Umbauten",
      role: "Zweitreinreichende",
      link: "https://www.gemeinderat-zuerich.ch/geschaefte/detail.php?gid=7775a4e6eb00435593042d95be92a55a"
    }, { key: "gesellschaft-3", 
      title: "Verein Kafi Klick, Angebot einer städtischen Liegenschaft zur Nutzung im Rahmen eines potenziellen Vergrösserungsprozesses",
      role: "Zweitreinreichende",
      link: "https://www.gemeinderat-zuerich.ch/geschaefte/detail.php?gid=98b81b22eef94601815847cc39fb5d70"
    }, { key: "gesellschaft-4", 
      title: "Betrieb von niederschwelligen, dezentralen Anlaufstellen an geeigneten Standorten in städtischen Quartieren für kostenfreie und unbürokratische Zugänge zur städtischen Verwaltung",
      role: "Ersteinreichende",
      link: "https://www.gemeinderat-zuerich.ch/geschaefte/detail.php?gid=eba0fb513b4f4f4bafae2e7bf6c9714a"
    }]
};

// Bauen / Wohnen / Stadtentwicklung
export const bauenSection: MotionSection = {
  title: "Bauen / Wohnen / Stadtentwicklung",
  motions: [{ key: "bauen-1", 
      title: "Schaffung einer Rechtsgrundlage für das Personalreglement der Stiftung PWG",
      role: "Zweitreinreichende",
      link: "https://www.gemeinderat-zuerich.ch/geschaefte/detail.php?gid=26bfc885ca054ff6981c2262a5095ccd"
    }, { key: "bauen-2", 
      title: "Städtische Einrichtungen mit tiefem Auslastungsgrad, Nutzung für andere Zwecke wie Wohnen oder Gewerbe",
      role: "Ersteinreichende",
      link: "https://www.gemeinderat-zuerich.ch/geschaefte/detail.php?gid=534dfff5acf340818e6f2c352d0b0642"
    }, { key: "bauen-3", 
      title: "Verstärkte Berücksichtigung von Mehrfachnutzungen bei künftigen städtischen Infrastrukturbauten",
      role: "Zweitreinreichende",
      link: "https://www.gemeinderat-zuerich.ch/geschaefte/detail.php?gid=657741aac79440cda18dc77082591f78"
    }, { key: "bauen-4", 
      title: "Verhinderung der Leerkündigungen der drei Liegenschaften an der Langgrütstrasse 17/21, 25/29 und 33/37",
      role: "Zweitreinreichende",
      link: "https://www.gemeinderat-zuerich.ch/geschaefte/detail.php?gid=c5e63550af76400180f8fca952f25c5a"
    }, { key: "bauen-5", 
      title: "Schlachthofareal, Überlassung des Areals an ein selbstverwaltetes Kollektiv in Gebrauchsleihe zwischen dem Abschluss des gewerblichen Gebrauchs bis zum Beginn des Umbaus",
      role: "Ersteinreichende",
      link: "https://www.gemeinderat-zuerich.ch/geschaefte/detail.php?gid=cbc7ec51c65e44c7bd775df7d9874f8e"
    }, { key: "bauen-6", 
      title: "Einführung einer Gestaltungsplanpflicht für das Schlachthofareal mit Prüfung des Einbezugs des benachbarten Mediacampus-Areals",
      role: "Ersteinreichende",
      link: "https://www.gemeinderat-zuerich.ch/geschaefte/detail.php?gid=9022110c93be477590de92d845b8467d"
    }]
};

// Abgaben / Steuern / Governance
export const steuernSection: MotionSection = {
  title: "Abgaben / Steuern / Governance",
  motions: [{ key: "steuern-1", 
      title: "Fachstelle Gemeinnütziges Wohnen, kritische Prüfung und aktivere Beratungstätigkeit betreffend die Mietzinsentwicklungen gemeinnütziger Wohnbauträgerschaften",
      role: "Ersteinreichende",
      link: "https://www.gemeinderat-zuerich.ch/geschaefte/detail.php?gid=1c332fd55cdb40349439d2538292d7bc"
    }, { key: "steuern-2", 
      title: "Bericht zum Prozess und zur Governance bei der Wahl der neuen Direktion der Zürcher Filmstiftung",
      role: "Ersteinreichende",
      link: "https://www.gemeinderat-zuerich.ch/geschaefte/detail.php?gid=de53acee55244280bfeea6397900abf5"
    }]
};

// Fraktion (Auswahl)
export const fraktionSection: MotionSection = {
  title: "Fraktion (Auswahl)",
  motions: [{ key: "fraktion-1", 
      title: "Erhöhung des Ferienanspruchs auf mindestens fünf Wochen, Anpassung der Verordnung über das Arbeitsverhältnis des städtischen Personals (PR)",
      link: "https://www.gemeinderat-zuerich.ch/geschaefte/detail.php?gid=2725f240bc1f42bba5db61606e32abd3"
    }, { key: "fraktion-2", 
      title: "Professionalisierung der Vermietungs- und Bewirtschaftungsprozesse bei den durch die Asyl-Organisation Zürich (AOZ) bewirtschafteten Wohnliegenschaften",
      link: "https://www.gemeinderat-zuerich.ch/geschaefte/detail.php?gid=7140d12f80fd48608c37c1d0fd639ef1"
    }, { key: "fraktion-3", 
      title: "Anstellung von betreuenden Angehörigen durch bestehende gemeinnützige Organisationen, die über einen Pflegeleistungsauftrag verfügen",
      link: "https://www.gemeinderat-zuerich.ch/geschaefte/detail.php?gid=4f51fc77287d46719b78d62e40d58f89"
    }, { key: "fraktion-4", 
      title: "Kostenloser Eintritt für alle Frauen zum Frauenbad am Stadthausquai während den regulären Öffnungszeiten",
      link: "https://www.gemeinderat-zuerich.ch/geschaefte/detail.php?gid=927153b5a4574cd7b807564670cfb668"
    }, { key: "fraktion-5", 
      title: "Verwirklichung eines Familienhotels und/oder eines Hotels für Personen in ärztlicher Behandlung in den Räumlichkeiten der ehemaligen Frauenklinik",
      link: "https://www.gemeinderat-zuerich.ch/geschaefte/detail.php?gid=05368a8d6ab847758f055240398debc4"
    }]
};

// Mitarbeit an Behördeninitiativen und -referenden
export const initiativesSection: MotionSection = {
  title: "Mitarbeit an Behördeninitiativen und -referenden",
  motions: [{ key: "initiatives-1", 
      title: "Für eine wirksame Förderung des sozialen Wohnungsbaus», Änderung des Gesetzes über die Wohnbau- und Wohneigentumsförderung (LS 841)",
      link: "https://www.gemeinderat-zuerich.ch/geschaefte/detail.php?gid=b2e4be33d9564a4693f84ab811ffcf04"
    }, { key: "initiatives-2", 
      title: "Änderung des kantonalen Steuergesetzes, Gemeindereferendum gegen den Beschluss des Kantonsrats Zürich vom 4. November 2024",
      link: "https://www.gemeinderat-zuerich.ch/geschaefte/detail.php?gid=8a997a9a215e40f788e3735959949c29"
    }]
};

// Legacy exports for backwards compatibility
export type MotionCategory = {
  category: string;
  motions: Motion[];
};

export const personalMotions: MotionCategory[] = [
  {
    category: gesundheitSection.title,
    motions: gesundheitSection.motions
  },
  {
    category: gesellschaftSection.title,
    motions: gesellschaftSection.motions
  },
  {
    category: bauenSection.title,
    motions: bauenSection.motions
  },
  {
    category: steuernSection.title,
    motions: steuernSection.motions
  }
];

export const fraktionMotions: Motion[] = fraktionSection.motions;
export const initiatives: Motion[] = initiativesSection.motions;
