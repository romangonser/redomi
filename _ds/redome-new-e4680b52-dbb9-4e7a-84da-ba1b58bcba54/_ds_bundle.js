/* @ds-bundle: {"format":3,"namespace":"ReDoMiDesignSystem_e4680b","components":[{"name":"CategoryBadge","sourcePath":"components/badges/CategoryBadge.jsx"},{"name":"SeeAllLink","sourcePath":"components/badges/SeeAllLink.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"CategoryCard","sourcePath":"components/cards/CategoryCard.jsx"},{"name":"DesignerCard","sourcePath":"components/cards/DesignerCard.jsx"},{"name":"ProductCard","sourcePath":"components/cards/ProductCard.jsx"},{"name":"SocialProofCard","sourcePath":"components/cards/SocialProofCard.jsx"},{"name":"Footer","sourcePath":"components/footer/Footer.jsx"},{"name":"Icon","sourcePath":"components/icons/Icon.jsx"},{"name":"Navbar","sourcePath":"components/navigation/Navbar.jsx"}],"sourceHashes":{"components/badges/CategoryBadge.jsx":"e37d893764f4","components/badges/SeeAllLink.jsx":"08dddb86eb85","components/brand/Logo.jsx":"0b8be1befcc9","components/buttons/Button.jsx":"5c984e877653","components/buttons/IconButton.jsx":"95c4dbfb707a","components/cards/CategoryCard.jsx":"22aa61705147","components/cards/DesignerCard.jsx":"878018b58428","components/cards/ProductCard.jsx":"0b69530be267","components/cards/SocialProofCard.jsx":"d0cae3c56398","components/footer/Footer.jsx":"d953dc90f42d","components/icons/Icon.jsx":"859b8b74c624","components/navigation/Navbar.jsx":"d5f61266ac9a","ui_kits/website/sections.jsx":"82aaeebc2a1b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ReDoMiDesignSystem_e4680b = window.ReDoMiDesignSystem_e4680b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/badges/CategoryBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small uppercase category tag — e.g. MODE, KUNST, WOHNEN.
 * White fill, 1px muted outline, near-square 0.5px radius.
 * Used as an overlay chip on product images and in tag rows.
 */
