// re:do:mi — Anschlagbrett (Kulturbörse-style listings) on the Re-Do-Mi DS.
// Defines window.RDM_Board. Reuses the new navigating header from home.js.
(function () {
  const h = (...a) => React.createElement(...a);
  const DS = window.ReDoMiDesignSystem_e4680b;
  const D = () => window.RDM_DATA;

  const Wrap = (children, style) => h("div", { style: Object.assign({ maxWidth: 1440, margin: "0 auto", padding: "0 64px", boxSizing: "border-box" }, style) }, children);
  const Eyebrow = (txt) => h("span", { style: { fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12, letterSpacing: "1.98px", textTransform: "uppercase", color: "var(--medium)" } }, txt);

  // pin icon for the location meta
  const PinIcon = () => h("svg", { width: 13, height: 13, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", style: { flex: "none" } },
    h("path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" }), h("circle", { cx: 12, cy: 10, r: 3 }));
  const CalIcon = () => h("svg", { width: 13, height: 13, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", style: { flex: "none" } },
    h("rect", { x: 3, y: 4, width: 18, height: 18, rx: 2 }), h("path", { d: "M16 2v4M8 2v4M3 10h18" }));

  const COLS = "1fr 220px 150px 150px";

  function ListHeader() {
    const cell = (txt, align) => h("span", { style: { fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12, letterSpacing: "1.4px", textTransform: "uppercase", color: "var(--muted)", textAlign: align || "left" } }, txt);
    return h("div", { style: { display: "grid", gridTemplateColumns: COLS, gap: 32, alignItems: "end", padding: "0 0 14px", borderBottom: "1px solid var(--border-light)" } },
      cell("Titel"), cell("Sparte"), cell("Region"), cell("Veröffentlicht", "right"));
  }

  // ── inserat row (Kulturbörse-style list) ────────────────────────────
  function InseratRow({ b, onClick }) {
    const [hov, setHov] = React.useState(false);
    const text = (txt, opts) => h("span", { style: Object.assign({ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: 14, lineHeight: 1.5, color: "var(--medium)" }, opts) }, txt);
    return h("a", { href: "#", onClick: (e) => { e.preventDefault(); onClick(); }, onMouseEnter: () => setHov(true), onMouseLeave: () => setHov(false),
      style: { display: "grid", gridTemplateColumns: COLS, gap: 32, alignItems: "start", padding: "22px 16px 22px 16px", margin: "0 -16px", textDecoration: "none", color: "inherit", borderBottom: "1px solid var(--border-light)", background: hov ? "var(--surface-alt)" : "transparent", boxShadow: hov ? "inset 3px 0 0 var(--brand-yellow)" : "inset 3px 0 0 transparent", transition: "background .16s ease, box-shadow .16s ease" } },
      // title column
      h("div", { style: { display: "flex", flexDirection: "column", gap: 5 } },
        h("span", { style: { fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 10, letterSpacing: "1.6px", textTransform: "uppercase", color: "var(--muted)" } }, "Suche"),
        h("span", { style: { fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, letterSpacing: "0.2px", lineHeight: 1.25, color: "var(--ink)" } }, b.title),
        h("span", { style: { fontFamily: "var(--font-body)", fontWeight: 300, fontSize: 13, lineHeight: 1.55, color: "var(--muted)", maxWidth: 520, overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 1, WebkitBoxOrient: "vertical" } }, b.desc)),
      text(b.tag),
      text(b.ort),
      text(b.date, { textAlign: "right", fontFamily: "var(--font-display)", fontWeight: 600, letterSpacing: "0.4px", color: "var(--ink)" }));
  }

  function Board({ go, openLogin, authed }) {
    const Header = window.RDM_NewHeader;
    const d = D();
    const open = d.briefs; // only open inserate are shown
    const cats = ["Alle", "Möbel", "Leuchten", "Textilien", "Objekte"];
    const [cat, setCat] = React.useState("Alle");
    const list = cat === "Alle" ? open : open.filter((b) => b.tag === cat);
    const openBrief = (b) => (authed ? go("postlive", { brief: b }) : openLogin("um Details zu sehen und Kontakt aufzunehmen", "board"));
    const create = () => (authed ? go("postcreate") : openLogin("um eine eigene Ausschreibung zu posten", "postcreate"));
    const chip = (label) => h("span", { key: label, onClick: () => setCat(label),
      style: { fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 11, letterSpacing: "1.4px", textTransform: "uppercase", padding: "9px 16px", borderRadius: 2, cursor: "pointer", border: "1px solid " + (cat === label ? "var(--ink)" : "var(--border-light)"), background: cat === label ? "var(--ink)" : "var(--white)", color: cat === label ? "var(--white)" : "var(--medium)", whiteSpace: "nowrap" } }, label);

    return h("div", { style: { background: "var(--white)", minHeight: "100vh" } },
      h(Header, { go, openLogin, activeRoute: "board", authed }),
      h("section", { style: { background: "var(--white)" } },
        Wrap([
          // header row
          h("div", { key: "hd", style: { display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, flexWrap: "wrap" } },
            h("div", { style: { display: "flex", flexDirection: "column", gap: 10, maxWidth: 620 } },
              Eyebrow("Anschlagbrett"),
              h("h1", { style: { margin: 0, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 44, lineHeight: 1.05, letterSpacing: "-0.3px", color: "var(--ink)", textTransform: "uppercase" } }, "Stücke, die ein zweites Leben suchen"),
              h("p", { style: { margin: 0, fontFamily: "var(--font-body)", fontWeight: 300, fontSize: 16, lineHeight: 1.7, color: "var(--medium)" } }, "Offene Ausschreibungen aus der Community. Melde dich, um Details zu sehen, Kontakt aufzunehmen — oder schreibe dein eigenes Stück aus.")),
            h(DS.Button, { variant: "primary", icon: h(DS.Icon, { name: "arrowRight", size: 14, strokeWidth: 2 }), onClick: create }, "Ausschreibung erstellen")),
          // filter + count
          h("div", { key: "fl", style: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap", marginTop: 40 } },
            h("div", { style: { display: "flex", gap: 8, flexWrap: "wrap" } }, cats.map(chip)),
            h("span", { style: { fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 11, letterSpacing: "1.4px", textTransform: "uppercase", color: "var(--muted)" } }, list.length + " offene Inserate")),
          // list
          h("div", { key: "gr", style: { marginTop: 32 } },
            h(ListHeader, null),
            list.map((b, i) => h(InseratRow, { key: i, b, onClick: () => openBrief(b) }))),
        ], { padding: "64px 64px 96px" })),
      h(DS.Footer, null));
  }

  window.RDM_Board = Board;
})();
