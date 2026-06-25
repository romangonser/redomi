# Re-Do-Mi

**Der Markt für Upcycling-Kreationen.** Re-Do-Mi ist eine Schweizer Plattform, die
als *Vermittler* zwischen Gestalter:innen und der Community auftritt, die ihre
handgemachten, kreislauffähigen Produkte kauft und in Auftrag gibt. Sprache: Deutsch
(Schweizer Ton), Preise in CHF, Sitz in Zürich.

Dieses Repository enthält den **interaktiven Prototyp** der Plattform sowie das
zugehörige **Design-System**.

## Struktur

```
.
├── re-do-mi-prototype.dc.html   # Einstiegspunkt (lädt Design-System + Screens)
├── home.dc.html                 # Einzelseiten des Prototyps
├── produkte.dc.html             #   Produktliste / Shop
├── produkt.dc.html              #   Produktdetail
├── designer.dc.html             #   Designer:innen-Feed
├── designer-profil.dc.html      #   Designer:innen-Profil
├── anschlagbrett.dc.html        #   Community-Pinboard
├── ausschreibung.dc.html        #   Ausschreibungs-Detail
├── ueber-uns.dc.html            #   Über uns + AGB
├── dashboard.dc.html            #   Eingeloggter Bereich
├── header.dc.html               #   Gemeinsamer Header
│
├── screens/                     # React-Screens des Prototyps (.js/.jsx)
├── shop-data.js, support.js,    # Gemeinsame Daten- und Hilfsmodule
│   image-slot.js
│
├── assets/                      # Bilder & Medien des Prototyps
│
└── _ds/                         # Generierte Design-Systeme
    ├── re-do-mi-design-system-636513…/   # Brand-/Komponenten-System (Gelb)
    └── re-do-mi-design-system-e4680b…/   # Marketplace-Komponenten + UI-Kit
```

## Lokal ansehen

Die Seiten referenzieren das Design-System über relative Pfade, daher über einen
lokalen Webserver öffnen (nicht direkt per `file://`):

```bash
python3 -m http.server 8000
# dann http://localhost:8000/re-do-mi-prototype.dc.html
```

## Design-System

Das Design-System liegt unter [`_ds/`](_ds/). Die ausführliche Dokumentation (Tokens,
Komponenten, Brand-Voice, Iconographie) steht im
[Design-System-Readme](_ds/re-do-mi-design-system-e4680b52-dbb9-4e7a-84da-ba1b58bcba54/readme.md).

Kern: eine einzige **Brand-Gelb** `#f0c93c` auf Ink-Schwarz und salbeigetönten Neutralen,
schattenlos mit 1px-Hairlines, Typo aus Josefin Sans / Lato / Playfair Display.
