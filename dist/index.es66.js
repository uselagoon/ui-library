import { jsxs as n, jsx as t } from "react/jsx-runtime";
import { useState as m, useMemo as g, useEffect as w } from "react";
import { Label as b } from "./index.es29.js";
import { Sheet as N, SheetTrigger as V, SheetContent as O, SheetHeader as D, SheetTitle as I, SheetDescription as q, SheetFooter as j, SheetClose as E } from "./index.es40.js";
import { Button as l } from "./index.es13.js";
import { Input as L } from "./index.es28.js";
import T from "./index.es54.js";
import W from "./index.es62.js";
function K({
  sheetTrigger: x = "Open",
  sheetTitle: v = "",
  sheetDescription: C = "",
  sheetFooterButton: S = "Save changes",
  buttonAction: u = () => {
  },
  sheetFields: o,
  ...f
}) {
  const [i, h] = m(!1), s = g(() => () => {
    const e = {};
    return o.forEach((r) => {
      r.inputDefault !== void 0 && (e[r.id] = r.inputDefault);
    }), e;
  }, [o]), [a, d] = m(s), p = g(() => o.some((e) => {
    if (e.required)
      switch (e.type ?? "text") {
        case "checkbox":
          return a[e.id] !== "true";
        case "select":
        case "textarea":
        case "text":
        case "email":
        case "number":
        case "password":
        case "tel":
          return !a[e.id];
        default:
          return !1;
      }
    return !1;
  }), [o, a]), c = (e, r) => {
    d((y) => ({
      ...y,
      [e]: r
    }));
  }, k = (e) => {
    p || (u && u(e, a), h(!1));
  };
  return w(() => {
    i && d(s());
  }, [i, s]), /* @__PURE__ */ n(N, { open: i, onOpenChange: h, ...f, children: [
    /* @__PURE__ */ t(V, { asChild: !0, children: /* @__PURE__ */ t(l, { variant: "outline", children: x }) }),
    /* @__PURE__ */ n(O, { children: [
      /* @__PURE__ */ n(D, { children: [
        /* @__PURE__ */ t(I, { children: v }),
        /* @__PURE__ */ t(q, { children: C })
      ] }),
      o.map((e) => /* @__PURE__ */ t("div", { className: "grid auto-rows-min gap-6 px-4", children: /* @__PURE__ */ n("div", { className: "grid gap-3", children: [
        e.type !== "checkbox" && /* @__PURE__ */ n(b, { htmlFor: e.id, children: [
          e.label,
          e.required && /* @__PURE__ */ t("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        (() => {
          switch (e.type) {
            case "checkbox":
              return /* @__PURE__ */ n("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ t(
                  T,
                  {
                    label: e.label,
                    id: e.id,
                    checked: a[e.id] === "true",
                    onCheckedChange: (r) => c(e.id, r)
                  }
                ),
                /* @__PURE__ */ n(b, { htmlFor: e.id, children: [
                  e.label,
                  e.required && /* @__PURE__ */ t("span", { className: "text-red-500 ml-1", children: "*" })
                ] })
              ] });
            case "textarea":
              return /* @__PURE__ */ t(
                "textarea",
                {
                  id: e.id,
                  className: "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                  value: a[e.id] || "",
                  onChange: (r) => c(e.id, r.target.value),
                  placeholder: e?.placeholder
                }
              );
            case "select":
              return /* @__PURE__ */ t(
                W,
                {
                  placeholder: e?.placeholder || "",
                  options: e?.options || [],
                  defaultValue: a[e.id] || "",
                  onValueChange: (r) => c(e.id, r.target.value)
                }
              );
            default:
              return /* @__PURE__ */ t(
                L,
                {
                  type: e?.type || "text",
                  id: e.id,
                  value: a[e.id] || "",
                  onChange: (r) => c(e.id, r.target.value),
                  placeholder: e?.placeholder
                }
              );
          }
        })()
      ] }) }, e.id)),
      /* @__PURE__ */ n(j, { children: [
        /* @__PURE__ */ t(l, { onClick: k, disabled: p, children: S }),
        /* @__PURE__ */ t(E, { asChild: !0, children: /* @__PURE__ */ t(l, { variant: "outline", children: "Close" }) })
      ] })
    ] })
  ] });
}
export {
  K as default
};