function CategoryBadge({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      background: "var(--white)",
      border: "1px solid var(--border-tag)",
      borderRadius: "var(--radius-tag)",
      padding: "8px 9px",
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--type-tag-size)",
      letterSpacing: "var(--type-tag-tracking)",
      textTransform: "uppercase",
      color: "var(--ink)",
      lineHeight: 1,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { CategoryBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/badges/CategoryBadge.jsx", error: String((e && e.message) || e) }); }

// components/badges/SeeAllLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * "See all" text link with the signature forest-green underline.
 * Josefin Sans 600, tracked out. The arrow is part of the label.
 */
function SeeAllLink({
  children = "Alle ansehen →",
  href = "#",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: {
      display: "inline-block",
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--type-nav-size)",
      letterSpacing: "1.76px",
      textTransform: "none",
      color: hover ? "var(--ink)" : "var(--text-body)",
      textDecoration: "none",
      paddingBottom: 1,
      borderBottom: "1px solid var(--forest)",
      transition: "color .18s ease",
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), children);
}
Object.assign(__ds_scope, { SeeAllLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/badges/SeeAllLink.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Re-Do-Mi logo — three staggered rounded-rectangle blocks + the RE-DO-MI
 * wordmark. Colours are exactly as defined in the Figma logo spec:
 *   • Block 1 (left)   — Brand Yellow #f0c93c
 *   • Block 2 (centre) — White #ffffff with a #888 hairline border
 *   • Block 3 (right)  — #474747 (Medium / Announcement)
 * Wordmark: Josefin Sans Bold, UPPERCASE, wide tracking.
 */
function Logo({
  variant = "ink",
  size = 24,
  showWordmark = true,
  style,
  ...rest
}) {
  const onDark = variant === "light";
  const letterColor = onDark ? "var(--white)" : "var(--ink)";
  const RATIO = 89.89 / 12.58;
  const LETTERS = [
    "M6.46,12.45l-2.52-3.8h-1.58v3.8H0V.49h3.62c1.49,0,2.64.36,3.46,1.08.82.72,1.23,1.7,1.23,2.95,0,.74-.15,1.43-.46,2.07-.31.64-.78,1.15-1.42,1.52l2.78,4.34h-2.75,0ZM2.36,6.37h1.68c.64,0,1.11-.19,1.4-.56.29-.37.44-.78.44-1.21s-.12-.85-.37-1.24c-.25-.4-.73-.59-1.45-.59h-1.69v3.61h0Z",
    "M19.32.49v2.28h-5.8v2.55h5.14v2.28h-5.14v2.59h6.03v2.28h-8.39V.49h8.16Z",
    "M34.41.49h3.58c1.53,0,2.79.3,3.77.89.99.59,1.7,1.36,2.16,2.29.45.94.68,1.94.68,3.02,0,1.15-.27,2.16-.81,3.04-.54.88-1.27,1.55-2.19,2.02-.92.47-1.92.71-3.02.71h-4.16V.49ZM38.17,10.18c1.22,0,2.19-.31,2.91-.94.71-.63,1.07-1.53,1.07-2.72,0-.95-.2-1.71-.59-2.28-.4-.56-.86-.95-1.38-1.17-.53-.22-1.02-.33-1.49-.33h-1.92v7.43h1.4Z",
    "M47.04,3.45c.55-.94,1.29-1.69,2.23-2.25.94-.56,1.95-.84,3.05-.84s2.11.28,3.05.84c.94.56,1.69,1.31,2.24,2.25.56.94.84,1.96.84,3.04s-.28,2.12-.84,3.06c-.56.93-1.31,1.67-2.24,2.22s-1.95.82-3.05.82-2.12-.27-3.06-.82c-.93-.55-1.67-1.29-2.22-2.22-.55-.93-.82-1.95-.82-3.06s.27-2.1.82-3.04h0ZM49.15,8.41c.33.58.78,1.05,1.35,1.39.57.34,1.2.51,1.89.51s1.28-.17,1.84-.51c.55-.34.99-.8,1.3-1.38.31-.58.47-1.22.47-1.93s-.16-1.37-.49-1.95c-.33-.58-.77-1.05-1.33-1.39s-1.18-.51-1.86-.51-1.3.17-1.86.51c-.56.34-1,.8-1.33,1.39-.33.59-.49,1.24-.49,1.95s.17,1.33.5,1.92Z",
    "M84.44,0v12.45h-2.36v-5.71l-3.9,5.55h-.03l-3.76-5.19v5.35h-2.28V0h.02l6.06,8.6,6.21-8.6h.03Z",
    "M89.89.49v11.97h-2.36V.49h2.36Z"
  ];
  const TRIANGLES = [
    "M23.83,3.16l6.94,3.46-6.94,3.46V3.16Z",
    "M61.56,9.3l3.46-6.94,3.46,6.94h-6.92Z"
  ];
  return /*#__PURE__*/React.createElement("svg", _extends({
    role: "img",
    "aria-label": "Re-Do-Mi",
    viewBox: "0 0 89.89 12.58",
    height: size,
    width: size * RATIO,
    style: { display: "block", flex: "none", ...style }
  }, rest),
    showWordmark && LETTERS.map((d, i) => /*#__PURE__*/React.createElement("path", { key: "l" + i, d: d, fill: letterColor })),
    TRIANGLES.map((d, i) => /*#__PURE__*/React.createElement("path", { key: "t" + i, d: d, fill: "var(--brand-yellow)" }))
  );
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Re-Do-Mi button.
 * Variants:
 *  • primary — yellow CTA, ink label (the main call-to-action)
 *  • ghost   — transparent with a 1px ink outline
 *  • nav     — white fill with a 1px ink outline (header "Login")
 * All variants: 2px radius, Josefin Sans 600, uppercase, wide tracking.
 */
function Button({
  variant = "primary",
  children,
  icon,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const base = {
    appearance: "none",
    border: "none",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    borderRadius: "var(--radius-default)",
    fontFamily: "var(--font-display)",
    fontWeight: "var(--fw-semibold)",
    fontSize: "var(--type-nav-size)",
    letterSpacing: "var(--type-nav-tracking)",
    lineHeight: 1.5,
    textTransform: "uppercase",
    textDecoration: "none",
    padding: "14px 32px",
    transition: "background-color .18s ease, color .18s ease, border-color .18s ease",
    boxSizing: "border-box"
  };
  const variants = {
    primary: {
      background: hover ? "#e0b92e" : "var(--brand-yellow)",
      color: "var(--text-on-yellow)"
    },
    ghost: {
      background: hover ? "var(--ink)" : "transparent",
      color: hover ? "var(--white)" : "var(--ink)",
      border: "1px solid var(--border-ink)",
      padding: "13px 32px"
    },
    nav: {
      background: hover ? "var(--ink)" : "var(--white)",
      color: hover ? "var(--white)" : "var(--ink)",
      border: "1px solid var(--border-ink)",
      padding: "13px 28px"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    style: {
      ...base,
      ...variants[variant],
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), children, icon && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-flex"
    }
  }, icon));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * 40×40 square icon button used in the header (search, account, cart).
 * Shows a centred icon node; subtle sage hover.
 */
function IconButton({
  children,
  label,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    style: {
      appearance: "none",
      width: 40,
      height: 40,
      padding: 0,
      border: "none",
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-default)",
      background: hover ? "var(--sage-mist)" : "transparent",
      color: "var(--ink)",
      transition: "background-color .18s ease",
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/cards/CategoryCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Category tile — a tall sage/image block with an uppercase label and an
 * italic sub-label underneath. Used in the "Was findest du hier?" grid.
 */
function CategoryCard({
  image,
  label,
  sub,
  href = "#",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      textDecoration: "none",
      color: "inherit",
      width: "100%",
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      aspectRatio: "3 / 4",
      borderRadius: "var(--radius-default)",
      background: image ? `url(${image}) center / cover no-repeat` : "var(--sage-mist)",
      filter: hover ? "brightness(0.95)" : "none",
      transition: "filter .2s ease"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--type-category-size)",
      letterSpacing: "var(--type-category-tracking)",
      textTransform: "uppercase",
      color: "var(--ink)",
      lineHeight: 1.5
    }
  }, label), sub && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: "var(--fw-light)",
      fontStyle: "italic",
      fontSize: "var(--type-caption-size)",
      color: "var(--text-muted)",
      marginTop: 2
    }
  }, sub)));
}
Object.assign(__ds_scope, { CategoryCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/CategoryCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/DesignerCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Designer / maker card — a tall portrait image with name, discipline and
 * a location link with the green arrow.
 */
function DesignerCard({
  image,
  name,
  discipline,
  location,
  href = "#",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      textDecoration: "none",
      color: "inherit",
      width: "100%",
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      aspectRatio: "348 / 406",
      borderRadius: "var(--radius-default)",
      background: image ? `url(${image}) center / cover no-repeat` : "var(--sage-100)",
      filter: hover ? "brightness(0.96)" : "none",
      transition: "filter .2s ease"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--type-feature-title-size)",
      letterSpacing: "var(--type-feature-title-tracking)",
      color: "var(--ink)"
    }
  }, name), discipline && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: "var(--fw-light)",
      fontStyle: "italic",
      fontSize: "var(--type-caption-size)",
      color: "var(--text-muted)"
    }
  }, discipline), location && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--type-nav-size)",
      letterSpacing: "1.2px",
      color: "var(--forest)",
      marginTop: 4
    }
  }, location)));
}
Object.assign(__ds_scope, { DesignerCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/DesignerCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/ProductCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Product listing card. Square-ish image on a sage placeholder with an
 * optional category badge overlay, then title / designer / price stacked
 * below. The top edge gets a 2px ink rule on hover (the "lift" cue).
 */
function ProductCard({
  image,
  category,
  title,
  designer,
  price,
  href = "#",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: {
      display: "flex",
      flexDirection: "column",
      textDecoration: "none",
      color: "inherit",
      width: "100%",
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      aspectRatio: "1 / 0.875",
      borderRadius: "var(--radius-default) var(--radius-default) 0 0",
      background: image ? `url(${image}) center / cover no-repeat` : "var(--surface-image)",
      overflow: "hidden"
    }
  }, category && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 10,
      left: 10
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.CategoryBadge, null, category))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      padding: "16px 0",
      borderTop: hover ? "2px solid var(--ink)" : "2px solid transparent",
      transition: "border-color .18s ease"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--type-card-title-size)",
      letterSpacing: "var(--type-card-title-tracking)",
      lineHeight: 1.5,
      color: "var(--ink)"
    }
  }, title), designer && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: "var(--fw-light)",
      fontStyle: "italic",
      fontSize: "var(--type-caption-size)",
      color: "var(--text-muted)"
    }
  }, designer), price && /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 6,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--type-card-price-size)",
      letterSpacing: "var(--type-card-price-tracking)",
      color: "var(--ink)"
    }
  }, price)));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/SocialProofCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Testimonial / social-proof card. White surface, a big yellow quote mark,
 * the quote in italic Lato, then a hairline-topped author block.
 * `featured` swaps the hairline border for the brand-yellow border.
 */
