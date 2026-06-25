/* @ds-bundle: {"format":3,"namespace":"ReDoMiDesignSystem_636513","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"BriefCard","sourcePath":"components/cards/BriefCard.jsx"},{"name":"CategoryTile","sourcePath":"components/cards/CategoryTile.jsx"},{"name":"DesignerCard","sourcePath":"components/cards/DesignerCard.jsx"},{"name":"ProductCard","sourcePath":"components/cards/ProductCard.jsx"},{"name":"Testimonial","sourcePath":"components/cards/Testimonial.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"EyebrowLabel","sourcePath":"components/core/EyebrowLabel.jsx"},{"name":"ImageFrame","sourcePath":"components/core/ImageFrame.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"StatusPill","sourcePath":"components/core/StatusPill.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"LoginGateModal","sourcePath":"components/feedback/LoginGateModal.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"NavDesktop","sourcePath":"components/navigation/NavDesktop.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"e49ec40a10b6","components/cards/BriefCard.jsx":"65d1353ecf26","components/cards/CategoryTile.jsx":"17149658f299","components/cards/DesignerCard.jsx":"81663e9f8e3c","components/cards/ProductCard.jsx":"4fb9d1162413","components/cards/Testimonial.jsx":"af350382566c","components/core/Button.jsx":"b1d9c5c93ff1","components/core/EyebrowLabel.jsx":"9cd11f08278c","components/core/ImageFrame.jsx":"9a925205d68c","components/core/Stat.jsx":"035358c9f6a7","components/core/StatusPill.jsx":"7d11fd27e8aa","components/core/Tag.jsx":"eccb3a853323","components/feedback/LoginGateModal.jsx":"2643bd2ace86","components/forms/Input.jsx":"40b670b9732a","components/navigation/Footer.jsx":"5c7e6f74afbd","components/navigation/NavDesktop.jsx":"644ccf499646","ui_kits/marketplace/BoardScreen.jsx":"6c4a324e43e9","ui_kits/marketplace/DashboardScreen.jsx":"93013492b735","ui_kits/marketplace/HomeScreen.jsx":"1a3bdc437c9e","ui_kits/marketplace/data.js":"65bcb56bbdf7"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ReDoMiDesignSystem_636513 = window.ReDoMiDesignSystem_636513 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * re:do:mi wordmark. A vertical column of green letter-tiles spelling
 * R·E·D·O·M·E next to the "re:do:mi" Playfair wordmark.
 */
function Logo({
  showWordmark = true,
  scale = 1,
  onDark = false,
  style = {},
  ...rest
}) {
  const tile = 9 * scale;
  const tileH = 12 * scale;
  const letters = ["R", "E", "D", "O", "M", "E"];
  const wordColor = onDark ? "var(--color-white)" : "var(--color-ink)";
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 14 * scale,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, letters.map((l, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: tile,
      height: tileH,
      background: "var(--color-eucalyptus)",
      color: "var(--color-white)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-semibold)",
      fontSize: 8 * scale,
      lineHeight: 1
    }
  }, l))), showWordmark && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-semibold)",
      fontSize: 18 * scale,
      lineHeight: 1,
      color: wordColor,
      letterSpacing: "0.01em"
    }
  }, "re:do:mi"));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/cards/CategoryTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Category tile — sage card with a large glyph/emoji and a label.
 * Used in the homepage category row (Möbel, Leuchten, Accessoires…).
 */
