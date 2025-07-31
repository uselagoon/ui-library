import { jsxs as s, jsx as r } from "react/jsx-runtime";
import { useState as x, useRef as O, useMemo as f, useEffect as g } from "react";
import { Label as q } from "./index.es29.js";
import { Sheet as D, SheetTrigger as F, SheetContent as I, SheetHeader as L, SheetTitle as T, SheetDescription as j, SheetFooter as E, SheetClose as R } from "./index.es40.js";
import { Button as h } from "./index.es13.js";
import { Input as W } from "./index.es28.js";
import B from "./index.es54.js";
import H from "./index.es62.js";
import { Loader2 as M } from "lucide-react";
function Z({
  sheetTrigger: v = "Open",
  sheetTitle: C = "",
  sheetDescription: S = "",
  sheetFooterButton: k = "Save changes",
  buttonAction: d = () => {
  },
  sheetFields: o,
  loading: n = !1,
  additionalContent: w = null,
  ...y
}) {
  const [i, l] = x(!1), p = O(n), u = f(() => () => {
    const e = {};
    return o.forEach((t) => {
      t.inputDefault !== void 0 && (e[t.id] = t.inputDefault);
    }), e;
  }, [o]), [a, m] = x(u), b = f(() => o.some((t) => {
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
  }) || n, [o, a, n]), c = (e, t) => {
    m((V) => ({
      ...V,
      [e]: t
    }));
  }, N = async (e) => {
    b || (d && await d(e, a), n || setTimeout(() => l(!1)));
  };
  return g(() => {
    i && m(u());
  }, [i, u]), g(() => {
    p.current === !0 && n === !1 && i && l(!1), p.current = n;
  }, [n, i]), /* @__PURE__ */ s(D, { open: i, onOpenChange: l, ...y, children: [
    /* @__PURE__ */ r(F, { asChild: !0, children: /* @__PURE__ */ r(h, { variant: "outline", children: v }) }),
    /* @__PURE__ */ s(I, { children: [
      /* @__PURE__ */ s(L, { children: [
        /* @__PURE__ */ r(T, { children: C }),
        /* @__PURE__ */ r(j, { children: S })
      ] }),
      o.map((e) => /* @__PURE__ */ r("div", { className: "grid auto-rows-min gap-6 px-4", children: /* @__PURE__ */ s("div", { className: "grid gap-3", children: [
        e.type !== "checkbox" && /* @__PURE__ */ s(q, { htmlFor: e.id, children: [
          e.label,
          e.required && /* @__PURE__ */ r("span", { className: "text-red-500 ml-1", children: "*" })
        ] }),
        (() => {
          switch (e.type) {
            case "checkbox":
              return /* @__PURE__ */ r("div", { className: "flex items-center space-x-2", children: /* @__PURE__ */ r(
                B,
                {
                  label: e.label,
                  id: e.id,
                  checked: a[e.id] === !0 || a[e.id] === "true",
                  onCheckedChange: (t) => c(e.id, t)
                }
              ) });
            case "textarea":
              return /* @__PURE__ */ r(
                "textarea",
                {
                  id: e.id,
                  className: "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                  value: a[e.id] || "",
                  onChange: (t) => c(e.id, t.target.value),
                  placeholder: e?.placeholder
                }
              );
            case "select":
              return /* @__PURE__ */ r(
                H,
                {
                  placeholder: e?.placeholder || "",
                  options: e?.options || [],
                  defaultValue: a[e.id] || "",
                  onValueChange: (t) => c(e.id, t)
                }
              );
            default:
              return /* @__PURE__ */ r(
                W,
                {
                  type: e?.type || "text",
                  id: e.id,
                  value: a[e.id] || "",
                  onChange: (t) => c(e.id, t.target.value),
                  placeholder: e?.placeholder
                }
              );
          }
        })()
      ] }) }, e.id)),
      w,
      /* @__PURE__ */ s(E, { children: [
        /* @__PURE__ */ s(h, { onClick: N, disabled: b, children: [
          n && /* @__PURE__ */ r(M, { className: "mr-2 h-4 w-4 animate-spin" }),
          k
        ] }),
        /* @__PURE__ */ r(R, { asChild: !0, children: /* @__PURE__ */ r(h, { variant: "outline", children: "Close" }) })
      ] })
    ] })
  ] });
}
export {
  Z as default
};