function SocialProofCard({
  quote,
  author,
  role,
  featured = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 24,
      padding: 32,
      background: "var(--white)",
      border: featured ? "1px solid var(--brand-yellow)" : "1px solid var(--border-card)",
      borderRadius: "var(--radius-default)",
      boxSizing: "border-box",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-bold)",
      fontSize: 48,
      lineHeight: 0.8,
      color: "var(--brand-yellow)"
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontWeight: "var(--fw-light)",
      fontStyle: "italic",
      fontSize: 14,
      lineHeight: 1.57,
      color: "var(--ink)"
    }
  }, quote)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      paddingTop: 16,
      borderTop: "1px solid var(--border-card)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-bold)",
      fontSize: 12,
      letterSpacing: "1.2px",
      color: "var(--ink)"
    }
  }, author), role && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: "var(--fw-regular)",
      fontSize: 12,
      color: "var(--text-muted)",
      marginTop: 2
    }
  }, role)));
}
Object.assign(__ds_scope, { SocialProofCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/SocialProofCard.jsx", error: String((e && e.message) || e) }); }

// components/footer/Footer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Dark site footer: brand column with tagline + newsletter, three link
 * columns, then a hairline-topped legal row. Link columns accept items
 * with a `gated` flag (renders the dimmer 0.55 white for logged-out links).
 */
function Footer({
  tagline = "Die Plattform für Upcycling-Kreationen — Vermittler zwischen Gestalter:innen und ihrer Community in der Kreislaufwirtschaft.",
  columns = DEFAULT_COLUMNS,
  copyright = "© 2026 Re-Do-Mi, Zürich — Alle Rechte vorbehalten",
  legal = ["Datenschutz", "AGB", "Impressum", "Cookies"],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      background: "var(--surface-footer)",
      color: "var(--white)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--layout-max-width)",
      margin: "0 auto",
      padding: "80px var(--layout-pad-x) 48px",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 48,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 320px",
      minWidth: 280,
      maxWidth: 420
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "light",
    size: 20
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "20px 0 0",
      maxWidth: 300,
      fontFamily: "var(--font-body)",
      fontWeight: "var(--fw-light)",
      fontSize: 14,
      lineHeight: 1.7,
      color: "var(--white)"
    }
  }, tagline), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(FooterHeading, null, "Newsletter"), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => e.preventDefault(),
    style: {
      display: "flex",
      marginTop: 12,
      maxWidth: 364
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    placeholder: "deine@email.ch",
    style: {
      flex: 1,
      background: "var(--on-dark-field)",
      border: "1px solid var(--on-dark-field-border)",
      borderRight: "none",
      borderRadius: "var(--radius-default) 0 0 var(--radius-default)",
      padding: "12px 14px",
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--white)",
      outline: "none",
      minWidth: 0
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    style: {
      background: "var(--brand-yellow)",
      color: "var(--ink)",
      border: "none",
      borderRadius: "0 var(--radius-default) var(--radius-default) 0",
      padding: "0 18px",
      cursor: "pointer",
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-semibold)",
      fontSize: 11,
      letterSpacing: "1.32px"
    }
  }, "OK")))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "2 1 480px",
      display: "flex",
      gap: 48,
      flexWrap: "wrap",
      justifyContent: "flex-end"
    }
  }, columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.heading,
    style: {
      minWidth: 140
    }
  }, /*#__PURE__*/React.createElement(FooterHeading, null, col.heading), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: "16px 0 0",
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, col.items.map(item => {
    const label = typeof item === "string" ? item : item.label;
    const gated = typeof item === "object" && item.gated;
    return /*#__PURE__*/React.createElement("li", {
      key: label
    }, /*#__PURE__*/React.createElement(FooterLink, {
      gated: gated
    }, label));
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 64,
      paddingTop: 28,
      borderTop: "1px solid var(--on-dark-rule)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      color: "var(--on-dark-faint)"
    }
  }, copyright), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 32
    }
  }, legal.map(l => /*#__PURE__*/React.createElement(FooterLink, {
    key: l
  }, l))))));
}
function FooterHeading({
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-semibold)",
      fontSize: 11,
      letterSpacing: "1.98px",
      textTransform: "uppercase",
      color: "var(--brand-yellow)"
    }
  }, children);
}
function FooterLink({
  children,
  gated
}) {
  const [hover, setHover] = React.useState(false);
  const base = gated ? "var(--on-dark-muted)" : "var(--on-dark-strong)";
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: "var(--fw-light)",
      fontSize: 13,
      textDecoration: "none",
      color: hover ? "var(--brand-yellow)" : base,
      transition: "color .18s ease"
    }
  }, children);
}
const DEFAULT_COLUMNS = [{
  heading: "Plattform",
  items: ["Produkte", "Designer:innen", "Neuheiten", "Ausschreibungen", "News"]
}, {
  heading: "Über uns",
  items: ["Herkunft", "Team", "Community-Regeln", "Nachhaltigkeit", "Presse"]
}, {
  heading: "Konto",
  items: [{
    label: "Login / Register"
  }, {
    label: "Dashboard",
    gated: true
  }, {
    label: "Favoriten",
    gated: true
  }, {
    label: "Bestellungen",
    gated: true
  }, {
    label: "Einstellungen",
    gated: true
  }]
}];
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/footer/Footer.jsx", error: String((e && e.message) || e) }); }

