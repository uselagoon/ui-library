import h, { createContext as l, useContext as m, useState as c, useEffect as i } from "react";
const a = l(null), u = () => {
  const t = m(a);
  if (!t)
    throw new Error("useTheme must be used within a ThemeProvider");
  return t;
}, g = ({ defaultScheme: t, children: s }) => {
  const [r, o] = c(null);
  i(() => {
    if (t) {
      o(t);
      return;
    }
    const e = localStorage.getItem("theme");
    e && ["light", "dark"].includes(e) ? o(e) : window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? (o("dark"), localStorage.setItem("theme", "dark")) : (o("light"), localStorage.setItem("theme", "light"));
  }, []);
  const n = () => {
    const e = r === "light" ? "dark" : "light";
    o(e), localStorage.setItem("theme", e), window.dispatchEvent(new Event("storage"));
  };
  return /* @__PURE__ */ h.createElement(a.Provider, { value: { theme: r, toggleTheme: n } }, s);
};
export {
  g as AppThemeProvider,
  u as default
};
//# sourceMappingURL=index.es4.js.map
