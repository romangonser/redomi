// re:do:mi — Designer:innen feed on the Re-Do-Mi (yellow) design system.
// Defines window.RDM_Designers. Reuses the new navigating header from home.js.
(function () {
  const h = (...a) => React.createElement(...a);
  const DS = window.ReDoMiDesignSystem_e4680b;
  const D = () => window.RDM_DATA;

  const Wrap = (children, style) => h("div", { style: Object.assign({ maxWidth: 1440, margin: "0 auto", padding: "0 64px", boxSizing: "border-box" }, style) }, children);
  const Eyebrow = (txt) => h("span", { style: { fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12, letterSpacing: "1.98px", textTransform: "uppercase", color: "var(--medium)" } }, txt);

  function Designers({ go, openLogin, authed }) {
    const Header = window.RDM_NewHeader;
    const d = D();
    const all = d.designers;
    const materials = React.useMemo(() => Array.from(new Set(all.flatMap((x) => x.materials))).sort(), [all]);
    const [q, setQ] = React.useState("");
    const [mat, setMat] = React.useState("");
    const list = all.filter((dz) => {
      const okMat = !mat || dz.materials.includes(mat);
      const ql = q.trim().toLowerCase();
      const okQ = !ql || dz.name.toLowerCase().includes(ql) || dz.location.toLowerCase().includes(ql) || dz.materials.some((m) => m.toLowerCase().includes(ql));
      return okMat && okQ;
    });
    const chip = (label, active, onClick) => h("span", { key: label || "alle", onClick,
      style: { fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 11, letterSpacing: "1.4px", textTransform: "uppercase", padding: "9px 16px", borderRadius: 2, cursor: "pointer", border: "1px solid " + (active ? "var(--ink)" : "var(--border-light)"), background: active ? "var(--ink)" : "var(--white)", color: active ? "var(--white)" : "var(--medium)", whiteSpace: "nowrap", transition: "all .16s ease" } }, label);

    return h("div", { style: { background: "var(--white)", minHeight: "100vh" } },
      h(Header, { go, openLogin, activeRoute: "designers", authed }),
      h("section", { style: { background: "var(--white)" } },
        Wrap([
          // intro
          h("div", { key: "in", style: { display: "flex", flexDirection: "column", gap: 12, maxWidth: 640 } },
            Eyebrow("Community"),
            h("h1", { style: { margin: 0, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 48, lineHeight: 1.04, letterSpacing: "-0.3px", color: "var(--ink)", textTransform: "uppercase" } }, "Die Köpfe hinter den Stücken"),
            h("p", { style: { margin: 0, fontFamily: "var(--font-body)", fontWeight: 300, fontSize: 17, lineHeight: 1.7, color: "var(--medium)" } }, "Verifizierte Upcycling-Designer:innen aus der ganzen Schweiz. Lerne sie kennen — und nimm direkt Kontakt auf.")),
          // search
          h("div", { key: "se", style: { position: "relative", maxWidth: 440, marginTop: 40 } },
            h("span", { style: { position: "absolute", left: 16, top: 0, bottom: 0, display: "flex", alignItems: "center", color: "var(--muted)" } }, h(DS.Icon, { name: "search", size: 17 })),
            h("input", { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Name, Ort oder Material suchen …",
              style: { width: "100%", boxSizing: "border-box", padding: "13px 16px 13px 44px", border: "1px solid var(--border-light)", borderRadius: 2, outline: "none", fontFamily: "var(--font-body)", fontWeight: 300, fontSize: 15, color: "var(--ink)", background: "var(--white)" } })),
          // material filter + count
          h("div", { key: "fl", style: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap", marginTop: 24 } },
            h("div", { style: { display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" } },
              h("span", { style: { fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 11, letterSpacing: "1.4px", textTransform: "uppercase", color: "var(--muted)", marginRight: 4 } }, "Material"),
              chip("Alle", mat === "", () => setMat("")),
              materials.map((m) => chip(m, mat === m, () => setMat(mat === m ? "" : m)))),
            h("span", { style: { fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 11, letterSpacing: "1.4px", textTransform: "uppercase", color: "var(--muted)" } }, list.length + " Designer:innen")),
          // grid
          list.length > 0
            ? h("div", { key: "gr", style: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, marginTop: 48 } },
                list.map((dz, i) => h(DS.DesignerCard, { key: i, image: dz.photo, name: dz.name, discipline: dz.materials.slice(0, 2).join(" & "), location: dz.location + " →", onClick: (e) => { e.preventDefault(); go("designer", { designer: dz }); } })))
            : h("p", { key: "empty", style: { marginTop: 48, fontFamily: "var(--font-body)", fontWeight: 300, fontSize: 16, color: "var(--medium)" } }, "Keine Designer:innen gefunden. Passe Suche oder Material an."),
        ], { padding: "64px 64px 96px" })),
      h(DS.Footer, null));
  }

  window.RDM_Designers = Designers;
})();
