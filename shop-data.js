// re:do:mi — geteiltes Daten-Modul für Listen- und Detailseiten.
// Wird per dynamischem import() aus den DC-Logikklassen geladen.

const U = (id, w) => `assets/fotos/${id}.jpg`;

export const DESIGNERS = [
  {
    id: "lena-brunner", name: "Lena Brunner", location: "Basel", since: "2019", cat: "Möbel",
    materials: ["Holz", "Metall"], photo: "assets/designer-lena.png",
    cover: U("1503602642458-232111445657", 1200),
    bio: "Lena arbeitet mit Altholz aus Abbruchhäusern der Region Basel. Aus Balken, Dielen und Türblättern entstehen Möbel, die ihre Herkunft sichtbar tragen — gebürstet, geölt, nie übermalt.",
  },
  {
    id: "marco-keller", name: "Marco Keller", location: "Zürich", since: "2021", cat: "Schmuck",
    materials: ["Metall", "Glas"], photo: U("1500648767791-00dcc994a43e", 600),
    cover: U("1513506003901-1e6a229e2d15", 1200),
    bio: "Marco verbindet ausgediente Kupferrohre mit gerettetem Glas zu Leuchten und Objekten. Sein Atelier im Kreis 4 ist halb Werkstatt, halb Materiallager.",
  },
  {
    id: "sofia-meier", name: "Sofia Meier", location: "Bern", since: "2018", cat: "Mode",
    materials: ["Textil"], photo: "assets/designer-sofia.webp",
    cover: U("1483985988355-763728e1935b", 1200),
    bio: "Sofia näht aus Textilresten und alter Berufskleidung neue Stücke. Jedes Teil ist ein Unikat — Patchwork mit System, robust und für den Alltag gemacht.",
  },
  {
    id: "jonas-frei", name: "Jonas Frei", location: "Luzern", since: "2020", cat: "Möbel",
    materials: ["Metall"], photo: U("1507003211169-0a1dd7228f2d", 600),
    cover: U("1524634126442-357e0eac3c14", 1200),
    bio: "Jonas rettet Metallteile aus stillgelegten Werkstätten und Maschinen. Aus Zahnrädern, Rohren und Blech baut er Leuchten und Sitzmöbel mit industriellem Charakter.",
  },
  {
    id: "aylin-demir", name: "Aylin Demir", location: "Winterthur", since: "2022", cat: "Sonstiges",
    materials: ["Glas", "Keramik"], photo: "assets/designer-aylin.png",
    cover: U("1578500494198-246f612d3b3d", 1200),
    bio: "Aylin schmilzt Altglas zu Karaffen, Vasen und Gefässen. Kleine Einschlüsse und Farbschlieren sind für sie kein Makel, sondern die Signatur des Materials. Jedes Gefäss entwirft sie zuerst mit dem Stift, bevor das alte Glas im Ofen seine neue Form findet.",
  },
  {
    id: "pia-luethi", name: "Pia Lüthi", location: "Genf", since: "2017", cat: "Mode",
    materials: ["Textil"], photo: U("1502685104226-ee32379fefbe", 600),
    cover: U("1597633425046-08f5110420b5", 1200),
    bio: "Pia arbeitet mit Segeltuch, Lederresten und ausrangierten Planen. Ihre Taschen und Accessoires sind gemacht, um Jahrzehnte zu halten.",
  },
  {
    id: "noah-steiner", name: "Noah Steiner", location: "Zürich", since: "2021", cat: "Kunst",
    materials: ["Holz", "Metall"], photo: U("1506794778202-cad84cf45f1d", 600),
    cover: U("1513519245088-0e12902e35ca", 1200),
    bio: "Noah bewegt sich zwischen Möbel und Kunst. Aus geschichtetem Altholz entstehen Wandobjekte und Einzelstücke, die mehr Skulptur als Funktion sind.",
  },
  {
    id: "romy-caduff", name: "Romy Caduff", location: "Chur", since: "2023", cat: "Sonstiges",
    materials: ["Keramik", "Textil"], photo: U("1487412720507-e7ab37603c6f", 600),
    cover: U("1584100936595-c0654b55a2e2", 1200),
    bio: "Romy verbindet Bündner Schafwolle mit Keramik zu warmen, taktilen Objekten fürs Zuhause. Ihre Stücke entstehen langsam, in kleinen Serien.",
  },
  {
    id: "elias-roth", name: "Elias Roth", location: "St. Gallen", since: "2022", cat: "Möbel",
    materials: ["Holz"], photo: "assets/designer-elias.jpg",
    cover: "assets/elias-cover.png",
    bio: "Elias sammelt zerbrochene Skateboards aus Skateparks und Shops der ganzen Schweiz. Aus den verleimten Ahornschichten der alten Decks baut er Hocker, Tische und Wandobjekte — jedes Stück ein Unikat, das die Farben und Schrammen seines früheren Lebens auf vier Rollen weiterträgt.",
  },
];