// components/icons/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Thin geometric line icons. The Re-Do-Mi Figma uses a custom 1.5px-stroke
   line set; the extracted vectors were incomplete, so these are Lucide
   (MIT) paths — a near-identical thin geometric match. Swap freely. */
const PATHS = {
  search: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.3-4.3"
  })),
  cart: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 6h18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 10a4 4 0 0 1-8 0"
  })),
  user: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 21v-1a6 6 0 0 0-12 0v1"
  })),
  heart: /*#__PURE__*/React.createElement("path", {
    d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"
  }),
  bell: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M10.268 21a2 2 0 0 0 3.464 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"
  })),
  arrowRight: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m12 5 7 7-7 7"
  })),
  arrowRightShort: /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  }),
  menu: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 6h16"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 12h16"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 18h16"
  })),
  plus: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14"
  })),
  check: /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }),
  chevronDown: /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  })
};
function Icon({
  name,
  size = 18,
  strokeWidth = 1.5,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    style: {
      display: "block",
      ...style
    }
  }, rest), PATHS[name] || null);
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/Icon.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Navbar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Top announcement bar (medium-grey, yellow tracked text) plus the main
 * navigation row: logo, nav links with the 2px active underline, icon
 * actions, divider and a Login button.
 */
function Navbar({
  announcement = "Neue Plattform — Jetzt als Designer:in registrieren & Profil erstellen",
  links = ["Produkte", "Designers", "Über uns", "Anschlagbrett"],
  activeIndex = 0,
  onLogin,
  loggedIn = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      width: "100%",
      background: "var(--white)",
      ...style
    }
  }, rest), announcement && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-announce)",
      color: "var(--brand-yellow)",
      textAlign: "center",
      padding: "9px 24px",
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--type-announce-size)",
      letterSpacing: "var(--type-announce-tracking)",
      textTransform: "uppercase"
    }
  }, announcement), /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: "1px solid var(--border-light)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--layout-max-width)",
      margin: "0 auto",
      height: "var(--layout-nav-height)",
      padding: "0 var(--layout-pad-x)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    size: 22
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 28
    }
  }, links.map((label, i) => /*#__PURE__*/React.createElement(NavLink, {
    key: label,
    label: label,
    active: i === activeIndex
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    label: "Suche"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 18
  })), loggedIn ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    label: "Benachrichtigungen"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "bell",
    size: 18
  })), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    label: "Warenkorb"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "cart",
    size: 18
  })), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    label: "Konto"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "user",
    size: 18
  }))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    label: "Warenkorb"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "cart",
    size: 18
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 24,
      background: "var(--border-light)",
      margin: "0 12px"
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "nav",
    onClick: onLogin
  }, "Login"))))));
}
function NavLink({
  label,
  active
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--type-nav-size)",
      letterSpacing: "var(--type-nav-tracking)",
      textTransform: "uppercase",
      textDecoration: "none",
      color: "var(--ink)",
      paddingBottom: 4,
      borderBottom: active ? "2px solid var(--ink)" : hover ? "2px solid var(--border-light)" : "2px solid transparent",
      transition: "border-color .18s ease",
      whiteSpace: "nowrap"
    }
  }, label);
}
Object.assign(__ds_scope, { Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Navbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/sections.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Re-Do-Mi website — homepage sections.
   Composes design-system components from window.ReDoMiDesignSystem_e4680b
   and exposes each section on window for index.html. */
const DS = window.ReDoMiDesignSystem_e4680b;
const {
  Button,
  Icon,
  CategoryBadge,
  SeeAllLink,
  ProductCard,
  CategoryCard,
  DesignerCard,
  SocialProofCard
} = DS;
const IMG = "../../assets/images/";
const Wrap = ({
  children,
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: "var(--layout-max-width)",
    margin: "0 auto",
    padding: "0 var(--layout-pad-x)",
    boxSizing: "border-box",
    ...style
  }
}, children);
const Eyebrow = ({
  children
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    fontSize: 12,
    letterSpacing: "1.98px",
    textTransform: "uppercase",
    color: "var(--medium)"
  }
}, children);
const SectionHead = ({
  eyebrow,
  title,
  link
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    gap: 24,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexDirection: "column",
    gap: 8
  }
}, /*#__PURE__*/React.createElement(Eyebrow, null, eyebrow), /*#__PURE__*/React.createElement("h2", {
  className: "rdm-h2",
  style: {
    maxWidth: 520
  }
}, title)), link && /*#__PURE__*/React.createElement(SeeAllLink, null, link));

