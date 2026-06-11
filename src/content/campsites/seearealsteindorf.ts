import type { CampsiteConfig } from "../types";

/**
 * See-Areal Steindorf — Ferienwohnungen & Seecamping am Ossiacher See, Kärnten.
 * Alle Texte/Fakten belegt aus seearealsteindorf.at (Stand-Scrape 2026-06).
 * Bilder = ausschließlich eigene See-Areal-Fotos in /public/campsites/seearealsteindorf/.
 *
 * EHRLICH: Der Platz liegt WIRKLICH direkt am Ossiacher See ("Ferienwohnungen &
 * Campingplatz direkt am Ossiacher See", "Privater See-Zugang mit angrenzenden
 * Stegen") → `see` gesetzt. Keine Auszeichnung auf der Quelle → awards leer.
 *
 * PREISE = KEINE PLATZHALTER (pricesArePlaceholder: false). Die ÜBERNACHTUNGS-Preise
 * (Stellplatz, Seevilla) veröffentlicht der Platz ausschließlich als PDF-Preisliste
 * ("Preise Camping", "Stellplatz", "Seevilla Preisliste") + online-Reservierung — diese
 * PDFs ließen sich im Scrape NICHT auslesen, also wird KEINE €/Nacht-Zahl erfunden:
 * das Buchungs-Widget zeigt für alle Kategorien "auf Anfrage". Die im priceNote/Highlight
 * genannten Zahlen (Strandbad-Tageseintritt € 7 / Kind € 5, Hausgäste gratis) sind REAL
 * und wörtlich belegt (verify-raw 07.md, 22.md). Ortstaxe-Betrag € 2,70 war NICHT in der
 * Quelle belegt → aus priceNote entfernt, ersetzt durch allgemeinen Hinweis. Siehe REPORT.md.
 */
const IMG = "/campsites/seearealsteindorf";