const A = "assets/";
export const PRODUCTS = [
  { id: "sneaker-green-tiger", title: "Sneaker High – Green Tiger", designerId: "sofia-meier", cat: "Mode", mat: "Textil", city: "Zürich", price: 99, img: A + "product-sneaker.jpg",
    story: "Aus Stoffresten und alten Sportschuhen genäht — kein Paar gleicht dem anderen. Der grüne Tigerprint stammt von einem Vorhang aus den 70ern." },
  { id: "garden-bench-restored", title: "Garden Bench Restored", designerId: "jonas-frei", cat: "Möbel", mat: "Metall", city: "Luzern", price: 420, img: U("1567538096630-e0c55bd6374c"),
    story: "Ein Gartenbank-Gestell aus Gusseisen, entrostet und neu beschichtet, mit Sitzlatten aus geretteten Dielen. Für draussen wie drinnen gemacht." },
  { id: "travelling-companions", title: "Travelling Companions", designerId: "noah-steiner", cat: "Kunst", mat: "Holz", city: "Basel", price: 55, img: "assets/travelling-companions.png",
    story: "Ein Tierobjekt aus gefundenem Blech, Holzresten und alten Rollen — Fundstücke, neu zusammengesetzt zu einem Begleiter auf Rädern." },
  { id: "casual-neu-gedacht", title: "Patchwork-Schal", designerId: "sofia-meier", cat: "Mode", mat: "Textil", city: "Zürich", price: 140, img: "assets/schal-1.png", gallery: ["assets/schal-1.png", "assets/schal-2.png", "assets/schal-3.png"],
    story: "Ein wattierter Patchwork-Schal aus alten Quilts und bedruckten Stoffresten. Indigo-Blautöne treffen auf gemusterte Ornamentik — von Hand zusammengesetzt und mit kontrastierender Paspel eingefasst. Jedes Stück ist ein Unikat." },
  { id: "sula-massivholzbett", title: "SULA – Massivholzbett", designerId: "lena-brunner", cat: "Möbel", mat: "Holz", city: "Bern", price: 830, img: U("1505693416388-ac5ce068fe85"),
    story: "Aus Eichenbalken eines abgerissenen Bauernhauses. Die Zapfenlöcher der alten Konstruktion bleiben sichtbar — Geschichte zum Schlafen." },
  { id: "lesekissen-coral", title: "Lesekissen CORAL", designerId: "romy-caduff", cat: "Sonstiges", mat: "Textil", city: "Genf", price: 20, img: U("1584100936595-c0654b55a2e2"),
    story: "Ein keilförmiges Lesekissen, bezogen mit handgefärbter Bündner Schafwolle. Stützt Rücken und Nacken beim Lesen." },
  { id: "vase-aus-altglas", title: "Vase aus Altglas", designerId: "aylin-demir", cat: "Sonstiges", mat: "Glas", city: "Bern", price: 68, img: U("1578500494198-246f612d3b3d"),
    story: "Eingeschmolzene Glasflaschen, neu geblasen. Die grünliche Färbung kommt von altem Weinflaschenglas — jede Vase ein Einzelstück." },
  { id: "ohrringe-kupferkreis", title: "Ohrringe «Kupferkreis»", designerId: "marco-keller", cat: "Schmuck", mat: "Metall", city: "Zürich", price: 85, img: U("1611652022419-a9419f74343d"),
    story: "Aus Kupferrohr-Abschnitten gefertigt, von Hand poliert. Leicht zu tragen, mit warmem Kupferton, der mit der Zeit Patina ansetzt." },
  { id: "hocker-stapelgut", title: "Hocker «Stapelgut»", designerId: "lena-brunner", cat: "Möbel", mat: "Holz", city: "Basel", price: 310, img: U("1503602642458-232111445657"),
    story: "Stapelbarer Hocker aus Altholz-Lamellen. Robust, leicht, und bei Nichtgebrauch platzsparend übereinander gestellt." },
  { id: "wandobjekt-schichten", title: "Wandobjekt «Schichten»", designerId: "noah-steiner", cat: "Kunst", mat: "Holz", city: "Bern", price: 240, img: U("1513519245088-0e12902e35ca"),
    story: "Geschichtete Holzfragmente in verschiedenen Tönen, zu einem Relief gefügt. Ein Bild, das man auch ertasten kann." },
  { id: "tasche-segeltuch", title: "Tasche aus Segeltuch", designerId: "pia-luethi", cat: "Mode", mat: "Textil", city: "Genf", price: 130, img: U("1597633425046-08f5110420b5"),
    story: "Aus ausgedientem Bootssegel genäht, mit Lederriemen aus Restposten. Wasserabweisend und praktisch unverwüstlich." },
  { id: "karaffe-klar", title: "Karaffe «Klar»", designerId: "aylin-demir", cat: "Sonstiges", mat: "Glas", city: "Luzern", price: 74, img: U("1556910103-1c02745aae4d"),
    story: "Eine schlanke Karaffe aus eingeschmolzenem Altglas. Klar und schlicht — für Wasser, Wein oder als Vase." },
  { id: "stehleuchte-rohr", title: "Stehleuchte «Rohr»", designerId: "jonas-frei", cat: "Möbel", mat: "Metall", city: "Zürich", price: 290, img: U("1507473885765-e6ed057f782c"),
    story: "Gebaut aus Stahlrohren einer alten Heizungsanlage. Höhenverstellbar, mit warmweissem LED-Licht und Schalter am Fuss." },
  { id: "tischlampe-glasform", title: "Tischlampe «Glasform»", designerId: "marco-keller", cat: "Möbel", mat: "Glas", city: "Bern", price: 165, img: U("1513506003901-1e6a229e2d15"),
    story: "Ein Glaskörper aus geretteten Flaschen, kombiniert mit Kupferfassung. Streut das Licht weich in den Raum." },
  { id: "pendelleuchte-falt", title: "Pendelleuchte «Falt»", designerId: "jonas-frei", cat: "Möbel", mat: "Metall", city: "Luzern", price: 220, img: U("1524634126442-357e0eac3c14"),
    story: "Aus gefaltetem Restblech, pulverbeschichtet. Wirft ein gerichtetes Licht — ideal über Esstisch oder Theke." },
  { id: "hocker-deckstack", title: "Hocker «Deckstack»", designerId: "elias-roth", cat: "Möbel", mat: "Holz", city: "St. Gallen", price: 240, img: "assets/hocker-1.png", gallery: ["assets/hocker-1.png", "assets/hocker-3.png", "assets/hocker-2.png"],
    story: "Sitzfläche aus quer verleimten, kaputten Skateboard-Decks — die bunten Ahornschichten und Grafikreste werden zum Muster. Stabil verleimt, von Hand geschliffen und geölt, kein Hocker gleicht dem anderen." },
  { id: "vase-blanche", title: "Vase Blanche", designerId: "romy-caduff", cat: "Sonstiges", mat: "Textil", city: "Bern", price: 95, img: "assets/vase-blanche.png",
    story: "Ein gepolsterter Sitzwürfel, von Hand aus alten Outdoor-Seilen und Textilresten umflochten. Farbfelder in Grün, Blau und Petrol — drinnen wie draussen einsetzbar." },
  { id: "werkstatt-serie-iv", title: "Werkstatt Serie IV", designerId: "sofia-meier", cat: "Sonstiges", mat: "Textil", city: "Bern", price: 320, img: "assets/werkstatt-serie-iv.png",
    story: "Eine wattierte Nackenrolle aus gebleichtem Werkstatt-Leinen, durchzogen von feinen roten Steppnähten. Schlicht, taktil, in kleiner Serie genäht." },
  { id: "casual-jacke", title: "Casual, neu gedacht", designerId: "sofia-meier", cat: "Mode", mat: "Textil", city: "Zürich", price: 140, img: "assets/casual-jacke.png",
    story: "Eine kurze Jacke aus zusammengesetzten Leinen- und Wildlederresten in warmen Sandtönen. Locker geschnitten, mit Kontrast-Manschetten und sichtbaren Nähten." },
  { id: "amulett-no-3", title: "Amulett No. 3", designerId: "pia-luethi", cat: "Mode", mat: "Textil", city: "Genf", price: 85, img: "assets/amulett-no-3.png",
    story: "Eine Reisetasche aus einem bedruckten Zementsack, gefüttert und mit kräftigen Gurten versehen. Das Orange-Motiv des Originalsacks bleibt erhalten." },
];

