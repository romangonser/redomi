// re:do:mi — Homepage on the Re-Do-Mi (yellow) design system.
// Matches the bound DS guest homepage. Defines window.RDM_Home.
(function () {
  const h = (...a) => React.createElement(...a);
  const DS = window.ReDoMiDesignSystem_e4680b;
  const A = "assets/";
  const U = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=640&q=70`;

  const PRODUCTS = [
    { title: "Sneaker High – Green Tiger", designer: "Elephbo", category: "MODE", price: "CHF 99", image: A + "product-sneaker.jpg" },
    { title: "Travelling Companions", designer: "Kirsty Elson Designs", category: "KUNST", price: "CHF 55", image: U("1493106641515-6b5631de4bb9") },
    { title: "Casual, neu gedacht", designer: "Re-Wear Zürich", category: "MODE", price: "CHF 140", image: U("1483985988355-763728e1935b") },
    { title: "SULA – Massivholzbett", designer: "André Mailfert", category: "WOHNEN", price: "CHF 830", image: U("1567538096630-e0c55bd6374c") },
    { title: "Lesekissen CORAL", designer: "Sprungbrett / Palettino", category: "OBJEKTE", price: "CHF 20", image: U("1584100936595-c0654b55a2e2") },
  ];
  const CATEGORIES = [
    { label: "ACCESSOIRES", sub: "Kleider & Accessoires", image: A + "category-kleider.jpg" },
    { label: "WOHNEN", sub: "Interieur & Deko", image: U("1532372320572-cda25653a26d") },
    { label: "OBJEKTE", sub: "Unikate & Szene", image: U("1578500494198-246f612d3b3d") },
    { label: "KUNST", sub: "Kunst & Handwerk", image: U("1493106641515-6b5631de4bb9") },
    { label: "SCHMUCK", sub: "Schmuck & Mehr", image: U("1611652022419-a9419f74343d") },
  ];
  const DESIGNERS = [
    { name: "Leila Amrani", discipline: "Textil & Mode", location: "Zürich →", image: A + "designer-portrait.jpg" },
    { name: "The Froschprince", discipline: "Möbel & Holz", location: "Basel →", image: U("1500648767791-00dcc994a43e") },
    { name: "Marie Berger", discipline: "Objekte & Kunst", location: "Bern →", image: U("1438761681033-6461ffad8d80") },
    { name: "Jaz Volpe", discipline: "Möbel & Kunst", location: "Luzern →", image: U("1507003211169-0a1dd7228f2d") },
  ];
  const QUOTES = [
    { quote: "Re-Do-Mi hat mir als Designerin eine echte Bühne gegeben. Ich erreiche Kund:innen, die meine Arbeit wirklich verstehen.", author: "Sophie Kraft", role: "Keramikerin, Basel", featured: true },
    { quote: "Ich habe über das Anschlagbrett genau die Schneiderin gefunden, die ich für mein Upcycling-Projekt gesucht hatte. Schnell, direkt, persönlich.", author: "Dominique Hofer", role: "Kundin, Zürich", featured: true },
    { quote: "Als Plattform, die Kreislaufwirtschaft wirklich lebt, ist Re-Do-Mi für uns ein unverzichtbarer Partner.", author: "OFFCUT Initiative", role: "Partnernetzwerk", featured: true },
  ];

  // ── shared bits ─────────────────────────────────────────────────────
  const Wrap = (children, style) => h("div", { style: Object.assign({ maxWidth: 1440, margin: "0 auto", padding: "0 64px", boxSizing: "border-box" }, style) }, children);
  const Eyebrow = (txt) => h("span", { style: { fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12, letterSpacing: "1.98px", textTransform: "uppercase", color: "var(--medium)" } }, txt);

  function Arrows({ scrollRef }) {
    const btn = (dir, label) => h("button", {
      "aria-label": label,
      onClick: () => { const el = scrollRef.current; if (el) el.scrollBy({ left: dir * 360, behavior: "smooth" }); },
      style: { width: 36, height: 36, display: "inline-flex", alignItems: "center", justifyContent: "center", background: "var(--white)", border: "1px solid var(--border-light)", borderRadius: 2, cursor: "pointer", color: "var(--ink)", fontFamily: "var(--font-display)", fontSize: 15, lineHeight: 1 },
    }, dir < 0 ? "‹" : "›");
    return h("div", { style: { display: "flex", gap: 8 } }, btn(-1, "Zurück"), btn(1, "Weiter"));
  }

  function SectionHead({ eyebrow, title, link, onLink, arrows }) {
    return h("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, flexWrap: "wrap" } },
      h("div", { style: { display: "flex", flexDirection: "column", gap: 8 } }, Eyebrow(eyebrow),
        h("h2", { style: { margin: 0, maxWidth: 560, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 36, lineHeight: 1.15, letterSpacing: "1.44px", textTransform: "uppercase", color: "var(--ink)" } }, title)),
      link ? h(DS.SeeAllLink, { onClick: (e) => { e.preventDefault(); onLink && onLink(); } }, link) : (arrows || null));
  }

  // ── navigating header ───────────────────────────────────────────────
  function AccountMenu({ go }) {
    const [open, setOpen] = React.useState(false);
    const ref = React.useRef(null);
    React.useEffect(() => {
      if (!open) return;
      const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
      document.addEventListener("mousedown", onDoc);
      return () => document.removeEventListener("mousedown", onDoc);
    }, [open]);
    const go2 = (route) => { setOpen(false); go(route); };
    const items = [
      ["Dashboard", "dashboard"],
      ["Mein Profil", "dashboard"],
      ["Einstellungen", "dashboard"],
      ["__sep", null],
      ["Abmelden", "__logout"],
    ];
    const MenuItem = ({ label, route, danger }) => {
      const [hov, setHov] = React.useState(false);
      return h("button", { onClick: () => go2(route), onMouseEnter: () => setHov(true), onMouseLeave: () => setHov(false),
        style: { textAlign: "left", border: "none", background: hov ? "var(--surface-alt)" : "transparent", borderRadius: 4, padding: "10px 12px", cursor: "pointer", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12, letterSpacing: "1px", textTransform: "uppercase", color: danger ? "#E5484D" : "var(--ink)" } }, label);
    };
    return h("div", { ref, style: { position: "relative", display: "flex", alignItems: "center" } },
      h("button", { onClick: () => setOpen((o) => !o), "aria-label": "Konto",
        style: { position: "relative", width: 40, height: 40, borderRadius: "50%", border: "none", background: "var(--brand-yellow)", color: "var(--ink)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", padding: 0 } },
        "B",
        h("span", { style: { position: "absolute", top: 0, right: 0, width: 11, height: 11, borderRadius: "50%", background: "#E5484D", border: "2px solid var(--white)", boxSizing: "border-box" } })),
      open ? h("div", { style: { position: "absolute", top: 48, right: 0, minWidth: 210, background: "var(--white)", borderRadius: 4, boxShadow: "0 10px 30px rgba(26,26,26,0.16)", border: "1px solid var(--border-light)", padding: 6, display: "flex", flexDirection: "column", zIndex: 100 } },
        h("div", { style: { padding: "10px 12px", display: "flex", flexDirection: "column", gap: 3 } },
          h("span", { style: { fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, color: "var(--ink)" } }, "Bianca R."),
          h("span", { style: { fontFamily: "var(--font-body)", fontWeight: 300, fontSize: 12, color: "var(--muted)" } }, "bianca@beispiel.ch")),
        h("div", { style: { height: 1, background: "var(--border-light)", margin: "4px 0" } }),
        items.map(([label, route], i) =>
          label === "__sep"
            ? h("div", { key: i, style: { height: 1, background: "var(--border-light)", margin: "4px 0" } })
            : h(MenuItem, { key: i, label, route, danger: route === "__logout" }))) : null);
  }

  function Header({ go, openLogin, activeRoute, authed }) {
    const active = activeRoute || "home";
    const store = window.RDM_useStore();
    const links = [["Produkte", "products"], ["Designers", "designers"], ["Anschlagbrett", "board"], ["Über uns", "about"]];
    const [searchOpen, setSearchOpen] = React.useState(false);
    const [q, setQ] = React.useState(store.getSearch());
    const inputRef = React.useRef(null);
    React.useEffect(() => { if (searchOpen && inputRef.current) inputRef.current.focus(); }, [searchOpen]);
    const submitSearch = () => { store.setSearch(q.trim()); store.setFavOnly(false); go("products"); };
    const toProducts = (e) => { e.preventDefault(); store.setSearch(""); store.setFavOnly(false); setQ(""); go("products"); };

    const NavLink = ({ label, route, active }) => {
      const [hov, setHov] = React.useState(false);
      const onClick = route === "products" ? toProducts : (e) => { e.preventDefault(); go(route); };
      return h("a", { href: "#", onClick, onMouseEnter: () => setHov(true), onMouseLeave: () => setHov(false),
        style: { fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12, letterSpacing: "1.68px", textTransform: "uppercase", textDecoration: "none", color: "var(--ink)", paddingBottom: 4, borderBottom: active ? "2px solid var(--ink)" : hov ? "2px solid var(--border-light)" : "2px solid transparent", transition: "border-color .18s ease", whiteSpace: "nowrap" } }, label);
    };

    // round icon button (search / heart / cart)
    const RoundBtn = ({ label, onClick, children, badge }) => {
      const [hov, setHov] = React.useState(false);
      return h("button", { "aria-label": label, onClick, onMouseEnter: () => setHov(true), onMouseLeave: () => setHov(false),
        style: { position: "relative", width: 34, height: 34, display: "inline-flex", alignItems: "center", justifyContent: "center", background: hov ? "var(--surface-alt)" : "transparent", border: "none", borderRadius: "50%", cursor: "pointer", color: "var(--ink)" } },
        children,
        badge ? h("span", { style: { position: "absolute", top: 2, right: 2, minWidth: 16, height: 16, padding: "0 4px", boxSizing: "border-box", borderRadius: 8, background: "var(--brand-yellow)", color: "var(--ink)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 10, lineHeight: "16px", textAlign: "center" } }, badge) : null);
    };
    const heartIcon = (filled) => h("svg", { width: 19, height: 19, viewBox: "0 0 24 24", fill: filled ? "var(--ink)" : "none", stroke: "var(--ink)", strokeWidth: 1.6, strokeLinejoin: "round" },
      h("path", { d: "M12 20.5 4.2 12.9a4.6 4.6 0 0 1 6.5-6.5l1.3 1.3 1.3-1.3a4.6 4.6 0 0 1 6.5 6.5L12 20.5Z" }));

    const favCount = store.favCount();
    const LoginBtn = () => {
      const [hov, setHov] = React.useState(false);
      return h("button", { onClick: () => openLogin("um dich anzumelden", "dashboard"), onMouseEnter: () => setHov(true), onMouseLeave: () => setHov(false),
        style: { fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12, letterSpacing: "1.4px", textTransform: "uppercase", color: "var(--ink)", background: hov ? "var(--brand-yellow)" : "var(--white)", border: "1px solid var(--ink)", borderRadius: 2, padding: "11px 22px", cursor: "pointer", transition: "background .18s ease" } }, "Login");
    };
    return h("header", { style: { width: "100%", background: "var(--white)", position: "sticky", top: 0, zIndex: 50 } },
      h("div", { style: { background: "var(--medium)", color: "var(--brand-yellow)", textAlign: "center", padding: "9px 24px", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 11, letterSpacing: "1.54px", textTransform: "uppercase" } }, "Neue Plattform — Jetzt als Designer:in registrieren & Profil erstellen"),
      h("div", { style: { borderBottom: "1px solid var(--border-light)" } },
        Wrap(h("div", { style: { height: 68, display: "flex", alignItems: "center", justifyContent: "space-between" } },
          h("a", { href: "#", onClick: (e) => { e.preventDefault(); go("home"); }, style: { textDecoration: "none", display: "flex", alignItems: "center", flex: "none", marginRight: 40 } }, h("img", { src: "assets/logo.svg", alt: "Re-Do-Mi", style: { height: 24, display: "block" } })),
          h("nav", { style: { display: "flex", alignItems: "center", gap: 28 } }, links.map(([l, r]) => h(NavLink, { key: r, label: l, route: r, active: r === active }))),
          h("div", { style: { display: "flex", alignItems: "center", gap: 2 } },
            h(RoundBtn, { label: "Suche", onClick: () => setSearchOpen((o) => !o) }, h(DS.Icon, { name: "search", size: 18 })),
            h(RoundBtn, { label: "Favoriten", badge: favCount ? String(favCount) : null, onClick: () => { store.setFavOnly(true); store.setSearch(""); go("products"); } }, heartIcon(favCount > 0)),
            h(RoundBtn, { label: "Warenkorb", onClick: () => {} }, h(DS.Icon, { name: "cart", size: 18 })),
            h("span", { style: { width: 1, height: 24, background: "var(--border-light)", margin: "0 6px" } }),
            authed ? h(AccountMenu, { go }) : h(LoginBtn))))),
      // Such-Overlay unterhalb des Headers
      searchOpen ? h("div", { style: { position: "absolute", top: "100%", left: 0, right: 0, background: "var(--white)", borderBottom: "1px solid var(--border-light)", boxShadow: "0 10px 24px rgba(26,26,26,0.07)", zIndex: 49 } },
        Wrap(h("div", { style: { display: "flex", alignItems: "center", gap: 18, padding: "22px 0" } },
          h(DS.Icon, { name: "search", size: 22 }),
          h("input", { ref: inputRef, value: q, onChange: (e) => setQ(e.target.value),
            onKeyDown: (e) => { if (e.key === "Enter") { submitSearch(); setSearchOpen(false); } if (e.key === "Escape") setSearchOpen(false); },
            placeholder: "Wonach suchst du?",
            style: { flex: 1, border: "none", outline: "none", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 22, letterSpacing: "0.4px", textTransform: "uppercase", color: "var(--ink)", background: "transparent" } }),
          h("button", { onClick: () => setSearchOpen(false), "aria-label": "Schliessen", style: { background: "none", border: "none", fontSize: 24, lineHeight: 1, color: "var(--muted)", cursor: "pointer" } }, "\u00d7")))) : null);
  }

  // ── hero ────────────────────────────────────────────────────────────
  function Hero({ go }) {
    const stat = (n, l) => h("div", { style: { display: "flex", flexDirection: "column", gap: 4 } },
      h("span", { style: { fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 28, letterSpacing: "1.12px", color: "var(--ink)" } }, n),
      h("span", { style: { fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 11, letterSpacing: "1.4px", textTransform: "uppercase", color: "var(--muted)" } }, l));
    return h("section", { style: { background: "var(--white)" } },
      Wrap(h("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, minHeight: 600 } },
        h("div", { style: { display: "flex", flexDirection: "column", justifyContent: "center", gap: 30, padding: "80px 80px 80px 0" } },
          Eyebrow("Zürich · Kreislaufwirtschaft · Upcycling"),
          h("h1", { style: { margin: 0, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 60, lineHeight: 1.02, letterSpacing: "-0.5px", color: "var(--ink)", textTransform: "uppercase" } },
            "Der Markt",
            h("span", { style: { display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400, letterSpacing: "0.72px", textTransform: "none" } }, "für Upcycling"),
            h("span", { style: { display: "block", color: "var(--brand-yellow)" } }, "Kreationen.")),
          h("p", { style: { margin: 0, maxWidth: 440, fontFamily: "var(--font-body)", fontWeight: 300, fontSize: 17, lineHeight: 1.7, color: "var(--medium)" } }, "Re-Do-Mi ist der Vermittler innerhalb der Upcycle-Szene — eine Plattform, wo Gestalter:innen ihre Kreationen zeigen, und Kund:innen direkt in Kontakt treten können."),
          h("div", { style: { display: "flex", gap: 16, flexWrap: "wrap" } },
            h(DS.Button, { variant: "primary", icon: h(DS.Icon, { name: "arrowRight", size: 14, strokeWidth: 2 }), onClick: () => go("products") }, "Produkte entdecken"),
            h(DS.Button, { variant: "ghost", onClick: () => go("designers") }, "Designer:innen kennenlernen")),
          h("div", { style: { display: "flex", gap: 48, paddingTop: 28, borderTop: "1px solid var(--border-light)" } },
            stat("140+", "Aktive Designer:innen"), stat("800+", "Kreationen"), stat("6", "Kategorien"))),
        h("div", { style: { position: "relative", background: `url(${A}hero-shop.jpg) center / cover no-repeat`, margin: "0 -64px 0 0", minHeight: 600 } }))));
  }

  function HScroll({ items, width, render }) {
    const ref = React.useRef(null);
    return { ref, node: h("div", { ref, style: { display: "flex", gap: 24, overflowX: "auto", paddingBottom: 4, scrollbarWidth: "none" } },
      items.map((it, i) => h("div", { key: i, style: { flex: "0 0 auto", width } }, render(it, i)))) };
  }

  // ── page ────────────────────────────────────────────────────────────
  function Home({ go, openLogin, authed }) {
    const catScroll = React.useRef(null);
    const dsgScroll = React.useRef(null);
    const section = (bg, children) => h("section", { style: { background: bg } }, Wrap(children, { padding: "96px 64px" }));
    return h("div", { style: { background: "var(--white)" } },
      h(Header, { go, openLogin, authed }),
      h(Hero, { go }),
      // Neuheiten
      section("var(--white)", [
        h(SectionHead, { key: "head", eyebrow: "Neuheiten", title: "Frisch aus dem Ofen", link: "Alle ansehen →", onLink: () => go("products") }),
        h("div", { key: "grid", style: { display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 24, marginTop: 48 } },
          PRODUCTS.map((p, i) => h(DS.ProductCard, { key: i, image: p.image, category: p.category, title: p.title, designer: p.designer, price: p.price, onClick: (e) => { e.preventDefault(); go("products"); } }))),
      ]),
      // Kategorien
      section("var(--surface-alt)", [
        h(SectionHead, { key: "head", eyebrow: "Kategorien", title: "Was findest du hier?", arrows: h(Arrows, { scrollRef: catScroll }) }),
        h("div", { key: "row", ref: catScroll, style: { display: "flex", gap: 24, overflowX: "auto", marginTop: 48, scrollbarWidth: "none", paddingBottom: 4 } },
          CATEGORIES.map((c, i) => h("div", { key: i, style: { flex: "0 0 auto", width: 290 } },
            h(DS.CategoryCard, { image: c.image, label: c.label, sub: c.sub, onClick: (e) => { e.preventDefault(); go("products"); } })))),
      ]),
      // Community / Designer
      section("var(--white)", [
        h(SectionHead, { key: "head", eyebrow: "Community", title: "Lerne unsere Designer:innen kennen", arrows: h(Arrows, { scrollRef: dsgScroll }) }),
        h("div", { key: "row", ref: dsgScroll, style: { display: "flex", gap: 24, overflowX: "auto", marginTop: 48, scrollbarWidth: "none", paddingBottom: 4 } },
          DESIGNERS.map((d, i) => h("div", { key: i, style: { flex: "0 0 auto", width: 300 } },
            h(DS.DesignerCard, { image: d.image, name: d.name, discipline: d.discipline, location: d.location, onClick: (e) => { e.preventDefault(); go("designers"); } })))),
      ]),
      // Stimmen
      section("var(--surface-alt)", [
        h(SectionHead, { key: "head", eyebrow: "Stimmen", title: "Was die Community sagt" }),
        h("div", { key: "grid", style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 48 } },
          QUOTES.map((q, i) => h(DS.SocialProofCard, { key: i, quote: q.quote, author: q.author, role: q.role, featured: q.featured }))),
      ]),
      // Partners
      h("section", { style: { background: "var(--white)", borderTop: "1px solid var(--border-light)" } },
        Wrap(h("div", { style: { display: "flex", alignItems: "center", gap: 80 } },
          Eyebrow("Partners"),
          h("div", { style: { display: "flex", gap: 64, alignItems: "center" } },
            ["OFFCUT", "mind-map", "KlimUp"].map((p) => h("span", { key: p, style: { fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, letterSpacing: "1px", color: "var(--muted)" } }, p)))), { padding: "64px" })),
      h(DS.Footer, null));
  }

  window.RDM_Home = Home;
  window.RDM_NewHeader = Header;
})();
