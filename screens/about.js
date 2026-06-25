// re:do:mi — Über uns (lange Seite) + separate AGB-Seite.
// Re-Do-Mi (yellow) design system. Defines RDM_About and RDM_AGB.
(function () {
  const h = (...a) => React.createElement(...a);
  const DS = window.ReDoMiDesignSystem_e4680b;
  const A = "assets/";
  const U = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1100&q=70`;

  // ── shared bits (mirrors home.js) ───────────────────────────────────
  const Wrap = (children, style) => h("div", { style: Object.assign({ maxWidth: 1440, margin: "0 auto", padding: "0 64px", boxSizing: "border-box" }, style) }, children);
  const Eyebrow = (txt) => h("span", { style: { fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12, letterSpacing: "1.98px", textTransform: "uppercase", color: "var(--medium)" } }, txt);
  const H2 = (txt, max) => h("h2", { style: { margin: 0, maxWidth: max || 620, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 36, lineHeight: 1.15, letterSpacing: "1.44px", textTransform: "uppercase", color: "var(--ink)" } }, txt);
  const Body = (txt, max) => h("p", { style: { margin: 0, maxWidth: max || 560, fontFamily: "var(--font-body)", fontWeight: 300, fontSize: 17, lineHeight: 1.7, color: "var(--medium)" } }, txt);
  const SectionHead = ({ eyebrow, title, max }) => h("div", { style: { display: "flex", flexDirection: "column", gap: 12 } }, Eyebrow(eyebrow), H2(title, max));
  const section = (bg, children, pad) => h("section", { style: { background: bg } }, Wrap(children, { padding: pad || "96px 64px" }));

  // ── VALUES ──────────────────────────────────────────────────────────
  const VALUES = [
    { n: "01", t: "Kreislauf statt Wegwerf", d: "Jedes Stück bei Re-Do-Mi entsteht aus Material, das schon da war. Wir verlängern Lebenszyklen, statt neue zu starten." },
    { n: "02", t: "Menschen vor Plattform", d: "Wir sind Vermittler, nicht Zwischenhändler. Kund:innen und Gestalter:innen treten direkt in Kontakt — wir halten den Raum dafür." },
    { n: "03", t: "Schweizer Handwerk", d: "Verifizierte Designer:innen aus der ganzen Schweiz. Lokal gefertigt, fair gehandelt, transparent gezeigt." },
    { n: "04", t: "Geschichten, die bleiben", d: "Hinter jedem Unikat steht eine Herkunft. Wir machen sie sichtbar — vom Restmaterial bis zur Werkstatt." },
  ];

  // ── HOW IT WORKS ────────────────────────────────────────────────────
  const STEPS = [
    { n: "01", t: "Entdecken", d: "Stöbere durch Unikate und Profile verifizierter Upcycling-Designer:innen — oder schreibe selbst eine Idee aufs Anschlagbrett." },
    { n: "02", t: "Verbinden", d: "Nimm direkt Kontakt auf. Bespricht Material, Idee und Offerte ohne Umwege im persönlichen Chat." },
    { n: "03", t: "Entstehen lassen", d: "Begleite dein Stück von der Anzahlung bis zur Fertigstellung — transparent, Schritt für Schritt." },
    { n: "04", t: "Weitergeben", d: "Bewerte die Zusammenarbeit und gib der Community zurück. Gutes Handwerk verdient eine Bühne." },
  ];

  // ── DESIGNER BENEFITS ───────────────────────────────────────────────
  const BENEFITS = [
    { t: "Deine eigene Bühne", d: "Ein kuratiertes Profil, das deine Arbeit und deine Herkunftsgeschichte ins Zentrum stellt." },
    { t: "Direkter Draht", d: "Anfragen landen ohne Mittelsmann bei dir. Du bestimmst, mit wem du arbeitest." },
    { t: "Faire Konditionen", d: "Transparente Gebühren, sichere Anzahlungen, keine versteckten Kosten." },
    { t: "Aufträge auf Abruf", d: "Über das Anschlagbrett finden Kund:innen mit konkreten Ideen direkt zu dir." },
  ];

  const PRESS = [
    { q: "Eine Plattform, die Kreislaufwirtschaft nicht predigt, sondern lebt.", src: "Hochparterre" },
    { q: "Re-Do-Mi gibt dem Schweizer Upcycling-Handwerk endlich ein gemeinsames Schaufenster.", src: "Das Lamm" },
    { q: "Vermittlung statt Vermarktung — ein erfrischend menschlicher Marktplatz.", src: "Werkraum Journal" },
  ];

  const PARTNERS = ["OFFCUT", "mind-map", "KlimUp", "Circular Hub", "ReParatur Café"];

  // ── ÜBER UNS (lange Seite) ──────────────────────────────────────────
  function About({ go, openLogin, authed }) {
    const Header = window.RDM_NewHeader;
    return h("div", { style: { background: "var(--white)" } },
      h(Header, { go, openLogin, activeRoute: "about", authed }),

      // Hero (kein Bild — textfokussiert, konsistent mit den anderen Seiten)
      h("section", { style: { background: "var(--white)" } },
        Wrap(h("div", { style: { display: "flex", flexDirection: "column", gap: 30, padding: "88px 0 64px" } },
            h("h1", { style: { margin: 0, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 60, lineHeight: 1.03, letterSpacing: "-0.4px", color: "var(--ink)", textTransform: "uppercase" } },
              "Wir vermitteln",
              h("span", { style: { display: "block", lineHeight: 1.03, fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400, letterSpacing: "0.6px", textTransform: "none" } }, "zwischen Idee"),
              h("span", { style: { display: "block", lineHeight: 1.03, color: "var(--brand-yellow)" } }, "und Werkstatt.")),
            Body("Re-Do-Mi ist der Vermittler innerhalb der Upcycle-Szene — eine Plattform, auf der Gestalter:innen ihre Kreationen zeigen und Kund:innen direkt mit ihnen in Kontakt treten. Kein Zwischenhandel, kein Massenlager. Nur Menschen, Material mit Geschichte und Handwerk, das bleibt.", 920),
            h("div", { style: { display: "flex", gap: 56, paddingTop: 32, borderTop: "1px solid var(--border-light)" } },
              [["140+", "Designer:innen"], ["800+", "Kreationen"], ["100%", "Schweiz"]].map(([n, l]) => h("div", { key: l, style: { display: "flex", flexDirection: "column", gap: 6 } },
                h("span", { style: { fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 40, letterSpacing: "0.5px", lineHeight: 1, color: "var(--brand-yellow)" } }, n),
                h("span", { style: { fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 11, letterSpacing: "1.4px", textTransform: "uppercase", color: "var(--muted)" } }, l)))) ),
          { padding: "0 64px" })),

      // Bild-Band (lockert die Seite auf)
      h("div", { style: { width: "100%", height: 460, background: `url(${U("1452860606245-08befc0ff44b")}) center / cover no-repeat` } }),

      // Werte
      section("var(--surface-alt)", [
        h(SectionHead, { key: "head", eyebrow: "Werte", title: "Warum es uns gibt" }),
        h("div", { key: "grid", style: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, marginTop: 48 } },
          VALUES.map((v) => h("div", { key: v.n, style: { background: "var(--white)", border: "1px solid var(--border-light)", borderRadius: 4, padding: 28, display: "flex", flexDirection: "column", gap: 12 } },
            h("span", { style: { fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 40, letterSpacing: "0.5px", color: "var(--brand-yellow)", lineHeight: 1 } }, v.n),
            h("h3", { style: { margin: 0, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 17, letterSpacing: "0.6px", textTransform: "uppercase", color: "var(--ink)" } }, v.t),
            h("p", { style: { margin: 0, fontFamily: "var(--font-body)", fontWeight: 300, fontSize: 15, lineHeight: 1.65, color: "var(--medium)" } }, v.d)))),
      ]),

      // Nachhaltigkeit / Kreislaufwirtschaft band (mit Bild)
      h("section", { style: { background: "var(--ink)" } },
        Wrap(h("div", { style: { display: "grid", gridTemplateColumns: "1fr 0.62fr", gap: 64, alignItems: "center" } },
          h("div", { style: { display: "flex", flexDirection: "column", gap: 18 } },
            h("span", { style: { fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12, letterSpacing: "1.98px", textTransform: "uppercase", color: "var(--brand-yellow)" } }, "Kreislaufwirtschaft"),
            h("h2", { style: { margin: 0, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 34, lineHeight: 1.15, letterSpacing: "1.2px", textTransform: "uppercase", color: "var(--white)" } }, "Aus Resten wird Relevanz"),
            h("p", { style: { margin: 0, fontFamily: "var(--font-body)", fontWeight: 300, fontSize: 18, lineHeight: 1.7, color: "rgba(255,255,255,0.78)" } },
              "Jedes Stück, das ein zweites Leben bekommt, ist Material, das nicht neu produziert und nicht entsorgt werden muss. Wir glauben, dass Kreislaufwirtschaft kein Verzicht ist, sondern eine reichere Form von Design — mit Herkunft, Charakter und Verantwortung.")),
          h("div", { style: { height: 340, borderRadius: 4, background: `url(${U("1513519245088-0e12902e35ca")}) center / cover no-repeat` } })),
          { padding: "80px 64px" })),

      // So funktioniert's
      section("var(--white)", [
        h(SectionHead, { key: "head", eyebrow: "So funktioniert's", title: "In vier Schritten" }),
        h("div", { key: "grid", style: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, marginTop: 48 } },
          STEPS.map((s, i) => h("div", { key: s.n, style: { display: "flex", flexDirection: "column", gap: 14, paddingTop: 24, borderTop: "2px solid var(--ink)" } },
            h("span", { style: { fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 40, letterSpacing: "0.5px", color: "var(--brand-yellow)", lineHeight: 1 } }, s.n),
            h("h3", { style: { margin: 0, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 19, letterSpacing: "0.6px", textTransform: "uppercase", color: "var(--ink)" } }, s.t),
            h("p", { style: { margin: 0, fontFamily: "var(--font-body)", fontWeight: 300, fontSize: 15, lineHeight: 1.65, color: "var(--medium)" } }, s.d)))),
      ]),

      // Für Designer:innen
      h("section", { style: { background: "var(--surface-alt)" } },
        Wrap(h("div", { style: { display: "grid", gridTemplateColumns: "0.45fr 0.55fr", gap: 64, alignItems: "center" } },
          h("div", { style: { display: "flex", flexDirection: "column", gap: 24 } },
            Eyebrow("Für Designer:innen"),
            H2("Deine Werkstatt, unsere Bühne", 420),
            Body("Du gestaltest aus dem, was schon da war? Re-Do-Mi bringt dich mit einer Community zusammen, die genau das sucht. Wir kuratieren, du gestaltest — den direkten Draht zu deinen Kund:innen behältst du.", 460),
            h("div", { style: { display: "flex", gap: 16, flexWrap: "wrap", marginTop: 4 } },
              h(DS.Button, { variant: "primary", icon: h(DS.Icon, { name: "arrowRight", size: 14, strokeWidth: 2 }), onClick: () => openLogin("um Designer:in zu werden", "dashboard") }, "Designer:in werden"),
              h(DS.Button, { variant: "ghost", onClick: () => go("designers") }, "Profile ansehen"))),
          h("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 } },
            BENEFITS.map((b) => h("div", { key: b.t, style: { background: "var(--white)", border: "1px solid var(--border-light)", borderRadius: 4, padding: 22, display: "flex", flexDirection: "column", gap: 8 } },
              h("h3", { style: { margin: 0, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15, letterSpacing: "0.5px", textTransform: "uppercase", color: "var(--ink)" } }, b.t),
              h("p", { style: { margin: 0, fontFamily: "var(--font-body)", fontWeight: 300, fontSize: 14, lineHeight: 1.6, color: "var(--medium)" } }, b.d))))),
          { padding: "96px 64px" })),

      // Presse / Partner
      section("var(--white)", [
        h(SectionHead, { key: "head", eyebrow: "Presse", title: "Was über uns gesagt wird" }),
        h("div", { key: "grid", style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 48 } },
          PRESS.map((p, i) => h("div", { key: i, style: { display: "flex", flexDirection: "column", gap: 16, padding: 28, border: "1px solid var(--border-light)", borderRadius: 4 } },
            h("span", { style: { fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 44, color: "var(--brand-yellow)", lineHeight: 0.6, height: 22 } }, "\u201C"),
            h("p", { style: { margin: 0, fontFamily: "var(--font-body)", fontWeight: 300, fontSize: 17, lineHeight: 1.6, color: "var(--ink)" } }, p.q),
            h("span", { style: { fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12, letterSpacing: "1.4px", textTransform: "uppercase", color: "var(--muted)" } }, p.src)))),
        h("div", { key: "partners", style: { display: "flex", alignItems: "center", gap: 64, flexWrap: "wrap", marginTop: 56, paddingTop: 40, borderTop: "1px solid var(--border-light)" } },
          Eyebrow("Partner"),
          h("div", { style: { display: "flex", gap: 56, alignItems: "center", flexWrap: "wrap" } },
            PARTNERS.map((p) => h("span", { key: p, style: { fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, letterSpacing: "1px", color: "var(--muted)" } }, p)))),
      ]),

      // Kontakt
      h("div", { style: { width: "100%", height: 380, background: `url(${U("1483985988355-763728e1935b")}) center / cover no-repeat` } }),
      h("section", { style: { background: "var(--surface-alt)" } },
        Wrap(h("div", { style: { display: "grid", gridTemplateColumns: "0.4fr 0.6fr", gap: 64, alignItems: "start" } },
          // contact info
          h("div", { style: { display: "flex", flexDirection: "column", gap: 28 } },
            h(SectionHead, { eyebrow: "Kontakt", title: "Sag Hallo", max: 320 }),
            h("div", { style: { display: "flex", flexDirection: "column", gap: 22, marginTop: 4 } },
              [["Adresse", "Re-Do-Mi GmbH\nLanggasse 42\n8004 Zürich"], ["E-Mail", "hallo@re-do-mi.ch"], ["Telefon", "+41 44 123 45 67"], ["Social", "@redomi.ch · Instagram · LinkedIn"]].map(([k, v]) =>
                h("div", { key: k, style: { display: "flex", flexDirection: "column", gap: 4 } },
                  h("span", { style: { fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 11, letterSpacing: "1.6px", textTransform: "uppercase", color: "var(--muted)" } }, k),
                  h("span", { style: { whiteSpace: "pre-line", fontFamily: "var(--font-body)", fontWeight: 300, fontSize: 16, lineHeight: 1.6, color: "var(--ink)" } }, v))))),
          // form
          h(ContactForm, { key: "form" })),
          { padding: "96px 64px" })),

      h(DS.Footer, null));
  }

  function ContactForm() {
    const [sent, setSent] = React.useState(false);
    const field = (label, node) => h("div", { style: { display: "flex", flexDirection: "column", gap: 6 } },
      h("label", { style: { fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 11, letterSpacing: "1.4px", textTransform: "uppercase", color: "var(--medium)" } }, label), node);
    const inputStyle = { width: "100%", boxSizing: "border-box", padding: "13px 15px", borderRadius: 2, border: "1px solid var(--border-light)", background: "var(--white)", fontFamily: "var(--font-body)", fontWeight: 300, fontSize: 15, color: "var(--ink)", outline: "none" };
    if (sent) return h("div", { style: { background: "var(--white)", border: "1px solid var(--border-light)", borderRadius: 4, padding: 48, display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" } },
      h("span", { style: { fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 40, color: "var(--brand-yellow)", lineHeight: 1 } }, "Danke!"),
      h("p", { style: { margin: 0, fontFamily: "var(--font-body)", fontWeight: 300, fontSize: 17, lineHeight: 1.6, color: "var(--medium)", maxWidth: 380 } }, "Deine Nachricht ist bei uns gelandet. Wir melden uns innerhalb von zwei Werktagen."),
      h(DS.Button, { variant: "ghost", onClick: () => setSent(false) }, "Neue Nachricht"));
    return h("form", { onSubmit: (e) => { e.preventDefault(); setSent(true); }, style: { background: "var(--white)", border: "1px solid var(--border-light)", borderRadius: 4, padding: 40, display: "flex", flexDirection: "column", gap: 20 } },
      h("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 } },
        field("Name", h("input", { required: true, placeholder: "Vor- und Nachname", style: inputStyle })),
        field("E-Mail", h("input", { required: true, type: "email", placeholder: "deine@email.ch", style: inputStyle }))),
      field("Betreff", h("input", { placeholder: "Worum geht's?", style: inputStyle })),
      field("Nachricht", h("textarea", { required: true, rows: 5, placeholder: "Erzähl uns, was du auf dem Herzen hast …", style: { ...inputStyle, resize: "vertical" } })),
      h(DS.Button, { variant: "primary", type: "submit", icon: h(DS.Icon, { name: "arrowRight", size: 14, strokeWidth: 2 }) }, "Nachricht senden"));
  }

  // ── AGB (separate Seite) ────────────────────────────────────────────
  const AGB_SECTIONS = [
    { n: "§ 1", t: "Geltungsbereich", d: "Diese Allgemeinen Geschäftsbedingungen (AGB) regeln die Nutzung der Vermittlungsplattform Re-Do-Mi durch Kund:innen und Gestalter:innen. Mit der Registrierung oder Nutzung der Plattform erkennst du diese Bedingungen an." },
    { n: "§ 2", t: "Rolle von Re-Do-Mi", d: "Re-Do-Mi tritt ausschliesslich als Vermittler zwischen Kund:innen und Gestalter:innen auf. Verträge über Kreationen oder Auftragsarbeiten kommen direkt zwischen den Parteien zustande; Re-Do-Mi ist nicht Vertragspartei." },
    { n: "§ 3", t: "Registrierung & Konto", d: "Für bestimmte Funktionen ist ein Konto erforderlich. Du bist für die Richtigkeit deiner Angaben und die Vertraulichkeit deiner Zugangsdaten verantwortlich." },
    { n: "§ 4", t: "Pflichten der Gestalter:innen", d: "Gestalter:innen sichern zu, dass angebotene Kreationen aus rechtmässig erworbenem Material bestehen und frei von Rechten Dritter sind. Angaben zu Herkunft, Material und Preis müssen wahrheitsgetreu sein." },
    { n: "§ 5", t: "Pflichten der Kund:innen", d: "Kund:innen verpflichten sich zu fairer Kommunikation und zur fristgerechten Begleichung vereinbarter Beträge gemäss der jeweiligen Offerte." },
    { n: "§ 6", t: "Anschlagbrett & Ausschreibungen", d: "Öffentliche Ausschreibungen müssen sachlich und rechtskonform sein. Re-Do-Mi behält sich vor, Inhalte zu entfernen, die gegen diese AGB oder geltendes Recht verstossen." },
    { n: "§ 7", t: "Preise, Anzahlung & Zahlung", d: "Preise verstehen sich in CHF. Anzahlungen und Schlusszahlungen werden über die auf der Plattform angebotenen Zahlungsmethoden abgewickelt. Vermittlungsgebühren werden transparent ausgewiesen." },
    { n: "§ 8", t: "Widerruf & Rückgabe", d: "Da es sich überwiegend um handgefertigte Unikate und Auftragsarbeiten handelt, gelten besondere Regelungen zum Widerruf. Details werden vor Vertragsschluss zwischen den Parteien festgehalten." },
    { n: "§ 9", t: "Haftung", d: "Re-Do-Mi haftet nicht für die Erfüllung der zwischen den Parteien geschlossenen Verträge. Eine Haftung für Schäden ist im gesetzlich zulässigen Rahmen beschränkt." },
    { n: "§ 10", t: "Datenschutz", d: "Die Verarbeitung personenbezogener Daten richtet sich nach unserer Datenschutzerklärung sowie dem schweizerischen Datenschutzgesetz (DSG)." },
    { n: "§ 11", t: "Änderungen der AGB", d: "Re-Do-Mi kann diese AGB anpassen. Über wesentliche Änderungen informieren wir rechtzeitig. Die fortgesetzte Nutzung gilt als Zustimmung." },
    { n: "§ 12", t: "Anwendbares Recht & Gerichtsstand", d: "Es gilt schweizerisches Recht. Gerichtsstand ist Zürich, soweit gesetzlich zulässig." },
  ];

  function AGB({ go, openLogin, authed }) {
    const Header = window.RDM_NewHeader;
    return h("div", { style: { background: "var(--white)" } },
      h(Header, { go, openLogin, activeRoute: "about", authed }),
      // header band
      h("section", { style: { background: "var(--surface-alt)", borderBottom: "1px solid var(--border-light)" } },
        Wrap(h("div", { style: { display: "flex", flexDirection: "column", gap: 20 } },
          h("a", { href: "#", onClick: (e) => { e.preventDefault(); go("about"); }, style: { fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12, letterSpacing: "1.54px", textTransform: "uppercase", color: "var(--medium)", textDecoration: "none" } }, "← Über uns"),
          Eyebrow("Rechtliches"),
          h("h1", { style: { margin: 0, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 52, lineHeight: 1.05, letterSpacing: "-0.3px", textTransform: "uppercase", color: "var(--ink)" } }, "Allgemeine", h("br"), "Geschäftsbedingungen"),
          h("span", { style: { fontFamily: "var(--font-body)", fontWeight: 300, fontSize: 15, color: "var(--muted)" } }, "Zuletzt aktualisiert: 19. Juni 2026 · Re-Do-Mi GmbH, Zürich")),
          { padding: "72px 64px" })),
      // body
      section("var(--white)", [
        h("div", { key: "intro", style: { maxWidth: 760 } },
          Body("Die folgende Struktur skizziert die Allgemeinen Geschäftsbedingungen von Re-Do-Mi. Es handelt sich um eine Platzhalter-Gliederung — für die rechtsverbindliche Fassung konsultiere bitte die finale, anwaltlich geprüfte Version.", 760)),
        h("div", { key: "list", style: { display: "flex", flexDirection: "column", marginTop: 48, maxWidth: 820 } },
          AGB_SECTIONS.map((s, i) => h("div", { key: s.n, style: { display: "grid", gridTemplateColumns: "96px 1fr", gap: 32, padding: "32px 0", borderTop: "1px solid var(--border-light)" } },
            h("span", { style: { fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, letterSpacing: "0.5px", color: "var(--brand-yellow)" } }, s.n),
            h("div", { style: { display: "flex", flexDirection: "column", gap: 10 } },
              h("h2", { style: { margin: 0, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 19, letterSpacing: "0.6px", textTransform: "uppercase", color: "var(--ink)" } }, s.t),
              h("p", { style: { margin: 0, fontFamily: "var(--font-body)", fontWeight: 300, fontSize: 16, lineHeight: 1.7, color: "var(--medium)" } }, s.d))))),
        h("div", { key: "foot", style: { marginTop: 48, paddingTop: 32, borderTop: "1px solid var(--border-light)", display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" } },
          h("span", { style: { fontFamily: "var(--font-body)", fontWeight: 300, fontSize: 15, color: "var(--muted)" } }, "Fragen zu den Bedingungen?"),
          h(DS.Button, { variant: "ghost", onClick: () => go("about") }, "Kontakt aufnehmen")),
      ]),
      h(DS.Footer, null));
  }

  window.RDM_About = About;
  window.RDM_AGB = AGB;
})();
