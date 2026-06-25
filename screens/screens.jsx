// re:do:mi — prototype screens. Composes the bound design system.
// Each screen registers itself on window.RDM_<Name> for the host router.
(function () {
  const RDM = window.ReDoMiDesignSystem_636513;
  const D = () => window.RDM_DATA;

  // ── helpers ─────────────────────────────────────────────────────────
  function Img({ src, alt, radius }) {
    const [err, setErr] = React.useState(false);
    if (err || !src) return null;
    return React.createElement("img", {
      src,
      alt: alt || "",
      loading: "lazy",
      onError: () => setErr(true),
      style: { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", borderRadius: radius || "inherit" },
    });
  }
  const T = {
    display: (size) => ({ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: size, lineHeight: 1.04, color: "var(--text-heading)", margin: 0 }),
    h2: { fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 36, lineHeight: 1.05, color: "var(--text-heading)", margin: 0 },
    body: { fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.6, color: "var(--text-muted)", margin: 0 },
    label: { fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: 14, color: "var(--text-body)" },
    mono: { fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.08em", color: "var(--text-muted)" },
  };
  const MAX = 1200;

  const dot = (status) => {
    const colors = {
      "Offen": "#2A6FDB",
      "In Bearbeitung": "#F59E0B",
      "Abgeschlossen": "#10B981",
    };
    return colors[status] || "#6B7280";
  };

  function Shell(children) {
    return React.createElement("div", { style: { background: "var(--surface-page)", minHeight: "100vh", display: "flex", flexDirection: "column" } }, children);
  }

  // ── shared navigating top bar ───────────────────────────────────────
  function AppNav({ active, go, openLogin, authed }) {
    const { Logo } = RDM;
    const links = [["Produkte", "products"], ["Designer:innen", "designers"], ["Anschlagbrett", "board"], ["About", "home"]];
    const link = (label, route) => {
      const [h, setH] = React.useState(false);
      const on = active === route;
      return React.createElement("a", {
        key: route, href: "#", onClick: (e) => { e.preventDefault(); go(route); },
        onMouseEnter: () => setH(true), onMouseLeave: () => setH(false),
        style: {
          fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: 14, letterSpacing: "0.04em",
          color: on || h ? "var(--accent)" : "var(--text-heading)", textDecoration: "none",
          paddingBottom: 4, borderBottom: on ? "2px solid var(--accent)" : "2px solid transparent",
          cursor: "pointer", transition: "color 120ms ease",
        },
      }, label);
    };
    const icon = (d) => React.createElement("svg", { width: 20, height: 20, viewBox: "0 0 20 20", fill: "none", stroke: "var(--text-heading)", strokeWidth: 1.6 }, d);
    return React.createElement("nav", {
      style: {
        position: "sticky", top: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 72, padding: "0 48px", background: "var(--color-white)", borderBottom: "1px solid var(--border-hairline)", boxSizing: "border-box",
      },
    },
      React.createElement("a", { href: "#", onClick: (e) => { e.preventDefault(); go("home"); }, style: { textDecoration: "none", display: "flex" } }, React.createElement(Logo)),
      React.createElement("div", { style: { display: "flex", gap: 28, alignItems: "center" } }, links.map(([l, r]) => link(l, r))),
      React.createElement("div", { style: { display: "flex", gap: 22, alignItems: "center" } },
        icon([React.createElement("circle", { key: "c", cx: 9, cy: 9, r: 6 }), React.createElement("line", { key: "l", x1: 13.5, y1: 13.5, x2: 17.5, y2: 17.5, strokeLinecap: "round" })]),
        icon([React.createElement("path", { key: "b", d: "M4 6.5h12l-1 11H5z", strokeLinejoin: "round" }), React.createElement("path", { key: "h", d: "M7 6.5a3 3 0 0 1 6 0" })]),
        authed
          ? React.createElement(AccountMenu, { go })
          : React.createElement("a", { href: "#", onClick: (e) => { e.preventDefault(); openLogin("um dich anzumelden", "dashboard"); }, style: { fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: 14, letterSpacing: "0.04em", color: "var(--text-heading)", textDecoration: "none", cursor: "pointer" } }, "Login / Registrieren")
      )
    );
  }
  window.RDM_AppNav = AppNav;

  // ── account bubble + dropdown ───────────────────────────────────────
  function AccountMenu({ go }) {
    const [open, setOpen] = React.useState(false);
    const ref = React.useRef(null);
    React.useEffect(() => {
      if (!open) return;
      const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
      document.addEventListener("mousedown", onDoc);
      return () => document.removeEventListener("mousedown", onDoc);
    }, [open]);
    const items = [
      ["Dashboard", "dashboard"],
      ["Mein Profil", "dashboard"],
      ["Einstellungen", "dashboard"],
      ["__sep", null],
      ["Abmelden", "__logout"],
    ];
    const go2 = (route) => { setOpen(false); go(route); };
    return React.createElement("div", { ref, style: { position: "relative", display: "flex", alignItems: "center" } },
      // avatar bubble
      React.createElement("button", {
        onClick: () => setOpen((o) => !o),
        style: { position: "relative", width: 36, height: 36, borderRadius: "50%", border: "none", background: "var(--accent)", color: "#1A1A1A", fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 15, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", padding: 0 },
      },
        "B",
        React.createElement("span", { style: { position: "absolute", top: -1, right: -1, width: 10, height: 10, borderRadius: "50%", background: "#E5484D", border: "2px solid var(--color-white)", boxSizing: "border-box" } })
      ),
      // dropdown
      open && React.createElement("div", {
        style: { position: "absolute", top: 46, right: 0, minWidth: 200, background: "var(--color-white)", borderRadius: 8, boxShadow: "0 8px 28px rgba(26,26,26,0.16)", border: "1px solid var(--border-hairline)", padding: 6, display: "flex", flexDirection: "column", zIndex: 100 },
      },
        React.createElement("div", { style: { padding: "10px 12px 8px", display: "flex", flexDirection: "column", gap: 2 } },
          React.createElement("span", { style: { fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 14, color: "var(--text-heading)" } }, "Bianca R."),
          React.createElement("span", { style: { fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--text-muted)" } }, "bianca@beispiel.ch")),
        React.createElement("div", { style: { height: 1, background: "var(--border-hairline)", margin: "4px 0" } }),
        items.map(([label, route], i) =>
          label === "__sep"
            ? React.createElement("div", { key: i, style: { height: 1, background: "var(--border-hairline)", margin: "4px 0" } })
            : React.createElement(MenuItem, { key: i, label, danger: route === "__logout", onClick: () => go2(route) }))
      )
    );
  }
  function MenuItem({ label, onClick, danger }) {
    const [h, setH] = React.useState(false);
    return React.createElement("button", {
      onClick, onMouseEnter: () => setH(true), onMouseLeave: () => setH(false),
      style: { textAlign: "left", border: "none", background: h ? "var(--surface-sage)" : "transparent", borderRadius: 5, padding: "9px 12px", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 500, color: danger ? "#E5484D" : "var(--text-heading)" },
    }, label);
  }

  // ── login gate (working) ────────────────────────────────────────────
  function LoginGate({ subtitle, onClose, onSubmit }) {
    const { Input, Button } = RDM;
    return React.createElement("div", {
      onClick: onClose,
      style: { position: "fixed", inset: 0, background: "rgba(26,26,26,0.92)", display: "flex", alignItems: "center", justifyContent: "center", padding: 16, zIndex: 1000 },
    },
      React.createElement("div", {
        onClick: (e) => e.stopPropagation(),
        style: { width: 480, maxWidth: "calc(100vw - 32px)", boxSizing: "border-box", padding: 48, borderRadius: 12, background: "var(--surface-card)", display: "flex", flexDirection: "column", gap: 18 },
      },
        React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 8 } },
          React.createElement("h2", { style: { ...T.display(28), fontWeight: 600 } }, "Melde dich an"),
          React.createElement("span", { style: { fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-muted)" } }, subtitle)),
        React.createElement(Input, { label: "E-Mail", type: "email", placeholder: "bianca@beispiel.ch", defaultValue: "bianca@beispiel.ch" }),
        React.createElement(Input, { label: "Passwort", type: "password", placeholder: "••••••••", defaultValue: "demo1234" }),
        React.createElement("a", { href: "#", onClick: (e) => { e.preventDefault(); }, style: { alignSelf: "flex-end", marginTop: -4, fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--text-muted)", textDecoration: "none" } }, "Passwort vergessen?"),
        React.createElement(Button, { style: { width: "100%", marginTop: 4 }, onClick: onSubmit }, "Anmelden"),
        React.createElement("a", { href: "#", onClick: (e) => { e.preventDefault(); onSubmit(); }, style: { fontFamily: "var(--font-sans)", fontSize: 14, color: "#1A1A1A", textDecoration: "none" } }, "Noch kein Konto? Registrieren"),
        React.createElement("button", { onClick: onClose, style: { position: "absolute", marginLeft: 432, marginTop: -36, background: "none", border: "none", fontSize: 22, color: "var(--text-muted)", cursor: "pointer" } }, "×")
      )
    );
  }
  window.RDM_LoginGate = LoginGate;

  // ── section heading ─────────────────────────────────────────────────
  function Head({ eyebrow, title, action, onAction }) {
    const { EyebrowLabel, Button } = RDM;
    return React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 12 } },
      eyebrow && React.createElement(EyebrowLabel, null, eyebrow),
      (title || action) && React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-end" } },
        title && React.createElement("h2", { style: T.h2 }, title),
        action && React.createElement(Button, { variant: "ghost", onClick: onAction }, action)));
  }

  // ── HOME ────────────────────────────────────────────────────────────
  function Home({ go, openLogin, authed }) {
    const { Footer, Button } = RDM;
    const d = D();
    const sect = (children, bg, pad) => React.createElement("section", { style: { background: bg || "var(--surface-page)", padding: pad || "96px 48px", boxSizing: "border-box" } },
      React.createElement("div", { style: { maxWidth: MAX, margin: "0 auto", display: "flex", flexDirection: "column", gap: 28 } }, children));
    const goDesigner = (name) => go("designer", { designer: d.byName[name] });
    return Shell([
      React.createElement(AppNav, { key: "nav", active: "", go, openLogin, authed }),
      // hero
      React.createElement("section", { key: "hero", style: { padding: "96px 48px", boxSizing: "border-box" } },
        React.createElement("div", { style: { maxWidth: MAX, margin: "0 auto", display: "flex", gap: 64, alignItems: "center" } },
          React.createElement("div", { style: { flex: "1 1 0", display: "flex", flexDirection: "column", gap: 24, maxWidth: 568 } },
            React.createElement("span", { style: { ...T.mono, textTransform: "uppercase", color: "var(--accent)" } }, "Circular Economy Marketplace"),
            React.createElement("h1", { style: T.display(64) }, "Upcycling,", React.createElement("br"), "handgemacht", React.createElement("br"), React.createElement("span", { style: { color: "var(--accent)" } }, "aus der Szene.")),
            React.createElement("p", { style: { ...T.body, maxWidth: 460 } }, "re:do:mi verbindet Kund:innen mit verifizierten Schweizer Upcycling-Designer:innen — als kuratierte Plattform mit persönlichem Vermittler-Anspruch."),
            React.createElement("div", { style: { display: "flex", gap: 16, marginTop: 4 } },
              React.createElement(Button, { onClick: () => go("products") }, "Produkte entdecken"),
              React.createElement(Button, { variant: "secondary", onClick: () => openLogin("um Designer:in zu werden", "dashboard") }, "Designer:in werden")),
            React.createElement("div", { style: { display: "flex", gap: 28, alignItems: "center", marginTop: 16 } },
              React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 4, alignItems: "center" } },
                React.createElement("div", { style: { fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 28, color: "var(--accent)" } }, "48"),
                React.createElement("span", { style: { ...T.mono, fontSize: 12 } }, "Designer:innen")),
              React.createElement("div", { style: { width: 1, height: 40, background: "var(--color-border)" } }),
              React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 4, alignItems: "center" } },
                React.createElement("div", { style: { fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 28, color: "var(--accent)" } }, "200+"),
                React.createElement("span", { style: { ...T.mono, fontSize: 12 } }, "Projekte")),
              React.createElement("div", { style: { width: 1, height: 40, background: "var(--color-border)" } }),
              React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 4, alignItems: "center" } },
                React.createElement("div", { style: { fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 28, color: "var(--accent)" } }, "🇨🇭"),
                React.createElement("span", { style: { ...T.mono, fontSize: 12 } }, "Schweiz")))),
          React.createElement("div", { style: { flex: "1 1 0", position: "relative", maxWidth: 568, alignSelf: "stretch", minHeight: 520 } },
            React.createElement("div", { style: { position: "relative", width: 380, height: 520, marginLeft: "auto", borderRadius: 8, overflow: "hidden", background: "var(--color-border)" } }, React.createElement(Img, { src: d.heroImg, alt: "Werkstatt" })),
            React.createElement("div", { style: { position: "absolute", left: 16, bottom: 24, width: 210, background: "#fff", borderRadius: 8, boxShadow: "var(--shadow-float)", padding: 16, display: "flex", flexDirection: "column", gap: 4, boxSizing: "border-box", cursor: "pointer" }, onClick: () => goDesigner("Sofia Meier") },
              React.createElement("span", { style: { ...T.mono, textTransform: "uppercase", color: "var(--accent)", fontSize: 10 } }, "Möbel"),
              React.createElement("span", { style: { fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 14, color: "var(--text-heading)" } }, "Sessel «Re-Velvet»"),
              React.createElement("span", { style: { fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--text-muted)" } }, "von Sofia Meier"),
              React.createElement("span", { style: { fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 14, color: "var(--text-heading)" } }, "CHF 480.–"))))),
      // neuheiten
      sect([
        React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 12 } },
          React.createElement("span", { style: { ...T.mono, textTransform: "uppercase", color: "var(--accent)" } }, "Neuheiten"),
          React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-end" } },
            React.createElement("h2", { style: T.h2 }, "Frisch aus dem Ofen"),
            React.createElement(Button, { onClick: () => go("products") }, "Alle Produkte →"))),
        React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 24 } },
          d.products.slice(0, 5).map((p, i) => React.createElement("div", { key: i, style: { display: "flex", flexDirection: "column", gap: 10, cursor: "pointer" }, onClick: () => goDesigner(p.maker) },
            React.createElement("div", { style: { position: "relative", width: "100%", aspectRatio: "4 / 3", background: "var(--color-border)", overflow: "hidden", borderRadius: 4 } }, React.createElement(Img, { src: p.img, alt: p.title })),
            React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 2 } },
              React.createElement("span", { style: { fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 15, color: "var(--text-heading)" } }, p.category),
              React.createElement("span", { style: { fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--text-muted)" } }, p.title)))))
      ]),
      // kategorien
      sect([
        React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 12 } },
          React.createElement("span", { style: { ...T.mono, textTransform: "uppercase", color: "var(--accent)" } }, "Kategorien"),
          React.createElement("h2", { style: T.h2 }, "Kategorien")),
        React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 24 } },
          d.categories.map((c, i) => React.createElement("div", { key: i, style: { padding: 20, borderRadius: 6, background: "#fff", border: "1px solid var(--border-hairline)", cursor: "pointer", textAlign: "center" }, onClick: () => go("products") },
            React.createElement("div", { style: { fontSize: 28, marginBottom: 12 } }, c.glyph),
            React.createElement("span", { style: { fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 14, color: "var(--text-heading)" } }, c.label))))
      ]),
      // designer
      sect([
        React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 12 } },
          React.createElement("span", { style: { ...T.mono, textTransform: "uppercase", color: "var(--accent)" } }, "Designer:innen"),
          React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-end" } },
            React.createElement("h2", { style: T.h2 }, "Lerne unsere Designer:innen kennen"),
            React.createElement(Button, { onClick: () => go("designers") }, "Alle Designer:innen →"))),
        React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 24 } },
          d.designers.map((dz, i) => React.createElement(DesignerTile, { key: i, dz, onClick: () => go("designer", { designer: dz.name }) })))
      ]),
      // anschlagbrett teaser
      React.createElement("section", { key: "board", style: { background: "var(--surface-sage)", padding: "96px 48px", boxSizing: "border-box" } },
        React.createElement("div", { style: { maxWidth: MAX, margin: "0 auto", display: "flex", flexDirection: "column", gap: 28 } },
          React.createElement("span", { style: { ...T.mono, textTransform: "uppercase", color: "var(--accent)" } }, "Anschlagbrett"),
          React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 8, maxWidth: 560 } },
            React.createElement("h2", { style: T.h2 }, "Das Anschlagbrett"),
            React.createElement("p", { style: T.body }, "Hast du ein Stück mit Geschichte? Schreib eine Ausschreibung — und lass Schweizer Designer:innen sich melden.")),
          React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 } },
            d.briefs.slice(0, 3).filter((b) => b.status !== "Abgeschlossen").map((b, i) => React.createElement("div", { key: i, style: { background: "#fff", borderRadius: 8, overflow: "hidden", boxShadow: "var(--shadow-low)", cursor: "pointer" }, onClick: () => go("board") },
              React.createElement("div", { style: { position: "relative", width: "100%", aspectRatio: "4 / 3", background: "var(--color-border)" } }, React.createElement(Img, { src: b.img, alt: b.title })),
              React.createElement("div", { style: { padding: 16, display: "flex", flexDirection: "column", gap: 8 } },
                React.createElement("div", { style: { display: "inline-flex", alignItems: "center", gap: 6 } },
                  React.createElement("span", { style: { width: 8, height: 8, borderRadius: "50%", background: dot(b.status) } }),
                  React.createElement("span", { style: { fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 11, color: "var(--text-heading)" } }, b.status)),
                React.createElement("h3", { style: { fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16, color: "var(--text-heading)", margin: 0 } }, b.title))))),
          React.createElement("div", null, React.createElement(Button, { onClick: () => go("board") }, "Zum Anschlagbrett")))),
      // stimmen
      sect([
        React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 12 } },
          React.createElement("span", { style: { ...T.mono, textTransform: "uppercase", color: "var(--accent)" } }, "Stimmen"),
          React.createElement("h2", { style: T.h2 }, "Was die Community sagt")),
        React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 } },
          d.testimonials.slice(0, 3).map((t, i) => React.createElement("div", { key: i, style: { padding: 24, borderRadius: 6, background: "#fff", border: "1px solid var(--border-hairline)" } },
            React.createElement("blockquote", { style: { margin: 0, marginBottom: 12, fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.6, color: "var(--text-muted)", fontStyle: "italic" } }, '\"' + t.quote + '\"'),
            React.createElement("span", { style: { display: "block", fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 14, color: "var(--text-heading)" } }, t.name),
            React.createElement("span", { style: { display: "block", fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--text-muted)" } }, t.role))))
      ]),
      // partner
      React.createElement("section", { key: "partner", style: { background: "var(--surface-sage)", padding: "72px 48px", boxSizing: "border-box" } },
        React.createElement("div", { style: { maxWidth: MAX, margin: "0 auto", display: "flex", flexDirection: "column", gap: 24 } },
          React.createElement("span", { style: { ...T.mono, textTransform: "uppercase", color: "var(--accent)" } }, "Partner"),
          React.createElement("div", { style: { display: "flex", gap: 48, alignItems: "center", flexWrap: "wrap" } },
            d.partners.map((p, i) => React.createElement("span", { key: i, style: { fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 22, color: "var(--text-muted)" } }, p))))),
      React.createElement(Footer, { key: "footer" })
    ]);
  }
  window.RDM_HomeOld = Home;

  // ── PRODUCTS feed (A1) ──────────────────────────────────────────────
  function Products({ go, openLogin, authed }) {
    const { Footer, Button } = RDM;
    const d = D();
    const cats = ["Alle", "Möbel", "Leuchten", "Accessoires", "Textilien", "Objekte"];
    const [cat, setCat] = React.useState("Alle");
    const list = cat === "Alle" ? d.products : d.products.filter((p) => p.category === cat);
    const chip = (label, on, onClick) => React.createElement("span", { key: label, onClick, style: { fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.04em", padding: "7px 14px", borderRadius: 4, cursor: "pointer", background: on ? "var(--accent)" : "var(--surface-sage)", color: on ? "#fff" : "var(--text-muted)" } }, label);
    return Shell([
      React.createElement(AppNav, { key: "nav", active: "products", go, openLogin, authed }),
      React.createElement("section", { key: "s", style: { padding: "64px 48px 96px", boxSizing: "border-box", flex: 1 } },
        React.createElement("div", { style: { maxWidth: MAX, margin: "0 auto", display: "flex", flexDirection: "column", gap: 28 } },
          React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 12, maxWidth: 620 } },
            React.createElement("span", { style: { ...T.mono, textTransform: "uppercase", color: "var(--accent)" } }, "Produkte"),
            React.createElement("h1", { style: T.display(44) }, "Einzelstücke aus zweiter Hand."),
            React.createElement("p", { style: T.body }, "Jedes Stück handgefertigt von einer verifizierten Schweizer Designer:in — aus dem, was schon da war.")),
          React.createElement("div", { style: { display: "flex", gap: 8, flexWrap: "wrap" } }, cats.map((c) => chip(c, c === cat, () => setCat(c)))),
          React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 } },
            list.map((p, i) => React.createElement("div", { key: i, style: { display: "flex", flexDirection: "column", gap: 10, cursor: "pointer" }, onClick: () => go("designer", { designer: p.maker }) },
              React.createElement("div", { style: { position: "relative", width: "100%", aspectRatio: "4 / 3", background: "var(--color-border)", overflow: "hidden", borderRadius: 4 } }, React.createElement(Img, { src: p.img, alt: p.title })),
              React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 2 } },
                React.createElement("span", { style: { fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 15, color: "var(--text-heading)" } }, p.category),
                React.createElement("span", { style: { fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--text-muted)" } }, p.title))))))),
      React.createElement(Footer, { key: "f" })
    ]);
  }
  window.RDM_Products = Products;

  // ── DESIGNERS feed ──────────────────────────────────────────────────
  function DesignerTile({ dz, onClick }) {
    const [h, setH] = React.useState(false);
    return React.createElement("div", {
      onClick, onMouseEnter: () => setH(true), onMouseLeave: () => setH(false),
      style: { display: "flex", flexDirection: "column", borderRadius: 8, overflow: "hidden", background: "var(--surface-card)", cursor: "pointer", boxShadow: h ? "inset 0 0 0 1px var(--border-hairline), var(--shadow-float)" : "inset 0 0 0 1px var(--border-hairline)", transition: "box-shadow 160ms ease" },
    },
      React.createElement("div", { style: { position: "relative", width: "100%", aspectRatio: "4 / 3", background: "var(--color-border)", overflow: "hidden" } },
        React.createElement(Img, { src: dz.photo, alt: dz.name }),
        React.createElement("span", { style: { position: "absolute", top: 12, left: 12, ...T.mono, fontSize: 10, background: "rgba(255,255,255,0.92)", color: "var(--accent)", padding: "4px 8px", borderRadius: 4 } }, "✓ " + dz.location)),
      React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10, padding: 16 } },
        React.createElement("span", { style: { fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 20, color: "var(--text-heading)", lineHeight: 1 } }, dz.name),
        React.createElement("div", { style: { display: "flex", gap: 6, flexWrap: "wrap" } }, dz.materials.map((m, i) => React.createElement("span", { key: i, style: { fontFamily: "var(--font-sans)", fontSize: 12, padding: "4px 8px", borderRadius: 3, background: "var(--surface-sage)", color: "var(--text-heading)" } }, m))),
        React.createElement("span", { style: { fontFamily: "var(--font-sans)", fontStyle: "italic", fontSize: 14, color: "var(--text-muted)", lineHeight: 1.4 } }, dz.quote)));
  }

  function Designers({ go, openLogin, authed }) {
    const { Footer, Button } = RDM;
    const d = D();
    const all = d.designers.concat(d.designers.slice(0, 3));
    const materials = React.useMemo(() => Array.from(new Set(all.flatMap((x) => x.materials))).sort(), []);
    const typeList = React.useMemo(() => d.categories.map((c) => c.label), []);
    const typesByName = React.useMemo(() => {
      const m = {};
      d.products.forEach((p) => { (m[p.maker] = m[p.maker] || new Set()).add(p.category); });
      return m;
    }, []);
    const [q, setQ] = React.useState("");
    const [mats, setMats] = React.useState([]);
    const [types, setTypes] = React.useState([]);
    const toggleMat = (m) => setMats((cur) => (cur.includes(m) ? cur.filter((x) => x !== m) : cur.concat(m)));
    const toggleType = (t) => setTypes((cur) => (cur.includes(t) ? cur.filter((x) => x !== t) : cur.concat(t)));
    const list = all.filter((dz) => {
      const dzTypes = typesByName[dz.name] || new Set();
      const okType = types.length === 0 || types.some((t) => dzTypes.has(t));
      const ql = q.trim().toLowerCase();
      const okQ = !ql || dz.name.toLowerCase().includes(ql) || dz.location.toLowerCase().includes(ql) || dz.materials.some((m) => m.toLowerCase().includes(ql));
      return okType && okQ;
    });
    const chip = (label, on, onClick) => React.createElement("span", { key: label || "alle", onClick, style: { fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.04em", padding: "7px 14px", borderRadius: 4, cursor: "pointer", whiteSpace: "nowrap", background: on ? "var(--accent)" : "var(--surface-sage)", color: on ? "#fff" : "var(--text-muted)" } }, label);
    return Shell([
      React.createElement(AppNav, { key: "nav", active: "designers", go, openLogin, authed }),
      React.createElement("section", { key: "s", style: { padding: "64px 48px 96px", boxSizing: "border-box", flex: 1 } },
        React.createElement("div", { style: { maxWidth: MAX, margin: "0 auto", display: "flex", flexDirection: "column", gap: 28 } },
          React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 12, maxWidth: 620 } },
          React.createElement("span", { style: { ...T.mono, textTransform: "uppercase", color: "var(--accent)" } }, "Designer:innen"),
            React.createElement("h1", { style: T.display(44) }, "Die Köpfe hinter den Stücken."),
            React.createElement("p", { style: T.body }, "48 verifizierte Upcycling-Designer:innen aus der ganzen Schweiz. Lerne sie kennen — und nimm direkt Kontakt auf.")),
          // search + material filter
          React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 16 } },
            React.createElement("div", { style: { position: "relative" } },
              React.createElement("svg", { width: 18, height: 18, viewBox: "0 0 20 20", fill: "none", stroke: "var(--text-muted)", strokeWidth: 1.6, style: { position: "absolute", left: 14, top: 13 } },
                React.createElement("circle", { cx: 9, cy: 9, r: 6 }), React.createElement("line", { x1: 13.5, y1: 13.5, x2: 17.5, y2: 17.5, strokeLinecap: "round" })),
              React.createElement("input", { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Designer:in, Ort oder Material suchen …", style: { width: "100%", boxSizing: "border-box", padding: "12px 14px 12px 42px", borderRadius: 4, border: "none", boxShadow: "inset 0 0 0 1px var(--border-hairline)", outline: "none", fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-body)", background: "#fff" } })),
            React.createElement("div", { style: { display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" } },
              React.createElement("span", { style: { ...T.mono, color: "var(--text-muted)", marginRight: 4 } }, "PRODUKTTYP"),
              chip("Alle", types.length === 0, () => setTypes([])),
              typeList.map((t) => chip(t, types.includes(t), () => toggleType(t))))),
          // grid
          list.length > 0
            ? React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 } },
                list.map((dz, i) => React.createElement(DesignerTile, { key: i, dz, onClick: () => go("designer", { designer: dz }) })))
            : React.createElement("p", { style: { ...T.body, padding: "32px 0" } }, "Keine Designer:innen gefunden. Passe Suche oder Material an."))),
      React.createElement(Footer, { key: "f" })
    ]);
  }
  window.RDM_DesignersOld = Designers;

  // ── DESIGNER profile (A2) ───────────────────────────────────────────
  // simple work tile (image + two text lines), matching the lo-fi grid
  function WorkTile({ p, onClick }) {
    const [h, setH] = React.useState(false);
    return React.createElement("div", {
      onClick, onMouseEnter: () => setH(true), onMouseLeave: () => setH(false),
      style: { display: "flex", flexDirection: "column", gap: 10, cursor: "pointer" },
    },
      React.createElement("div", { style: { position: "relative", width: "100%", aspectRatio: "4 / 3", background: "var(--color-border)", overflow: "hidden", borderRadius: 4, boxShadow: h ? "var(--shadow-float)" : "none", transition: "box-shadow 160ms ease" } },
        React.createElement(Img, { src: p.img, alt: p.title })),
      React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 2 } },
        React.createElement("span", { style: { fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 15, color: "var(--text-heading)" } }, p.category),
        React.createElement("span", { style: { fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--text-muted)" } }, p.title)));
  }

  function Designer({ go, openLogin, authed, params }) {
    const { Footer, Button, Tag } = RDM;
    const d = D();
    const param = params && params.designer;
    const dz = (typeof param === "string" ? d.byName[param] : param) || d.designers[0];
    const own = d.products.filter((p) => p.maker === dz.name);
    const all = own.concat(d.products.filter((p) => p.maker !== dz.name));
    const banner = (own[0] && own[0].img) || d.heroImg;
    const [showAll, setShowAll] = React.useState(false);
    const works = showAll ? all : all.slice(0, 6);
    const contact = () => (authed ? go("dashboard", { designer: dz.name }) : openLogin("um " + dz.name + " zu kontaktieren", "dashboard"));
    return Shell([
      React.createElement(AppNav, { key: "nav", active: "designers", go, openLogin, authed }),
      // full-width hero banner
      React.createElement("div", { key: "hero", style: { position: "relative", width: "100%", height: 420, background: "var(--color-border)", overflow: "hidden" } },
        React.createElement(Img, { src: banner, alt: dz.name })),
      React.createElement("section", { key: "s", style: { padding: "48px 48px 0", boxSizing: "border-box", flex: 1 } },
        React.createElement("div", { style: { maxWidth: MAX, margin: "0 auto", display: "flex", flexDirection: "column" } },
          React.createElement("a", { href: "#", onClick: (e) => { e.preventDefault(); go("designers"); }, style: { ...T.mono, color: "var(--accent)", textDecoration: "none", marginBottom: 32 } }, "← Alle Designer:innen"),
          // header: circular portrait + name/meta/bio/materials + contact column
          React.createElement("div", { style: { display: "flex", gap: 40, alignItems: "flex-start" } },
            React.createElement("div", { style: { position: "relative", width: 160, height: 160, flex: "0 0 auto", borderRadius: "50%", overflow: "hidden", background: "var(--color-border)" } }, React.createElement(Img, { src: dz.photo, alt: dz.name, radius: "50%" })),
            React.createElement("div", { style: { flex: "1 1 0", display: "flex", flexDirection: "column", gap: 14 } },
              React.createElement("h1", { style: T.display(48) }, dz.name),
              React.createElement("span", { style: { fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 16, color: "var(--text-heading)" } }, "Verifiziert · " + dz.location + " · seit " + dz.since),
              React.createElement("p", { style: { ...T.body, maxWidth: 620 } }, dz.bio),
              React.createElement("div", { style: { display: "flex", gap: 8, flexWrap: "wrap", marginTop: 4 } }, dz.materials.map((m, i) => React.createElement(Tag, { key: i }, m)))),
            React.createElement("div", { style: { flex: "0 0 auto", display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 12, paddingTop: 4 } },
              React.createElement(Button, { onClick: contact }, "Kontakt aufnehmen"),
              !authed && React.createElement("span", { style: { ...T.mono, color: "var(--text-muted)", textAlign: "right" } }, "🔒 Anmeldung erforderlich"))),
          // divider
          React.createElement("div", { style: { height: 1, background: "var(--border-hairline)", margin: "48px 0 40px" } }),
          // Works heading (centered)
          React.createElement("h2", { style: { ...T.display(40), fontWeight: 600, textAlign: "center", marginBottom: 40 } }, "Werke"),
          // grid
          React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", columnGap: 32, rowGap: 40 } },
            works.map((p, i) => React.createElement(WorkTile, { key: i, p, onClick: contact }))),
          // show more (black button)
          all.length > 6 && React.createElement("div", { style: { display: "flex", justifyContent: "center", padding: "56px 0 96px" } },
            React.createElement("button", {
              onClick: () => setShowAll((s) => !s),
              style: { background: "var(--text-heading)", color: "#fff", border: "none", borderRadius: 6, padding: "14px 64px", fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: 15, letterSpacing: "0.02em", cursor: "pointer" },
            }, showAll ? "Weniger anzeigen" : "Mehr anzeigen")))),
      React.createElement(Footer, { key: "f" })
    ]);
  }
  window.RDM_Designer = Designer;

  // ── BOARD / Anschlagbrett (B1 guest + B3 authed) ────────────────────
  function Board({ go, openLogin, authed, params }) {
    const { Footer, Button } = RDM;
    const d = D();
    const filters = ["Alle", "Möbel", "Leuchten", "Textilien", "Objekte", "Accessoires"];
    const dot = (s) => (s === "Offen" ? "var(--color-muted)" : "var(--accent)");
    const openBrief = (b) => (authed ? go("postlive", { brief: b }) : openLogin("um Details zu sehen und einen Auftrag zu posten", "board"));
    const create = () => (authed ? go("postcreate") : openLogin("um eine eigene Ausschreibung zu posten", "postcreate"));
    const [showCount, setShowCount] = React.useState(5);
    return Shell([
      React.createElement(AppNav, { key: "nav", active: "board", go, openLogin, authed }),
      React.createElement("section", { key: "s", style: { padding: "64px 48px 96px", boxSizing: "border-box", flex: 1 } },
        React.createElement("div", { style: { maxWidth: MAX, margin: "0 auto", display: "flex", flexDirection: "column", gap: 28 } },
          React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, flexWrap: "wrap" } },
            React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 12, maxWidth: 600 } },
              React.createElement("span", { style: { ...T.mono, textTransform: "uppercase", color: "var(--accent)" } }, "Anschlagbrett"),
              React.createElement("h1", { style: T.display(48) }, "Stücke, die ein zweites Leben suchen."),
              React.createElement("p", { style: T.body }, authed ? "Du bist eingeloggt — öffne ein Projekt für Details oder schreibe deine eigene Ausschreibung." : "Öffentliche Ausschreibungen von Kund:innen. Melde dich an, um Details zu sehen oder selbst zu posten.")),
            React.createElement(Button, { onClick: create }, "Ausschreibung erstellen")),
          authed && React.createElement("div", { style: { display: "inline-flex", alignSelf: "flex-start", alignItems: "center", gap: 8, background: "var(--surface-sage)", padding: "8px 14px", borderRadius: 20 } },
            React.createElement("span", { style: { width: 8, height: 8, borderRadius: "50%", background: "var(--accent)" } }),
            React.createElement("span", { style: { ...T.mono, color: "var(--text-body)" } }, "Eingeloggt als Bianca R.")),
          React.createElement("div", { style: { display: "flex", gap: 8, flexWrap: "wrap" } }, filters.map((f, i) => React.createElement("span", { key: f, style: { fontFamily: "var(--font-mono)", fontSize: 11, padding: "7px 14px", borderRadius: 4, background: i === 0 ? "var(--accent)" : "var(--surface-sage)", color: i === 0 ? "#fff" : "var(--text-muted)", cursor: "pointer" } }, f))),
          (function () {
            const open = d.briefs.filter((b) => b.status !== "Abgeschlossen");
            const shown = open.slice(0, showCount);
            return React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 12 } },
              shown.map((b, i) => React.createElement("div", {
                key: i, onClick: () => openBrief(b),
                style: { display: "flex", alignItems: "stretch", gap: 24, background: "#fff", border: "1px solid var(--border-hairline)", borderRadius: 6, padding: "20px 24px", cursor: "pointer" },
                onMouseEnter: (e) => { e.currentTarget.style.boxShadow = "var(--shadow-float)"; },
                onMouseLeave: (e) => { e.currentTarget.style.boxShadow = "none"; },
              },
                React.createElement("div", { style: { flex: "1 1 0", minWidth: 0, display: "flex", flexDirection: "column", gap: 6 } },
                  React.createElement("h3", { style: { fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 22, color: "var(--text-heading)", margin: 0 } }, b.title),
                  React.createElement("p", { style: { fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-muted)", margin: 0, lineHeight: 1.5, overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 1, WebkitBoxOrient: "vertical" } }, b.desc)),
                React.createElement("div", { style: { flex: "0 0 auto", display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "center", gap: 6, paddingLeft: 24, borderLeft: "1px solid var(--border-hairline)" } },
                  React.createElement("span", { style: { ...T.mono, color: "var(--text-muted)" } }, b.date),
                  React.createElement("span", { style: { display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 13, color: "var(--text-heading)" } },
                    React.createElement("span", { style: { width: 8, height: 8, borderRadius: "50%", background: dot(b.status) } }),
                    "Status: " + b.status)))),
              showCount < open.length && React.createElement("div", { style: { display: "flex", justifyContent: "center", paddingTop: 24 } },
                React.createElement("button", { onClick: () => setShowCount((c) => c + 5), style: { background: "var(--text-heading)", color: "#fff", border: "none", borderRadius: 6, padding: "14px 64px", fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: 15, letterSpacing: "0.02em", cursor: "pointer" } }, "Mehr anzeigen")));
          })())),
      React.createElement(Footer, { key: "f" })
    ]);
  }
  window.RDM_BoardOld = Board;

  // ── POST create (B4) ────────────────────────────────────────────────
  function PostCreate({ go, openLogin, authed }) {
    const { Footer, Button } = RDM;
    const cats = ["Möbel", "Leuchten", "Accessoires", "Textilien", "Objekte"];
    const [cat, setCat] = React.useState("Textilien");
    return Shell([
      React.createElement(AppNav, { key: "nav", active: "board", go, openLogin, authed }),
      React.createElement("section", { key: "s", style: { padding: "48px 48px 96px", boxSizing: "border-box", flex: 1 } },
        React.createElement("div", { style: { maxWidth: 720, margin: "0 auto", display: "flex", flexDirection: "column", gap: 28 } },
          React.createElement("a", { href: "#", onClick: (e) => { e.preventDefault(); go("board"); }, style: { ...T.mono, color: "var(--accent)", textDecoration: "none" } }, "← Zum Anschlagbrett"),
          React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 12 } },
            React.createElement("span", { style: { ...T.mono, textTransform: "uppercase", color: "var(--accent)" } }, "Neue Ausschreibung"),
            React.createElement("h1", { style: T.display(40) }, "Erzähl uns von deinem Stück."),
            React.createElement("p", { style: T.body }, "Beschreibe, was du dir vorstellst — Schweizer Designer:innen melden sich mit Ideen und Offerten.")),
          React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 6 } },
            React.createElement("label", { style: T.label }, "Titel"),
            React.createElement("input", { placeholder: "z.B. Erbsofa neu beziehen", defaultValue: "Erbsofa neu beziehen", style: { fontFamily: "var(--font-sans)", fontSize: 14, padding: 12, borderRadius: 6, border: "1px solid var(--border-hairline)", boxSizing: "border-box", outline: "none" } })),
          React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 6 } },
            React.createElement("label", { style: T.label }, "Beschreibung"),
            React.createElement("textarea", { rows: 5, defaultValue: "Ein 3-Sitzer aus den 70ern, von meiner Grossmutter. Der Bezug ist durch, das Gestell ist top. Ich möchte es neu beziehen — gern mit Stoff, der eine Geschichte erzählt.", style: { width: "100%", boxSizing: "border-box", padding: "12px 14px", borderRadius: 4, border: "none", boxShadow: "inset 0 0 0 1px var(--border-hairline)", background: "#fff", fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-body)", outline: "none", resize: "vertical" } })),
          React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 6 } },
            React.createElement("label", { style: T.label }, "Bilder"),
            React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 } },
              [0, 1, 2].map((i) => React.createElement("div", { key: i, style: { position: "relative", aspectRatio: "1 / 1", borderRadius: 4, border: "1.5px dashed var(--color-border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", fontFamily: "var(--font-mono)", fontSize: 11, cursor: "pointer", background: "var(--surface-sage)" } }, i === 0 ? "＋ Bild" : "＋")))),
          React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 8 } },
            React.createElement("label", { style: T.label }, "Kategorie"),
            React.createElement("div", { style: { display: "flex", gap: 8, flexWrap: "wrap" } }, cats.map((c) => React.createElement("span", { key: c, onClick: () => setCat(c), style: { fontFamily: "var(--font-mono)", fontSize: 11, padding: "7px 14px", borderRadius: 4, cursor: "pointer", background: c === cat ? "var(--accent)" : "var(--surface-sage)", color: c === cat ? "#fff" : "var(--text-muted)" } }, c)))),
          React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 6 } },
            React.createElement("label", { style: T.label }, "Budget (optional)"),
            React.createElement("input", { placeholder: "z.B. CHF 400–600", style: { fontFamily: "var(--font-sans)", fontSize: 14, padding: 12, borderRadius: 6, border: "1px solid var(--border-hairline)", boxSizing: "border-box", outline: "none" } })),
          React.createElement("div", { style: { display: "flex", gap: 14, marginTop: 8 } },
            React.createElement(Button, { onClick: () => go("postlive", { brief: { title: "Erbsofa neu beziehen", status: "Offen", tag: "Textilien", img: D().briefs[1].img, desc: "Ein 3-Sitzer aus den 70ern, von meiner Grossmutter. Neu beziehen mit Stoff, der eine Geschichte erzählt.", budget: "CHF 400–600" } }) }, "Ausschreibung veröffentlichen"),
            React.createElement(Button, { variant: "secondary", onClick: () => go("board") }, "Abbrechen")))),
      React.createElement(Footer, { key: "f" })
    ]);
  }
  window.RDM_PostCreate = PostCreate;

  // ── POST live + designer selection (B5 + B6) ────────────────────────
  function PostLive({ go, openLogin, authed, params }) {
    const { Footer, Button } = RDM;
    const d = D();
    const b = (params && params.brief) || { title: "Erbsofa neu beziehen", status: "Offen", tag: "Textilien", img: d.briefs[1].img, desc: "Ein 3-Sitzer aus den 70ern, von meiner Grossmutter. Neu beziehen mit Stoff, der eine Geschichte erzählt.", budget: "CHF 400–600" };
    return Shell([
      React.createElement(AppNav, { key: "nav", active: "board", go, openLogin, authed }),
      React.createElement("section", { key: "s", style: { padding: "48px 48px 96px", boxSizing: "border-box", flex: 1 } },
        React.createElement("div", { style: { maxWidth: MAX, margin: "0 auto", display: "flex", flexDirection: "column", gap: 40 } },
          React.createElement("a", { href: "#", onClick: (e) => { e.preventDefault(); go("board"); }, style: { ...T.mono, color: "var(--accent)", textDecoration: "none" } }, "← Zum Anschlagbrett"),
          React.createElement("div", { style: { background: "var(--surface-sage)", borderRadius: 8, padding: 12, display: "inline-flex", alignSelf: "flex-start", alignItems: "center", gap: 10 } },
            React.createElement("span", { style: { fontSize: 18 } }, "✓"),
            React.createElement("span", { style: { ...T.label } }, "Deine Ausschreibung ist live — Designer:innen können sich jetzt melden.")),
          // detail
          React.createElement("div", { style: { display: "flex", gap: 48, alignItems: "flex-start" } },
            React.createElement("div", { style: { position: "relative", width: 420, height: 300, flex: "0 0 auto", borderRadius: 8, overflow: "hidden", background: "var(--color-border)" } }, React.createElement(Img, { src: b.img, alt: b.title })),
            React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 16 } },
              React.createElement("div", { style: { display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 12px", borderRadius: 4, background: "var(--surface-sage)" } },
                React.createElement("span", { style: { width: 8, height: 8, borderRadius: "50%", background: dot(b.status) } }),
                React.createElement("span", { style: { ...T.mono, fontWeight: 600, color: "var(--text-heading)" } }, b.status)),
              React.createElement("h1", { style: T.display(40) }, b.title),
              React.createElement("p", { style: { ...T.body, maxWidth: 480 } }, b.desc || "—"),
              React.createElement("div", { style: { display: "flex", gap: 8 } },
                React.createElement("span", { style: { fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 13, padding: "6px 12px", borderRadius: 4, background: "var(--surface-sage)", color: "var(--text-heading)" } }, b.tag),
                b.budget && React.createElement("span", { style: { fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 13, padding: "6px 12px", borderRadius: 4, background: "var(--surface-sage)", color: "var(--text-heading)" } }, "Budget · " + b.budget)),
              React.createElement("span", { style: { ...T.mono, color: "var(--text-muted)", marginTop: 4 } }, "Ausgeschrieben von Bianca R. · Bern"))),
          // interested
          React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 20 } },
            React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 6 } },
              React.createElement("span", { style: { ...T.mono, textTransform: "uppercase", color: "var(--accent)" } }, "3 Designer:innen interessiert"),
              React.createElement("h2", { style: { ...T.h2, fontSize: 28 } }, "Wähle, mit wem du zusammenarbeitest")),
            React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 } },
              d.interested.map((it, i) => {
                const dz = d.byName[it.ref];
                return React.createElement("div", { key: i, style: { display: "flex", flexDirection: "column", gap: 12, background: "#fff", borderRadius: 8, boxShadow: "inset 0 0 0 1px var(--border-hairline)", padding: 16, cursor: "pointer" }, onClick: () => go("dashboard", { designer: dz.name }) },
                  React.createElement("div", { style: { display: "flex", gap: 12, alignItems: "center" } },
                    React.createElement("div", { style: { position: "relative", width: 56, height: 56, flex: "0 0 auto", borderRadius: 6, overflow: "hidden", background: "var(--color-border)" } }, React.createElement(Img, { src: dz.photo, alt: dz.name })),
                    React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 2 } },
                      React.createElement("span", { style: { fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 18, color: "var(--text-heading)" } }, dz.name),
                      React.createElement("span", { style: { ...T.mono, color: "var(--text-muted)" } }, dz.materials.slice(0, 2).join(" · ")))),
                  React.createElement("p", { style: { fontFamily: "var(--font-sans)", fontStyle: "italic", fontSize: 14, color: "var(--text-muted)", lineHeight: 1.4, margin: 0, flex: 1 } }, it.note),
                  React.createElement(Button, { style: { width: "100%" }, onClick: () => go("dashboard", { designer: dz.name }) }, "Auswählen"));
              }))))),
      React.createElement(Footer, { key: "f" })
    ]);
  }
  window.RDM_PostLive = PostLive;

  // ── DASHBOARD / chat + offer + payment + rating (A4–A7, B7) ─────────
  function Dashboard({ go, openLogin, authed, params }) {
    const { StatusPill, Button } = RDM;
    const who = (params && params.designer) || "Lena Brunner";
    const steps = ["Anfrage", "Offerte", "Anzahlung", "Produktion", "Abschluss"];
    const [stage, setStage] = React.useState(1);
    const [rateOpen, setRateOpen] = React.useState(false);
    const [rated, setRated] = React.useState(0);
    const [pay, setPay] = React.useState("TWINT");
    const [msgs, setMsgs] = React.useState([
      { me: false, text: "Hallo! Schön, dass du dich meldest. Worum geht es genau?" },
      { me: true, text: "Hi! Es geht um ein Stück mit Geschichte — ich schick dir gleich die Details." },
      { me: false, text: "Perfekt. Ich schaue es mir an und melde mich mit einer Offerte." },
    ]);
    const [draft, setDraft] = React.useState("");
    const send = () => { if (!draft.trim()) return; setMsgs((m) => [...m, { me: true, text: draft.trim() }]); setDraft(""); };
    const projects = [
      { title: "Sofa-Projekt", who: "mit " + who, status: steps[stage], active: true },
      { title: "Lampen-Anfrage", who: "Marco Keller", status: "In Bearbeitung", active: false },
      { title: "Tisch-Idee", who: "Jonas Frei", status: "Abgeschlossen", active: false },
    ];
    const card = (children) => React.createElement("div", { style: { alignSelf: "center", width: "100%", maxWidth: 460, background: "#fff", borderRadius: 12, boxShadow: "0 1px 3px rgba(0,0,0,.08), inset 0 0 0 1px var(--border-hairline)", padding: 22, display: "flex", flexDirection: "column", gap: 14, boxSizing: "border-box" } }, children);
    const row = (a, b, strong) => React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "baseline" } },
      React.createElement("span", { style: { fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-muted)" } }, a),
      React.createElement("span", { style: { fontFamily: "var(--font-sans)", fontSize: strong ? 18 : 14, fontWeight: strong ? 700 : 500, color: "var(--text-heading)" } }, b));

    const stageCard = () => {
      if (stage === 0) return card([
        React.createElement("span", { key: "t", style: { ...T.mono, color: "var(--accent)" } }, "ANFRAGE GESENDET"),
        React.createElement("p", { key: "p", style: { ...T.body, fontSize: 14 } }, who + " bereitet eine Offerte vor. Du wirst benachrichtigt, sobald sie eintrifft."),
        React.createElement(Button, { key: "b", onClick: () => setStage(1) }, "Offerte erhalten (Demo)")]);
      if (stage === 1) return card([
        React.createElement("span", { key: "t", style: { ...T.mono, color: "var(--accent)" } }, "OFFERTE · von " + who),
        React.createElement("h3", { key: "h", style: { ...T.display(20), fontWeight: 600 } }, "Sofa neu beziehen"),
        React.createElement("p", { key: "p", style: { ...T.body, fontSize: 14 } }, "Bezug erneuern mit Patchwork aus Stoffresten, Gestell aufarbeiten und neu verleimen. Dauer ca. 4 Wochen."),
        React.createElement("div", { key: "r", style: { display: "flex", flexDirection: "column", gap: 8, borderTop: "1px solid var(--border-hairline)", paddingTop: 12 } }, row("Gesamtpreis", "CHF 1'920.–", true), row("Anzahlung (30%)", "CHF 576.–")),
        React.createElement("div", { key: "b", style: { display: "flex", gap: 10, marginTop: 4 } },
          React.createElement(Button, { style: { flex: 1 }, onClick: () => setStage(2) }, "Akzeptieren"),
          React.createElement(Button, { variant: "secondary", style: { flex: 1 }, onClick: () => setMsgs((m) => [...m, { me: true, text: "Könnten wir die Offerte nochmal besprechen?" }]) }, "Ablehnen"))]);
      if (stage === 2) return card([
        React.createElement("span", { key: "t", style: { ...T.mono, color: "var(--accent)" } }, "ANZAHLUNG"),
        React.createElement("p", { key: "p", style: { ...T.body, fontSize: 14 } }, "Mit der Anzahlung startet die Produktion. Der Restbetrag wird bei Abschluss fällig."),
        row("Anzahlung", "CHF 576.–", true),
        React.createElement("div", { key: "pm", style: { display: "flex", flexDirection: "column", gap: 8, borderTop: "1px solid var(--border-hairline)", paddingTop: 12 } },
          React.createElement("span", { style: T.label }, "Zahlungsmethode"),
          ["TWINT", "Kreditkarte", "Rechnung"].map((m) => React.createElement("label", { key: m, style: { display: "flex", alignItems: "center", gap: 10, cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-body)" } },
            React.createElement("span", { onClick: () => setPay(m), style: { width: 16, height: 16, borderRadius: "50%", boxShadow: "inset 0 0 0 1.5px " + (pay === m ? "var(--accent)" : "var(--color-border)"), background: pay === m ? "radial-gradient(var(--accent) 42%, #fff 46%)" : "#fff", display: "inline-block" } }), m))),
        React.createElement(Button, { key: "b", onClick: () => setStage(3) }, "Anzahlung bestätigen")]);
      if (stage === 3) return card([
        React.createElement("span", { key: "t", style: { ...T.mono, color: "var(--accent)" } }, "IN PRODUKTION"),
        React.createElement("p", { key: "p", style: { ...T.body, fontSize: 14 } }, who + " arbeitet an deinem Stück. Voraussichtliche Fertigstellung: in 4 Wochen."),
        React.createElement("div", { key: "bar", style: { height: 8, borderRadius: 4, background: "var(--surface-sage)", overflow: "hidden" } }, React.createElement("div", { style: { width: "55%", height: "100%", background: "var(--accent)" } })),
        React.createElement("span", { key: "pct", style: { ...T.mono, color: "var(--text-muted)" } }, "55% · Polsterung abgeschlossen"),
        React.createElement(Button, { key: "b", onClick: () => setStage(4) }, "Lieferung bestätigen & abschliessen")]);
      return card([
        React.createElement("span", { key: "t", style: { ...T.mono, color: "var(--accent)" } }, "ABSCHLUSS"),
        React.createElement("h3", { key: "h", style: { ...T.display(20), fontWeight: 600 } }, rated ? "Danke für deine Bewertung! 🎉" : "Projekt abgeschlossen 🎉"),
        React.createElement("p", { key: "p", style: { ...T.body, fontSize: 14 } }, rated ? "Du hast " + who + " mit " + rated + " von 5 Sternen bewertet. Dein Stück hat ein zweites Leben." : "Schlusszahlung CHF 1'344.– beglichen. Wie war die Zusammenarbeit mit " + who + "?"),
        !rated && React.createElement(Button, { key: "b", onClick: () => setRateOpen(true) }, who + " bewerten")]);
    };

    return React.createElement("div", { style: { background: "var(--surface-page)", height: "100vh", display: "flex", flexDirection: "column" } },
      React.createElement(AppNav, { active: "dashboard", go, openLogin, authed }),
      React.createElement("div", { style: { flex: 1, display: "flex", minHeight: 0 } },
        // sidebar
        React.createElement("aside", { style: { width: 300, background: "var(--surface-sage)", padding: "24px 18px", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: 8, overflowY: "auto" } },
          React.createElement("span", { style: { fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 16, color: "var(--text-heading)", marginBottom: 8 } }, "Meine Projekte"),
          projects.map((p, i) => React.createElement("div", { key: i, style: { padding: 14, borderRadius: 8, cursor: "pointer", background: p.active ? "#fff" : "transparent", boxShadow: p.active ? "inset 0 0 0 1px var(--border-hairline)" : "none", display: "flex", flexDirection: "column", gap: 4 } },
            React.createElement("span", { style: { fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 14, color: "var(--text-heading)" } }, p.title),
            React.createElement("span", { style: { fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--text-muted)" } }, p.who),
            React.createElement("span", { style: { fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".04em", color: "var(--accent)", marginTop: 2 } }, p.status)))),
        // main
        React.createElement("main", { style: { flex: 1, display: "flex", flexDirection: "column", minWidth: 0 } },
          React.createElement("div", { style: { padding: "18px 32px", borderBottom: "1px solid var(--border-hairline)", display: "flex", flexDirection: "column", gap: 12 } },
            React.createElement("span", { style: { fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 16, color: "var(--text-heading)" } }, "Sofa-Projekt · mit " + who),
            React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" } },
              steps.map((s, i) => React.createElement(React.Fragment, { key: s },
                React.createElement("span", { onClick: () => setStage(i), style: { cursor: "pointer" } }, React.createElement(StatusPill, { active: i === stage }, s)),
                i < steps.length - 1 && React.createElement("span", { style: { color: "var(--color-muted)", fontSize: 14 } }, "›"))))),
          React.createElement("div", { style: { flex: 1, overflowY: "auto", padding: "24px 32px", display: "flex", flexDirection: "column", gap: 16, background: "var(--surface-page)" } },
            msgs.map((m, i) => React.createElement("div", { key: i, style: { display: "flex", justifyContent: m.me ? "flex-end" : "flex-start" } },
              React.createElement("div", { style: { maxWidth: 520, padding: "12px 16px", borderRadius: 12, background: m.me ? "var(--accent)" : "var(--surface-sage)", color: m.me ? "#fff" : "var(--text-body)", fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.5 } }, m.text))),
            stageCard()),
          React.createElement("div", { style: { padding: "16px 32px", borderTop: "1px solid var(--border-hairline)", display: "flex", gap: 12, alignItems: "center" } },
            React.createElement("input", { value: draft, onChange: (e) => setDraft(e.target.value), onKeyDown: (e) => e.key === "Enter" && send(), placeholder: "Nachricht schreiben …", style: { flex: 1, padding: "12px 14px", borderRadius: 4, border: "none", boxShadow: "inset 0 0 0 1px var(--border-hairline)", outline: "none", fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-body)" } }),
            React.createElement(Button, { size: "sm", onClick: send, style: { height: 41 } }, "Senden")))),
      // rating modal
      rateOpen && React.createElement("div", { onClick: () => setRateOpen(false), style: { position: "fixed", inset: 0, background: "rgba(26,26,26,0.92)", display: "flex", alignItems: "center", justifyContent: "center", padding: 16, zIndex: 1000 } },
        React.createElement("div", { onClick: (e) => e.stopPropagation(), style: { width: 460, maxWidth: "calc(100vw - 32px)", boxSizing: "border-box", padding: 40, borderRadius: 12, background: "#fff", display: "flex", flexDirection: "column", gap: 18 } },
          React.createElement("h2", { style: { ...T.display(26), fontWeight: 600 } }, "Wie war die Zusammenarbeit?"),
          React.createElement("span", { style: { fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-muted)" } }, "Deine Bewertung hilft anderen Kund:innen, " + who + " zu finden."),
          React.createElement(StarPicker, null),
          React.createElement("textarea", { rows: 4, placeholder: "Was möchtest du anderen mitgeben? (optional)", style: { width: "100%", boxSizing: "border-box", padding: "12px 14px", borderRadius: 4, border: "none", boxShadow: "inset 0 0 0 1px var(--border-hairline)", fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-body)", outline: "none", resize: "vertical" } }),
          React.createElement(Button, { style: { width: "100%" }, onClick: () => { setRated(window.__rdmStars || 5); setRateOpen(false); } }, "Bewertung absenden"))));

    function StarPicker() {
      const [hov, setHov] = React.useState(0);
      const [val, setVal] = React.useState(5);
      window.__rdmStars = val;
      return React.createElement("div", { style: { display: "flex", gap: 6 } }, [1, 2, 3, 4, 5].map((n) =>
        React.createElement("span", { key: n, onMouseEnter: () => setHov(n), onMouseLeave: () => setHov(0), onClick: () => { setVal(n); window.__rdmStars = n; }, style: { fontSize: 32, lineHeight: 1, cursor: "pointer", color: (hov || val) >= n ? "var(--accent)" : "var(--color-border)" } }, "★")));
    }
  }
  window.RDM_Dashboard = Dashboard;
})();
