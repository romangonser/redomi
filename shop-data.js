// re:do:mi — geteiltes Daten-Modul für Listen- und Detailseiten.
// Wird per dynamischem import() aus den DC-Logikklassen geladen.

const U = (id, w) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w || 900}&q=72`;

export const DESIGNERS = [
  {
    id: "lena-brunner", name: "Lena Brunner", location: "Basel", since: "2019",
    materials: ["Eiche", "Stahl", "Altholz"], photo: U("1494790108377-be9c29b29330", 600),
    cover: U("1503602642458-232111445657", 1200),
    bio: "Lena arbeitet mit Altholz aus Abbruchhäusern der Region Basel. Aus Balken, Dielen und Türblättern entstehen Möbel, die ihre Herkunft sichtbar tragen — gebürstet, geölt, nie übermalt.",
  },
  {
    id: "marco-keller", name: "Marco Keller", location: "Zürich", since: "2021",
    materials: ["Kupfer", "Glas"], photo: U("1500648767791-00dcc994a43e", 600),
    cover: U("1513506003901-1e6a229e2d15", 1200),
    bio: "Marco verbindet ausgediente Kupferrohre mit gerettetem Glas zu Leuchten und Objekten. Sein Atelier im Kreis 4 ist halb Werkstatt, halb Materiallager.",
  },
  {
    id: "sofia-meier", name: "Sofia Meier", location: "Bern", since: "2018",
    materials: ["Textil", "Wolle"], photo: U("1438761681033-6461ffad8d80", 600),
    cover: U("1483985988355-763728e1935b", 1200),
    bio: "Sofia näht aus Textilresten und alter Berufskleidung neue Stücke. Jedes Teil ist ein Unikat — Patchwork mit System, robust und für den Alltag gemacht.",
  },
  {
    id: "jonas-frei", name: "Jonas Frei", location: "Luzern", since: "2020",
    materials: ["Metall", "Zahnräder"], photo: U("1507003211169-0a1dd7228f2d", 600),
    cover: U("1524634126442-357e0eac3c14", 1200),
    bio: "Jonas rettet Metallteile aus stillgelegten Werkstätten und Maschinen. Aus Zahnrädern, Rohren und Blech baut er Leuchten und Sitzmöbel mit industriellem Charakter.",
  },
  {
    id: "aylin-demir", name: "Aylin Demir", location: "Winterthur", since: "2022",
    materials: ["Glas", "Keramik"], photo: U("1534528741775-53994a69daeb", 600),
    cover: U("1578500494198-246f612d3b3d", 1200),
    bio: "Aylin schmilzt Altglas zu Karaffen, Vasen und Gefässen. Kleine Einschlüsse und Farbschlieren sind für sie kein Makel, sondern die Signatur des Materials.",
  },
  {
    id: "pia-luethi", name: "Pia Lüthi", location: "Genf", since: "2017",
    materials: ["Textil", "Leder"], photo: U("1502685104226-ee32379fefbe", 600),
    cover: U("1597633425046-08f5110420b5", 1200),
    bio: "Pia arbeitet mit Segeltuch, Lederresten und ausrangierten Planen. Ihre Taschen und Accessoires sind gemacht, um Jahrzehnte zu halten.",
  },
  {
    id: "noah-steiner", name: "Noah Steiner", location: "Zürich", since: "2021",
    materials: ["Altholz", "Metall"], photo: U("1506794778202-cad84cf45f1d", 600),
    cover: U("1513519245088-0e12902e35ca", 1200),
    bio: "Noah bewegt sich zwischen Möbel und Kunst. Aus geschichtetem Altholz entstehen Wandobjekte und Einzelstücke, die mehr Skulptur als Funktion sind.",
  },
  {
    id: "romy-caduff", name: "Romy Caduff", location: "Chur", since: "2023",
    materials: ["Keramik", "Wolle"], photo: U("1487412720507-e7ab37603c6f", 600),
    cover: U("1584100936595-c0654b55a2e2", 1200),
    bio: "Romy verbindet Bündner Schafwolle mit Keramik zu warmen, taktilen Objekten fürs Zuhause. Ihre Stücke entstehen langsam, in kleinen Serien.",
  },
];

const A = "assets/";
export const PRODUCTS = [
  { id: "sneaker-green-tiger", title: "Sneaker High – Green Tiger", designerId: "sofia-meier", cat: "Mode", mat: "Textil", city: "Zürich", price: 99, img: A + "product-sneaker.jpg",
    story: "Aus Stoffresten und alten Sportschuhen genäht — kein Paar gleicht dem anderen. Der grüne Tigerprint stammt von einem Vorhang aus den 70ern." },
  { id: "garden-bench-restored", title: "Garden Bench Restored", designerId: "jonas-frei", cat: "Möbel", mat: "Metall", city: "Luzern", price: 420, img: U("1567538096630-e0c55bd6374c"),
    story: "Ein Gartenbank-Gestell aus Gusseisen, entrostet und neu beschichtet, mit Sitzlatten aus geretteten Dielen. Für draussen wie drinnen gemacht." },
  { id: "travelling-companions", title: "Travelling Companions", designerId: "noah-steiner", cat: "Kunst", mat: "Holz", city: "Basel", price: 55, img: U("1493106641515-6b5631de4bb9"),
    story: "Kleine Holzfiguren aus Treibholz und Möbelresten — jede mit eigenem Charakter. Eine Serie über das Unterwegssein." },
  { id: "casual-neu-gedacht", title: "Casual, neu gedacht", designerId: "sofia-meier", cat: "Mode", mat: "Textil", city: "Zürich", price: 140, img: U("1483985988355-763728e1935b"),
    story: "Ein Oversize-Hemd aus zusammengesetzten Leinenresten. Locker geschnitten, mit sichtbaren Nähten als Gestaltungselement." },
  { id: "sula-massivholzbett", title: "SULA – Massivholzbett", designerId: "lena-brunner", cat: "Möbel", mat: "Holz", city: "Bern", price: 830, img: U("1505693416388-ac5ce068fe85"),
    story: "Aus Eichenbalken eines abgerissenen Bauernhauses. Die Zapfenlöcher der alten Konstruktion bleiben sichtbar — Geschichte zum Schlafen." },
  { id: "lesekissen-coral", title: "Lesekissen CORAL", designerId: "romy-caduff", cat: "Objekte", mat: "Textil", city: "Genf", price: 20, img: U("1584100936595-c0654b55a2e2"),
    story: "Ein keilförmiges Lesekissen, bezogen mit handgefärbter Bündner Schafwolle. Stützt Rücken und Nacken beim Lesen." },
  { id: "vase-aus-altglas", title: "Vase aus Altglas", designerId: "aylin-demir", cat: "Objekte", mat: "Glas", city: "Bern", price: 68, img: U("1578500494198-246f612d3b3d"),
    story: "Eingeschmolzene Glasflaschen, neu geblasen. Die grünliche Färbung kommt von altem Weinflaschenglas — jede Vase ein Einzelstück." },
  { id: "ohrringe-kupferkreis", title: "Ohrringe «Kupferkreis»", designerId: "marco-keller", cat: "Schmuck", mat: "Metall", city: "Zürich", price: 85, img: U("1611652022419-a9419f74343d"),
    story: "Aus Kupferrohr-Abschnitten gefertigt, von Hand poliert. Leicht zu tragen, mit warmem Kupferton, der mit der Zeit Patina ansetzt." },
  { id: "hocker-stapelgut", title: "Hocker «Stapelgut»", designerId: "lena-brunner", cat: "Möbel", mat: "Holz", city: "Basel", price: 310, img: U("1503602642458-232111445657"),
    story: "Stapelbarer Hocker aus Altholz-Lamellen. Robust, leicht, und bei Nichtgebrauch platzsparend übereinander gestellt." },
  { id: "wandobjekt-schichten", title: "Wandobjekt «Schichten»", designerId: "noah-steiner", cat: "Kunst", mat: "Holz", city: "Bern", price: 240, img: U("1513519245088-0e12902e35ca"),
    story: "Geschichtete Holzfragmente in verschiedenen Tönen, zu einem Relief gefügt. Ein Bild, das man auch ertasten kann." },
  { id: "tasche-segeltuch", title: "Tasche aus Segeltuch", designerId: "pia-luethi", cat: "Mode", mat: "Textil", city: "Genf", price: 130, img: U("1597633425046-08f5110420b5"),
    story: "Aus ausgedientem Bootssegel genäht, mit Lederriemen aus Restposten. Wasserabweisend und praktisch unverwüstlich." },
  { id: "karaffe-klar", title: "Karaffe «Klar»", designerId: "aylin-demir", cat: "Objekte", mat: "Glas", city: "Luzern", price: 74, img: U("1556910103-1c02745aae4d"),
    story: "Eine schlanke Karaffe aus eingeschmolzenem Altglas. Klar und schlicht — für Wasser, Wein oder als Vase." },
  { id: "stehleuchte-rohr", title: "Stehleuchte «Rohr»", designerId: "jonas-frei", cat: "Leuchten", mat: "Metall", city: "Zürich", price: 290, img: U("1507473885765-e6ed057f782c"),
    story: "Gebaut aus Stahlrohren einer alten Heizungsanlage. Höhenverstellbar, mit warmweissem LED-Licht und Schalter am Fuss." },
  { id: "tischlampe-glasform", title: "Tischlampe «Glasform»", designerId: "marco-keller", cat: "Leuchten", mat: "Glas", city: "Bern", price: 165, img: U("1513506003901-1e6a229e2d15"),
    story: "Ein Glaskörper aus geretteten Flaschen, kombiniert mit Kupferfassung. Streut das Licht weich in den Raum." },
  { id: "pendelleuchte-falt", title: "Pendelleuchte «Falt»", designerId: "jonas-frei", cat: "Leuchten", mat: "Metall", city: "Luzern", price: 220, img: U("1524634126442-357e0eac3c14"),
    story: "Aus gefaltetem Restblech, pulverbeschichtet. Wirft ein gerichtetes Licht — ideal über Esstisch oder Theke." },
];

// Galerie: Hauptbild + zwei stimmungsvolle Detailaufnahmen je nach Kategorie.
const ATMO = {
  "Möbel": ["1567538096630-e0c55bd6374c", "1503602642458-232111445657"],
  "Mode": ["1483985988355-763728e1935b", "1597633425046-08f5110420b5"],
  "Leuchten": ["1524634126442-357e0eac3c14", "1513506003901-1e6a229e2d15"],
  "Kunst": ["1513519245088-0e12902e35ca", "1493106641515-6b5631de4bb9"],
  "Objekte": ["1578500494198-246f612d3b3d", "1556910103-1c02745aae4d"],
  "Schmuck": ["1611652022419-a9419f74343d", "1515562141207-7a88fb7ce338"],
};

export function getProduct(id) {
  const p = PRODUCTS.find((x) => x.id === id);
  if (!p) return null;
  const atmo = (ATMO[p.cat] || ATMO["Objekte"]).map((a) => U(a));
  const designer = DESIGNERS.find((d) => d.id === p.designerId) || null;
  return { ...p, gallery: [p.img, ...atmo], designer };
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
    id: "erbsofa-neu-beziehen", title: "Erbsofa neu beziehen", tag: "Textilien", ort: "Bern", date: "19.06.2026",
    poster: "Dominique H.", posterRole: "Verifizierte Kundin", budget: "CHF 800 – 1'400", timeline: "4 – 6 Wochen", responses: 5,
    image: U("1493106641515-6b5631de4bb9", 1100),
    short: "3-Sitzer aus den 70ern von meiner Grossmutter. Gestell top, Bezug durch — neu beziehen mit Stoff, der eine Geschichte erzählt.",
    long: "Das Sofa stand 40 Jahre im Wohnzimmer meiner Grossmutter und hat einen festen Platz in meiner Erinnerung. Das Holzgestell ist absolut intakt, aber der originale Bezug ist durchgesessen und an den Armlehnen eingerissen.\n\nIch wünsche mir einen neuen Bezug aus Upcycling-Material — gern Patchwork aus kräftigen Stoffresten, der dem Stück einen zweiten, eigenen Charakter gibt. Wichtig ist mir saubere Polsterarbeit und ein Ergebnis, das wieder Jahrzehnte hält.",
    needs: ["Polster- & Näharbeit", "Bezug aus Upcycling-Textil", "Abholung & Lieferung in Bern"],
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
    id: "eames-stuhl-restaurieren", title: "Eames-Stuhl restaurieren", tag: "Möbel", ort: "Genf", date: "02.06.2026",
    poster: "Claudia R.", posterRole: "Verifizierte Kundin", budget: "CHF 500 – 900", timeline: "5 – 6 Wochen", responses: 6,
    image: U("1505693416388-ac5ce068fe85", 1100),
    short: "Sitzschale intakt, Bezug abgenutzt — suche jemanden für eine fachgerechte Restauration.",
    long: "Ein originaler Eames-Stuhl, dessen Sitzschale noch in sehr gutem Zustand ist. Bezug und Polster sind allerdings stark abgenutzt.\n\nIch suche eine fachgerechte Restauration, die dem Stück gerecht wird — mit Sorgfalt für die originale Form und nachhaltigen Materialien.",
    needs: ["Fachgerechte Restauration", "Original-Form erhalten", "Nachhaltige Materialien"],
  },
];

export function getBrief(id) {
  return BRIEFS.find((b) => b.id === id) || null;
}