// Galerie: Hauptbild + zwei stimmungsvolle Detailaufnahmen je nach Kategorie.
const ATMO = {
  "Möbel": ["1567538096630-e0c55bd6374c", "1503602642458-232111445657"],
  "Mode": ["1483985988355-763728e1935b", "1597633425046-08f5110420b5"],
  "Kunst": ["1513519245088-0e12902e35ca", "1493106641515-6b5631de4bb9"],
  "Schmuck": ["1611652022419-a9419f74343d", "1515562141207-7a88fb7ce338"],
  "Sonstiges": ["1578500494198-246f612d3b3d", "1556910103-1c02745aae4d"],
};

export function getProduct(id) {
  const p = PRODUCTS.find((x) => x.id === id);
  if (!p) return null;
  const atmo = (ATMO[p.cat] || ATMO["Sonstiges"]).map((a) => U(a));
  const designer = DESIGNERS.find((d) => d.id === p.designerId) || null;
  return { ...p, gallery: p.gallery || [p.img, ...atmo], designer };
}

export function getDesigner(id) {
  const d = DESIGNERS.find((x) => x.id === id);
  if (!d) return null;
  const products = PRODUCTS.filter((p) => p.designerId === d.id);
  return { ...d, products };
}

export function designerName(id) {
  const d = DESIGNERS.find((x) => x.id === id);
  return d ? d.name : "";
}

