import { jsxs as a, jsx as r } from "react/jsx-runtime";
import { useState as b, useMemo as x, useEffect as g } from "react";
import { Label as v } from "./index.es29.js";
import { Sheet as V, SheetTrigger as q, SheetContent as F, SheetHeader as O, SheetTitle as D, SheetDescription as I, SheetFooter as L, SheetClose as j } from "./index.es40.js";
import { Button as u } from "./index.es13.js";
import { Input as E } from "./index.es28.js";
import T from "./index.es54.js";
import W from "./index.es62.js";
import { Loader2 as B } from "lucide-react";
function R({
  sheetTrigger: C = "Open",
  sheetTitle: S = "",
  sheetDescription: f = "",
  sheetFooterButton: k = "Save changes",
  buttonAction: h = () => {
  },
  sheetFields: o,
  loading: i = !1,
  ...N
}) {
  const [s, d] = b(!1), l = x(() => () => {
    const e = {};
    return o.forEach((t) => {
      t.inputDefault !== void 0 && (e[t.id] = t.inputDefault);
    }), e;
  }, [o]), [n, p] = b(l), m = x(() => o.some((t) => {
    if (t.required)
      switch (t.type ?? "text") {
        case "checkbox":
          return n[t.id] !== !0;
        case "select":
        case "textarea":
        case "text":
        case "email":
        case "number":
        case "password":
        case "tel":
          return !n[t.id];
        default:
          return !1;
      }
    return !1;
  }) || i, [o, n, i]), c = (e, t) => {
    p((y) => ({
      ...y,
      [e]: t
    }));
  }, w = (e) => {
    m || h && h(e, n);
  };
  return g(() => {
    s && p(l());
  }, [s, l]), g(() => {
    !i && s && d(!1);
  }, [i, s]), /* @__PURE__ */ a(V, { open: s, onOpenChange: d, ...N, children: [
    /* @__PURE__ */ r(q, { asChild: !0, children: /* @__PURE__ */ r(u, { variant: "outline", children: C }) }),
    /* @__PURE__ */ a(F, { children: [
      /* @__PURE__ */ a(O, { children: [
        /* @__PURE__ */ r(D, { children: S }),
        /* @__PURE__ */ r(I, { children: f })
      ] }),
      o.map((e) => /* @__PURE__ */ r("div", { className: "grid auto-rows-min gap-6 px-4", children: /* @__PURE__ */ a("div", { className: "grid gap-3", children: [
        e.type !== "checkbox" && /* @__PURE__ */ a(v, { htmlFor: e.id, children: [
          e.label,
          e.required && /* @__PURE__ */ r("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        (() => {
          switch (e.type) {
            case "checkbox":
              return /* @__PURE__ */ a("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ r(
                  T,
                  {
                    label: e.label,
                    id: e.id,
                    checked: n[e.id] === "true",
                    onCheckedChange: (t) => c(e.id, t)
                  }
                ),
                /* @__PURE__ */ a(v, { htmlFor: e.id, children: [
                  e.label,
                  e.required && /* @__PURE__ */ r("span", { className: "text-red-500 ml-1", children: "*" })
                ] })
              ] });
            case "textarea":
              return /* @__PURE__ */ r(
                "textarea",
                {
                  id: e.id,
                  className: "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                  value: n[e.id] || "",
                  onChange: (t) => c(e.id, t.target.value),
                  placeholder: e?.placeholder
                }
              );
            case "select":
              return /* @__PURE__ */ r(
                W,
                {
                  placeholder: e?.placeholder || "",
                  options: e?.options || [],
                  defaultValue: n[e.id] || "",
                  onValueChange: (t) => c(e.id, t.target.value)
                }
              );
            default:
              return /* @__PURE__ */ r(
                E,
                {
                  type: e?.type || "text",
                  id: e.id,
                  value: n[e.id] || "",
                  onChange: (t) => c(e.id, t.target.value),
                  placeholder: e?.placeholder
                }
              );
          }
        })()
      ] }) }, e.id)),
      /* @__PURE__ */ a(L, { children: [
        /* @__PURE__ */ a(u, { onClick: w, disabled: m, children: [
          i && /* @__PURE__ */ r(B, { className: "mr-2 h-4 w-4 animate-spin" }),
          k
        ] }),
        /* @__PURE__ */ r(j, { asChild: !0, children: /* @__PURE__ */ r(u, { variant: "outline", children: "Close" }) })
      ] })
    ] })
  ] });
}
export {
  R as default
};