export const seearealsteindorf: CampsiteConfig = {
  name: "See-Areal Steindorf",
  shortName: "See-Areal",
  slug: "seearealsteindorf",
  ort: "Steindorf am Ossiacher See",
  region: "Kärnten",
  brandKind: "Ferienwohnungen & Seecamping",
  see: "Ossiacher See",
  regionLong: "Urlaubsregion Ossiacher See · Gerlitzen Alpe · Kärnten · Österreich",

  claim: "Ferienwohnungen & Seecamping direkt am Ossiacher See",
  claimEmphasis: "direkt am Ossiacher See",
  intro:
    "Persönlich geführtes Seecamping, Seevilla-Ferienwohnungen und ein eigenes Strandbad — direkt am Ufer des Ossiacher Sees, zwischen Naturschutzgebiet und Gerlitzen Alpe.",

  logo: { src: `${IMG}/logo-seeareal.png`, alt: "See-Areal Steindorf Logo" },

  statement: {
    text: "Bei uns beginnt der Urlaub direkt am Wasser — persönlich geführt, ruhig gelegen und mitten in der Kärntner Seenlandschaft.",
    emphasis: "direkt am Wasser",
  },

  pillars: [
    {
      title: "Direkt am Ossiacher See",
      text: "Ferienwohnungen, Campingplatz und Strandbad liegen direkt am Seeufer — mit privatem See-Zugang und eigenen Badestegen.",
      image: { src: `${IMG}/strandbad-sonnenbank.webp`, alt: "Seezugang mit Sonnenbank am Ufer des Ossiacher Sees" },
    },
    {
      title: "Persönlich geführtes Seecamping",
      text: "Ein persönlich geführter Campingplatz in idyllischer, ruhiger Lage auf einer großen Wiese mit Bäumen — zwischen Naturschutzgebiet und Gerlitzen Alpe.",
      image: { src: `${IMG}/seecamping-eingang.webp`, alt: "Campingplatz See-Areal Steindorf mit Bergblick" },
    },
    {
      title: "Eigenes Strandbad",
      text: "Vor dem Seerestaurant liegt das private Strandbad mit großer Liegewiese, Badestegen und seichtem Seezugang — für Hausgäste ist der Eintritt gratis.",
      image: { src: `${IMG}/strandbad-badespass.webp`, alt: "Badespaß im Strandbad am Ossiacher See" },
    },
  ],

  usps: [
    "Direkt am Ossiacher See",
    "Persönlich geführt",
    "Eigenes Strandbad inklusive",
    "Gratis WLAN am Stellplatz",
    "Stromanschluss an jedem Platz",
    "Hunde an der Leine willkommen",
  ],

  trust: {
    heading: "Worauf Sie sich am See-Areal verlassen können",
    headingEmphasis: "verlassen",
    intro:
      "Persönlich geführt von Familie Verhoef, modern ausgestattet und barrierefrei zugänglich — mit eigenem Strandbad, Seerestaurant und ruhiger Lage direkt am Ossiacher See.",
  },

  // Keine eindeutig belegbare Auszeichnung auf der Quelle → ehrlich leer (Band zeigt nur USP-Pills).
  awards: [],

  saison: { von: "15. April", bis: "15. Oktober" },

  hero: {
    aerial: { src: `${IMG}/hero-luftaufnahme.webp`, alt: "Luftaufnahme: See-Areal Steindorf direkt am Ossiacher See mit Bootssteg und Strandbad" },
    sunset: { src: `${IMG}/see-daemmerung.webp`, alt: "Abendstimmung am Ossiacher See mit Blick auf Gerlitzen und Ossiacher Tauern" },
  },

  camping: {
    heading: "Seecamping am Ossiacher See",
    intro:
      "Unser persönlich geführter Campingplatz liegt in idyllischer, ruhiger Lage auf einer großen Wiese mit Bäumen — eine S-förmige Seewiese mit Stellplätzen links und rechts des Weges. Alle Plätze haben Stromanschluss, WLAN ist gratis.",
    features: [
      {
        title: "Stellplätze mit Strom & WLAN",
        text: "Die Stellplätze liegen in zwei Reihen entlang des Weges — in den Größen Klein, Standard, XL und XXL, jeweils auf der Sonnen- oder Schattenseite. Jeder Platz hat Stromanschluss (9 und 13 Ampère), gratis WLAN ist überall verfügbar.",
        image: { src: `${IMG}/stellplaetze.webp`, alt: "Stellplätze mit Wohnwagen am See-Areal Steindorf" },
      },
      {
        title: "Moderne, barrierefreie Sanitäranlagen",
        text: "Unsere modernen, geheizten Sanitäranlagen sind sauber und gepflegt — und auch mit dem Rollstuhl barrierefrei zu befahren.",
        image: { src: `${IMG}/sanitaeranlage.webp`, alt: "Modernes Sanitärgebäude am Campingplatz See-Areal Steindorf" },
      },
      {
        title: "Privater See-Zugang mit Stegen",
        text: "Eine große Badewiese mit Stegen und seichtem Uferwasser lädt zum Verweilen ein — der private Seezugang gehört zum Platz.",
        image: { src: `${IMG}/see-zugang-steg.webp`, alt: "Privater See-Zugang mit Holzsteg am Ossiacher See" },
      },
      {
        title: "Wassersport direkt am Steg",
        text: "Vom Campingplatz aus können Sie schwimmen, rudern, Stand-up-paddeln und Wasserski fahren — Wander- und Radwege führen rund um den See.",
        image: { src: `${IMG}/bootssteg-ruderboot.webp`, alt: "Ruderboot am Bootssteg des See-Areal Steindorf" },
      },
      {
        title: "Gastgarten & Seerestaurant",
        text: "Ein gemütlicher Gastgarten und das Seerestaurant mit Strandcafé liegen direkt am Ufer — dazu Brot-Service an der Rezeption.",
        image: { src: `${IMG}/gastgarten-see.webp`, alt: "Gastgarten am Seeufer beim Seerestaurant Steindorf" },
      },
    ],
  },

  mobilheime: {
    heading: "Seevilla Ferienwohnungen",
    intro:
      "Lieber feste Wände? Die Seevilla-Apartments liegen direkt am Strandbad am Ossiacher Seeufer — von der 40 m² Ferienwohnung bis zur 70 m² großen Wohnung mit Seeblick. Einzeln oder gemeinsam mietbar; Mindestaufenthalt 7 Nächte.",
    items: [],
  },

  aktivitaeten: {
    heading: "Aktiv am Ossiacher See",
    intro:
      "Der Ossiacher See (510 m) liegt eingebettet zwischen Gerlitzen Alpe (1911 m) und den Ossiacher Tauern — ideal für Wassersport, Wandern und Radfahren rund um den See.",
    items: [
      {
        title: "Schwimmen & Badespaß",
        text: "Flacher, seichter Seezugang für die Kleinen, Badestege und ein Bootssteg für die Großen — direkt am eigenen Strandbad.",
        image: { src: `${IMG}/see-zugang-steg.webp`, alt: "Privater Badesteg am Ossiacher See mit Liegewiese und Blick auf die Berge" },
      },
      {
        title: "Wassersport & Aktivitäten",
        text: "Auf dem Ossiacher See gibt es vielfältige Wassersport-Angebote — von Banana-Boat-Fahrten und Wasserski bis SUP und Wasserbike am eigenen Strandbad.",
        image: { src: `${IMG}/see-erholung-segelboot.webp`, alt: "Entspannung am Ossiacher Seeufer mit Blick auf Segelboote und Berge" },
      },
      {
        title: "Paragliding & Gerlitzen Alpe",
        text: "Ganz in der Nähe locken Paragliding von der Gerlitzen Alpe sowie Wander- und Mountainbike-Touren rund um den See.",
        image: { src: `${IMG}/paragliding.webp`, alt: "Paragleiter über dem Ossiacher See und der Gerlitzen Alpe" },
      },
    ],
  },

  anreise: {
    heading: "So finden Sie uns",
    modes: [
      { title: "Mit dem Auto", text: "Seestraße 5a, 9552 Steindorf am Ossiacher See — Anreise täglich bis 18.00 Uhr möglich." },
      { title: "Die Lage", text: "Direkt am Ostufer des Ossiacher Sees, beim Naturschutzgebiet „Ossiacher See–Ostbucht und Bleistätter Moor“, Richtung Villach und Feldkirchen." },
      { title: "Öffnungszeiten", text: "Geöffnet von 15. April bis 15. Oktober, täglich 8.00–18.00 Uhr. Das Strandbad ist von 15. Mai bis 15. September täglich 9.00–19.00 Uhr geöffnet." },
    ],
  },

  galerie: {
    heading: "Eindrücke vom See-Areal",
    headingEmphasis: "See-Areal",
    intro:
      "Ruhiges Seeufer, gepflegte Apartments und der Blick auf Gerlitzen und Ossiacher Tauern — ein paar Eindrücke aus Steindorf am Ossiacher See.",
    tag: "15. April – 15. Oktober",
    moreCount: 8,
    images: [
      { src: `${IMG}/ossiacher-see-panorama.webp`, alt: "Abendstimmung am Ossiacher See mit Ente und Blick auf die Berge" },
      { src: `${IMG}/seeareal-eingang-luftbild.webp`, alt: "Luftbild des See-Areal Steindorf: Seevilla, Campinggebäude und Bootshaus am Ossiacher Seeufer" },
      { src: `${IMG}/seerestaurant-innen.webp`, alt: "Gedeckter Tisch im Seerestaurant Steindorf mit Blick auf den Ossiacher See" },
      { src: `${IMG}/strandbad-sonnenbank.webp`, alt: "Seezugang mit Sonnenbank und Steg am Strandbad Steindorf" },
    ],
  },

  booking: {
    heading: "Verfügbarkeit & Anfrage",
    intro:
      "Wählen Sie Zeitraum, Unterkunft und Personenzahl — Familie Verhoef meldet sich mit Ihrer persönlichen Verfügbarkeit. Den Stellplatz können Sie auch direkt online reservieren.",
    pricesArePlaceholder: false,
    priceNote:
      "Die Übernachtungspreise für Stellplätze und Seevilla-Wohnungen veröffentlicht der Platz als PDF-Preisliste und auf Anfrage — Stellplätze können Sie auch direkt online reservieren. Preise zzgl. ortsüblicher Nächtigungsabgabe. Strandbad-Tageseintritt € 7 (Kinder € 5), für Hausgäste gratis.",
    highlight: {
      title: "Gut zu wissen",
      text: "Stellplatz: in der Hochsaison (Juli–August) min. 5 Nächte. Seevilla-Wohnungen: min. 7 Nächte. Für Hausgäste ist der Strandbad-Eintritt gratis.",
    },
    categories: [
      // Kategorien-Namen REAL (aus dem Online-Buchungsformular /stellplatz-reservieren: „Stellplatz
      // Standard", „Stellplatz XXL", „Seevilla …"). KEIN perNight: die echten €/Nacht-Preise liegen
      // ausschließlich als PDF-Preisliste vor (nicht auslesbar) → Widget zeigt ehrlich „auf Anfrage".
      // Es wird KEINE Preiszahl erfunden. Siehe REPORT.
      { id: "stellplatz-standard", label: "Stellplatz Standard" },
      { id: "stellplatz-xxl", label: "Stellplatz XXL" },
      { id: "seevilla", label: "Seevilla Ferienwohnung" },
    ],
  },

  kontakt: {
    tel: "+43 664 7375 6698",
    telHref: "tel:+4366473756698",
    mail: "info@seearealsteindorf.at",
    facebook: "https://www.facebook.com/seearealsteindorf",
    adresse: "Seestraße 5a · 9552 Steindorf am Ossiacher See · Kärnten",
    coords: { lat: 46.695645, lng: 14.009368 },
  },

  languages: ["DE"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Stellplätze", href: "#camping" },
        { label: "Sanitäranlagen", href: "#camping" },
        { label: "See-Zugang", href: "#camping" },
      ],
    },
    {
      label: "Ferienwohnungen",
      href: "#mobilheime",
      children: [
        { label: "Bleistätterhaus", href: "#mobilheime" },
        { label: "Seevilla Gerlitzen & Süd", href: "#mobilheime" },
      ],
    },
    {
      label: "Strandbad & Aktiv",
      href: "#aktivitaeten",
      children: [
        { label: "Schwimmen & Strandbad", href: "#aktivitaeten" },
        { label: "Wassersport", href: "#aktivitaeten" },
        { label: "Paragliding & Wandern", href: "#aktivitaeten" },
      ],
    },
    {
      label: "Galerie",
      href: "#galerie",
    },
    {
      label: "Preise & Lage",
      href: "#booking",
      children: [
        { label: "Preise & Anfrage", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
        { label: "Kontakt", href: "#anreise" },
      ],
    },
  ],
};

export default seearealsteindorf;
