// re:do:mi — Produktseite / Shop (hochwertiger Shop, Connox/changemaker-Referenz).
// Re-Do-Mi (yellow) design system. Defines RDM_Shop.
(function () {
  const h = (...a) => React.createElement(...a);
  const DS = window.ReDoMiDesignSystem_e4680b;
  const A = "assets/";
  const U = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=720&q=72`;

  // ── catalogue ───────────────────────────────────────────────────────
  // category ∈ Möbel·Mode·Kunst·Objekte·Schmuck · material ∈ Holz·Textil·Metall·Glas·Keramik
  const PRODUCTS = [
    { title: "Sneaker High – Green Tiger", designer: "Leila Amrani",   cat: "Mode",    mat: "Textil",   city: "Zürich", price: 99,  img: A + "product-sneaker.jpg" },
    { title: "Garden Bench Restored",      designer: "Jaz Volpe",      cat: "Möbel",   mat: "Metall",   city: "Luzern", price: 420, img: U("1567538096630-e0c55bd6374c") },
    { title: "Travelling Companions",      designer: "The Froschprince", cat: "Kunst", mat: "Holz",     city: "Basel",  price: 55,  img: U("1493106641515-6b5631de4bb9") },
    { title: "Casual, neu gedacht",        designer: "Re-Wear Zürich", cat: "Mode",    mat: "Textil",   city: "Zürich", price: 140, img: U("1483985988355-763728e1935b") },
    { title: "SULA – Massivholzbett",      designer: "André Mailfert", cat: "Möbel",   mat: "Holz",     city: "Bern",   price: 830, img: U("1505693416388-ac5ce068fe85") },
    { title: "Lesekissen CORAL",           designer: "Palettino",      cat: "Objekte", mat: "Textil",   city: "Genf",   price: 20,  img: U("1584100936595-c0654b55a2e2") },
    { title: "Vase aus Altglas",           designer: "Marie Berger",   cat: "Objekte", mat: "Glas",     city: "Bern",   price: 68,  img: U("1578500494198-246f612d3b3d") },
    { title: "Ohrringe «Kupferkreis»",     designer: "Studio Funke",   cat: "Schmuck", mat: "Metall",   city: "Zürich", price: 85,  img: U("1611652022419-a9419f74343d") },
    { title: "Hocker «Stapelgut»",         designer: "The Froschprince", cat: "Möbel", mat: "Holz",     city: "Basel",  price: 310, img: U("1503602642458-232111445657") },
    { title: "Wandobjekt «Schichten»",     designer: "Marie Berger",   cat: "Kunst",   mat: "Holz",     city: "Bern",   price: 240, img: U("1513519245088-0e12902e35ca") },
    { title: "Tasche aus Segeltuch",       designer: "Re-Wear Zürich", cat: "Mode",    mat: "Textil",   city: "Genf",   price: 130, img: U("1597633425046-08f5110420b5") },
    { title: "Karaffe «Klar»",             designer: "Studio Funke",   cat: "Objekte", mat: "Glas",     city: "Luzern", price: 74,  img: U("1556910103-1c02745aae4d") },
    { title: "Stehleuchte «Rohr»",          designer: "Studio Funke",   cat: "Leuchten", mat: "Metall",  city: "Zürich", price: 290, img: U("1507473885765-e6ed057f782c") },
    { title: "Tischlampe «Glasform»",       designer: "Marie Berger",   cat: "Leuchten", mat: "Glas",    city: "Bern",   price: 165, img: U("1513506003901-1e6a229e2d15") },
    { title: "Pendelleuchte «Falt»",        designer: "Jaz Volpe",      cat: "Leuchten", mat: "Metall",  city: "Luzern", price: 220, img: U("1524634126442-357e0eac3c14") },
  ];

  const CATEGORIES = ["Alle", "Möbel", "Mode", "Leuchten", "Kunst", "Objekte", "Schmuck"];
  const MATERIALS  = ["Alle", "Holz", "Textil", "Metall", "Glas"];
  const CITIES     = ["Alle", "Zürich", "Basel", "Bern", "Luzern", "Genf"];
  const SORTS      = ["Neueste zuerst", "Preis aufsteigend", "Preis absteigend", "Name A–Z"];

  // ── filter radio ────────────────────────────────────────────────────
  function Radio({ label, checked, onClick }) {
    const [hov, setHov] = React.useState(false);
    return h("button", {
      onClick, onMouseEnter: () => setHov(true), onMouseLeave: () => setHov(false),
      style: { display: "flex", alignItems: "center", gap: 12, background: "none", border: "none", padding: "7px 0", cursor: "pointer", textAlign: "left", width: "100%" },
    },
      h("span", { style: { flex: "none", width: 16, height: 16, borderRadius: "50%", border: "1.5px solid " + (checked ? "var(--ink)" : "var(--border-light)"), display: "inline-flex", alignItems: "center", justifyContent: "center", boxSizing: "border-box" } },
        checked ? h("span", { style: { width: 8, height: 8, borderRadius: "50%", background: "var(--brand-yellow)" } }) : null),
      h("span", { style: { fontFamily: "var(--font-body)", fontWeight: 300, fontSize: 16, color: checked ? "var(--ink)" : hov ? "var(--ink)" : "var(--medium)" } }, label));
  }

  function FilterGroup({ title, options, value, onChange }) {
    return h("div", { style: { display: "flex", flexDirection: "column", gap: 4, paddingBottom: 28, marginBottom: 28, borderBottom: "1px solid var(--border-light)" } },
      h("span", { style: { fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12, letterSpacing: "1.6px", textTransform: "uppercase", color: "var(--ink)", marginBottom: 10 } }, title),
      options.map((o) => h(Radio, { key: o, label: o, checked: value === o, onClick: () => onChange(o) })));
  }

  // ── sort select (custom, brand) ─────────────────────────────────────
  function SortSelect({ value, onChange }) {
    const [open, setOpen] = React.useState(false);
    return h("div", { style: { position: "relative" } },
      h("button", { onClick: () => setOpen((o) => !o), onBlur: () => setTimeout(() => setOpen(false), 120),
        style: { display: "inline-flex", alignItems: "center", justifyContent: "space-between", gap: 24, minWidth: 220, background: "var(--white)", border: "1px solid var(--border-light)", borderRadius: 2, padding: "12px 16px", cursor: "pointer", fontFamily: "var(--font-body)", fontWeight: 300, fontSize: 15, color: "var(--ink)" } },
        value,
        h("span", { style: { color: "var(--muted)", fontSize: 12, transform: open ? "rotate(180deg)" : "none", transition: "transform .15s" } }, "▾")),
      open ? h("div", { style: { position: "absolute", top: "calc(100% + 6px)", right: 0, minWidth: 220, background: "var(--white)", border: "1px solid var(--border-light)", borderRadius: 2, boxShadow: "0 8px 24px rgba(26,26,26,0.10)", zIndex: 20, overflow: "hidden" } },
        SORTS.map((s) => h("button", { key: s, onMouseDown: () => { onChange(s); setOpen(false); },
          style: { display: "block", width: "100%", textAlign: "left", background: s === value ? "var(--surface-alt)" : "var(--white)", border: "none", padding: "11px 16px", cursor: "pointer", fontFamily: "var(--font-body)", fontWeight: 300, fontSize: 15, color: "var(--ink)" } }, s))) : null);
  }

  // ── page ────────────────────────────────────────────────────────────
  function Shop({ go, openLogin, authed }) {
    const Header = window.RDM_NewHeader;
    const store = window.RDM_useStore();
    const [cat, setCat] = React.useState("Alle");
    const [mat, setMat] = React.useState("Alle");
    const [city, setCity] = React.useState("Alle");
    const [sort, setSort] = React.useState("Neueste zuerst");

    const search = store.getSearch().toLowerCase();
    const favOnly = store.getFavOnly();
    let list = PRODUCTS.filter((p) =>
      (cat === "Alle" || p.cat === cat) &&
      (mat === "Alle" || p.mat === mat) &&
      (city === "Alle" || p.city === city) &&
      (!favOnly || store.isFav(p.title)) &&
      (!search || (p.title + " " + p.designer + " " + p.cat + " " + p.city + " " + p.mat).toLowerCase().includes(search)));
    if (sort === "Preis aufsteigend") list = [...list].sort((a, b) => a.price - b.price);
    else if (sort === "Preis absteigend") list = [...list].sort((a, b) => b.price - a.price);
    else if (sort === "Name A–Z") list = [...list].sort((a, b) => a.title.localeCompare(b.title));

    const reset = () => { setCat("Alle"); setMat("Alle"); setCity("Alle"); };
    const active = cat !== "Alle" || mat !== "Alle" || city !== "Alle";

    const ctxChip = (label, onClear) => h("span", { style: { display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 8px 8px 14px", borderRadius: 2, background: "var(--ink)", color: "var(--white)", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 11, letterSpacing: "1.2px", textTransform: "uppercase" } },
      label, h("button", { onClick: onClear, "aria-label": "Entfernen", style: { display: "inline-flex", width: 18, height: 18, alignItems: "center", justifyContent: "center", border: "none", borderRadius: "50%", background: "rgba(255,255,255,0.18)", color: "var(--white)", cursor: "pointer", fontSize: 12, lineHeight: 1 } }, "\u00d7"));

    return h("div", { style: { background: "var(--white)" } },
      h(Header, { go, openLogin, activeRoute: "products", authed }),

      // page heading
      h("div", { style: { maxWidth: 1440, margin: "0 auto", padding: "72px 64px 0", boxSizing: "border-box" } },
        h("div", { style: { display: "flex", flexDirection: "column", gap: 18, maxWidth: 640 } },
          h("span", { style: { fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12, letterSpacing: "1.98px", textTransform: "uppercase", color: "var(--medium)" } }, "Produkte"),
          h("h1", { style: { margin: 0, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 56, lineHeight: 1.02, letterSpacing: "-0.4px", textTransform: "uppercase", color: "var(--ink)" } }, favOnly ? "Deine Favoriten" : "Alle Produkte"),
          h("p", { style: { margin: 0, fontFamily: "var(--font-body)", fontStyle: "italic", fontWeight: 300, fontSize: 18, color: "var(--medium)" } }, "Kuratierte Upcycling-Kreationen aus der Schweiz."),
          (search || favOnly) ? h("div", { style: { display: "flex", gap: 10, flexWrap: "wrap", marginTop: 4 } },
            favOnly ? ctxChip("Nur Favoriten", () => store.setFavOnly(false)) : null,
            search ? ctxChip("Suche: \u201E" + store.getSearch() + "\u201C", () => store.setSearch("")) : null) : null)),

      // body: sidebar + grid
      h("div", { style: { maxWidth: 1440, margin: "0 auto", padding: "40px 64px 112px", boxSizing: "border-box", display: "grid", gridTemplateColumns: "248px 1fr", gap: 56, alignItems: "start" } },

        // sidebar
        h("aside", { style: { position: "sticky", top: 92, display: "flex", flexDirection: "column" } },
          h("div", { style: { display: "flex", alignItems: "center", gap: 10, paddingBottom: 20, marginBottom: 28, borderBottom: "1px solid var(--ink)" } },
            h("svg", { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "var(--ink)", strokeWidth: 1.6, strokeLinecap: "round" },
              h("line", { x1: 4, y1: 8, x2: 20, y2: 8 }), h("circle", { cx: 9, cy: 8, r: 2.4, fill: "var(--white)" }),
              h("line", { x1: 4, y1: 16, x2: 20, y2: 16 }), h("circle", { cx: 15, cy: 16, r: 2.4, fill: "var(--white)" })),
            h("span", { style: { fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15, letterSpacing: "1.8px", textTransform: "uppercase", color: "var(--ink)" } }, "Filter")),
          h(FilterGroup, { title: "Kategorie", options: CATEGORIES, value: cat, onChange: setCat }),
          h(FilterGroup, { title: "Material", options: MATERIALS, value: mat, onChange: setMat }),
          h(FilterGroup, { title: "Stadt", options: CITIES, value: city, onChange: setCity }),
          active ? h("button", { onClick: reset, style: { alignSelf: "flex-start", background: "none", border: "none", padding: 0, cursor: "pointer", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 11, letterSpacing: "1.4px", textTransform: "uppercase", color: "var(--medium)", textDecoration: "underline", textUnderlineOffset: 4 } }, "Filter zurücksetzen") : null),

        // main column
        h("div", { style: { display: "flex", flexDirection: "column" } },
          h("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap", paddingBottom: 32, borderBottom: "1px solid var(--border-light)", marginBottom: 40 } },
            h("span", { style: { fontFamily: "var(--font-body)", fontStyle: "italic", fontWeight: 300, fontSize: 16, color: "var(--medium)" } }, list.length + (list.length === 1 ? " Produkt" : " Produkte")),
            h(SortSelect, { value: sort, onChange: setSort })),
          list.length === 0
            ? h("div", { style: { padding: "80px 0", textAlign: "center", display: "flex", flexDirection: "column", gap: 16, alignItems: "center" } },
                h("span", { style: { fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 30, color: "var(--ink)" } }, "Nichts gefunden"),
                h("p", { style: { margin: 0, fontFamily: "var(--font-body)", fontWeight: 300, fontSize: 16, color: "var(--medium)" } }, "Passe die Filter an, um mehr Kreationen zu sehen."),
                h(DS.Button, { variant: "ghost", onClick: reset }, "Filter zurücksetzen"))
            : h("div", { style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", columnGap: 32, rowGap: 56 } },
                list.map((p, i) => h("div", { key: p.title + i, style: { position: "relative" } },
                  h("div", { style: { position: "absolute", top: 12, right: 12, zIndex: 5 } }, h(window.RDM_Heart, { id: p.title })),
                  h(DS.ProductCard, { image: p.img, category: p.cat.toUpperCase(), title: p.title, designer: p.designer, price: "CHF " + p.price, onClick: (e) => { e.preventDefault(); go("designer", { designer: p.designer }); } })))))),

      h(DS.Footer, null));
  }

  window.RDM_Shop = Shop;
})();