function CategoryTile({
  glyph = "🛋",
  label = "Möbel",
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: 24,
      minHeight: 180,
      borderRadius: "var(--radius-md)",
      background: "var(--surface-sage)",
      boxSizing: "border-box",
      cursor: "pointer",
      transform: hover ? "translateY(-4px)" : "none",
      boxShadow: hover ? "var(--shadow-float)" : "none",
      transition: "transform 160ms ease, box-shadow 160ms ease",
      justifyContent: "space-between",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 28,
      lineHeight: 1
    }
  }, glyph), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-medium)",
      fontSize: "var(--text-body-sm)",
      color: "var(--text-heading)"
    }
  }, label));
}
Object.assign(__ds_scope, { CategoryTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/CategoryTile.jsx", error: String((e && e.message) || e) }); }

// components/cards/Testimonial.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Testimonial card — five green stars, an italic quote, then name + role.
 * Sits on a sage tile in the social-proof section.
 */
function Testimonial({
  quote = "«Endlich Stühle mit Charakter — und fair produziert.»",
  name = "Andreas M.",
  role = "Barbesitzer, Zürich",
  stars = 5,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: 24,
      borderRadius: "var(--radius-md)",
      background: "var(--surface-sage)",
      boxSizing: "border-box",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)",
      fontSize: 13,
      letterSpacing: 2,
      lineHeight: 1
    }
  }, "★".repeat(stars)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontStyle: "italic",
      fontSize: "var(--text-body)",
      color: "var(--text-body)",
      lineHeight: 1.5
    }
  }, quote), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2,
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-semibold)",
      fontSize: "var(--text-body-sm)",
      color: "var(--text-heading)"
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-caption)",
      color: "var(--text-muted)"
    }
  }, role)));
}
Object.assign(__ds_scope, { Testimonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/Testimonial.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Primary action button. Three variants matching the source file:
 * primary (filled Eucalyptus), secondary (Eucalyptus ring on white),
 * ghost (text-only, green). Single height (45px) with a small size option.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const pad = size === "sm" ? "10px 18px" : "14px 28px";
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    border: "none",
    borderRadius: "var(--radius-sm)",
    fontFamily: "var(--font-sans)",
    fontWeight: "var(--weight-medium)",
    fontSize: size === "sm" ? "var(--text-label)" : "var(--text-body-sm)",
    letterSpacing: "var(--tracking-button)",
    lineHeight: 1,
    padding: pad,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    transition: "background 120ms ease, color 120ms ease, box-shadow 120ms ease",
    boxSizing: "border-box"
  };
  const variants = {
    primary: {
      background: hover && !disabled ? "var(--accent-hover)" : "var(--accent)",
      color: "var(--text-on-accent)"
    },
    secondary: {
      background: hover && !disabled ? "var(--surface-sage)" : "var(--color-white)",
      color: "var(--accent)",
      boxShadow: "inset 0 0 0 var(--border-width-accent) var(--accent)"
    },
    ghost: {
      background: "transparent",
      color: "var(--accent)",
      padding: size === "sm" ? "6px 8px" : "8px 10px",
      textDecoration: hover && !disabled ? "underline" : "none",
      textUnderlineOffset: 3
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/EyebrowLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Section eyebrow — uppercase, tracked Roboto Mono in brand green.
 * Sits above section headings throughout the site (NEUHEITEN, KATEGORIEN…).
 */
function EyebrowLabel({
  children,
  color = "var(--text-accent)",
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-block",
      fontFamily: "var(--font-mono)",
      fontWeight: "var(--weight-regular)",
      fontSize: "var(--text-mono-eyebrow)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      lineHeight: 1,
      color,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { EyebrowLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/EyebrowLabel.jsx", error: String((e && e.message) || e) }); }

// components/core/ImageFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Image placeholder frame — a sage-grey box with a centred Roboto Mono
 * caption naming the intended image. This is the brand's standard way of
 * standing in for photography in prototypes.
 */
function ImageFrame({
  caption = "Bild",
  radius = "var(--radius-md)",
  height,
  ratio,
  style = {},
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      width: "100%",
      height: height,
      aspectRatio: ratio,
      borderRadius: radius,
      background: "var(--color-border)",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      ...style
    }
  }, rest), children || /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-mono-xs)",
      letterSpacing: "var(--tracking-caption)",
      color: "var(--text-caption)",
      textAlign: "center",
      padding: "0 8px"
    }
  }, caption));
}
Object.assign(__ds_scope, { ImageFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ImageFrame.jsx", error: String((e && e.message) || e) }); }

// components/cards/BriefCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Anschlagbrett (pinboard) brief card — a posted project: image, title and a
 * status dot. White, hairline-bordered tile.
 */
function BriefCard({
  title = "Eames-Stuhl restaurieren",
  status = "Abgeschlossen",
  statusColor = "var(--accent)",
  imageCaption = "Projektbild",
  image,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: 16,
      borderRadius: "var(--radius-md)",
      background: "var(--surface-card)",
      boxShadow: hover ? "inset 0 0 0 1px var(--border-hairline), var(--shadow-float)" : "inset 0 0 0 1px var(--border-hairline)",
      boxSizing: "border-box",
      cursor: "pointer",
      transition: "box-shadow 160ms ease",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.ImageFrame, {
    caption: imageCaption,
    radius: "var(--radius-sm)",
    ratio: "16 / 9"
  }, image), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-semibold)",
      fontSize: "var(--text-body-sm)",
      color: "var(--text-heading)"
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "var(--radius-full)",
      background: statusColor
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-mono-eyebrow)",
      color: "var(--text-muted)"
    }
  }, status)));
}
Object.assign(__ds_scope, { BriefCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/BriefCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/ProductCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Product card — sage tile with a tall image placeholder, category eyebrow,
 * title, maker and price. Lifts gently on hover.
 */
function ProductCard({
  category,
  title = "Barhocker «Eiche No.4»",
  maker = "von Lena Brunner",
  price = "CHF 320.–",
  imageCaption = "Produktbild",
  image,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: 16,
      borderRadius: "var(--radius-md)",
      background: "var(--surface-sage)",
      boxSizing: "border-box",
      cursor: "pointer",
      transform: hover ? "translateY(-4px)" : "none",
      boxShadow: hover ? "var(--shadow-float)" : "none",
      transition: "transform 160ms ease, box-shadow 160ms ease",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.ImageFrame, {
    caption: imageCaption,
    radius: "var(--radius-sm)",
    ratio: "3 / 4"
  }, image), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, category && /*#__PURE__*/React.createElement(__ds_scope.EyebrowLabel, null, category), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-semibold)",
      fontSize: "var(--text-body-sm)",
      color: "var(--text-heading)"
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-caption)",
      color: "var(--text-muted)"
    }
  }, maker), /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 2,
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-semibold)",
      fontSize: "var(--text-body-sm)",
      color: "var(--text-heading)"
    }
  }, price)));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Hero / metric stat — a big green Inter SemiBold number over a muted caption.
 */
