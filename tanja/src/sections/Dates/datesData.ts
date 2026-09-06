export type DateItem = {
  date: string; // ISO string
  text: string;
  link?: string | null;
  linkText?: string | null;
};

const dates: DateItem[] = [
  {
    date: "2026-01-16T18:00:00+01:00",
    text: "Filmvorführung Copa 71, Comedyhaus",
    link: "https://al-zh.ch/blog/termin/filmabend-copa-71/",
    linkText: null
  },
  {
    date: "2026-01-20T14:30:00+01:00",
    text: "Podium Avivo Zürich, Kirchgemeindehaus St.Jakob",
    link: null,
    linkText: null
  },
  {
    date: "2026-01-20T19:00:00+01:00",
    text: "Podium: Kispi Hottingen: Nutzen statt Abreissen",
    link: "https://al-zh.ch/blog/termin/podium-kispi-hottingen-nutzen-statt-abreissen/",
    linkText: null
  },
  {
    date: "2026-01-29T18:30:00+01:00",
    text: "Stadtratspodium Secondas Zürich, Kulturpark, Pfingstweidstrasse 16",
    link: "https://secondas-zh.ch/seconds-zuerich-stadtratspodium/",
    linkText: null
  },
  {
    date: "2026-01-31T10:00:00+01:00",
    text: "Politikbasar Kreis 9, Neue Kirche Albisrieden",
    link: "https://politikbasar.ch/",
    linkText: null
  },
  {
    date: "2026-01-31T17:00:00+01:00",
    text: "Volksversammlung IDHF, Hotel Töss, Winterthur",
    link: "https://adhk.eu/read/events/halk-bulusmasi--2026",
    linkText: null
  },
  {
    date: "2026-01-31T18:00:00+01:00",
    text: "Mobilisierung-Party mit Andreas Trash Band, Bravo Bar",
    link: "https://al-zh.ch/blog/termin/bravo-al/",
    linkText: null
  },
  {
    date: "2026-02-03T18:00:00+01:00",
    text: "Podium Wirtschaftsraum Zürich-Nord, Saal Kronenhof Affoltern",
    link: "https://wznord.ch/veranstaltungen/",
    linkText: null
  },
  {
    date: "2026-02-24T18:30:00+01:00",
    text: "Podium Frauenzentrale Zürich, Volkshaus",
    link: "https://frauenzentrale-zh.ch/events/podium-zuercher-stadtratskandidatinnen/",
    linkText: null
  }
];

export default dates;