// ── Anschlagbrett: Ausschreibungen ──────────────────────────────────
// Datenschutz: nur abgekürzte Namen + Region. Kontaktdaten werden erst
// nach Annahme über Re-Do-Mi geteilt.
export const BRIEFS = [
  {
    id: "erbsofa-neu-beziehen", title: "Alter Perserteppich", tag: "Textilien", ort: "Bern", date: "19.06.2026",
    poster: "Dominique H.", posterRole: "Verifizierte Kundin", budget: "CHF 800 – 1'400", timeline: "4 – 6 Wochen", responses: 5,
    image: U("1493106641515-6b5631de4bb9", 1100),
    short: "Handgeknüpfter Perserteppich aus dem Nachlass meiner Grossmutter. Grundgewebe top, an zwei Ecken durchgelaufen — reparieren statt entsorgen.",
    long: "Der Teppich lag 40 Jahre im Wohnzimmer meiner Grossmutter und hat einen festen Platz in meiner Erinnerung. Das Grundgewebe und das Muster sind absolut intakt, aber an zwei Ecken und entlang einer Laufspur ist der Flor durchgelaufen und die Fransen sind ausgerissen.\n\nIch wünsche mir eine fachgerechte Reparatur — nachgeknüpfte Stellen, neu gesicherte Kanten und neue Fransen, gern mit gefärbter Restwolle, die dem Stück seinen Charakter lässt. Wichtig ist mir saubere Handarbeit und ein Ergebnis, das wieder Jahrzehnte hält.",
    needs: ["Knüpf- & Webreparatur", "Kanten & Fransen sichern", "Abholung & Lieferung in Bern"],
  },
  {
    id: "vintage-lampe-umbauen", title: "Vintage-Lampe umbauen", tag: "Leuchten", ort: "Zürich", date: "17.06.2026",
    poster: "Marc B.", posterRole: "Verifizierter Kunde", budget: "CHF 150 – 300", timeline: "2 – 3 Wochen", responses: 3,
    image: U("1507473885765-e6ed057f782c", 1100),
    short: "Messing-Stehlampe vom Flohmarkt. Verkabelung erneuern und auf LED umbauen.",
    long: "Auf dem Flohmarkt habe ich eine wunderschöne Messing-Stehlampe gefunden, die aber elektrisch nicht mehr sicher ist. Die Verkabelung muss komplett erneuert und auf eine warme LED-Lösung umgebaut werden.\n\nDas Messing darf gern seine Patina behalten — es soll nichts auf Hochglanz poliert werden. Mir geht es um Sicherheit und Funktion bei erhaltenem Charakter.",
    needs: ["Elektrik fachgerecht erneuern", "Umbau auf warmweisse LED", "Patina erhalten"],
  },
  {
    id: "kommode-aufarbeiten", title: "Kommode aufarbeiten", tag: "Möbel", ort: "Luzern", date: "15.06.2026",
    poster: "Sandra K.", posterRole: "Verifizierte Kundin", budget: "CHF 400 – 700", timeline: "3 – 5 Wochen", responses: 7,
    image: U("1567538096630-e0c55bd6374c", 1100),
    short: "Eichenkommode aus dem Estrich. Furnier löst sich stellenweise, soll abgeschliffen und geölt werden.",
    long: "Die Kommode lag jahrelang auf dem Estrich und hat eine wunderbare, massive Eichenstruktur. An zwei Stellen löst sich das Furnier, und die Oberfläche ist matt und fleckig.\n\nIch suche jemanden, der das Furnier fachgerecht wieder verleimt, die Front abschleift und mit Naturöl behandelt — so dass die Maserung wieder zur Geltung kommt.",
    needs: ["Furnier verleimen", "Abschleifen & ölen", "Naturöl-Finish"],
  },
  {
    id: "spiegelrahmen-vergolden", title: "Spiegelrahmen vergolden", tag: "Objekte", ort: "Basel", date: "12.06.2026",
    poster: "Yves M.", posterRole: "Verifizierter Kunde", budget: "CHF 250 – 500", timeline: "3 – 4 Wochen", responses: 2,
    image: U("1513519245088-0e12902e35ca", 1100),
    short: "Antiker Holzrahmen, Blattgold teils abgeblättert. Suche jemanden mit Vergoldungs-Erfahrung.",
    long: "Ein antiker Spiegelrahmen aus Familienbesitz, bei dem das Blattgold an mehreren Stellen abgeblättert ist. Das Holz darunter ist intakt.\n\nIch suche jemanden mit echter Vergoldungs-Erfahrung, der die fehlenden Stellen fachgerecht ergänzt, ohne dass die gealterte Patina des Rahmens verloren geht.",
    needs: ["Vergoldungs-Erfahrung", "Patina respektieren", "Teilrestauration"],
  },
  {
    id: "lederstuhl-neu-polstern", title: "Lederstuhl neu polstern", tag: "Möbel", ort: "Winterthur", date: "09.06.2026",
    poster: "Petra L.", posterRole: "Verifizierte Kundin", budget: "CHF 300 – 600", timeline: "4 Wochen", responses: 4,
    image: U("1503602642458-232111445657", 1100),
    short: "Bürostuhl aus den 80ern, Leder rissig. Neu polstern und beziehen — gern in einem warmen Cognac-Ton.",
    long: "Ein klassischer Bürostuhl aus den 80ern mit tollem Gestell, aber das Leder ist spröde und rissig. Ich möchte ihn neu polstern und beziehen lassen.\n\nFarblich schwebt mir ein warmer Cognac-Ton vor — gern aus geretteten Lederresten. Hauptsache, es passt zum Charakter des Stücks.",
    needs: ["Neu polstern", "Leder-Upcycling, Cognac-Ton", "Gestell erhalten"],
  },
  {
    id: "eames-stuhl-restaurieren", title: "Hochzeitskleid zu Cocktailkleid", tag: "Textilien", ort: "Genf", date: "02.06.2026",
    poster: "Claudia R.", posterRole: "Verifizierte Kundin", budget: "CHF 500 – 900", timeline: "5 – 6 Wochen", responses: 6,
    image: U("1505693416388-ac5ce068fe85", 1100),
    short: "Stoff und Spitze wunderschön, Schnitt zu festlich — suche jemanden, der mein Hochzeitskleid in ein tragbares Cocktailkleid umarbeitet.",
    long: "Mein Hochzeitskleid hängt seit Jahren im Schrank, der Stoff und die Spitze sind in sehr gutem Zustand. Als bodenlanges Brautkleid werde ich es aber nie wieder tragen.\n\nIch suche jemanden, der es fachgerecht zu einem tragbaren Cocktailkleid umarbeitet — gekürzt, neu geschnitten und mit Sorgfalt für die originale Spitze. Mir ist wichtig, dass der Charakter des Stücks erhalten bleibt und ich es im Alltag tragen kann.",
    needs: ["Schnitt & Näharbeit", "Original-Spitze erhalten", "Anprobe & Anpassung"],
  },
];

