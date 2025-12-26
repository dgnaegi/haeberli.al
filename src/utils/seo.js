import candidateData from '../data/candidate.json'

export function updateSEO(route = '') {
  const fullName = `${candidateData.vorname} ${candidateData.nachname}`
  const kandidatText = candidateData.gender === 'm' ? 'Kandidat' : 'Kandidatin'
  const baseUrl = window.location.origin
  
  let title, description, keywords, url, structuredData

  if (route === '/uber-mich' || route === '/ueber-mich') {
    title = `${fullName} - Über mich | ${kandidatText} Gemeinderat ${candidateData.wahlkreis} | Alternative Liste`
    description = `Ich bin ${kandidatText} für den Gemeinderat in ${candidateData.wahlkreis}. Erfahre mehr über meine Motivation, meinen Werdegang und meine politische Vision. Kandidatur für die Alternative Liste bei der Gemeinderatswahl 2026.`
    keywords = `${fullName}, Über mich, Gemeinderat ${candidateData.wahlkreis}, ${kandidatText} Gemeinderat, Alternative Liste, Kommunalwahl ${candidateData.wahlkreis}, Politik ${candidateData.wahlkreis}, Kandidatur, Gemeinderatswahl 2026, Zürich Gemeinderat`
    url = `${baseUrl}/uber-mich`
  } else if (route === '/wahlprogramm') {
    title = `Wahlprogramm ${fullName} | Gemeinderat ${candidateData.wahlkreis} | Alternative Liste 2026`
    description = `Mein Wahlprogramm für den Gemeinderat ${candidateData.wahlkreis}. Meine politischen Positionen, Ziele und Visionen. Kandidatur Alternative Liste bei der Gemeinderatswahl 2026. Themen: Wohnen, Solidarität, Freiraum, Schule, Grundrechte.`
    keywords = `${fullName}, Wahlprogramm, Gemeinderat ${candidateData.wahlkreis}, Alternative Liste, Kommunalwahl, Politik ${candidateData.wahlkreis}, Wahlkreis ${candidateData.wahlkreis}, politische Positionen, Gemeinderatswahl 2026, Zürich Politik`
    url = `${baseUrl}/wahlprogramm`
  } else {
    // Home page
    title = `${fullName} | ${kandidatText} Gemeinderat ${candidateData.wahlkreis} | Alternative Liste 2026`
    description = `Ich kandidiere als ${kandidatText} für den Gemeinderat in ${candidateData.wahlkreis} für die Alternative Liste bei der Gemeinderatswahl 2026. Informiere dich über meine Kandidatur, mein Wahlprogramm und meine politischen Positionen.`
    keywords = `${fullName}, Gemeinderat ${candidateData.wahlkreis}, ${kandidatText} Gemeinderat, Alternative Liste, Kommunalwahl ${candidateData.wahlkreis}, Politik ${candidateData.wahlkreis}, Wahlkreis ${candidateData.wahlkreis}, Kandidatur, Gemeinderatswahl 2026, Zürich Gemeinderat`
    url = baseUrl
  }

  const imageUrl = `${baseUrl}/portrait.png`

  // Set page title
  document.getElementById('title').textContent = title

  // Set canonical URL
  document.getElementById('canonical').setAttribute('href', url)

  // Set meta description
  document.getElementById('description').setAttribute('content', description)
  document.getElementById('keywords').setAttribute('content', keywords)

  // Set Open Graph tags
  document.getElementById('og:title').setAttribute('content', title)
  document.getElementById('og:description').setAttribute('content', description)
  document.getElementById('og:image').setAttribute('content', imageUrl)
  document.getElementById('og:url').setAttribute('content', url)

  // Set Twitter tags
  document.getElementById('twitter:title').setAttribute('content', title)
  document.getElementById('twitter:description').setAttribute('content', description)
  document.getElementById('twitter:image').setAttribute('content', imageUrl)

  // Set structured data (JSON-LD)
  const breadcrumbItems = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Startseite",
      "item": baseUrl
    }
  ]

  if (route === '/uber-mich' || route === '/ueber-mich') {
    breadcrumbItems.push({
      "@type": "ListItem",
      "position": 2,
      "name": "Über mich",
      "item": url
    })
  } else if (route === '/wahlprogramm') {
    breadcrumbItems.push({
      "@type": "ListItem",
      "position": 2,
      "name": "Wahlprogramm",
      "item": url
    })
  }

  // Enhanced structured data
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": fullName,
    "givenName": candidateData.vorname,
    "familyName": candidateData.nachname,
    "jobTitle": `${kandidatText} Gemeinderat`,
    "description": description,
    "image": {
      "@type": "ImageObject",
      "url": imageUrl,
      "caption": `Kandidatenbild von ${fullName}, ${kandidatText} für den Gemeinderat in ${candidateData.wahlkreis}`
    },
    "url": url,
    "memberOf": {
      "@type": "PoliticalParty",
      "name": "Alternative Liste",
      "url": "https://alternative-liste.ch"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": candidateData.wahlkreis,
      "addressRegion": "Zürich",
      "addressCountry": "CH"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Alternative Liste",
      "url": "https://alternative-liste.ch",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": candidateData.wahlkreis,
        "addressRegion": "Zürich",
        "addressCountry": "CH"
      }
    },
    "knowsAbout": [
      "Gemeinderat",
      "Kommunalpolitik",
      candidateData.wahlkreis,
      "Alternative Liste",
      "Gemeinderatswahl",
      "Kommunalwahl"
    ],
    "sameAs": [
      candidateData.instagram,
      candidateData.bluesky,
      candidateData.x,
      candidateData.facebook
    ].filter(Boolean)
  }

  // Add WebSite schema for better SEO
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": `${fullName} - ${kandidatText} Gemeinderat`,
    "url": baseUrl,
    "description": description,
    "publisher": {
      "@type": "Person",
      "name": fullName
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  }

  structuredData = [
    personSchema,
    websiteSchema,
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbItems
    }
  ]

  // Add Organization schema for Alternative Liste
  if (route === '/') {
    structuredData.push({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Alternative Liste",
      "url": "https://alternative-liste.ch",
      "logo": {
        "@type": "ImageObject",
        "url": imageUrl
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": candidateData.wahlkreis,
        "addressRegion": "Zürich",
        "addressCountry": "CH"
      }
    })
  }

  document.getElementById('structured-data').textContent = JSON.stringify(structuredData)
}

