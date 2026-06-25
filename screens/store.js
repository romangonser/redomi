// re:do:mi — kleiner geteilter Store für Favoriten + Suche.
// Definiert window.RDM_Store und den Hook window.RDM_useStore().
(function () {
  const KEY = "rdm_favorites";
  let favs;
  try { favs = new Set(JSON.parse(localStorage.getItem(KEY) || "[]")); } catch (e) { favs = new Set(); }
  let search = "";
  let favOnly = false;
  const subs = new Set();
  const emit = () => subs.forEach((fn) => { try { fn(); } catch (e) {} });

  window.RDM_Store = {
    isFav: (id) => favs.has(id),
    favCount: () => favs.size,
    toggleFav: (id) => {
      if (favs.has(id)) favs.delete(id); else favs.add(id);
      try { localStorage.setItem(KEY, JSON.stringify([...favs])); } catch (e) {}
      emit();
    },
    getSearch: () => search,
    setSearch: (v) => { search = v || ""; emit(); },
    getFavOnly: () => favOnly,
    setFavOnly: (v) => { favOnly = !!v; emit(); },
    subscribe: (fn) => { subs.add(fn); return () => subs.delete(fn); },
  };

  window.RDM_useStore = function () {
    const [, force] = React.useState(0);
    React.useEffect(() => window.RDM_Store.subscribe(() => force((n) => n + 1)), []);
    return window.RDM_Store;
  };

  // shared heart button (renders over a product image)
  window.RDM_Heart = function Heart({ id, size, theme }) {
    const store = window.RDM_useStore();
    const on = store.isFav(id);
    const [hov, setHov] = React.useState(false);
    const s = size || 36;
    return React.createElement("button", {
      "aria-label": on ? "Aus Favoriten entfernen" : "Zu Favoriten hinzufügen",
      onClick: (e) => { e.preventDefault(); e.stopPropagation(); store.toggleFav(id); },
      onMouseEnter: () => setHov(true), onMouseLeave: () => setHov(false),
      style: {
        width: s, height: s, flex: "none", display: "inline-flex", alignItems: "center", justifyContent: "center",
        borderRadius: "50%", cursor: "pointer", border: "none", padding: 0,
        background: theme === "bare" ? "transparent" : (hov || on ? "var(--white)" : "rgba(255,255,255,0.86)"),
        boxShadow: theme === "bare" ? "none" : "0 1px 4px rgba(26,26,26,0.12)",
        transition: "background .15s ease, transform .12s ease", transform: hov ? "scale(1.08)" : "none",
      },
    },
      React.createElement("svg", { width: Math.round(s * 0.5), height: Math.round(s * 0.5), viewBox: "0 0 24 24",
        fill: on ? "var(--brand-yellow)" : "none", stroke: on ? "var(--brand-yellow)" : "var(--ink)", strokeWidth: 1.7, strokeLinejoin: "round" },
        React.createElement("path", { d: "M12 20.5 4.2 12.9a4.6 4.6 0 0 1 6.5-6.5l1.3 1.3 1.3-1.3a4.6 4.6 0 0 1 6.5 6.5L12 20.5Z" })));
  };
})();