// ── Nutzer-erstellte Ausschreibungen (über das Formular) ────────────
// Werden lokal im Browser gespeichert, damit die Detailseite genau das
// anzeigt, was im Formular ausgefüllt wurde — und nicht den Standard-Brief.
const USER_BRIEFS_KEY = "rdm_user_briefs";

export function getUserBriefs() {
  try {
    const raw = localStorage.getItem(USER_BRIEFS_KEY);
    if (!raw) return [];
    const arr = JSON.parse(raw);
    return Array.isArray(arr) ? arr : [];
  } catch (e) { return []; }
}

export function saveUserBrief(brief) {
  try {
    const list = getUserBriefs();
    list.unshift(brief);
    localStorage.setItem(USER_BRIEFS_KEY, JSON.stringify(list));
  } catch (e) {}
  return brief;
}

// Nutzer-Briefs zuerst (neueste oben), dann die Beispiel-Inserate.
export function allBriefs() {
  return [...getUserBriefs(), ...BRIEFS];
}

export function getBrief(id) {
  return getUserBriefs().find((b) => b.id === id)
    || BRIEFS.find((b) => b.id === id)
    || null;
}

// "Was gesucht wird" — sinnvolle Standard-Anforderungen je nach Rubrik.
// Wird genutzt, wenn eine Ausschreibung keine eigenen Punkte mitbringt.
const NEEDS_BY_CATEGORY = {
  "Möbel": ["Schreiner- oder Polsterarbeit", "Abschleifen & Naturöl-Finish", "Abholung & Lieferung in der Region"],
  "Leuchten": ["Elektrik fachgerecht erneuern", "Umbau auf warmweisse LED", "Patina & Charakter erhalten"],
  "Textilien": ["Polster- & Näharbeit", "Bezug aus Upcycling-Textil", "Saubere, langlebige Verarbeitung"],
  "Objekte": ["Restauration & Reparatur", "Materialgerechte Aufarbeitung", "Patina respektieren"],
  "Schmuck": ["Feine Metall- oder Fassarbeit", "Upcycling-Material verwenden", "Sorgfältige Politur & Finish"],
  "Kunst": ["Kreative, eigenständige Umsetzung", "Materialgerechte Verarbeitung", "Einzelstück nach Absprache"],
};

export function needsForCategory(cat) {
  return NEEDS_BY_CATEGORY[cat] || ["Fachgerechte Umsetzung", "Upcycling-Material bevorzugt", "Abstimmung mit Auftraggeber:in"];
}
