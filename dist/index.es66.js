import { jsxs as s, jsx as r } from "react/jsx-runtime";
import { useState as f, useRef as q, useMemo as g, useEffect as v } from "react";
import { Label as D } from "./index.es29.js";
import { Sheet as F, SheetTrigger as I, SheetContent as L, SheetHeader as T, SheetTitle as j, SheetDescription as E, SheetFooter as R, SheetClose as W } from "./index.es40.js";
import { Button as d } from "./index.es13.js";
import { Input as B } from "./index.es28.js";
import H from "./index.es54.js";
import M from "./index.es62.js";
import { Loader2 as U } from "lucide-react";
function _({
  sheetTrigger: C = "Open",
  sheetTitle: S = "",
  sheetDescription: k = "",
  sheetFooterButton: N = "Save changes",
  buttonAction: p = () => {
  },
  sheetFields: i,
  loading: n = !1,
  additionalContent: w = null,
  error: l = !1,
  ...y
}) {
  const [c, u] = f(!1), m = q(n), h = g(() => () => {
    const e = {};
    return i.forEach((t) => {
      t.inputDefault !== void 0 && (e[t.id] = t.inputDefault);
    }), e;
  }, [i]), [a, b] = f(h), x = g(() => i.some((t) => {
    if (t.required)
      switch (t.type ?? "text") {
        case "checkbox":
          return a[t.id] !== !0;
        case "select":
        case "textarea":
        case "text":
        case "email":
        case "number":
        case "password":
        case "tel":
          return !a[t.id];
        default:
          return !1;
      }
    return !1;
  }) || n, [i, a, n]), o = (e, t) => {
    b((O) => ({
      ...O,
      [e]: t
    }));
  }, V = async (e) => {
    x || (p && await p(e, a), !n && !l && setTimeout(() => u(!1)));
  };
  return v(() => {
    c && b(h());
  }, [c, h]), v(() => {
    m.current === !0 && n === !1 && c && !l && u(!1), m.current = n;
  }, [n, c, l]), /* @__PURE__ */ s(F, { open: c, onOpenChange: u, ...y, children: [
    /* @__PURE__ */ r(I, { asChild: !0, children: /* @__PURE__ */ r(d, { variant: "outline", children: C }) }),
    /* @__PURE__ */ s(L, { children: [
      /* @__PURE__ */ s(T, { children: [
        /* @__PURE__ */ r(j, { children: S }),
        /* @__PURE__ */ r(E, { children: k })
      ] }),
      i.map((e) => /* @__PURE__ */ r("div", { className: "grid auto-rows-min gap-6 px-4", children: /* @__PURE__ */ s("div", { className: "grid gap-3", children: [
        e.type !== "checkbox" && /* @__PURE__ */ s(D, { htmlFor: e.id, children: [
          e.label,
          e.required && /* @__PURE__ */ r("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        (() => {
          switch (e.type) {
            case "checkbox":
              return /* @__PURE__ */ r("div", { className: "flex items-center space-x-2", children: /* @__PURE__ */ r(
                H,
                {
                  label: e.label,
                  id: e.id,
                  checked: a[e.id] === !0 || a[e.id] === "true",
                  onCheckedChange: (t) => o(e.id, t)
                }
              ) });
            case "textarea":
              return /* @__PURE__ */ r(
                "textarea",
                {
                  id: e.id,
                  className: "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                  value: a[e.id] || "",
                  onChange: (t) => o(e.id, t.target.value),
                  placeholder: e?.placeholder
                }
              );
            case "select":
              return /* @__PURE__ */ r(
                M,
                {
                  placeholder: e?.placeholder || "",
                  options: e?.options || [],
                  defaultValue: a[e.id] || "",
                  onValueChange: (t) => o(e.id, t)
                }
              );
            default:
              return /* @__PURE__ */ r(
                B,
                {
                  type: e?.type || "text",
                  id: e.id,
                  value: a[e.id] || "",
                  onChange: (t) => o(e.id, t.target.value),
                  placeholder: e?.placeholder
                }
              );
          }
        })()
      ] }) }, e.id)),
      /* @__PURE__ */ r("section", { className: "px-4", children: w }),
      /* @__PURE__ */ s(R, { children: [
        /* @__PURE__ */ s(d, { onClick: V, disabled: x, children: [
          n && /* @__PURE__ */ r(U, { className: "mr-2 h-4 w-4 animate-spin" }),
          N
        ] }),
        /* @__PURE__ */ r(W, { asChild: !0, children: /* @__PURE__ */ r(d, { variant: "outline", children: "Close" }) })
      ] })
    ] })
  ] });
}
export {
  _ as default
};
