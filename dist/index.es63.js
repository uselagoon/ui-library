import { jsxs as n, jsx as t } from "react/jsx-runtime";
import { Label as p } from "./index.es29.js";
import { Input as g } from "./index.es28.js";
import s from "react";
import { cva as N } from "class-variance-authority";
import { Loader2 as w } from "lucide-react";
const h = N("w-full rounded-lg bg-background", {
  variants: {
    hasIcon: {
      true: "pl-8",
      false: ""
    }
  }
});
function j({ label: e, placeholder: o = "", icon: r, description: a, ...u }) {
  return /* @__PURE__ */ n("div", { className: "grid w-full max-w-sm items-center gap-1.5", children: [
    /* @__PURE__ */ t(p, { htmlFor: `${e}-input`, children: e }),
    /* @__PURE__ */ n("div", { className: "relative", children: [
      r && /* @__PURE__ */ t("div", { className: "absolute left-2.5 top-1.5 h-2.5 w-2.5 text-muted-foreground", children: r }),
      /* @__PURE__ */ t(
        g,
        {
          className: h({ hasIcon: !!r }),
          id: `${e}-input`,
          placeholder: o,
          ...u
        }
      ),
      a && /* @__PURE__ */ t("p", { className: "font-sans font-normal text-sm leading-[1.5] tracking-[0%] text-muted-foreground", children: a })
    ] })
  ] });
}
function E({
  value: e,
  onChange: o,
  debounce: r = 500,
  label: a,
  placeholder: u = "",
  icon: m,
  description: i,
  ...v
}) {
  const [l, c] = s.useState(e), [x, f] = s.useState(!1);
  return s.useEffect(() => {
    c(e);
  }, [e]), s.useEffect(() => {
    f(!0);
    const d = setTimeout(() => {
      o(String(l)), f(!1);
    }, r);
    return () => clearTimeout(d);
  }, [l]), /* @__PURE__ */ n("div", { className: "grid w-full max-w-sm items-center gap-1.5", children: [
    /* @__PURE__ */ t(p, { htmlFor: `${a}-input`, children: a }),
    /* @__PURE__ */ n("div", { className: "relative", children: [
      m && /* @__PURE__ */ t("div", { className: "absolute left-2.5 top-1.5 h-2.5 w-2.5 text-muted-foreground", children: m }),
      x && /* @__PURE__ */ t(w, { className: "absolute right-2.5 top-2.5 h-4 w-4 animate-spin text-muted-foreground" }),
      /* @__PURE__ */ t(
        g,
        {
          ...v,
          className: h({ hasIcon: !!m }),
          id: `${a}-input`,
          placeholder: u,
          value: l,
          onChange: (d) => c(d.target.value)
        }
      ),
      i && /* @__PURE__ */ t("p", { className: "font-sans font-normal text-sm leading-[1.5] tracking-[0%] text-muted-foreground", children: i })
    ] })
  ] });
}
export {
  E as DebouncedInput,
  j as default
};
