export type Testimonial = {
  id: string;
  image: string;
  name: string;
  title: string;
  quote: string;
  quoteShort?: string;
  imageCopyright?: string;
  withQuote: boolean;
  displayFirstName?: string;
  displayLastName?: string;
};

const testimonials: Testimonial[] = [
  
  {
    id: "wirz",
    image: "wirz.png",
    name: "Andreas Wirz",
    title: "Architekt, Präsident Verband Wohnbaugenossenschaften Zürich",
    quote: "In der Stadt Zürich braucht es radikal soziale Antworten auf die Wohnungskrise. Darum wähle ich Tanja Maag in den Stadtrat.",
    quoteShort: "In der Stadt Zürich braucht es radikal soziale Antworten auf die Wohnungskrise. Darum wähle ich Tanja Maag in den Stadtrat.",
    withQuote: true,
    imageCopyright: "Niklaus Spoerri",
  },
  {
    id: "islam-alijaj",
    image: "islam.png",
    name: "Islam Alijaj",
    title: "SP-Nationalrat und Behindertenrechtsaktivist",
    quote: "Tanja Maag denkt und handelt konsequent inklusiv. Das Abbauen von strukturellen Barrieren liegt ihr am Herzen.",
    quoteShort: "Tanja Maag denkt und handelt konsequent inklusiv. Das Abbauen von strukturellen Barrieren liegt ihr am Herzen.",
    withQuote: true
  },
  {
    id: "judith-stofer",
    image: "judith.png",
    name: "Judith Stofer",
    title: "Fraktionspräsidentin und Kantonsrätin AL",
    quote: "Tanja Maag ist gradlinig, zupackend und transparent. Sie kann zuhören und sie setzt sich für soziale Gerechtigkeit und ein Miteinander in dieser Stadt ein.<br /><br />Bezahlbare Wohnungen und lebenswerte Stadt sind keine Fremdwörter für Tanja Maag.<br /><br />Sie gehört definitiv in den Stadtrat!",
    quoteShort: "Tanja Maag ist gradlinig, zupackend und transparent. Sie gehört definitiv in den Stadtrat!",
    withQuote: true
  },
  {
    id: "elvira-wiegers",
    image: "elvira.jpg",
    name: "Elvira Wiegers",
    title: "Regionalsekretärin VPOD Zürich",
    quote: "Ich werde Tanja Maag wählen, weil sie gescheit ist, hart arbeitet und sich mit Haut und Haaren dem öffentlichen Wohl widmet. Bessere Arbeitsbedingungen, gerechtere Strukturen und ein achtsamer Umgang mit Ressourcen und Menschen: das sind Themen, die ihr besonders am Herzen liegen und die sie mit Biss und Hartnäckigkeit angeht.<br /><br />Tanja Maag ist deshalb die perfekte Kandidatin für den Zürcher Stadtrat!",
    quoteShort: "Ich werde Tanja Maag wählen, weil sie gescheit ist, hart arbeitet und sich mit Haut und Haaren dem öffentlichen Wohl widmet.",
    withQuote: true
  },
  {
    id: "samir",
    image: "samir.png",
    name: "Samir",
    title: "Filmemacher",
    quote: "Sie ist eine Frau der Arbeit und vertritt radikal die Interessen der Werktätigen. Hartnäckig, aber ruhig in der Sache. Offen in der Bildung von Allianzen. Konsequent in der Ausführung. Und mit einer sanften Prise Humor.",
    quoteShort: "Sie ist eine Frau der Arbeit und vertritt radikal die Interessen der Werktätigen. Hartnäckig, aber ruhig in der Sache. Offen in der Bildung von Allianzen. Konsequent in der Ausführung. Und mit einer sanften Prise Humor.",
    withQuote: true
  },
  {
    id: "nadina-diday",
    image: "nadina.png",
    name: "Nadina Diday",
    title: "Gemeinderätin SP",
    quote: "Wer Tanja erlebt, spürt sofort: Hier geht es nicht um Show, hier geht es um die Sache. Sie verbindet eine fachliche Tiefe mit einem klaren moralischen Kompass. Ihre Politik richtet sich an die Wirklichkeit der Menschen aus. Sie ist eine Visionärin mit Bodenhaftung, die weiß, dass große Ziele nur durch konkretes Handeln erreicht werden. Tanja hat die Fähigkeit, sich in andere Lebensentwürfe einzufühlen, und übersetzt diese Empathie in pragmatische Lösungen. Das ist Politik, wie wir sie brauchen: klug, wach und den Menschen zugewandt.",
    quoteShort: "Wer Tanja erlebt, spürt sofort: Hier geht es nicht um Show, hier geht es um die Sache. Sie verbindet eine fachliche Tiefe mit einem klaren moralischen Kompass.",
    withQuote: true
  },
  {
    id: "pascal-lamprecht",
    image: "pascal.png",
    name: "Pascal Lamprecht",
    title: "Gemeinderat SP",
    quote: "Tanja verkörpert für mich die positiven Grundwerte der Metalszene: Hartnäckigkeit, Menschlichkeit, Tiefgründigkeit.",
    quoteShort: "Tanja verkörpert für mich die positiven Grundwerte der Metalszene: Hartnäckigkeit, Menschlichkeit, Tiefgründigkeit",
    withQuote: true
  },
  {
    id: "richard-wolff",
    image: "wolff.png",
    name: "Richard Wolff",
    title: "Alt-Stadtrat AL",
    quote: "Ich wähle Tanja, weil es die AL im Stadtrat braucht. Für ein radikal soziales Zürich. Mit mehr Biss.",
    quoteShort: "Ich wähle Tanja, weil es die AL im Stadtrat braucht. Für ein radikal soziales Zürich. Mit mehr Biss.",
    withQuote: true
  },
  {
    id: "felix-moser",
    image: "moser.png",
    name: "Felix Moser",
    title: "Gemeinderat Grüne / Mitglied der Rechnungsprüfungskommission",
    quoteShort: "Tanja Maag kann gut zuhören, setzt sich für gerechte Lösungen ein und verliert die Schwächeren nie aus dem Blick. ",
    quote: "Tanja Maag kann gut zuhören, setzt sich für gerechte Lösungen ein und verliert die Schwächeren nie aus dem Blick. Sie kämpft mit Herz und Verstand für mehr bezahlbare Wohnungen, faire Arbeitsbedingungen und eine lebenswerte Stadt für alle. Darum gehört Tanja Maag in den Stadtrat!",
    withQuote: true
  },
  {
    id: "anna-beatrice-schmaltz",
    image: "anna.png",
    name: "Anna-Béatrice Schmaltz",
    title: "Gemeinderätin Grüne, Projektleiterin Gewaltprävention",
    quote: "Ich wähle Tanja, weil sie sich für eine feministische Stadt einsetzt.",
    quoteShort: "Ich wähle Tanja, weil sie sich für eine feministische Stadt einsetzt.",
    withQuote: true
  },
  {
    id: "lara-can",
    image: "lara.png",
    name: "Lara Can",
    title: "Gemeinderätin SP",
    quote: "Tanja gehört zu den bestinformierten Personen der Stadtzürcher Politik: Von Gesundheitsfragen, über Finanzpolitik zu feministischen Anliegen überzeugt sie mit ihrem breiten Wissen, ohne den Blick für die relevanten Details zu verlieren. Deshalb wähle ich sie mit Überzeugung in den Stadtrat!",
    quoteShort: "Von Gesundheitsfragen, über Finanzpolitik zu feministischen Anliegen überzeugt Tanja mit ihrem breiten Wissen, ohne den Blick für die relevanten Details zu verlieren.",
    withQuote: true
  },
  {
    id: "michael-schmid",
    image: "schmid.png",
    name: "Michael Schmid",
    title: "Gemeinderat AL",
    quote: "Während Tanjas Zeit als Co-Fraktionspräsidentin erlebte ich ihren integrativen Führungsstil – und zugleich beeindruckte mich stets die Klarheit, mit der sie ihre Position erklärt.",
    quoteShort: "Während Tanjas Zeit als Co-Fraktionspräsidentin erlebte ich ihren integrativen Führungsstil – und zugleich beeindruckte mich stets die Klarheit, mit der sie ihre Position erklärt.",
    withQuote: true
  },
  {
    id: "rahel-marti",
    image: "rahel.png",
    name: "Rahel Marti",
    title: "Co-GL Stiftung Landschaftsschutz Schweiz",
    quote: "Tanjas Vision und ihre Positionen sprechen mir aus Kopf und Herzen. Tanja für Zürich!",
    quoteShort: "Tanjas Vision und ihre Positionen sprechen mir aus Kopf und Herzen. Tanja für Zürich!",
    withQuote: true
  },
  {
    id: "walter-angst",
    image: "angst.png",
    name: "Walter Angst",
    title: "Co-Geschäftsleiter des Mieterinnen- und Mieterverbandes",
    quote: "Tanja? Herzlich. Hartnäckig. Mit vollem Elan für die Sachen, die auch mir wichtig sind. Maag ist die richtige Wahl.",
    quoteShort: "Tanja? Herzlich. Hartnäckig. Mit vollem Elan für die Sachen, die auch mir wichtig sind. Maag ist die richtige Wahl.",
    withQuote: true
  },
  {
    id: "patrik-maillard",
    image: "patrik.png",
    name: "Patrik Maillard",
    title: "Alt-Gemeinderat AL",
    quote: "Ich wähle Tanja Maag, weil ich weiss, dass sie sich auch als Stadträtin nicht von der Macht korrumpieren lässt.",
    quoteShort: "Ich wähle Tanja Maag, weil ich weiss, dass sie sich auch als Stadträtin nicht von der Macht korrumpieren lässt.",
    withQuote: true
  },
  {
    id: "jaduson-sivakrishnabavan",
    image: "jaduson.png",
    name: "Jaduson Sivakrishnabavan",
    title: "Vorstand JUSO Kanton Zürich",
    quote: "Solidarisch, mutig und konsequent für die 99%: Am 8. März Tanja Maag in den Stadtrat wählen!",
    quoteShort: "Solidarisch, mutig und konsequent für die 99%: Am 8. März Tanja Maag in den Stadtrat wählen!",
    withQuote: true
  },
  {
    id: "sybille-hercher",
    image: "hercher.jpg",
    name: "Sybille Hercher",
    title: "Soziologin und Unternehmerin",
    quote: "Ich habe Tanja Maag im beruflichen Kontext kennengelernt und schätze neben ihrer fachlichen Kompetenz als Gesundheits- und Bildungsexpertin, vor allem auch ihre persönlichen Qualitäten:<br><br> Ihre Offenheit für Themen und ihre schnelle Auffassungsgabe; ihr aufrichtiges Interesse an Menschen, deren Denken und Einstellungen. Dabei verliert sie nie den roten Faden - wo andere sich verzetteln, bleibt sie fokussiert und bringt Themen auf den Punkt.<br><br> Tanja mag das Gespräch, den Austausch und das Lachen. Im Miteinander ist sie eine beson-dere Zuhörerin. Sie hört zu und fragt nach, um zu verstehen und zu begreifen. Sie positioniert sich klar – und tut das auf eine Weise, die andere einlädt, statt sie auszuschliessen. Offenheit für andere Meinungen und Standfestigkeit in der eigenen Position bilden bei ihr keinen Wi-derspruch, sondern ein harmonisches Ganzes.<br><br> Tanja Maag strahlt Lebensfreude, Ruhe und Klarheit aus, besitzt eine hohe konzentrierte Prä-senz und ist vor allem eine verlässliche und integrierende Persönlichkeit.",
    quoteShort: "Tanja Maag strahlt Lebensfreude, Ruhe und Klarheit aus, besitzt eine hohe konzentrierte Präsenz und ist vor allem eine verlässliche und integrierende Persönlichkeit.",
    withQuote: true
  },
  {
    id: "doris-braegger",
    image: "doris.png",
    name: "Doris Brägger",
    title: "Ehemalige Chefexpertin und Berufsbildungsverantwortliche / Dipl. Pflegefachfrau HF",
    quote: "Tanja ist humorvoll, integer, engagiert und eine tolle Berufsfrau für die Zukunft der Stadt Zürich.",
    quoteShort: "Tanja ist humorvoll, integer, engagiert und eine tolle Berufsfrau für die Zukunft der Stadt Zürich.",
    withQuote: true
  },
  {
    id: "monica-stadler",
    image: "monica.jpg",
    name: "Monica Stadler",
    title: "Leiterin ISBN-Agentur Schweiz",
    quote: "Stark, mutig, gescheit und hartnäckig, dabei eine sehr sozialkompetente Netzwerkerin, äusserst wählenswert!",
    quoteShort: "Stark, mutig, gescheit und hartnäckig, dabei eine sehr sozialkompetente Netzwerkerin, äusserst wählenswert!",
    imageCopyright: "Ayse Yavas",
    withQuote: true
  },
  {
    id: "mattia-lento",
    image: "mattia.png",
    name: "Mattia Lento",
    title: "Journalist",
    quote: "Wir brauchen Leute wie Tanja Maag: kompetent, nah an der Arbeitswelt, der Bildung und den Jugendlichen. Wir brauchen Radikalität und Vernunft, damit Zürich nicht zu einer Stadt für wenige wird.",
    quoteShort: "Wir brauchen Leute wie Tanja Maag: kompetent, nah an der Arbeitswelt, der Bildung und den Jugendlichen. Wir brauchen Radikalität und Vernunft, damit Zürich nicht zu einer Stadt für wenige wird.",
    withQuote: true
  },
  {
    id: "willi-wottreng",
    image: "willi.png",
    name: "Willi Wottreng",
    title: "Schriftsteller und Journalist",
    quote: "Ja, es stimmt: Tanja ist radikal. Radikal gradlinig. Sie denkt und handelt menschenbezogen, ist offen im Geist und schuftet, wenn es sinnvoll ist. Ich empfehle sie als äusserst glaubwürdige Politikerin.",
    quoteShort: "Ja, es stimmt: Tanja ist radikal. Radikal gradlinig. Sie denkt und handelt menschenbezogen, ist offen im Geist und schuftet, wenn es sinnvoll ist. Ich empfehle sie als äusserst glaubwürdige Politikerin.",
    withQuote: true
  },
  {
    id: "mischa-schiwow",
    image: "mischa.png",
    name: "Mischa Schiwow",
    title: "Filmverleiher und AL-Aktivist",
    quote: "Tanja ist eine starke Persönlichkeit, die mit Überzeugung spricht und mit Überlegung handelt. Sie verkörpert für mich den AL-Slogan 'Radikal sozial'!",
    quoteShort: "Tanja ist eine starke Persönlichkeit, die mit Überzeugung spricht und mit Überlegung handelt. Sie verkörpert für mich den AL-Slogan 'Radikal sozial'!",
    withQuote: true
  },
  {
    id: "jan-suter",
    image: "jan.png",
    name: "Jan Suter",
    title: "Co-Präsident SP 11, Gemeinderatskandidat",
    quote: "Tanja setzt sich radikal und konsequent für eine inklusive, soziale und gerechte Stadt für alle ein, welche von den Menschen in den Quartieren gestaltet wird.",
    quoteShort: "Tanja setzt sich radikal und konsequent für eine inklusive, soziale und gerechte Stadt für alle ein, welche von den Menschen in den Quartieren gestaltet wird.",
    withQuote: true
  },
  {
    id: "karin-saxer",
    image: "saxer.png",
    name: "Karin Saxer",
    title: "Gemeinderatskandidatin SP (Schulleiterin/Heilpädagogin)",
    quote: "Tanja ist eine coole, offene, mutige und progressive Frau.",
    quoteShort: "Tanja ist eine coole, offene, mutige und progressive Frau.",
    withQuote: true
  },
  {
    id: "natalie-eberle",
    image: "natalie.png",
    name: "Natalie Eberle",
    title: "Alt-Gemeiderätin AL",
    quote: "Ich wähle Tanja weil sie sich mit vollem Elan für das Wohl der Arbeiter:innen einsetzt. Ob für bezahlbaren Wohnraum oder für gute Arbeitsbedingungn in der Carearbeit in ihrem Fokus stehen stehts die Menschen!",
    quoteShort: "Ich wähle Tanja weil sie sich mit vollem Elan für das Wohl der Arbeiter:innen einsetzt. Ob für bezahlbaren Wohnraum oder für gute Arbeitsbedingungn in der Carearbeit in ihrem Fokus stehen stehts die Menschen!",
    withQuote: true
  },
  {
    id: "david-garcia-nunez",
    image: "david.png",
    name: "David Garcia Nuñez",
    title: "Gemeinderat AL",
    quote: "Geballte Expertise im Gesundheits- und Finanzbereich, wahre Nähe zu den Sorgen der Stadtbevölkerung, notwendige linke Widerstandsstimme in der Exekutive: Es gibt wirklich viele Gründe, um Tanja in den Stadtrat zu wählen!",
    quoteShort: "Geballte Expertise im Gesundheits- und Finanzbereich, wahre Nähe zu den Sorgen der Stadtbevölkerung, notwendige linke Widerstandsstimme in der Exekutive: Es gibt wirklich viele Gründe, um Tanja in den Stadtrat zu wählen!",
    displayFirstName: "David",
    displayLastName: "Garcia Nuñez",
    withQuote: true
  },
  {
    id: "christopher-bahn",
    image: "christopher.png",
    name: "Christopher Bahn",
    title: "Historiker",
    quote: "Tanja Maag politisiert fachkundig, ohne abgehoben zu sein. Solche Menschen braucht es mehr im Stadtrat.",
    quoteShort: "Tanja Maag politisiert fachkundig, ohne abgehoben zu sein. Solche Menschen braucht es mehr im Stadtrat.",
    withQuote: true
  },
  {
    id: "sabeth-toedtli",
    image: "sabeth.png",
    name: "Sabeth Tödtli",
    title: "Urbanistin",
    quote: "Wenn in Züri-Altstetten Mieter*innen verdrängt werden, steht Tanja an ihrer Seite. Sie engagiert sich für eine solidarische Stadt und tut dies gradlinig und anpackend.",
    quoteShort: "Wenn in Züri-Altstetten Mieter*innen verdrängt werden, steht Tanja an ihrer Seite. Sie engagiert sich für eine solidarische Stadt und tut dies gradlinig und anpackend.",
    withQuote: true
  },
  {
    id: "lukas-Buehler",
    image: "lukas.png",
    name: "Lukas Bühler",
    title: "Kampaigner & Umweltaktivist",
    quote: "Tanja mag Velowende. Tanja mag Züri autofrei!",
    quoteShort: "Tanja mag Velowende. Tanja mag Züri autofrei!",
    withQuote: true
  },
  {
    id: "michael-galatsch",
    image: "galatsch.png",
    name: "Michael Galatsch",
    title: "Pflegewissenschaftler",
    quote: "Tanja vereint ausgewiesene Kompetenz in Gesundheit und Community mit echter politischer Durchsetzungskraft – damit konkrete Verbesserungen in den Quatieren nicht nur versprochen, sondern umgesetzt werden.",
    quoteShort: "Tanja vereint ausgewiesene Kompetenz in Gesundheit und Community mit echter politischer Durchsetzungskraft – damit konkrete Verbesserungen in den Quatieren nicht nur versprochen, sondern umgesetzt werden.",
    withQuote: true
  },
  {
    id: "monika-suter",
    image: "msuter.png",
    name: "Monika Suter",
    title: "Vorstand SP11, Gemeinderatskandidatin",
    quote: "Tanja ist eine Kämpferin welche sich für die Gleichheit für alle und alles, in der Stadt Zürich einsetzt.",
    quoteShort: "Tanja ist eine Kämpferin welche sich für die Gleichheit für alle und alles, in der Stadt Zürich einsetzt.",
    withQuote: true
  },
  {
    id: "benjamin-kobelt",
    image: "",
    name: "Benjamin Kobelt",
    title: "Gemeinderatskandidat SP",
    quote: "",
    quoteShort: "",
    withQuote: false
  },
  {
    id: "stephan-schnidrig",
    image: "schnidrig.png",
    name: "Stephan Schnidrig ",
    title: "AL Aktivist",
    quote: "Ich habe Tanja noch nie unaufrichtig erlebt. Sie ist mutig und ein Herzensmensch, jenseits von selbstgefälligem Gerede. Ihre Stärken sind Sachverstand und Empathie. Welch Bereicherung für unsere Stadt - Exekutive ",
    quoteShort: "Ich habe Tanja noch nie unaufrichtig erlebt. Sie ist mutig und ein Herzensmensch, jenseits von selbstgefälligem Gerede. Ihre Stärken sind Sachverstand und Empathie. Welch Bereicherung für unsere Stadt - Exekutive ",
    withQuote: true
  },
  {
    id: "Konzertveranstalter",
    image: "",
    name: "Stefan Wyss",
    title: "Konzertveranstalter",
    quote: "",
    quoteShort: "",
    withQuote: false
  },
  {
    id: "daniel-gnaegi",
    image: "me.png",
    name: "Daniel Gnägi",
    title: "Gemeinderatskandidat AL",
    quote: "Als ich neu bei der AL war, ging Tanja Maag offen auf mich zu und band mich in die Parteistrukturen ein. Politisch steht sie für klare Haltungen und neue Akzente.",
    quoteShort: "Als ich neu bei der AL war, ging Tanja Maag offen auf mich zu und band mich in die Parteistrukturen ein. Politisch steht sie für klare Haltungen und neue Akzente.",
    withQuote: false
  },
  {
    id: "amina-arm",
    image: "",
    name: "Amina Arn",
    title: "Kulturwissenschaftler*in",
    quote: "",
    quoteShort: "",
    withQuote: false
  },
  {
    "id": "nicole--wyss",
    "image": "nicole.jpg",
    "name": "Nicole Wyss",
    "title": "Kantonsrätin AL",
    "quoteShort": "T – teamfähig<br>A – aktiv, arbeitsam<br>N – natürlich<br>J – junggeblieben<br>A – authentisch",
    "quote": "T – teamfähig<br>A – aktiv, arbeitsam<br>N – natürlich<br>J – junggeblieben<br>A – authentisch<br><br>Tanja setzt sich für eine solidarische Stadt ein und hat das Herz am richtigen Fleck. Perfekt für dieses Amt.",
    "withQuote": true
  },
  {
    id: "hans-zaugg",
    image: "zaugg.png",
    name: "Hans Zaugg",
    title: "Chirurg im Ruhestand",
    quote: "Ich maag Tanja, weil sie gleichermassen menschlich, gescheit, anpackend, konsequent und radikal sozial ist.<br><br>Los, In den Stadtrat mit ihr. Aber subito!",
    quoteShort: "Ich maag Tanja, weil sie gleichermassen menschlich, gescheit, anpackend, konsequent und radikal sozial ist. Los, In den Stadtrat mit ihr. Aber subito!.",
    withQuote: true
  },
  { id: "david-winizki",
    image: "winizki.png",
    name : "David Winizki",
    title: "pens. Hausarzt und alter Kämpfer",
    quote: "Tanja ist blitzgescheit, bescheiden, ehrlich, radikal sozial – ein echter Gewinn für Zürich!",
    quoteShort: "Tanja ist blitzgescheit, bescheiden, ehrlich, radikal sozial – ein echter Gewinn für Zürich!",
    withQuote: true
  },
  {
    "id": "andrea-leitner",
    "image": "leitner.png",
    "name": "Andrea Leitner",
    "title": "AL-alt-Gemeinderätin",
    "quote": "Tanja hat die nötige Lebens- und Berufserfahrung, hat Verstand, Herz und Humor, liebt Menschen, ist intelligent, denkt logisch sozial, will schaffen, hat zwei Beine am Boden. Sie kann das. 100%. Mit links.",
    "quoteShort": "Tanja hat die nötige Lebens- und Berufserfahrung, hat Verstand, Herz und Humor, liebt Menschen, ist intelligent, denkt logisch sozial, will schaffen, hat zwei Beine am Boden. Sie kann das. 100%. Mit links.",
    "withQuote": true
  },
  {
    "id": "julia-hofstetter",
    "image": "hofstetter.png",
    "name": "Julia Hofstetter",
    "title": "Gemeinderätin Grüne",
    "quote": "Tanja hat etwas zu sagen. Und sie hört genau hin. Ihre Politik ist ehrlich, klug und vorausschauend. Ich mag Tanja Maag.",
    "quoteShort": "Tanja hat etwas zu sagen. Und sie hört genau hin. Ihre Politik ist ehrlich, klug und vorausschauend. Ich mag Tanja Maag.",
    "withQuote": true
  },
  {
    "id": "jeannine-zschech",
    "image": "zschech.png",
    "name": "Jeannine Zschech",
    "title": "Dipl. Pflegefachfrau",
    "quote": "Tanja handelt empathisch, klar und lösungsorientiert, sie packt Herausforderungen entschlossen an und zeigt aussergewöhnlichen Einsatz - dies mit viel Engagement, Verantwortung und klarem Blick fürs Ganze.",
    "quoteShort": "Tanja handelt empathisch, klar und lösungsorientiert, sie packt Herausforderungen entschlossen an und zeigt aussergewöhnlichen Einsatz - dies mit viel Engagement, Verantwortung und klarem Blick fürs Ganze..",
    "withQuote": true
  },
  {
    "id": "christian-caspar",
    "image": "",
    "name": "Christian Caspar",
    "title": "Politikwissenschaftler, Dr. phil.",
    "quote": "",
    "quoteShort": "",
    "withQuote": false
  },
  {
    "id": "rahel-el-maawi",
    "image": "",
    "name": "Rahel El-Maawi",
    "title": "",
    "quote": "",
    "quoteShort": "",
    "withQuote": false
  },
  {
    "id": "yves-henz",
    "image": "henz.png",
    "name": "Yves Henz",
    "title": "Gemeinderat Grüne",
    "quote": "Im Gemeinderat habe ich Tanja als unglaublich konstruktive und konsequente Kämpferin für Gerechtigkeit, Ökologie und Menschlichkeit. Zürich maag Tanja und Zürich braucht Tanja Maag im Stadtrat.",
    "quoteShort": "Im Gemeinderat habe ich Tanja als unglaublich konstruktive und konsequente Kämpferin für Gerechtigkeit, Ökologie und Menschlichkeit. Zürich maag Tanja und Zürich braucht Tanja Maag im Stadtrat.",
    "withQuote": true
  },
  {
    "id":"samuel-rom",
    "image":"rom.png",
    "name":"Samuel Rom",
    "title":"Alt-Klinikdirektor",
    "quote":"Es braucht Tanja Maag im Stadtrat weil sie eine tatkräftige, zugewandte, gradlinige Brückenbauerin mit klarenm sozialen kompass ist. Und weil es dort gesundheitspolitische Kompetenz braucht.",
    "quoteShort":"Es braucht Tanja Maag im Stadtrat weil sie eine tatkräftige, zugewandte, gradlinige Brückenbauerin mit klarenm sozialen kompass ist. Und weil es dort gesundheitspolitische Kompetenz braucht.",
    "withQuote":true
 },
 {
    "id":"denise-tunali",
    "image":"tunali.png",
    "name":"Denise Tunali",
    "title":"Pensionierte Sozialarbeiterin und ehemalige FraP Frau",
    "quote":"Tanja Maag in den Stadtrat – für radikal-soziale Anliegen, gerechte Politik in Gesundheit, Verkehr und Wohnen und echte Gleichstellung.",
    "quoteShort":"Tanja Maag in den Stadtrat – für radikal-soziale Anliegen, gerechte Politik in Gesundheit, Verkehr und Wohnen und echte Gleichstellung.",
    "withQuote":true
  },
  { 
    "id": "anna-klieber",
    "image": "klieber.png",
    "name": "Anna Klieber",
    "title": "Gemeinderatskandidatin AL",
    "quote": "Zürich braucht Tanja Maag – und der Stadtrat ganz besonders. Sie setzt sich radikal für ein soziales Zürich ein: klar, beharrlich, überzeugend.",
    "quoteShort": "Zürich braucht Tanja Maag – und der Stadtrat ganz besonders. Sie setzt sich radikal für ein soziales Zürich ein: klar, beharrlich, überzeugend.",
    "withQuote": true
  },
  {
    "id": "nil-selma-schelling",
    "image": "schelling.png",
    "name": "Nil Selma Schelling",
    "title": "Naturmedizinerin",
    "quote": "Tanja ist authentisch, besonnen und klug wie kaum jemand, den ich kenne - solche Menschen brauchen wir in der Politik! Danke, dass du antrittst, liebe Tanja! ",
    "quoteShort": "Tanja ist authentisch, besonnen und klug wie kaum jemand, den ich kenne - solche Menschen brauchen wir in der Politik! Danke, dass du antrittst, liebe Tanja! ",
    "withQuote": true
  },
  {
    "id": "dominique-sp-th",
    "image": "sp-th.png",
    "name": "Dominique Späth",
    "title": "Gemeinderätin SP9",
    "quote": "Tanja behält mit Fleiss und Klugheit den Überblick über die komplexen Geschäfte im Gemeinderat. In ihren Voten findet sie klare Worte - auch in heiklen Angelegenheiten.",
    "quoteShort": "Tanja behält mit Fleiss und Klugheit den Überblick über die komplexen Geschäfte im Gemeinderat. In ihren Voten findet sie klare Worte - auch in heiklen Angelegenheiten.",
    "withQuote": true
  },
  {
    "id": "len-hirsbrunner",
    "image": "",
    "name": "Len Hirsbrunner",
    "title": "",
    "quote": "",
    "quoteShort": "",
    "withQuote": false
  },
  {
    "id": "susan-wiget",
    "image": "wiget.png",
    "name": "Susan Wiget",
    "title": "Leiterin Arbeitsintergationsprojekte",
    "quote": "Tanja ist eine umsichtige, engagierte und starke Frau - so erlebe ich sie als Gemeinderatgspändli, welche immer ein offenes Ohr für alles und alle hat und sich immer für die Schwächsten einsetzt. Unbedingt wählen!",
    "quoteShort": "Tanja ist eine umsichtige, engagierte und starke Frau - so erlebe ich sie als Gemeinderatgspändli, welche immer ein offenes Ohr für alles und alle hat und sich immer für die Schwächsten einsetzt. Unbedingt wählen!",
    "withQuote": true
  },
  {
    "id": "gianna-berger",
    "image": "",
    "name": "Gianna Berger",
    "title": "Dipl. Pflegefachfrau HF",
    "quote": "",
    "quoteShort": "",
    "withQuote": false
  },
  {
    "id": "kem-kurun",
    "image": "",
    "name": "Cem Kurun",
    "title": "Unternehmer",
    "quote": "",
    "quoteShort": "",
    "withQuote": false
  },
  {
    "id": "evelyne-zurcher",
    "image": "",
    "name": "Evelyne Zürcher",
    "title": "",
    "quote": "",
    "quoteShort": "",
    "withQuote": false
  },
  { "id": "sofia--karakostas",
    "image": "karakostas.png",
    "name": "Sofia Karakostas",
    "title": "Gemeinderätin SP",
    "quote": "Tanja ist eine kompetente, engagierte Politikerin, die Themen fundiert analysiert und auf den Punkt bringt. Mit Energie und Ausdauer setzt sie sich für praxistaugliche Lösungen und die Menschen ein.",
    "quoteShort": "Tanja ist eine kompetente, engagierte Politikerin, die Themen fundiert analysiert und auf den Punkt bringt. Mit Energie und Ausdauer setzt sie sich für praxistaugliche Lösungen und die Menschen ein.",
    "withQuote": true
  },
  { 
    "id": "christian-h-berli",
    "image": "h-berli.png",
    "name": "Christian Häberli",
    "title": "Gemeinderat AL",
    "quote": "Tanja maag Menschen. Authentisch, zupackend, offen und wenn es sein muss auch bissig! ",
    "quoteShort": "Tanja maag Menschen. Authentisch, zupackend, offen und wenn es sein muss auch bissig! ",
    "withQuote": true
  },
  {
    "id": "ana-sofia",
    "image": "",
    "name": "Ana Sofia Garcia Gonçalves",
    "title": "",
    "quote": "",
    "quoteShort": "",
    "withQuote": false,
    displayFirstName: "Ana Sofia",
    displayLastName: "Garcia Gonçalves",
  },
  {
    "id": "lian-liana-staehelin",
    "image": "",
    "name": "Lian Liana Stähelin",
    "title": "",
    "quote": "",
    "quoteShort": "",
    "withQuote": false,
    displayFirstName: "Lian Liana",
    displayLastName: "Stähelin",
  },
  {
    "id": "isabel-maiorano",
    "image": "",
    "name": "Isabel Maiorano",
    "title": "",
    "quote": "",
    "quoteShort": "",
    "withQuote": false
  },
  {
    "id": "Bettina-Jecklin",
    "image": "",
    "name": "Bettina Jecklin",
    "title": "Geschäftsleiterin Kita",
    "quote": "",
    "quoteShort": "",
    "withQuote": false
  },
  {
    "id": "Markus-Bischoff",
    "image": "",
    "name": "Markus Bischoff",
    "title": "Rechtsanwalt",
    "quote": "",
    "quoteShort": "",
    "withQuote": false
  },
  {
    "id": "Paul-Maag",
    "image": "",
    "name": "Paul Maag",
    "title": "",
    "quote": "",
    "quoteShort": "",
    "withQuote": false
  },
  {
    "id": "luca-maggi",
    "image": "maggi.png",
    "name": "Luca Maggi",
    "title": "Gemeinderat Grüne",
    "quote": "Tanja steht für eine soziale, hartnäckige und gradlinige linke Politik - insbesondere für Minderheiten. Ich wähle sie am 8. März mit Überzeugung in den Stadtrat.",
    "quoteShort": "Tanja steht für eine soziale, hartnäckige und gradlinige linke Politik - insbesondere für Minderheiten. Ich wähle sie am 8. März mit Überzeugung in den Stadtrat.",
    "withQuote": true
  },
  {
    "id": "anne-claude-hensch",
    "image": "hensch.png",
    "name": "Anne-Claude Hensch",
    "title": "AL-alt-Kantonsrätin",
    "quote": "Ich maag Tanjas klare und unaufgeregte Art zu politisieren. Sie packt Probleme an und lanciert Veränderungen. Genau diese Qualitäten brauchen wir im Stadtrat!",
    "quoteShort": "Ich maag Tanjas klare und unaufgeregte Art zu politisieren. Sie packt Probleme an und lanciert Veränderungen. Genau diese Qualitäten brauchen wir im Stadtrat!",
    "withQuote": true
  },
  {
    "id": "Brigitte-Fuerer",
    "image": "",
    "name": "Brigitte Fürer",
    "title": "Raumplanerin",
    "quote": "",
    "quoteShort": "",
    "withQuote": false
  },
  {
    "id": "Nora-Sturzenegger",
    "image": "",
    "name": "Nora Sturzenegger",
    "title": "",
    "quote": "",
    "quoteShort": "",
    "withQuote": false
  },
  {
    "id": "Remi-Frei",
    "image": "",
    "name": "Remi Frei",
    "title": "",
    "quote": "",
    "quoteShort": "",
    "withQuote": false
  },
  {
    "id": "Claude-Sturzenegger",
    "image": "",
    "name": "Claude Sturzenegger",
    "title": "",
    "quote": "",
    "quoteShort": "",
    "withQuote": false
  },
  {
    "id": "Aurel-Hofmann",
    "image": "",
    "name": "Aurel Hofmann",
    "title": "",
    "quote": "",
    "quoteShort": "",
    "withQuote": false
  },
  {
    "id": "Maurice-Friedrich",
    "image": "",
    "name": "Maurice Friedrich",
    "title": "",
    "quote": "",
    "quoteShort": "",
    "withQuote": false
  },
  {
    "id": "Christoph-Bohn",
    "image": "",
    "name": "Christoph Bohn",
    "title": "",
    "quote": "",
    "quoteShort": "",
    "withQuote": false
  },
  {
    "id": "Stefan-Hilbrand",
    "image": "",
    "name": "Stefan Hilbrand",
    "title": "",
    "quote": "",
    "quoteShort": "",
    "withQuote": false
  },
  {
    "id": "hannes-l-mmler",
    "image": "l-mmler.png",
    "name": "Hannes Lämmler",
    "title": "Mitgründer der selbstverwalteten Kooperativen von LONGOMAI und des<br>Forum Civique Europeen",
    "quote": "Unsere Zeit braucht Frauen wie Tanja.",
    "quoteShort": "Unsere Zeit braucht Frauen wie Tanja.",
    "withQuote": true
  },
  {
    "id": "Erika-Maag",
    "image": "",
    "name": "Erika Maag",
    "title": "",
    "quote": "",
    "quoteShort": "",
    "withQuote": false
  },
  {
    "id": "Simon-Balissat",
    "image": "",
    "name": "Simon Balissat",
    "title": "",
    "quote": "",
    "quoteShort": "",
    "withQuote": false
  },
  {
    "id": "Franziska-Harder",
    "image": "",
    "name": "Franziska Harder",
    "title": "",
    "quote": "",
    "quoteShort": "",
    "withQuote": false
  },
  {
    "id": "linda-gosteli",
    "image": "gosteli.png",
    "name": "Linda Gosteli",
    "title": "",
    "quote": "Tanja politisiert mit Kompetenz und Herz. Sie kennt den Alltag von weniger Privilegierten und setzt sich für sorgende Gemeinschaften ein. Aufmerksam und beharrlich – genau sie braucht es im Zürcher Stadtrat.",
    "quoteShort": "Tanja politisiert mit Kompetenz und Herz. Sie kennt den Alltag von weniger Privilegierten und setzt sich für sorgende Gemeinschaften ein. Aufmerksam und beharrlich – genau sie braucht es im Zürcher Stadtrat.",
    "withQuote": true
  },
  {
    "id": "markus-m-ller",
    "image": "m-ller.png",
    "name": "Markus Müller",
    "title": "Mitglied der Kreisschulbehörde Letzi",
    "quote": "Tanja ist eine integere, klarlinige und engagierte Person, die einem jeden Gremium mehr als gut tut - insbesondere dem Stadtrat, da dezidiert links.",
    "quoteShort": "Tanja ist eine integere, klarlinige und engagierte Person, die einem jeden Gremium mehr als gut tut - insbesondere dem Stadtrat, da dezidiert links.",
    "withQuote": true
  },
  {
    "id": "Javier-Gutierrez",
    "image": "",
    "name": "Javier Gutiérrez",
    "title": "",
    "quote": "",
    "quoteShort": "",
    "withQuote": false
  },
  {
    "id": "Luc-Kummer",
    "image": "",
    "name": "Luc Kummer",
    "title": "",
    "quote": "",
    "quoteShort": "",
    "withQuote": false
  },
  {
    "id": "gerd-bolliger",
    "image": "bolliger.png",
    "name": "Gerd Bolliger",
    "title": "Leiter Sozialabteilung Opfikon, Sozialarbeiter FH, Manager NPO",
    "quote": "Sie setzt sich mit Herzblut für soziale Gerechtigkeit, bezahlbaren Wohnraum und eine starke öffentliche Grundversorgung ein. Mit ihr gewinnen wir eine Stadträtin, die pragmatisch und lösungsorientiert anpackt.",
    "quoteShort": "Sie setzt sich mit Herzblut für soziale Gerechtigkeit, bezahlbaren Wohnraum und eine starke öffentliche Grundversorgung ein. Mit ihr gewinnen wir eine Stadträtin, die pragmatisch und lösungsorientiert anpackt.",
    "withQuote": true
  },
  {
    "id": "Corina-Fistarol",
    "image": "",
    "name": "Corina Fistarol",
    "title": "",
    "quote": "",
    "quoteShort": "",
    "withQuote": false
  },
  {
    "id": "Verena-Tunger",
    "image": "",
    "name": "Verena Tunger",
    "title": "",
    "quote": "",
    "quoteShort": "",
    "withQuote": false
  },
  {
    "id": "franz-horv-th",
    "image": "horv-th.png",
    "name": "Franz Horváth",
    "title": "",
    "quote": "Eine Frau mit einem solchen Hintergrund, z.B. die Erfahrung der Schichtarbeit in der Pflege, tut dem Stadtrat gut.",
    "quoteShort": "Eine Frau mit einem solchen Hintergrund, z.B. die Erfahrung der Schichtarbeit in der Pflege, tut dem Stadtrat gut.",
    "withQuote": true
  },
  {
    "id": "Daytona-Hausermann",
    "image": "",
    "name": "Daytona Häusermann",
    "title": "",
    "quote": "",
    "quoteShort": "",
    "withQuote": false
  },
  {
    "id": "Peter-Brunner",
    "image": "",
    "name": "Peter Brunner",
    "title": "",
    "quote": "",
    "quoteShort": "",
    "withQuote": false
  },
  {
    "id": "sophie-blaser",
    "image": "blaser.png",
    "name": "Sophie Blaser",
    "title": "Lehrerin und Gemeinderätin",
    "quote": "Ich wähle Tanja, weil ich mir eine feministischte und solidarische Zukunft wünsche. Tanja in den Stadtrat zu wählen gibt mir Hoffnung, denn die setzt sich konsequent für unsere Grundrechte ein!",
    "quoteShort": "Ich wähle Tanja, weil ich mir eine feministischte und solidarische Zukunft wünsche. Tanja in den Stadtrat zu wählen gibt mir Hoffnung, denn die setzt sich konsequent für unsere Grundrechte ein!",
    "withQuote": true
  },
  {
    "id": "Benjamin-Stalder-Bohnert",
    "image": "",
    "name": "Benjamin Stalder-Bohnert",
    "title": "",
    "quote": "",
    "quoteShort": "",
    "withQuote": false
  },
  {
    "id": "moritz-b-gli",
    "image": "b-gli.png",
    "name": "Moritz Bögli",
    "title": "Gemeinderat",
    "quote": "Im Stadtrat braucht es Menschen die radikal sozial, antifaschistisch und repressionskritisch sind. Tanja hat im Gemeinderat bewiesen, dass sie genau das ist. ",
    "quoteShort": "Im Stadtrat braucht es Menschen die radikal sozial, antifaschistisch und repressionskritisch sind. Tanja hat im Gemeinderat bewiesen, dass sie gena...",
    "withQuote": true
  },
  {
    "id": "Luca-Dahinden",
    "image": "",
    "name": "Luca Dahinden",
    "title": "",
    "quote": "",
    "quoteShort": "",
    "withQuote": false
  },
  {
    "id": "Selina-Walgis",
    "image": "",
    "name": "Selina Walgis",
    "title": "",
    "quote": "",
    "quoteShort": "",
    "withQuote": false
  },
  {
    "id": "Melinda-Nadj-Abonji",
    "image": "",
    "name": "Melinda Nadj Abonji",
    "title": "",
    "quote": "",
    "quoteShort": "",
    "withQuote": false
  },
  {
    "id": "melanie-berner",
    "image": "berner.png",
    "name": "Melanie Berner",
    "title": "Alt-Kantonsrätin",
    "quote": "Tanja politisiert mit Fokus, solidem Wissen und einer beeindruckenden Ruhe für Menschen mit kleiner bis keiner Lobby. Unter anderem darum gehört sie in den Stadtrat.",
    "quoteShort": "Tanja politisiert mit Fokus, solidem Wissen und einer beeindruckenden Ruhe für Menschen mit kleiner bis keiner Lobby. Unter anderem darum gehört sie in den Stadtrat.",
    "withQuote": true
  },
  {
    "id": "anna-graff",
    "image": "graff.png",
    "name": "Anna Graff",
    "title": "Gemeinderätin SP",
    "quote": "Tanja wird sich dafür einsetzen, dass alle Menschen in Zürich Zugang zu einer hochwertigen Gesundheitsversorgung haben. Ich wähle sie daher überzeugt in den Stadtrat!",
    "quoteShort": "Tanja wird sich dafür einsetzen, dass alle Menschen in Zürich Zugang zu einer hochwertigen Gesundheitsversorgung haben. Ich wähle sie daher überzeugt in den Stadtrat!",
    "withQuote": true
  },
  {
    "id": "Matthias-Nüesch",
    "image": "",
    "name": "Matthias Nüesch",
    "title": "",
    "quote": "",
    "quoteShort": "",
    "withQuote": false
  },
  {
    "id": "urs-dietschi",
    "image": "dietschi.png",
    "name": "Urs Dietschi",
    "title": "alt Kantonsrat",
    "quote": "Tanja Maag hält was sie verspricht - eine starke Frau in den Stadtrat.",
    "quoteShort": "Tanja Maag hält was sie verspricht - eine starke Frau in den Stadtrat.",
    "withQuote": true
  },
  {
    "id": "Mahir-Anur",
    "image": "",
    "name": "Mahir Anur",
    "title": "",
    "quote": "",
    "quoteShort": "",
    "withQuote": false
  },
  {
    "id": "Onur-Konuklu",
    "image": "",
    "name": "Onur Konuklu",
    "title": "",
    "quote": "",
    "quoteShort": "",
    "withQuote": false
  },
  {
    "id": "Rahel-Kraehenbuehl",
    "image": "",
    "name": "Rahel Krähenbühl",
    "title": "",
    "quote": "",
    "quoteShort": "",
    "withQuote": false
  },
  {
    "id": "Liv-Mahrer",
    "image": "",
    "name": "Liv Mahrer",
    "title": "Gemeinderätin SP, Pflegefachfrau, Buchhändlerin",
    "quote": "",
    "quoteShort": "",
    "withQuote": false
  },
  {
    "id": "Heidi-Grebe",
    "image": "",
    "name": "Heidi Grebe",
    "title": "",
    "quote": "",
    "quoteShort": "",
    "withQuote": false
  },
  {
    "id": "Marco-Denoth",
    "image": "",
    "name": "Marco Denoth",
    "title": "Gemeinderat SP",
    "quote": "",
    "quoteShort": "",
    "withQuote": false
  },
  {
    "id": "Marco-Hochuli",
    "image": "",
    "name": "Marco Hochuli",
    "title": "",
    "quote": "",
    "quoteShort": "",
    "withQuote": false
  },
  {
    "id": "Marco-Valentino-Bianchi",
    "image": "",
    "name": "Marco Valentino Bianchi",
    "title": "",
    "quote": "",
    "quoteShort": "",
    "withQuote": false
  },
  {
    "id": "j-rg-rauser",
    "image": "rauser.png",
    "name": "Jürg Rauser",
    "title": "Gemeinderat Grüne, Architekt ETH",
    "quote": "Ich traue Tanja das Amt voll und ganz zu. Als Fraktionspräsidium einer Kleinpartei hat sie bewiesen, dass sie Allianzen schmieden kann - und das hartnäckig!",
    "quoteShort": "Ich traue Tanja das Amt voll und ganz zu. Als Fraktionspräsidium einer Kleinpartei hat sie bewiesen, dass sie Allianzen schmieden kann - und das hartnäckig!",
    "withQuote": true
  },
  {
    "id": "hannah-locher", 
    "image": "locher.png",
    "name": "Hannah Locher",
    "title": "Gemeinderätin SP & Vorstandsmitglied SPAZ",
    "quote": "Tanja wird sich dafür einsetzen, dass alle Menschen in Zürich Schutz und gleichberechtigten Zugang zu öffentlichen Leistungen erhalten – ohne Hürden und ohne Ausgrenzung. Ich wähle sie daher überzeugt in den Stadtrat.",
    "quoteShort": "Tanja wird sich dafür einsetzen, dass alle Menschen in Zürich Schutz und gleichberechtigten Zugang zu öffentlichen Leistungen erhalten – ohne Hürden und ohne Ausgrenzung. Ich wähle sie daher überzeugt in den Stadtrat.",
    "withQuote": true
  },
  {
    "id": "Samira-Javadi",
    "image": "",
    "name": "Samira Javadi",
    "title": "",
    "quote": "",
    "quoteShort": "",
    "withQuote": false
  },
];

export default testimonials;