function Stat({
  value,
  label,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-semibold)",
      fontSize: "var(--text-h3)",
      lineHeight: 1,
      color: "var(--text-accent)"
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-regular)",
      fontSize: "var(--text-caption)",
      lineHeight: 1.2,
      color: "var(--text-muted)"
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Pill in the dashboard's project-stage stepper. A dot + mono label;
 * active stage uses the filled green pill, the rest are muted on sage.
 */
function StatusPill({
  children,
  active = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      borderRadius: "var(--radius-pill)",
      background: active ? "var(--accent)" : "var(--surface-sage)",
      padding: "6px 12px",
      lineHeight: 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "var(--radius-full)",
      background: active ? "var(--color-white)" : "var(--color-muted)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-mono-eyebrow)",
      color: active ? "var(--color-white)" : "var(--color-muted)"
    }
  }, children));
}
Object.assign(__ds_scope, { StatusPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusPill.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Material / category chip — green Roboto Mono text on a sage fill.
 * Used on designer cards to list materials (Eiche, Stahl…).
 */
function Tag({
  children,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      borderRadius: "var(--radius-sm)",
      background: "var(--surface-tag)",
      color: "var(--text-accent)",
      fontFamily: "var(--font-mono)",
      fontWeight: "var(--weight-regular)",
      fontSize: "var(--text-mono-eyebrow)",
      lineHeight: 1,
      padding: "4px 8px",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/cards/DesignerCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Designer card — white, hairline-bordered tile with a square portrait,
 * Playfair name, material tags and an italic quote.
 */
function DesignerCard({
  name = "Lena Brunner",
  materials = ["Eiche", "Stahl"],
  quote = "«Ich gebe Altholz ein zweites Leben.»",
  photoCaption = "Foto",
  photo,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: 16,
      borderRadius: "var(--radius-md)",
      background: "var(--surface-card)",
      boxShadow: hover ? "inset 0 0 0 1px var(--border-hairline), var(--shadow-float)" : "inset 0 0 0 1px var(--border-hairline)",
      boxSizing: "border-box",
      cursor: "pointer",
      transition: "box-shadow 160ms ease",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.ImageFrame, {
    caption: photoCaption,
    radius: "var(--radius-sm)",
    style: {
      width: 84,
      height: 84
    }
  }, photo), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-semibold)",
      fontSize: "var(--text-title)",
      color: "var(--text-heading)",
      lineHeight: 1,
      marginTop: 2
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap"
    }
  }, materials.map((m, i) => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: i
  }, m))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontStyle: "italic",
      fontSize: "var(--text-label)",
      color: "var(--text-muted)",
      lineHeight: 1.3
    }
  }, quote));
}
Object.assign(__ds_scope, { DesignerCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/DesignerCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Labelled text input. Inter Medium label above a bordered field;
 * border tints to brand green on focus.
 */
function Input({
  label,
  type = "text",
  placeholder,
  style = {},
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || (label ? `f-${String(label).replace(/\s+/g, "-").toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      width: "100%",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-medium)",
      fontSize: "var(--text-label)",
      letterSpacing: "var(--tracking-ui)",
      color: "var(--text-body)"
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: type,
    placeholder: placeholder,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      boxSizing: "border-box",
      padding: "12px 14px",
      borderRadius: "var(--radius-sm)",
      border: "none",
      boxShadow: `inset 0 0 0 1px ${focus ? "var(--accent)" : "var(--border-hairline)"}`,
      background: "var(--color-white)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-body-sm)",
      color: "var(--text-body)",
      outline: "none",
      transition: "box-shadow 120ms ease"
    }
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/feedback/LoginGateModal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Login gate — the modal shown when a guest tries to contact a designer.
 * A centred white card on a dark scrim with email + password and the
 * "Anmelden" action. Set `inline` to render just the card (no scrim).
 */
function LoginGateModal({
  subtitle = "um Lena Brunner zu kontaktieren",
  inline = false,
  onClose,
  style = {},
  ...rest
}) {
  const card = /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: 480,
      maxWidth: "calc(100vw - 32px)",
      boxSizing: "border-box",
      padding: 48,
      borderRadius: "var(--radius-lg)",
      background: "var(--surface-card)",
      display: "flex",
      flexDirection: "column",
      gap: 18,
      ...(inline ? style : {})
    }
  }, inline ? rest : {}), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-semibold)",
      fontSize: "var(--text-h3)",
      color: "var(--text-heading)",
      lineHeight: 1.1
    }
  }, "Melde dich an"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-body-sm)",
      color: "var(--text-muted)"
    }
  }, subtitle)), /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: "E-Mail",
    type: "email",
    placeholder: "name@beispiel.ch"
  }), /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: "Passwort",
    type: "password",
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    style: {
      width: "100%",
      marginTop: 4
    }
  }, "Anmelden"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-label)",
      color: "var(--accent)",
      textDecoration: "none"
    }
  }, "Noch kein Konto? Registrieren"));
  if (inline) return card;
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(26,26,26,0.92)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 16,
      zIndex: 1000,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation()
  }, card));
}
Object.assign(__ds_scope, { LoginGateModal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/LoginGateModal.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function FooterCol({
  heading,
  items
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-body-sm)",
      color: "var(--text-on-dark-muted)",
      textDecoration: "none"
    }
  }, it)));
}

/**
 * Site footer on near-black ink. Brand blurb + link columns, a hairline
 * divider, copyright, social links and the prototype disclaimer.
 */
function Footer({
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      background: "var(--surface-dark)",
      color: "var(--text-on-dark)",
      padding: "72px var(--space-12) 32px",
      display: "flex",
      flexDirection: "column",
      gap: 48,
      boxSizing: "border-box",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 48,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      maxWidth: 240
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    onDark: true
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-caption)",
      color: "var(--text-on-dark-muted)",
      lineHeight: 1.5
    }
  }, "Die kuratierte Schweizer Upcycling-Plattform. Z\xFCrich, Schweiz")), /*#__PURE__*/React.createElement(FooterCol, {
    items: ["Möbel", "Leuchten", "Accessoires", "Textilien"]
  }), /*#__PURE__*/React.createElement(FooterCol, {
    items: ["Alle Designer:innen", "Designer:in werden", "Anschlagbrett"]
  }), /*#__PURE__*/React.createElement(FooterCol, {
    items: ["AGB", "Datenschutz", "Impressum", "Kontakt"]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--border-on-dark)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-caption)",
      color: "var(--text-on-dark-muted)"
    }
  }, "\xA9 2026 re:do:mi \xB7 Z\xFCrich, Schweiz"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16
    }
  }, ["Instagram", "LinkedIn", "Newsletter"].map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-caption)",
      color: "var(--text-on-dark-muted)",
      textDecoration: "none"
    }
  }, s)))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-mono-eyebrow)",
      letterSpacing: "0.02em",
      color: "var(--color-muted-strong)"
    }
  }, "Hinweis: Designer:innen, Produkte, Preise und Testimonials sind fiktive Platzhalter (Prototyp)."));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavDesktop.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NavLink({
  children,
  active,
  onDark
}) {
  const [hover, setHover] = React.useState(false);
  const color = active ? "var(--accent)" : onDark ? "var(--color-white)" : "var(--text-heading)";
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: "relative",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-medium)",
      fontSize: "var(--text-body-sm)",
      letterSpacing: "var(--tracking-ui)",
      color: active ? "var(--accent)" : hover ? "var(--accent)" : color,
      textDecoration: "none",
      paddingBottom: 4,
      borderBottom: active ? "2px solid var(--accent)" : "2px solid transparent",
      transition: "color 120ms ease",
      cursor: "pointer"
    }
  }, children);
}
function SearchIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    stroke: "var(--text-heading)",
    strokeWidth: "1.6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "9",
    r: "6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "13.5",
    y1: "13.5",
    x2: "17.5",
    y2: "17.5",
    strokeLinecap: "round"
  }));
}
function BagIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    stroke: "var(--text-heading)",
    strokeWidth: "1.6"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 6.5h12l-1 11H5z",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 6.5a3 3 0 0 1 6 0"
  }));
}

/**
 * Desktop navigation bar — logo, centred menu, search + bag icons and the
 * login link. Sits on a white surface with a hairline bottom border.
 */
function NavDesktop({
  active = "Produkte",
  links = ["Produkte", "Designer:innen", "Anschlagbrett", "About"],
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "var(--nav-height)",
      padding: "0 var(--space-12)",
      background: "var(--color-white)",
      borderBottom: "1px solid var(--border-hairline)",
      boxSizing: "border-box",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Logo, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 28,
      alignItems: "center"
    }
  }, links.map(l => /*#__PURE__*/React.createElement(NavLink, {
    key: l,
    active: l === active
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 24,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 0,
      display: "flex"
    },
    "aria-label": "Suche"
  }, /*#__PURE__*/React.createElement(SearchIcon, null)), /*#__PURE__*/React.createElement("button", {
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 0,
      display: "flex"
    },
    "aria-label": "Warenkorb"
  }, /*#__PURE__*/React.createElement(BagIcon, null)), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-medium)",
      fontSize: "var(--text-body-sm)",
      letterSpacing: "var(--tracking-ui)",
      color: "var(--text-heading)",
      textDecoration: "none",
      cursor: "pointer"
    }
  }, "Login / Registrieren")));
}
Object.assign(__ds_scope, { NavDesktop });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavDesktop.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketplace/BoardScreen.jsx
try { (() => {
// re:do:mi — Marketplace UI kit · Anschlagbrett (pinboard) screen
function BoardScreen({
  go,
  openLogin
}) {
  const RDM = window.ReDoMiDesignSystem_636513;
  const {
    NavDesktop,
    Footer,
    Button,
    EyebrowLabel,
    BriefCard,
    Tag
  } = RDM;
  const briefs = [{
    title: "Eames-Stuhl restaurieren",
    status: "Abgeschlossen",
    tag: "Möbel"
  }, {
    title: "Erbsofa neu beziehen",
    status: "Offen",
    tag: "Textilien"
  }, {
    title: "Vintage-Lampe umbauen",
    status: "In Vermittlung",
    tag: "Leuchten"
  }, {
    title: "Kommode aufarbeiten",
    status: "Offen",
    tag: "Möbel"
  }, {
    title: "Spiegelrahmen vergolden",
    status: "Offen",
    tag: "Objekte"
  }, {
    title: "Lederstuhl neu polstern",
    status: "In Vermittlung",
    tag: "Möbel"
  }];
  const dot = s => s === "Offen" ? "var(--color-muted)" : "var(--accent)";
  const filters = ["Alle", "Möbel", "Leuchten", "Textilien", "Objekte", "Accessoires"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-page)",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement(NavDesktop, {
    active: "Anschlagbrett"
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "72px 120px 96px",
      boxSizing: "border-box",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement(EyebrowLabel, null, "Anschlagbrett"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 48,
      color: "var(--text-heading)",
      lineHeight: 1.05
    }
  }, "St\xFCcke, die ein zweites Leben suchen."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-sans)",
      fontSize: 16,
      lineHeight: 1.6,
      color: "var(--text-muted)"
    }
  }, "\xD6ffentliche Ausschreibungen von Kund:innen. Melde dich an, um eine eigene zu posten oder dich auf eine zu bewerben.")), /*#__PURE__*/React.createElement(Button, {
    onClick: openLogin
  }, "Ausschreibung erstellen")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, filters.map((f, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      padding: "6px 12px",
      borderRadius: 20,
      background: i === 0 ? "var(--accent)" : "var(--surface-sage)",
      color: i === 0 ? "#fff" : "var(--text-muted)",
      cursor: "pointer"
    }
  }, f))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 24
    }
  }, briefs.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: "relative"
    },
    onClick: openLogin
  }, /*#__PURE__*/React.createElement(BriefCard, {
    title: b.title,
    status: b.status,
    statusColor: dot(b.status),
    imageCaption: "Projektbild · " + b.tag
  })))))), /*#__PURE__*/React.createElement(Footer, null));
}
window.BoardScreen = BoardScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketplace/BoardScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketplace/DashboardScreen.jsx
try { (() => {
// re:do:mi — Marketplace UI kit · Project dashboard (chat) screen
function DashboardScreen({
  go
}) {
  const RDM = window.ReDoMiDesignSystem_636513;
  const {
    NavDesktop,
    StatusPill,
    Button
  } = RDM;
  const projects = [{
    title: "Barhocker-Projekt",
    who: "mit Lena Brunner",
    status: "Offerte erhalten",
    active: true
  }, {
    title: "Lampen-Anfrage",
    who: "Marco Keller",
    status: "In Bearbeitung",
    active: false
  }, {
    title: "Tisch-Idee",
    who: "Jonas Frei",
    status: "Abgeschlossen",
    active: false
  }];
  const steps = ["Anfrage", "Offerte", "Anzahlung", "Produktion", "Abschluss"];
  const [active, setActive] = React.useState(0);
  const [msgs, setMsgs] = React.useState([{
    me: false,
    text: "Hallo Andreas! Schön, dass du dich meldest. Worum geht es genau?"
  }, {
    me: true,
    text: "Hi Lena! Sitzhöhe ca. 75 cm, Eiche-Optik, robust für den Barbetrieb. 6 Stück."
  }, {
    me: false,
    text: "Perfekt. Ich melde mich mit einer Offerte — voraussichtlich morgen."
  }]);
  const [draft, setDraft] = React.useState("");
  const send = () => {
    if (!draft.trim()) return;
    setMsgs(m => [...m, {
      me: true,
      text: draft.trim()
    }]);
    setDraft("");
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-page)",
      height: "100vh",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement(NavDesktop, {
    active: "Produkte"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 320,
      background: "var(--surface-sage)",
      padding: "24px 20px",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: 16,
      color: "var(--text-heading)",
      marginBottom: 8
    }
  }, "Meine Projekte"), projects.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: 14,
      borderRadius: 8,
      cursor: "pointer",
      background: p.active ? "#fff" : "transparent",
      boxShadow: p.active ? "inset 0 0 0 1px var(--border-hairline)" : "none",
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: 14,
      color: "var(--text-heading)"
    }
  }, p.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      color: "var(--text-muted)"
    }
  }, p.who), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: ".04em",
      color: "var(--accent)",
      marginTop: 2
    }
  }, p.status)))), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 32px",
      borderBottom: "1px solid var(--border-hairline)",
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: 16,
      color: "var(--text-heading)"
    }
  }, "Barhocker-Projekt \xB7 mit Lena Brunner"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      flexWrap: "wrap"
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: s
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => setActive(i),
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(StatusPill, {
    active: i === active
  }, s)), i < steps.length - 1 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-muted)",
      fontSize: 14
    }
  }, "\u203A"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "24px 32px",
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, msgs.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      justifyContent: m.me ? "flex-end" : "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 520,
      padding: "12px 16px",
      borderRadius: 12,
      background: m.me ? "var(--accent)" : "var(--surface-sage)",
      color: m.me ? "#fff" : "var(--text-body)",
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      lineHeight: 1.5
    }
  }, m.text)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 32px",
      borderTop: "1px solid var(--border-hairline)",
      display: "flex",
      gap: 12,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: draft,
    onChange: e => setDraft(e.target.value),
    onKeyDown: e => e.key === "Enter" && send(),
    placeholder: "Nachricht schreiben \u2026",
    style: {
      flex: 1,
      padding: "12px 14px",
      borderRadius: 4,
      border: "none",
      boxShadow: "inset 0 0 0 1px var(--border-hairline)",
      outline: "none",
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      color: "var(--text-body)"
    }
  }), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: send,
    style: {
      height: 41
    }
  }, "Senden")))));
}
window.DashboardScreen = DashboardScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketplace/DashboardScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketplace/HomeScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// re:do:mi — Marketplace UI kit · Homepage screen
const RDM = window.ReDoMiDesignSystem_636513;
function Section({
  eyebrow,
  title,
  action,
  onAction,
  children,
  bg,
  style
}) {
  const {
    EyebrowLabel,
    Button
  } = RDM;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: bg || "var(--surface-page)",
      padding: "96px 120px",
      boxSizing: "border-box",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, eyebrow && /*#__PURE__*/React.createElement(EyebrowLabel, null, eyebrow), (title || action) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end"
    }
  }, title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 36,
      color: "var(--text-heading)",
      lineHeight: 1
    }
  }, title), action && /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: onAction
  }, action)), children));
}
function HomeScreen({
  go,
  openLogin
}) {
  const {
    NavDesktop,
    Footer,
    Button,
    EyebrowLabel,
    Stat,
    ImageFrame,
    ProductCard,
    DesignerCard,
    CategoryTile,
    BriefCard,
    Testimonial
  } = RDM;
  const d = window.RDM_DATA;
  const five = (Comp, items, render) => items.map((it, i) => render(Comp, it, i));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement(NavDesktop, {
    active: "Produkte"
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "120px",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      display: "flex",
      gap: 64,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 0",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      maxWidth: 568
    }
  }, /*#__PURE__*/React.createElement(EyebrowLabel, null, "Circular Economy Marketplace"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 64,
      lineHeight: 1.02,
      color: "var(--text-heading)"
    }
  }, "Upcycling,", /*#__PURE__*/React.createElement("br", null), "handgemacht", /*#__PURE__*/React.createElement("br", null), "aus der Szene."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-sans)",
      fontSize: 16,
      lineHeight: 1.6,
      color: "var(--text-muted)",
      maxWidth: 460
    }
  }, "re:do:mi verbindet Kund:innen mit verifizierten Schweizer Upcycling-Designer:innen \u2014 als kuratierte Plattform mit pers\xF6nlichem Vermittler-Anspruch."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go("board")
  }, "Produkte entdecken"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: openLogin
  }, "Designer:in werden")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 28,
      alignItems: "center",
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "48",
    label: "Designer:innen verifiziert"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 40,
      background: "var(--color-border)"
    }
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "200+",
    label: "Projekte abgeschlossen"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 40,
      background: "var(--color-border)"
    }
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "\uD83C\uDDE8\uD83C\uDDED",
    label: "Schweiz"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 0",
      position: "relative",
      maxWidth: 568
    }
  }, /*#__PURE__*/React.createElement(ImageFrame, {
    caption: "Hero-Bild \xB7 Upcycling-Werkstatt",
    height: 520,
    style: {
      width: 360,
      margin: "0 auto"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      bottom: 0,
      width: 200,
      background: "#fff",
      borderRadius: 8,
      boxShadow: "var(--shadow-float)",
      padding: 16,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement(EyebrowLabel, null, "M\xF6bel"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: 14,
      color: "var(--text-heading)"
    }
  }, "Sessel \xABRe-Velvet\xBB"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      color: "var(--text-muted)"
    }
  }, "von Lena Brunner"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: 14,
      color: "var(--text-heading)"
    }
  }, "CHF 480.\u2013"))))), /*#__PURE__*/React.createElement(Section, {
    eyebrow: "Neuheiten",
    title: "Frisch aus dem Ofen",
    action: "Alle Produkte \u2192",
    onAction: () => go("board")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: 24
    }
  }, d.products.map((p, i) => /*#__PURE__*/React.createElement(ProductCard, _extends({
    key: i
  }, p))))), /*#__PURE__*/React.createElement(Section, {
    eyebrow: "Kategorien",
    title: "Kategorien"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: 24
    }
  }, d.categories.map((c, i) => /*#__PURE__*/React.createElement(CategoryTile, _extends({
    key: i
  }, c))))), /*#__PURE__*/React.createElement(Section, {
    eyebrow: "Designer:innen",
    title: "Lerne unsere Designer:innen kennen",
    action: "Alle Designer:innen \u2192"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: 24
    }
  }, d.designers.map((dz, i) => /*#__PURE__*/React.createElement(DesignerCard, _extends({
    key: i
  }, dz))))), /*#__PURE__*/React.createElement(Section, {
    eyebrow: "Anschlagbrett",
    bg: "var(--surface-sage)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 36,
      color: "var(--text-heading)",
      lineHeight: 1.05
    }
  }, "Das Anschlagbrett"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-sans)",
      fontSize: 16,
      lineHeight: 1.6,
      color: "var(--text-muted)"
    }
  }, "Hast du ein St\xFCck mit Geschichte? Schreib eine Ausschreibung \u2014 und lass Schweizer Designer:innen sich melden.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 24,
      maxWidth: 720
    }
  }, d.briefs.map((b, i) => /*#__PURE__*/React.createElement(BriefCard, {
    key: i,
    title: b.title,
    status: b.status,
    statusColor: b.status === "Offen" ? "var(--color-muted)" : "var(--accent)"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go("board")
  }, "Zum Anschlagbrett"))), /*#__PURE__*/React.createElement(Section, {
    eyebrow: "Stimmen",
    title: "Was die Community sagt"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 24
    }
  }, d.testimonials.map((t, i) => /*#__PURE__*/React.createElement(Testimonial, _extends({
    key: i
  }, t))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-sage)",
      padding: "80px 120px",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(EyebrowLabel, null, "Partner"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 48,
      alignItems: "center"
    }
  }, d.partners.map((p, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 22,
      color: "var(--text-muted)"
    }
  }, p))))), /*#__PURE__*/React.createElement(Footer, null));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketplace/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketplace/data.js
try { (() => {
// re:do:mi — Marketplace UI kit · shared sample data
window.RDM_DATA = {
  products: [{
    category: "Möbel",
    title: "Barhocker «Eiche No.4»",
    maker: "von Lena Brunner",
    price: "CHF 320.–"
  }, {
    category: "Leuchten",
    title: "Pendel «Kupfer»",
    maker: "von Marco Keller",
    price: "CHF 180.–"
  }, {
    category: "Textilien",
    title: "Kissen «Patchwork»",
    maker: "von Sofia Meier",
    price: "CHF 95.–"
  }, {
    category: "Accessoires",
    title: "Uhr «Zahnrad»",
    maker: "von Jonas Frei",
    price: "CHF 140.–"
  }, {
    category: "Objekte",
    title: "Vase «Glasbruch»",
    maker: "von Aylin Demir",
    price: "CHF 110.–"
  }],
  designers: [{
    name: "Lena Brunner",
    materials: ["Eiche", "Stahl"],
    quote: "«Ich gebe Altholz ein zweites Leben.»"
  }, {
    name: "Marco Keller",
    materials: ["Kupfer", "Glas"],
    quote: "«Licht aus Schrott — meine Sprache.»"
  }, {
    name: "Sofia Meier",
    materials: ["Textil", "Wolle"],
    quote: "«Reste werden bei mir zu Mustern.»"
  }, {
    name: "Jonas Frei",
    materials: ["Metall", "Zahnräder"],
    quote: "«Mechanik mit Charakter.»"
  }, {
    name: "Aylin Demir",
    materials: ["Glas", "Keramik"],
    quote: "«Scherben erzählen Geschichten.»"
  }],
  categories: [{
    glyph: "🛋",
    label: "Möbel"
  }, {
    glyph: "💡",
    label: "Leuchten"
  }, {
    glyph: "⌚",
    label: "Accessoires"
  }, {
    glyph: "🧶",
    label: "Textilien"
  }, {
    glyph: "🏺",
    label: "Objekte"
  }],
  testimonials: [{
    quote: "«Endlich Stühle mit Charakter — und fair produziert.»",
    name: "Andreas M.",
    role: "Barbesitzer, Zürich"
  }, {
    quote: "«Mein altes Sofa hat ein zweites Leben bekommen.»",
    name: "Bianca R.",
    role: "Privatkundin, Bern"
  }, {
    quote: "«re:do:mi bringt mir genau die richtigen Aufträge.»",
    name: "Lena B.",
    role: "Designerin, Basel"
  }],
  partners: ["OFFCUT", "KlimUp", "ZHdK", "Circular Hub"],
  briefs: [{
    title: "Eames-Stuhl restaurieren",
    status: "Abgeschlossen"
  }, {
    title: "Erbsofa neu beziehen",
    status: "Offen"
  }, {
    title: "Vintage-Lampe umbauen",
    status: "In Vermittlung"
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketplace/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.BriefCard = __ds_scope.BriefCard;

__ds_ns.CategoryTile = __ds_scope.CategoryTile;

__ds_ns.DesignerCard = __ds_scope.DesignerCard;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.Testimonial = __ds_scope.Testimonial;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.EyebrowLabel = __ds_scope.EyebrowLabel;

__ds_ns.ImageFrame = __ds_scope.ImageFrame;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.StatusPill = __ds_scope.StatusPill;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.LoginGateModal = __ds_scope.LoginGateModal;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.NavDesktop = __ds_scope.NavDesktop;

})();
