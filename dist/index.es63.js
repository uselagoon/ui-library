import { j as t } from "./index.es70.js";
import { Label as f } from "./index.es29.js";
import { Input as x } from "./index.es28.js";
import r from "react";
import { cva as j } from "class-variance-authority";
import { Loader2 as v } from "lucide-react";
const p = j("w-full rounded-lg bg-background", {
  variants: {
    hasIcon: {
      true: "pl-8",
      false: ""
    }
  }
});
function E({ label: e, placeholder: n = "", icon: a, description: s, ...o }) {
  return /* @__PURE__ */ t.jsxs("div", { className: "grid w-full max-w-sm items-center gap-1.5", children: [
    /* @__PURE__ */ t.jsx(f, { htmlFor: `${e}-input`, children: e }),
    /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
      a && /* @__PURE__ */ t.jsx("div", { className: "absolute left-2.5 top-1.5 h-2.5 w-2.5 text-muted-foreground", children: a }),
      /* @__PURE__ */ t.jsx(
        x,
        {
          className: p({ hasIcon: !!a }),
          id: `${e}-input`,
          placeholder: n,
          ...o
        }
      ),
      s && /* @__PURE__ */ t.jsx("p", { className: "font-sans font-normal text-sm leading-[1.5] tracking-[0%] text-muted-foreground", children: s })
    ] })
  ] });
}
function L({
  value: e,
  onChange: n,
  debounce: a = 500,
  label: s,
  placeholder: o = "",
  icon: u,
  description: d,
  ...g
}) {
  const [m, i] = r.useState(e), [h, c] = r.useState(!1);
  return r.useEffect(() => {
    i(e);
  }, [e]), r.useEffect(() => {
    c(!0);
    const l = setTimeout(() => {
      n(String(m)), c(!1);
    }, a);
    return () => clearTimeout(l);
  }, [m]), /* @__PURE__ */ t.jsxs("div", { className: "grid w-full max-w-sm items-center gap-1.5", children: [
    /* @__PURE__ */ t.jsx(f, { htmlFor: `${s}-input`, children: s }),
    /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
      u && /* @__PURE__ */ t.jsx("div", { className: "absolute left-2.5 top-1.5 h-2.5 w-2.5 text-muted-foreground", children: u }),
      h && /* @__PURE__ */ t.jsx(v, { className: "absolute right-2.5 top-2.5 h-4 w-4 animate-spin text-muted-foreground" }),
      /* @__PURE__ */ t.jsx(
        x,
        {
          ...g,
          className: p({ hasIcon: !!u }),
          id: `${s}-input`,
          placeholder: o,
          value: m,
          onChange: (l) => i(l.target.value)
        }
      ),
      d && /* @__PURE__ */ t.jsx("p", { className: "font-sans font-normal text-sm leading-[1.5] tracking-[0%] text-muted-foreground", children: d })
    ] })
  ] });
}
export {
  L as DebouncedInput,
  E as default
};