/* ── Hero ─────────────────────────────────────────────────────────── */
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--white)"
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      minHeight: 620
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: 32,
      padding: "80px 80px 80px 0"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Upcycling"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "16px 0 0",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 64,
      lineHeight: 1.0,
      letterSpacing: "-0.5px",
      color: "var(--ink)"
    }
  }, "Der Markt", /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-serif)",
      fontStyle: "italic",
      fontWeight: 400,
      letterSpacing: "0.72px"
    }
  }, "f\xFCr Upcycling"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block"
    }
  }, "Kreationen."))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 460,
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: 18,
      lineHeight: 1.7,
      color: "var(--medium)"
    }
  }, "Re-Do-Mi ist der Vermittler innerhalb der Upcycle-Szene \u2014 eine Plattform, wo Gestalter:innen ihre Kreationen zeigen, und Kund:innen direkt in Kontakt treten k\xF6nnen."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrowRightShort",
      size: 14,
      strokeWidth: 2
    })
  }, "Produkte entdecken"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "Designer:innen kennenlernen")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 48,
      paddingTop: 32,
      borderTop: "1px solid var(--border-light)"
    }
  }, [["140+", "Designer:innen"], ["800+", "Kreationen"], ["6", "Kategorien"]].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 28,
      letterSpacing: "1.12px",
      color: "var(--ink)"
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: 13,
      color: "var(--muted)"
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      background: `url(${IMG}hero-shop.jpg) center / cover no-repeat`,
      margin: "0 -64px 0 0",
      minHeight: 620
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 32,
      right: 32,
      background: "var(--brand-yellow)",
      color: "var(--ink)",
      padding: "14px 18px",
      borderRadius: 2,
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 11,
      letterSpacing: "1.54px",
      textTransform: "uppercase"
    }
  }, "Neues entdecken \u2192"))));
}

