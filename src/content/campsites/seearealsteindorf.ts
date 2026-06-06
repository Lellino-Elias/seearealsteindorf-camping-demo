import type { CampsiteConfig } from "../types";

/**
 * See-Areal Steindorf — Seecamping & Ferienwohnungen am Ossiacher See, Kärnten.
 * Alle Texte/Fakten belegt aus seearealsteindorf.at (Stand-Scrape 2026-06,
 * Seiten: /seecamping, /seevilla-ossiacher-see, /strandbad, /preise-strandbad,
 * /die-lage, /stellplatz-reservieren, /impressum). Bilder = ausschließlich eigene
 * Fotos der Anlage in /public/campsites/seearealsteindorf/ (jedes per Vision geprüft).
 *
 * EHRLICH:
 *  - Der Platz liegt WIRKLICH direkt am Ossiacher See (eigener Seezugang mit Stegen,
 *    Badewiese, privates Strandbad) → `see` gesetzt.
 *  - PREISE: Auf der Original-Website stehen die Camping- und Ferienwohnungs-Preise
 *    NUR als PDF-Preisliste (im Scrape nicht erfasst). Auf der Seite sichtbar sind nur
 *    Strandbad-Eintritts-/Vermietungspreise + Zusatzleistungen (Privat-Sanitär ab
 *    € 11/Tag, Waschmaschine € 5). Die Stellplatz-/Seevilla-Übernachtungspreise sind
 *    daher REALISTISCHE PLATZHALTER → pricesArePlaceholder: true. Mit Gastgeber bestätigen.
 *  - Keine Auszeichnung auf der Quelle → awards bleibt leer.
 */
const IMG = "/campsites/seearealsteindorf";

