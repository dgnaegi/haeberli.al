import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import StyledComponentsRegistry from "@/app/styled-registry";
import AppThemeProvider from "@/app/theme-provider";
import "./globals.css";
import GlobalStyles from "@/app/global-styles";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Use local Unica77 font for display headings
// Font file is in public/fonts/ folder
const unica77 = localFont({
  src: "../public/fonts/ALUnica77-Black.otf",
  variable: "--font-unica",
  weight: "900",
  display: "swap",
  fallback: ["var(--font-display)", "var(--font-geist-sans)", "system-ui", "sans-serif"],
});

// Use a slimmer Space Grotesk for display headings instead of heavy Anton
const displayGrotesk = Space_Grotesk({
  variable: "--font-display",
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

const navGrotesk = Space_Grotesk({
  variable: "--font-nav",
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tanja Maag | Stadtratskandidatin AL Zürich | Gemeinderätin",
  description: "Tanja Maag – Stadtratskandidatin der Alternativen Liste für Zürich. Gemeinderätin seit 2022, kämpft für bezahlbaren Wohnraum, Gesundheitsversorgung als Service Public, soziale Gerechtigkeit und den solidarischen EWZ-Bonus.",
  keywords: [
    "Tanja Maag",
    "Tanja Maag Zürich",
    "Zurich maag Tanja",
    "Zürich maag Tanja",
    "maag Tanja Zürich",
    "maag Tanja Zurich",
    "Tanja Maag Stadtrat",
    "Tanja Maag Alternative Liste",
    "Tanja Maag Politikerin",
    "Tanja Maag Politiker",
    "Politikerin Zürich",
    "Politiker Zürich",
    "Stadtratskandidatin",
    "Stadtratskandidatin Zürich",
    "Stadtratskandidatin Alternative Liste",
    "Stadtratswahlen Zürich",
    "Stadtratswahl Zürich",
    "Stadtratswahlen 2025",
    "Stadtratswahl 2025",
    "Stadtratswahlen 2026",
    "Stadtratswahl 2026",
    "Stadtratswahlen Zürich 2026",
    "Kandidatin Stadtratswahlen Zürich",
    "Kandidatin Alternative Liste",
    "Kandidatin der Alternativen Liste",
    "Stadtrat Zürich",
    "Alternative Liste Zürich",
    "Alternative Liste",
    "AL Zürich",
    "linke Politik Zürich",
    "soziale Politik",
    "Gesundheitspolitik",
    "Caring Community",
    "Politik Zürich",
    "Gemeinderätin Zürich",
    "Gemeinderätin",
    "Kommunalpolitik Zürich",
    "Schweizer Politikerin",
    "EWZ-Bonus",
    "Tanja Maag EWZ-Bonus",
    "EWZ Bonus Zürich",
    "Empfehlungen Tanja Maag",
    "Tanja Maag Unterstützung",
    "bezahlbarer Wohnraum Zürich",
    "faire Arbeitsbedingungen Zürich",
    "Gesundheitsversorgung Zürich",
  ],
  authors: [{ name: "Tanja Maag" }],
  category: "politics",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    title: "Tanja Maag | Stadtratskandidatin AL Zürich | Gemeinderätin",
    description:
      "Tanja Maag – Stadtratskandidatin der Alternativen Liste für Zürich. Gemeinderätin seit 2022, kämpft für bezahlbaren Wohnraum, Gesundheitsversorgung als Service Public, soziale Gerechtigkeit und den solidarischen EWZ-Bonus.",
    url: "https://tanja-maag.ch",
    siteName: "Tanja Maag – Stadtratskandidatin der Alternativen Liste",
    locale: "de_CH",
    type: "website",
    images: [
      {
        url: "https://tanja-maag.ch/tanja-seo.png",
        width: 800,
        height: 800,
        alt: "Portrait Tanja Maag – Stadtratskandidatin der Alternativen Liste für Zürich",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanja Maag | Stadtratskandidatin AL Zürich | Gemeinderätin",
    description:
      "Tanja Maag – Stadtratskandidatin der Alternativen Liste für Zürich. Gemeinderätin seit 2022, kämpft für bezahlbaren Wohnraum, Gesundheitsversorgung als Service Public, soziale Gerechtigkeit und den solidarischen EWZ-Bonus.",
    images: ["https://tanja-maag.ch/tanja-seo.png"],
  },
  metadataBase: new URL("https://tanja-maag.ch"),
  alternates: {
    canonical: "https://tanja-maag.ch",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Tanja Maag",
    alternateName: ["Zurich maag Tanja", "Zürich maag Tanja", "maag Tanja Zürich", "maag Tanja Zurich"],
    jobTitle: ["Stadtratskandidatin", "Gemeinderätin", "Politikerin"],
    image: {
      "@type": "ImageObject",
      "url": "https://tanja-maag.ch/tanja-seo.png",
      "width": 800,
      "height": 800,
      "caption": "Portrait Tanja Maag – Stadtratskandidatin der Alternativen Liste für Zürich"
    },
    description: "Tanja Maag – Stadtratskandidatin der Alternativen Liste für Zürich. Gemeinderätin seit 2022, kämpft für bezahlbaren Wohnraum, Gesundheitsversorgung als Service Public, soziale Gerechtigkeit und den solidarischen EWZ-Bonus.",
    url: "https://tanja-maag.ch",
    sameAs: [
      "https://www.al-zh.ch/blog/author/tanjamaag/",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Zürich",
      addressCountry: "CH",
    },
    affiliation: {
      "@type": "Organization",
      "@id": "https://www.al-zh.ch",
      name: "Alternative Liste (AL) Zürich",
      alternateName: "AL Zürich",
    },
    memberOf: {
      "@type": "Organization",
      name: "Alternative Liste (AL) Zürich",
      alternateName: "AL Zürich",
    },
    worksFor: {
      "@type": "Organization",
      name: "Alternative Liste (AL) Zürich",
    },
    knowsAbout: [
      "Politik",
      "Kommunalpolitik",
      "Stadtratswahlen Zürich",
      "Stadtratskandidatin",
      "Alternative Liste Zürich",
      "Politik Zürich",
      "Soziale Gerechtigkeit",
      "Gesundheitspolitik",
      "Gesundheitsversorgung",
      "Wohnungspolitik",
      "Bezahlbarer Wohnraum",
      "Faire Arbeitsbedingungen",
      "EWZ-Bonus",
      "Zurich maag Tanja",
      "Zürich maag Tanja",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Politikerin",
      occupationLocation: {
        "@type": "City",
        name: "Zürich",
      },
      description: "Stadtratskandidatin und Gemeinderätin der Alternativen Liste Zürich",
    },
  };

  const videoStructuredData = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Tanja Maag – Stadtratskandidatin der Alternativen Liste Zürich",
    description: "Tanja Maag stellt sich als Stadtratskandidatin der Alternativen Liste für Zürich vor. Sie setzt sich für bezahlbaren Wohnraum, Gesundheitsversorgung als Service Public und faire Arbeitsbedingungen ein.",
    thumbnailUrl: "https://tanja-maag.ch/cover.png",
    contentUrl: "https://flqtqnqcpycr2bus.public.blob.vercel-storage.com/video.mp4",
    uploadDate: "2025-01-01",
    inLanguage: "de",
    publisher: {
      "@type": "Person",
      name: "Tanja Maag",
      url: "https://tanja-maag.ch",
    },
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Tanja Maag – Stadtratskandidatin AL Zürich",
    url: "https://tanja-maag.ch",
    description: "Offizielle Website von Tanja Maag, Stadtratskandidatin der Alternativen Liste Zürich, mit Fokus auf soziale Gerechtigkeit und den EWZ-Bonus.",
    author: {
      "@type": "Person",
      name: "Tanja Maag",
    },
  };

  return (
    <html lang="de">
      <head>
        <link rel="image_src" href="https://tanja-maag.ch/tanja-seo.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${displayGrotesk.variable} ${navGrotesk.variable} ${unica77.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(videoStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
        <StyledComponentsRegistry>
          <AppThemeProvider>
            <GlobalStyles />
            {children}
          </AppThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