/* ── Category grid ────────────────────────────────────────────────── */
const CATEGORIES = [{
  label: "KLEIDER",
  sub: "Mode & Textil",
  image: IMG + "category-kleider.jpg"
}, {
  label: "KUNST",
  sub: "Objekte & Bilder"
}, {
  label: "WOHNEN",
  sub: "Möbel & Deko"
}, {
  label: "KERAMIK",
  sub: "Geschirr & Vasen"
}];
function CategoryGrid() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-alt)"
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      padding: "96px var(--layout-pad-x)"
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Kategorien",
    title: "Was findest du hier?",
    link: "Alle ansehen \u2192"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 24,
      marginTop: 48
    }
  }, CATEGORIES.map(c => /*#__PURE__*/React.createElement(CategoryCard, _extends({
    key: c.label
  }, c))))));
}

/* ── New arrivals ─────────────────────────────────────────────────── */
const PRODUCTS = [{
  title: "Sneaker High – Green Tiger",
  designer: "Elephbo",
  category: "MODE",
  price: "CHF 99",
  image: IMG + "product-sneaker.jpg"
}, {
  title: "Travelling Companions",
  designer: "Kirsty Elson Designs",
  category: "KUNST",
  price: "CHF 55"
}, {
  title: "Casual, neu gedacht",
  designer: "Re-Wear Zürich",
  category: "MODE",
  price: "CHF 140"
}, {
  title: "SULA – Massivholzbett",
  designer: "André Mailfert",
  category: "WOHNEN",
  price: "CHF 830"
}, {
  title: "Lesekissen CORAL",
  designer: "Sprungbrett / Palettino",
  category: "OBJEKTE",
  price: "CHF 20"
}];
function NewArrivals() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--white)"
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      padding: "96px var(--layout-pad-x)"
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Neuheiten",
    title: "Frisch aus dem Ofen",
    link: "Alle ansehen \u2192"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: 24,
      marginTop: 48
    }
  }, PRODUCTS.map(p => /*#__PURE__*/React.createElement(ProductCard, _extends({
    key: p.title
  }, p))))));
}