export const seearealsteindorf: CampsiteConfig = {
  name: "See-Areal Steindorf",
  shortName: "See-Areal Steindorf",
  slug: "seearealsteindorf",
  ort: "Steindorf am Ossiacher See",
  region: "Kärnten",
  brandKind: "Ferienwohnungen & Camping",
  see: "Ossiacher See",
  regionLong: "Urlaubsregion Ossiacher See · Gerlitzen Alpe · Kärnten · Österreich",

  claim: "Camping & Ferienwohnungen direkt am Ossiacher See",
  claimEmphasis: "direkt am Ossiacher See",
  intro:
    "Persönlich geführter Seecamping und moderne Ferienwohnungen auf einer ruhigen Wiese mit eigenem Seezugang, Stegen und privatem Strandbad — eingebettet zwischen Gerlitzen Alpe und Ossiacher Tauern in Kärnten.",

  logo: { src: `${IMG}/logo.png`, alt: "See-Areal Steindorf Logo" },

  statement: {
    text: "Bei uns ist Urlaub noch Erholung am Seeufer — persönlich geführt, ruhig gelegen und mit dem See direkt vor der Tür.",
    emphasis: "Erholung am Seeufer",
  },

  pillars: [
    {
      title: "Direkt am Ossiacher See",
      text: "Eigener Seezugang mit Stegen, seichtem Uferwasser und großer Badewiese — der See liegt direkt vor deinem Platz.",
      image: { src: `${IMG}/seezugang-steg.webp`, alt: "Eigener Steg ins seichte Uferwasser des Ossiacher Sees am See-Areal Steindorf" },
    },
    {
      title: "Privates Strandbad",
      text: "Idyllisches Strandbad mit Liegewiese, Badestegen, Bootssteg und „Sonnenbank“ am Ufer — für Hausgäste ist der Eintritt gratis.",
      image: { src: `${IMG}/strandbad-sonnenbank.webp`, alt: "Geschwungene Sonnenbank am Ufer des privaten Strandbads am Ossiacher See" },
    },
    {
      title: "Zwischen Berg & See",
      text: "Eingebettet zwischen Gerlitzen Alpe und Ossiacher Tauern, am Naturschutzgebiet Bleistätter Moor — Ruhe und weiter Blick über den See.",
      image: { src: `${IMG}/ossiacher-see-panorama.webp`, alt: "Weiter Blick über den ruhigen Ossiacher See zu den bewaldeten Bergen" },
    },
  ],

  usps: [
    "Direkt am Ossiacher See",
    "Eigener Seezugang & Stege",
    "Privates Strandbad – für Hausgäste gratis",
    "Gratis WLAN am Platz",
    "Moderne, beheizte & barrierefreie Sanitäranlagen",
    "Hunde an der Leine willkommen",
  ],

  trust: {
    heading: "Worauf du dich am See-Areal Steindorf verlassen kannst",
    headingEmphasis: "verlassen",
    intro:
      "Persönlich geführt von Familie Verhoef, ruhige Lage auf einer Wiese am See, moderne barrierefreie Sanitäranlagen und ein privates Strandbad direkt vor der Tür.",
  },

  // Keine eindeutig belegbare Auszeichnung auf der Quelle → ehrlich leer.
  awards: [],

  saison: { von: "15. April", bis: "15. Oktober" },

  hero: {
    aerial: { src: `${IMG}/hero-luftaufnahme.webp`, alt: "Luftaufnahme des See-Areal Steindorf am Ossiacher See mit Badewiese, Stegen und Segelbooten" },
    sunset: { src: `${IMG}/see-abendstimmung.webp`, alt: "Abendstimmung am Ossiacher See" },
  },

  camping: {
    heading: "Seecamping am Ossiacher See",
    intro:
      "Unser persönlich geführter Campingplatz liegt idyllisch und ruhig auf einer großen Wiese mit Bäumen — zwischen dem Naturschutzgebiet Ossiacher Tauern und der Gerlitzen Alpe, direkt am Seeufer.",
    features: [
      {
        title: "Ruhige Wiese am See",
        text: "Eine S-förmige Wiese am See: Die Stellplätze sind links und rechts des Weges in zwei Reihen angeordnet, umgeben von Bäumen und Natur.",
        image: { src: `${IMG}/campingplatz-wiese.webp`, alt: "Campingwiese des See-Areal Steindorf mit Wohnwagen, Bäumen und Bergen" },
      },
      {
        title: "Stellplätze mit Strom & Gratis-WLAN",
        text: "Alle Stellplätze haben einen Stromanschluss (9 und 13 Ampère), WLAN ist kostenlos verfügbar. Brot-Service und ein Restaurant runden den Aufenthalt ab.",
        image: { src: `${IMG}/stellplaetze.webp`, alt: "Stellplätze mit Wohnwagen und Wohnmobilen am See-Areal Steindorf" },
      },
      {
        title: "Moderne, beheizte Sanitäranlagen",
        text: "Unsere modernen, geheizten Sanitäranlagen sind sauber, gepflegt und auch mit dem Rollstuhl barrierefrei zu befahren.",
        image: { src: `${IMG}/sanitaergebaeude.webp`, alt: "Modernes Campinggebäude mit Sanitäranlagen am See-Areal Steindorf" },
      },
      {
        title: "Privat-Sanitär & Service",
        text: "Auf Wunsch gibt es Privat-Sanitär (ab € 11,00 pro Tag) sowie Waschmaschine und Trockner (€ 5,00 pro Benutzung).",
        image: { src: `${IMG}/privat-sanitaer.webp`, alt: "Sauberes Privat-Bad im Sanitärgebäude des See-Areal Steindorf" },
      },
      {
        title: "Eigener Seezugang mit Stegen",
        text: "Privater See-Zugang mit angrenzenden Stegen und Bootssteg — vom Platz aus zum Schwimmen, Rudern, Wasserski fahren und Stand-up-Paddeln.",
        image: { src: `${IMG}/bootssteg.webp`, alt: "Ruderboot am Bootssteg vor historischem Bootshaus am Ossiacher See" },
      },
      {
        title: "Restaurant & Gastgarten am See",
        text: "Vor dem Seerestaurant liegt unser privates Strandbad mit gemütlichem Gastgarten — jeder Gast findet hier seinen schönen Platz für den Liegestuhl.",
        image: { src: `${IMG}/gastgarten.webp`, alt: "Gastgarten und Liegewiese vor dem Seerestaurant am Ossiacher See" },
      },
    ],
  },

  mobilheime: {
    heading: "Seevilla Apartments & Ferienwohnungen",
    intro:
      "Lieber feste Wände? Unsere Ferienwohnungen liegen direkt am Strandbad am Ossiacher Seeufer — vom Gartenzimmer bis zur großen Seevilla. Die Wohnungen können einzeln oder gemeinsam gemietet werden. Mindestaufenthalt 7 Nächte.",
    items: [
      {
        name: "Gartenzimmer",
        kind: "Ferienwohnung · 25 m² · 1–2 Personen",
        text: "Im Erdgeschoss der Seevilla, mit überdachter Seeblick-Terrasse und eigener kleiner Wiese mit Gartenmöbeln. Zwei Einzelbetten, Mini-Küche mit Kühlschrank und Kochherd, Dusche. Rollstuhlgängig, Hunde erlaubt.",
        image: { src: `${IMG}/fewo-gartenzimmer.webp`, alt: "Seevilla des See-Areal Steindorf mit Balkonen und blühendem Garten" },
        features: ["1–2 Personen", "ca. 25 m²", "Seeblick-Terrasse", "Hunde erlaubt"],
      },
      {
        name: "Bleistätterhaus",
        kind: "Ferienwohnung · 40 m² · 2–4 Personen",
        text: "Lichtdurchfluteter Wohnraum mit Schlafcouch-Möglichkeit, Küche mit Geschirrspüler, ein kleines Schlafzimmer und Badezimmer mit Dusche. Großer überdachter Südbalkon mit Blick auf das Naturschutzgebiet Bleistätter Moor. Hunde erlaubt.",
        image: { src: `${IMG}/fewo-bleistaetterhaus.webp`, alt: "Balkon der Ferienwohnung Bleistätterhaus mit Blick über die Wiesen zum Bleistätter Moor" },
        features: ["2–4 Personen", "ca. 40 m²", "Südbalkon", "Hunde erlaubt"],
      },
      {
        name: "Seevilla Gerlitzen",
        kind: "Ferienwohnung · 50 m² · 2–4 Personen",
        text: "Im 1. Stock, direkt am See mit Blick auf den Hausberg Gerlitzen. Großes Schlafzimmer, separates Wohnzimmer mit Schlafcouch-Möglichkeit, geräumiges Bad und Küche mit Backofen und Geschirrspüler. Zwei kleine Balkone in Süd- und Ostlage.",
        image: { src: `${IMG}/fewo-seevilla-gerlitzen.webp`, alt: "Holzbalkon der Seevilla Gerlitzen mit Blick auf den Ossiacher See" },
        features: ["2–4 Personen", "ca. 50 m²", "Seeblick", "2 Balkone"],
      },
      {
        name: "Seevilla Süd",
        kind: "Ferienwohnung · 70 m² · 4 Personen (5–6 auf Anfrage)",
        text: "Traumhafte Lage im 1. Stock mit Blick auf den Ossiacher See. Zwei Schlafzimmer, großzügiger Wohnbereich mit Einbauküche und geräumiges Badezimmer mit zwei Waschbecken. Überdachter Balkon mit Sonnenschutz, Sitzgelegenheiten und Liegen.",
        image: { src: `${IMG}/fewo-seevilla-sued.webp`, alt: "Überdachter Balkon der Seevilla Süd mit Liege und Blick auf den Ossiacher See" },
        features: ["4 Personen (5–6 auf Anfrage)", "ca. 70 m²", "2 Schlafzimmer", "Seeblick-Balkon"],
      },
    ],
  },

  kinder: {
    heading: "Für Familien & Kinder",
    intro:
      "Ein flacher, seichter Seezugang für die kleinen Badegäste und jede Menge Wasserspaß — am See-Areal dürfen Kinder Kinder sein. Beachvolleyball-Anlage und Kinderspielplatz finden Sie ganz in der Nähe.",
    features: [
      {
        title: "Seichter Seezugang",
        text: "Für unsere kleinen Badegäste gibt es einen flachen, seichten Seezugang — sicheres Planschen direkt am Strandbad.",
        image: { src: `${IMG}/kinder-seezugang.webp`, alt: "Zwei Kinder schwimmen im seichten Wasser des Ossiacher Sees vor der Kulisse von Steindorf" },
      },
      {
        title: "Badespaß im See",
        text: "Schwimmen, Toben und Planschen im klaren Ossiacher See — Sommertage, die den Kindern lange in Erinnerung bleiben.",
        image: { src: `${IMG}/kinder-badespass.webp`, alt: "Kind planscht fröhlich im Wasser des Ossiacher Sees" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Aktiv am Ossiacher See",
    intro:
      "Vom Stellplatz direkt ins Wasser: Schwimmen, Wasserski, Rudern und Stand-up-Paddeln am See. Ganz in der Nähe geht es zum Beachvolleyball, Tennis, Paragliding, Wandern und Mountainbiken.",
    items: [
      {
        title: "Schwimmen, Wasserski & mehr",
        text: "Vom Platz aus kann man schwimmen, Wasserski fahren und den Tag im und am Wasser verbringen — Wassersportangebote gibt es direkt am Strandbad.",
        image: { src: `${IMG}/wassersport-bananaboat.webp`, alt: "Banana-Boat-Fahrt auf dem Ossiacher See am Strandbad Steindorf" },
      },
      {
        title: "SUP, Kanu & Rudern",
        text: "Rudern und Stand-up-Paddeln direkt vom Seezugang. SUP-Boards können am Strandbad gemietet werden.",
        image: { src: `${IMG}/wassersport-kanu.webp`, alt: "Kanus auf dem grün schimmernden Wasser des Ossiacher Sees von oben" },
      },
      {
        title: "Paragliding & Gerlitzen Alpe",
        text: "Ganz in der Nähe lockt die Gerlitzen Alpe — Paragliding über dem See, Wandern und Mountainbiken in den Bergen rund um Steindorf.",
        image: { src: `${IMG}/paragliding.webp`, alt: "Paragleiter über dem Ossiacher See mit Blick auf Seen und Berge" },
      },
    ],
  },

  anreise: {
    heading: "So findest du uns",
    modes: [
      { title: "Mit dem Auto", text: "Seestraße 5a, 9552 Steindorf am Ossiacher See." },
      { title: "Lage am See", text: "An der Ostbucht des Ossiacher Sees (510 m), eingebettet zwischen Gerlitzen Alpe (1.911 m) und Ossiacher Tauern (1.000 m), direkt am Naturschutzgebiet Bleistätter Moor." },
      { title: "Rund um den See", text: "Wander- und Radwege führen direkt am Platz entlang rund um den See, Richtung Villach und Feldkirchen." },
    ],
  },

  galerie: {
    heading: "Ein See-Areal zum Wohlfühlen",
    headingEmphasis: "Wohlfühlen",
    intro:
      "Eigener Seezugang, Stege, Strandbad und Ferienwohnungen am Ufer — ein paar Eindrücke vom See-Areal Steindorf am Ossiacher See.",
    tag: "15. April – 15. Oktober",
    images: [
      { src: `${IMG}/galerie-luftaufnahme.webp`, alt: "Luftaufnahme des See-Areal Steindorf mit Strandbad, Liegewiese und Booten am Ossiacher See" },
      { src: `${IMG}/galerie-seevilla.webp`, alt: "Die Seevilla des See-Areal Steindorf in moderner See-Architektur mit Bergblick" },
      { src: `${IMG}/galerie-steg.webp`, alt: "Holzsteg am ruhigen Ufer des Ossiacher Sees mit Schilf und Bergen" },
      { src: `${IMG}/galerie-seebank.webp`, alt: "Bank am Ufer des Ossiacher Sees mit Blick auf Segelboot und Berge" },
    ],
  },

  booking: {
    heading: "Verfügbarkeit & Anfrage",
    intro:
      "Wähle Zeitraum, Unterkunft und Personen — Familie Verhoef meldet sich mit deiner persönlichen Verfügbarkeit.",
    // PLATZHALTER: Auf der Website stehen Camping-/Ferienwohnungspreise nur als PDF-Preisliste
    // (im Scrape nicht erfasst). Diese Übernachtungspreise sind realistische Platzhalter und
    // mit dem Gastgeber zu bestätigen. Reale, auf der Website sichtbare Preise = nur Strandbad
    // (Tageseintritt ab € 7) + Zusatzleistungen (Privat-Sanitär ab € 11/Tag, Waschmaschine € 5).
    pricesArePlaceholder: true,
    priceNote:
      "Richtpreise — die Camping- und Ferienwohnungs-Preise werden auf der Original-Website nur als PDF-Preisliste geführt; diese Werte sind realistische Platzhalter und sind mit dem Gastgeber zu bestätigen.",
    highlight: {
      title: "Strandbad für Hausgäste gratis",
      text: "Camping- und Ferienwohnungsgäste haben freien Eintritt in unser privates Strandbad. In der Hochsaison (Juli–August) gilt am Camping ein Mindestaufenthalt von 5 Nächten.",
    },
    categories: [
      // Kategorie-Namen real (von /stellplatz-reservieren); Preise = Platzhalter (s. priceNote).
      { id: "stellplatz", label: "Stellplatz Standard", perNight: 39, perExtraGuest: 8 },
      { id: "stellplatz-xxl", label: "Stellplatz XXL", perNight: 49, perExtraGuest: 8 },
      { id: "gartenzimmer", label: "Gartenzimmer (1–2 Pers.)", perNight: 85 },
      { id: "seevilla", label: "Seevilla Ferienwohnung", perNight: 120 },
    ],
  },

  kontakt: {
    tel: "+43 664 7375 6698",
    telHref: "tel:+4366473756698",
    mail: "info@seearealsteindorf.at",
    facebook: "https://www.facebook.com/seearealsteindorf",
    adresse: "Seestraße 5a · 9552 Steindorf am Ossiacher See · Kärnten",
    coords: { lat: 46.6956, lng: 14.0095 },
  },

  languages: ["DE"],

  nav: [
    {
      label: "Ferienwohnungen",
      href: "#mobilheime",
      children: [
        { label: "Gartenzimmer", href: "#mobilheime" },
        { label: "Bleistätterhaus", href: "#mobilheime" },
        { label: "Seevilla Gerlitzen & Süd", href: "#mobilheime" },
      ],
    },
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Stellplätze am See", href: "#camping" },
        { label: "Sanitäranlagen", href: "#camping" },
        { label: "Seezugang & Stege", href: "#camping" },
      ],
    },
    {
      label: "Familie",
      href: "#kinder",
      children: [
        { label: "Seichter Seezugang", href: "#kinder" },
        { label: "Badespaß im See", href: "#kinder" },
      ],
    },
    {
      label: "Aktiv",
      href: "#aktivitaeten",
      children: [
        { label: "Wassersport", href: "#aktivitaeten" },
        { label: "SUP, Kanu & Rudern", href: "#aktivitaeten" },
        { label: "Gerlitzen & Berge", href: "#aktivitaeten" },
      ],
    },
    {
      label: "Preise & Lage",
      href: "#booking",
      children: [
        { label: "Anfrage", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
        { label: "Strandbad", href: "#galerie" },
      ],
    },
  ],
};

export default seearealsteindorf;
