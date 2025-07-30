import { jsxs as a, jsx as r } from "react/jsx-runtime";
import { useState as x, useRef as q, useMemo as g, useEffect as f } from "react";
import { Label as v } from "./index.es29.js";
import { Sheet as F, SheetTrigger as I, SheetContent as O, SheetHeader as D, SheetTitle as L, SheetDescription as j, SheetFooter as E, SheetClose as R } from "./index.es40.js";
import { Button as h } from "./index.es13.js";
import { Input as T } from "./index.es28.js";
import W from "./index.es54.js";
import B from "./index.es62.js";
import { Loader2 as H } from "lucide-react";
function Y({
  sheetTrigger: C = "Open",
  sheetTitle: S = "",
  sheetDescription: k = "",
  sheetFooterButton: N = "Save changes",
  buttonAction: d = () => {
  },
  sheetFields: c,
  loading: n = !1,
  ...w
}) {
  const [i, l] = x(!1), p = q(n), u = g(() => () => {
    const e = {};
    return c.forEach((t) => {
      t.inputDefault !== void 0 && (e[t.id] = t.inputDefault);
    }), e;
  }, [c]), [s, m] = x(u), b = g(() => c.some((t) => {
    if (t.required)
      switch (t.type ?? "text") {
        case "checkbox":
          return s[t.id] !== !0;
        case "select":
        case "textarea":
        case "text":
        case "email":
        case "number":
        case "password":
        case "tel":
          return !s[t.id];
        default:
          return !1;
      }
    return !1;
  }) || n, [c, s, n]), o = (e, t) => {
    m((V) => ({
      ...V,
      [e]: t
    }));
  }, y = async (e) => {
    b || (d && await d(e, s), n || setImmediate(() => l(!1)));
  };
  return f(() => {
    i && m(u());
  }, [i, u]), f(() => {
    p.current === !0 && n === !1 && i && l(!1), p.current = n;
  }, [n, i]), /* @__PURE__ */ a(F, { open: i, onOpenChange: l, ...w, children: [
    /* @__PURE__ */ r(I, { asChild: !0, children: /* @__PURE__ */ r(h, { variant: "outline", children: C }) }),
    /* @__PURE__ */ a(O, { children: [
      /* @__PURE__ */ a(D, { children: [
        /* @__PURE__ */ r(L, { children: S }),
        /* @__PURE__ */ r(j, { children: k })
      ] }),
      c.map((e) => /* @__PURE__ */ r("div", { className: "grid auto-rows-min gap-6 px-4", children: /* @__PURE__ */ a("div", { className: "grid gap-3", children: [
        e.type !== "checkbox" && /* @__PURE__ */ a(v, { htmlFor: e.id, children: [
          e.label,
          e.required && /* @__PURE__ */ r("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        (() => {
          switch (e.type) {
            case "checkbox":
              return /* @__PURE__ */ a("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ r(
                  W,
                  {
                    label: e.label,
                    id: e.id,
                    checked: s[e.id] === "true",
                    onCheckedChange: (t) => o(e.id, t)
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
                  value: s[e.id] || "",
                  onChange: (t) => o(e.id, t.target.value),
                  placeholder: e?.placeholder
                }
              );
            case "select":
              return /* @__PURE__ */ r(
                B,
                {
                  placeholder: e?.placeholder || "",
                  options: e?.options || [],
                  defaultValue: s[e.id] || "",
                  onValueChange: (t) => o(e.id, t.target.value)
                }
              );
            default:
              return /* @__PURE__ */ r(
                T,
                {
                  type: e?.type || "text",
                  id: e.id,
                  value: s[e.id] || "",
                  onChange: (t) => o(e.id, t.target.value),
                  placeholder: e?.placeholder
                }
              );
          }
        })()
      ] }) }, e.id)),
      /* @__PURE__ */ a(E, { children: [
        /* @__PURE__ */ a(h, { onClick: y, disabled: b, children: [
          n && /* @__PURE__ */ r(H, { className: "mr-2 h-4 w-4 animate-spin" }),
          N
        ] }),
        /* @__PURE__ */ r(R, { asChild: !0, children: /* @__PURE__ */ r(h, { variant: "outline", children: "Close" }) })
      ] })
    ] })
  ] });
}
export {
  Y as default
};
