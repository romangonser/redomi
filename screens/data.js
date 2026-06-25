// re:do:mi — prototype sample data. Fiktive Platzhalter.
(function () {
  const U = (id, w) =>
    `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w || 600}&q=70`;

  const designers = [
    {
      name: "Lena Brunner",
      location: "Basel",
      materials: ["Eiche", "Stahl", "Altholz"],
      quote: "«Ich gebe Altholz ein zweites Leben.»",
      bio: "Schreinerin aus Basel. Seit 2018 baue ich aus ausrangierten Möbeln und Bauholz robuste Einzelstücke — gefertigt für den täglichen Gebrauch, nicht für die Vitrine.",
      photo: U("1494790108377-be9c29b29330", 400),
      projects: 27,
      since: "2018",
    },
    {
      name: "Marco Keller",
      location: "Zürich",
      materials: ["Kupfer", "Glas"],
      quote: "«Licht aus Schrott — meine Sprache.»",
      bio: "Lichtgestalter mit Faible für Industrierest. Aus Kupferrohren und Bruchglas entstehen Leuchten mit warmem, unverwechselbarem Charakter.",
      photo: U("1500648767791-00dcc994a43e", 400),
      projects: 19,
      since: "2020",
    },
    {
      name: "Sofia Meier",
      location: "Bern",
      materials: ["Textil", "Wolle"],
      quote: "«Reste werden bei mir zu Mustern.»",
      bio: "Textildesignerin. Ich beziehe Sitzmöbel neu und verwebe Stoffreste zu Mustern, die jedes Stück zum Unikat machen.",
      photo: U("1438761681033-6461ffad8d80", 400),
      projects: 34,
      since: "2017",
    },
    {
      name: "Jonas Frei",
      location: "Luzern",
      materials: ["Metall", "Zahnräder"],
      quote: "«Mechanik mit Charakter.»",
      bio: "Metaller und Tüftler. Aus alten Maschinenteilen und Zahnrädern baue ich Objekte, die ihre Herkunft sichtbar tragen.",
      photo: U("1507003211169-0a1dd7228f2d", 400),
      projects: 12,
      since: "2021",
    },
    {
      name: "Aylin Demir",
      location: "Winterthur",
      materials: ["Glas", "Keramik"],
      quote: "«Scherben erzählen Geschichten.»",
      bio: "Keramikerin. Ich fasse Glas- und Keramikbruch neu — jede Scherbe behält ihre Geschichte und wird Teil von etwas Neuem.",
      photo: U("1534528741775-53994a69daeb", 400),
      projects: 22,
      since: "2019",
    },
  ];

  const products = [
    { category: "Möbel", title: "Barhocker «Eiche No.4»", maker: "Lena Brunner", price: "CHF 320.–", img: U("1503602642458-232111445657") },
    { category: "Leuchten", title: "Pendel «Kupfer»", maker: "Marco Keller", price: "CHF 180.–", img: U("1513506003901-1e6a229e2d15") },
    { category: "Textilien", title: "Kissen «Patchwork»", maker: "Sofia Meier", price: "CHF 95.–", img: U("1584100936595-c0654b55a2e2") },
    { category: "Accessoires", title: "Uhr «Zahnrad»", maker: "Jonas Frei", price: "CHF 140.–", img: U("1495856458515-0637185db551") },
    { category: "Objekte", title: "Vase «Glasbruch»", maker: "Aylin Demir", price: "CHF 110.–", img: U("1578500494198-246f612d3b3d") },
    { category: "Möbel", title: "Sessel «Re-Velvet»", maker: "Sofia Meier", price: "CHF 480.–", img: U("1567538096630-e0c55bd6374c") },
    { category: "Möbel", title: "Tisch «Altholz No.2»", maker: "Lena Brunner", price: "CHF 640.–", img: U("1532372320572-cda25653a26d") },
    { category: "Möbel", title: "Regal «Palette»", maker: "Lena Brunner", price: "CHF 260.–", img: U("1532499016263-f2c3e89de9cd") },
    { category: "Leuchten", title: "Lampe «Industrie»", maker: "Marco Keller", price: "CHF 220.–", img: U("1507473885765-e6ed057f782c") },
    { category: "Objekte", title: "Spiegel «Vintage»", maker: "Aylin Demir", price: "CHF 150.–", img: U("1618220179428-22790b461013") },
    { category: "Textilien", title: "Teppich «Webrest»", maker: "Sofia Meier", price: "CHF 290.–", img: U("1531889766779-90bb7da37f82") },
    { category: "Accessoires", title: "Schale «Messing»", maker: "Jonas Frei", price: "CHF 85.–", img: U("1493106641515-6b5631de4bb9") },
  ];

  const categories = [
    { glyph: "🛋", label: "Möbel" },
    { glyph: "💡", label: "Leuchten" },
    { glyph: "⌚", label: "Accessoires" },
    { glyph: "🧶", label: "Textilien" },
    { glyph: "🏺", label: "Objekte" },
  ];

  const testimonials = [
    { quote: "«Endlich Stühle mit Charakter — und fair produziert.»", name: "Andreas M.", role: "Barbesitzer, Zürich" },
    { quote: "«Mein altes Sofa hat ein zweites Leben bekommen.»", name: "Bianca R.", role: "Privatkundin, Bern" },
    { quote: "«re:do:mi bringt mir genau die richtigen Aufträge.»", name: "Lena B.", role: "Designerin, Basel" },
  ];

  const partners = ["OFFCUT", "KlimUp", "ZHdK", "Circular Hub"];

  const briefs = [
    { title: "Eames-Stuhl restaurieren", status: "Abgeschlossen", tag: "Möbel", ort: "Genf", date: "02.06.2026", desc: "Sitzschale intakt, Bezug abgenutzt — suche jemanden für eine fachgerechte Restauration.", img: U("1503602642458-232111445657") },
    { title: "Erbsofa neu beziehen", status: "Offen", tag: "Textilien", ort: "Bern", date: "19.06.2026", desc: "3-Sitzer aus den 70ern von meiner Grossmutter. Gestell top, Bezug durch — neu beziehen mit Stoff, der eine Geschichte erzählt.", img: U("1555041469-a586c61ea9bc") },
    { title: "Vintage-Lampe umbauen", status: "In Vermittlung", tag: "Leuchten", ort: "Zürich", date: "17.06.2026", desc: "Messing-Stehlampe vom Flohmarkt. Verkabelung erneuern und auf LED umbauen.", img: U("1513506003901-1e6a229e2d15") },
    { title: "Kommode aufarbeiten", status: "Offen", tag: "Möbel", ort: "Luzern", date: "15.06.2026", desc: "Eichenkommode aus dem Estrich. Furnier lösen sich stellenweise, soll abgeschliffen und geölt werden.", img: U("1532372320572-cda25653a26d") },
    { title: "Spiegelrahmen vergolden", status: "Offen", tag: "Objekte", ort: "Basel", date: "12.06.2026", desc: "Antiker Holzrahmen, Blattgold teils abgeblättert. Suche jemanden mit Vergoldungs-Erfahrung.", img: U("1618220179428-22790b461013") },
    { title: "Lederstuhl neu polstern", status: "In Vermittlung", tag: "Möbel", ort: "Winterthur", date: "09.06.2026", desc: "Bürostuhl aus den 80ern, Leder rissig. Neu polstern und beziehen — gern in einem warmen Cognac-Ton.", img: U("1567538096630-e0c55bd6374c") },
  ];

  // Designer:innen, die sich auf Biancas Ausschreibung gemeldet haben
  const interested = [
    { ref: "Sofia Meier", note: "«Stoffreste-Patchwork — ich beziehe dein Sofa mit Geschichte neu.»" },
    { ref: "Lena Brunner", note: "«Ich kann das Gestell aufarbeiten und neu verleimen.»" },
    { ref: "Aylin Demir", note: "«Passende Keramik-Knöpfe als Detail wären denkbar.»" },
  ];

  const byName = {};
  designers.forEach((d) => (byName[d.name] = d));

  window.RDM_DATA = {
    heroImg: U("1581091226825-a6a2a5aee158", 900),
    designers,
    products,
    categories,
    testimonials,
    partners,
    briefs,
    interested,
    byName,
  };
})();