/* ── Designer spotlight ───────────────────────────────────────────── */
const DESIGNERS = [{
  name: "Leila Amrani",
  discipline: "Textil & Mode",
  location: "Zürich →",
  image: IMG + "designer-portrait.jpg"
}, {
  name: "Elephbo",
  discipline: "Schuhe & Accessoires",
  location: "Basel →"
}, {
  name: "André Mailfert",
  discipline: "Möbel & Holz",
  location: "Bern →"
}];
function DesignerSpotlight() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-alt)"
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      padding: "96px var(--layout-pad-x)"
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Community",
    title: "Lerne unsere Designer:innen kennen",
    link: "Alle ansehen \u2192"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 24,
      marginTop: 48
    }
  }, DESIGNERS.map(d => /*#__PURE__*/React.createElement(DesignerCard, _extends({
    key: d.name
  }, d))))));
}

/* ── Testimonials ─────────────────────────────────────────────────── */
const QUOTES = [{
  quote: "Re-Do-Mi hat mir als Designerin eine echte Bühne gegeben.",
  author: "Sophie Kraft",
  role: "Keramikerin, Basel",
  featured: true
}, {
  quote: "Ich habe über das Anschlagbrett genau die Schneiderin gefunden, die ich gesucht hatte. Schnell, direkt, persönlich.",
  author: "Dominique Hofer",
  role: "Kundin, Zürich"
}, {
  quote: "Als Plattform, die Kreislaufwirtschaft wirklich lebt, ist Re-Do-Mi für uns ein unverzichtbarer Partner.",
  author: "OFFCUT Initiative",
  role: "Partnernetzwerk"
}];
function Testimonials() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--white)"
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      padding: "96px var(--layout-pad-x)"
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Stimmen",
    title: "Was die Community sagt"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 24,
      marginTop: 48
    }
  }, QUOTES.map(q => /*#__PURE__*/React.createElement(SocialProofCard, _extends({
    key: q.author
  }, q))))));
}

/* ── Partners ─────────────────────────────────────────────────────── */
function Partners() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--white)",
      borderTop: "1px solid var(--border-light)"
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      padding: "64px var(--layout-pad-x)",
      display: "flex",
      alignItems: "center",
      gap: 80
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Partners"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 64,
      alignItems: "center"
    }
  }, ["OFFCUT", "mind-map", "KlimUp"].map(p => /*#__PURE__*/React.createElement("span", {
    key: p,
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 18,
      letterSpacing: "1px",
      color: "var(--muted)"
    }
  }, p)))));
}
Object.assign(window, {
  Hero,
  CategoryGrid,
  NewArrivals,
  DesignerSpotlight,
  Testimonials,
  Partners
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.CategoryBadge = __ds_scope.CategoryBadge;

__ds_ns.SeeAllLink = __ds_scope.SeeAllLink;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.CategoryCard = __ds_scope.CategoryCard;

__ds_ns.DesignerCard = __ds_scope.DesignerCard;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.SocialProofCard = __ds_scope.SocialProofCard;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Navbar = __ds_scope.Navbar;

})();
